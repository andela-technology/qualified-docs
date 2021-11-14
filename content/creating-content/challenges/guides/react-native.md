---
title: Testing React Native Skills
summary: "Testing React Native Skills"
tags:
  - javascript
  - mobile
  - react native
  - react-testing-library
---

# Testing React Native Skills

## Overview

As with React, testing React Native (RN) skills in Qualified requires more planning than a typical algorithmic, single-function task that involves few libraries outside of core collections. With any complex library like React Native, there is greater potential for unexpected edge cases to arise. This guide will help content authors navigate testing RN code to help ensure a smooth candidate experience.

Because of the similarities to React, we encourage you to visit our guide [Testing React Skills: General Suggestions](https://docs.qualified.io/creating-content/challenges/guides/react/#general-suggestions).

We also encourage you to peruse our RN templates for a detailed example of how we typically set RN challenges up.

## Testing Libraries

Testing React Native apps in Qualified can be done with [Jest](https://facebook.github.io/jest/) and [React Native Testing Library](https://testing-library.com/docs/react-native-testing-library/intro/) (RNTL).

## React Native-specific testing patterns

Since our [React guide](https://docs.qualified.io/creating-content/challenges/guides/react/#general-suggestions) covers general best practices that also apply to RN, we'll focus on testing patterns that are more immediately relevant to RN in this article.

### Asserting text contents

When validating a candidate's code, you'll generally want to avoid prescribing a particular structure or set of implementation details to give candidates freedom to implement the code as they see fit. Testing the code as a black box gives you more insight into your candidate's natural coding style. To do this, you might specify a deliverable element with a `testID="foo"` attribute which the test can query, then assert on its contents.

Qualified offers [jest-native](https://github.com/testing-library/jest-native) matchers, imported in the Jest configuration by default. You can use jest-native's [`toHaveTextContent`](https://github.com/testing-library/jest-native#tohavetextcontent) matcher to assert that text contents exist within an element.

RNTL also offers [`queryByText`](https://testing-library.com/docs/queries/bytext/) which can be used like `expect(queryByText("foo")).toBeTruthy();` to determine if `"foo"` is among the child text contents of a node.

:::warning
Use caution with negative assertions; the diffs that RNTL emits can often slow or timeout the code runner if they print deeply nested complex component objects. A solution is to use the `!!` operator, as in `expect(!!queryByText("bar")).not.toBeTruthy();` to ensure the diff is small when the assertion fails.
:::

#### Lists of nested text contents

It's often the case that you'd like to assert on a list of nested text contents of a root node. For example, `testID="todo-list"` should have a specific set of todo items in it based on the current component state.

One strategy is to use recursion to build an array of leaf node text:

```javascript
const getDeepTextContents = el => {
  if (!el) {
    return [];
  }
  else if (typeof el === "string") {
    return [el];
  }

  return el.children.flatMap(getDeepTextContents);
};
```

This strategy may be appropriate in certain situations where candidates might nest components unexpectedly but still arrive at a valid solution, for example, when using `FlatList` or extra wrappers on list items. In contrast, the `.toHaveTextContent` and `ByText` queries aren't able to produce an array of ordered results and are therefore more permissive in regards to substrings and ordering.

### Testing components with asynchronous lifecycles

A common issue is testing asynchronous code. Consider a completed candidate solution component that makes a request to an API like the following simple example:

```javascript
import React, {useEffect, useState} from "react";
import {FlatList, Text} from "react-native";

const Posts = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url).then(res => res.json()).then(setPosts);
  }, []);

  return !posts ? <Text>loading</Text> : <FlatList
    testID="posts"
    data={posts}
    renderItem={({item: {id, title}, index}) =>
      <Text testID="post" key={id}>{title}</Text>
    }
  />;
};
export default Posts;
```

We can validate this solution with the following testing suite, which mocks `fetch` and uses [asynchronous waits](https://testing-library.com/docs/dom-testing-library/api-async/) from React Native Testing Library:

```javascript
import {render} from "@testing-library/react-native";
import Posts from "../src/components/Posts";

describe("Posts", () => {
  beforeEach(() => {
    global.fetch = jest.fn(url => Promise.resolve({
      ok: true,
      status: 200,
      json: () => Promise.resolve([
        {id: 1, title: "foo title"},
        {id: 2, title: "bar title"},
      ])
    }));
  });

  it("should fetch posts", async () => {
    const {findAllByTestId} = render(<Posts />);
    const posts = await findAllByTestId("post", {timeout: 500});
    expect(posts).toHaveLength(2);
    expect(posts[0]).toHaveTextContent("foo title");
    expect(posts[1]).toHaveTextContent("bar title");
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
```

We could also use [`waitFor`](https://testing-library.com/docs/dom-testing-library/api-async/#waitfor) to block assertions until an arbitrary predicate or particular component state becomes available. Instead of `useEffect`, you'll often use a button triggered by `fireEvent.press(buttonSelector);` to initiate the asynchronous code to be awaited.

It's important to tightly constrain all awaiting calls with a timeout. Otherwise, the default timeout of 5 seconds may cause Qualified to time out the solution ungracefully, preventing the candidate from receiving verbose feedback necessary to debug their code.

The exact timeout value should be as short as possible, but not so short that a false negative is possible. If you're using mocks (which should be used in most cases to avoid dependencies and network issues on submission), the wait can be quite short. The above example shows this in action with a half-second (500 ms) timeout.

