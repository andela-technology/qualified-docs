---
title: Testing React
summary: "Testing React skills"
tags:
  - javascript
  - react
  - enzyme
  - react-test-utils
  - react-testing-library
---

# Testing React Skills

## Overview

Testing React skills in Qualified requires more planning than a typical algorithmic, single-function task that involves few libraries outside of core collections. With any large library like React, there is greater potential for unexpected edge cases to arise. This guide will help content authors navigate testing React to help ensure a smooth candidate experience.

We encourage you to peruse our many React templates for a detailed view on how we typically set React challenges up.

## Testing Libraries

Testing React apps in Qualified can be done with one of a few libraries used alongside [Jest](https://facebook.github.io/jest/): [React Test Utils](https://reactjs.org/docs/test-utils.html), [Enzyme](https://enzymejs.github.io/enzyme/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

We recommend React Test Utils or React Testing Library because these libraries promote testing interfaces rather than implementation. Enzyme is acceptable as well but is more likely to introduce subtle invariants in test suites. Overly-rigid test cases can inadvertently disqualify candidates due to otherwise valid implementation choices that weren't anticipated by the challenge author.

### Enzyme
When using Enzyme, care must be taken to avoid testing implementation details. Our typical setup uses `mount` rather than `shallow` to ensure nested components that the candidate might use are rendered.

Additionally, [`.hostNodes()`](https://enzymejs.github.io/enzyme/docs/api/ReactWrapper/hostNodes.html) should be appended to all [`.find()`](https://enzymejs.github.io/enzyme/docs/api/ReactWrapper/find.html) calls to ensure that component nodes are ignored. See [Enzyme issue #1253](https://github.com/enzymejs/enzyme/issues/1253) for details on how this might cause problems.

Here's an example of the correct approach:

```js
const wrapper = mount(<Foo />);
wrapper.find("input").hostNodes();
```

## General suggestions

Here are our suggestions for testing React in the context of Qualified's platform, agnostic of the test library used.

### Avoid testing implementation details

It may be tempting to reach in and perform assertions on internal functions of components. However, we recommend testing through the user interface only. 

For example, if an internal handler fires on a button click and changes text on a page, it may be possible to call the click handler directly by name in the test suite, bypassing the button, and then assert that it set the string contents of a state variable in the component, bypassing the DOM.

However, this places an unnecessarily large imposition on the candidate's code, increasing rigidity, reducing signal and likely increasing frustration on the part of the candidate. Furthermore, the button and DOM manipulation behavior is not adequately tested.

Instead, prefer a black-box testing approach that finds the button element and clicks it, then asserts on the DOM contents. This enables the candidate the freedom to implement the handler and state as they see fit.

While the above example is quite basic and may seem obvious, we recommend staying on the lookout for more subtle implementation detail-driven tests which can creep into corners of your suite, causing unexpected false negatives.

### Use mocks as appropriate

Mocks can be a useful tool for testing React code. Mocking dependencies, common library functions can help ensure that you're only testing the candidate's code, and can help bridge the gap between the Web Preview and test suite.

For example, mocking [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) is a great way to avoid hitting a potentially unreliable API. This is particularly important in Qualified because an API that happens to be unreachable or slow in a candidate's submission can result in a false negative score. 

When mocking responses, don't forget to include as many fields as the candidate might want to access. For example, `fetch` returns an object with `status` and `ok` properties -- assuming the candidate checks `response.status === 200` instead of `status.ok` might lead to a discrepancy that costs the candidate points unfairly.

### Clearly state which event should be handled
Be careful when prescribing `change`, `keydown`, `click` and other events in challenges. The instructions and test suite should clearly communicate which event is to be used to avoid a situation where a candidate has a solution that appears to work in web preview but fails in the submission tests because a different event than was expected is fired.

### Avoid hidden tests

We recommend keeping hidden tests minimal and focusing on transparency. Traditional algorithmic challenges are often focused on cheating prevention, handling unexpected edge cases and performance. In React, challenges are less susceptible to copy-pasting solutions from the internet and the tests are unlikely to dig into esoteric corners of the candidate's code or attempt to detect inefficient solutions by running tests with large input.

Furthermore, hardcoded results (i.e. table lookups for each test case's input mapped to the solution in a traditional algorithmic challenge) are less likely to arise since the app's functionality will need to be responsive to real-time interaction such as clicks and arbitrary text input.

Hidden test cases may be perceived as unrealistic and unfair to candidates, creating a perception of a "gotcha"-oriented challenge.

We generally find that eliminating hidden tests entirely, or using 1-2 simple hidden tests to validate an edge case or to prevent hardcoding by injecting randomized input is sufficient.

You can use the "submission ignore paths" setting in the challenge's configuration menu to ignore changes the candidate has made to the suite if you plan to use one suite for submission and for the candidate's testing.

### Use a custom attribute to identify DOM nodes

It's tempting to require candidates to use a class or id on HTML elements for the purposes of writing assertions and manipulating the app in the test suite.

For example, a naive test suite might prescribe the following element format:

```js
<div id="foo">hello world</div>
```

The test suite expects to grab elements of this type with the id:

```js
wrapper.find(".foo");
```

Our suggestion is to use a [`data-testid` attribute](https://kentcdodds.com/blog/making-your-ui-tests-resilient-to-change) instead:

```js
<div data-testid="bar" id="foo">hello world</div>
```

The test suite will now rely on 

```js
wrapper.find('[data-testid="bar"]').hostNodes(); // Enzyme
getByTestId("bar"); // or React Testing Library
```

to locate the element(s).

The `data-testid` attribute approach separates tests from implementation, giving candidates the flexibility to choose their own ids and class names to fit their CSS and implementation needs. Not only is this a candidate-friendly design, it reveals more signal as to how candidates would naturally name their elements.

Be sure to explicitly state the required `data-testid` names in the instructions so candidates won't have to infer them from the test suite.

### Assume candidates will use arbitrary React features

Lifecycle functions, component nesting, asynchronous code and React hooks such as `useEffect` are important considerations for React testing. Unless you'd like to intentionally enforce usage of a particular tool, ensure your testing code works with valid but unusual approaches to arrive at the solution.

In general, we prefer to leave the implementation decisions to the candidate to the largest extent possible. Adding contrived restrictions tends to be frustrating for candidates, while opening up the floor to a variety of approaches generates more signal that lets you contrast candidates and gain insight into their default approach to a problem.

### Remember that Web Preview is a different environment from the code runner

The Code Runner that ultimately evaluates candidate submissions is not the same as the Web Preview feature you'll likely want to enable with all React challenges. The web preview makes it easy for the candidate to view, manipulate amd test their app in real time in their browser. 

However, web preview's different environment complete with its own `package.json` and native browser environment can create a "but it works on my machine!" scenario where the code appears functioning to spec in the web preview but fails in the submitted test cases executed on our server.

Instruction clarity, mocking parts of both the web preview and test suite in tandem and providing well-written, transparent test cases are the best tools for navigating the differences between the two environmets.

In some narrow cases, it may be appropriate to disable web preview and focus on server-side rendering using, for example, [`ReactDOMServer`](https://reactjs.org/docs/react-dom-server.html). Our Code Runner does support HTML output, but generally, the benefits of live interaction with web preview greatly outweigh the consistency that comes from avoiding it. Nonetheless, we mention server-side rendering for completeness.

### Communicate assumptions in the instructions

Even when care is taken to permit freedom for candidates, it's inevitable that some structural restrictions will apply. It's a good idea to forewarn assumptions made by the test suite in the challenge instructions.

You can also use the instructions to inform the candidate of the rubric and provide links to documentation the candidate may wish to consult.

