---
title: "Creating Challenges: Advanced Test Cases"
summary: "Details about advanced test reporting features such as hidden, weighted and tagged test cases"
tags:
  - challenges
  - markdown
  - testing
  - hidden
  - weighted
  - tagged
  - tags
bodyClass: 'employer-focused'
private: true
---


# Overview

Qualified provides the ability to configure test cases for advanced use cases. You can hide test cases from being shown to candidates on submit, tag tests with one or multiple labels, and weigh certain test cases as being more important to the overall challenge score.

## Property Structure

Before we get into the specific types of advanced usages, let's first talk about the concept of test properties. Properties are used to configure individual tests blocks. These properties are defined by writing a special format to STDOUT. The format is `<PROP::propName>propValue`. When our platform interprets the program output it will detect these properties and apply them to the surrounding tests.

For example, in JavaScript you could write a property named `foo` with the value `bar` using:

```javascript
console.log("<PROP::foo>bar");
```

#### Test Cases

When writing properties, the properties are attached to the most recent Test Case.

##### What is a Test Case?

Test cases are a group of one or more test assertions. Within the Qualified UI each test case shows up on its own line and indicates if it passed or failed. Different testing frameworks supported by Qualified—across different languages—will function differently, but they all output some concept of a test case. For behavior driven frameworks such as RSpec, a test case is declared using `it` method calls, where as in a non-behavior driven framework such as JUnit, a test case is defined using a `@Test` method.

##### How to properties get used?

Applying a property to an test case will mark the entire block with that property. If you wish to mark multiple test cases with the same property, you will need to repeatedly apply the property, once within each case.

When outputting properties, you will want to write them to STDOUT at the beginning of the test case for your chosen framework.

For example, in Java you would implement the foobar example like so:

```java
import org.junit.Test;
import static org.junit.Assert.*;

public class Tests {

  // in the case of JUnit, each test method is considered a Test Case.
  @Test
  public void testShouldHaveAFooBarProp() throws Exception {
    System.out.println("<PROP::foo>bar");
    assertEquals("Value is true:", true, true);
  }
}
```

In Ruby's RSpec, it would be like so:

```ruby
describe "example" do
  it "should have a foo prop" do
    puts "<PROP::foo>bar"
    expect(true).to eq true
  end
end
```

So far we have used the traditional "foobar" to describe property usage. This is a contrived example, in the following sections we will dive into specific properties that are supported by the Qualified Platform.

## When to Use Advanced Testing

Advanced testing properties should only be used within the test cases used for scoring challenges. Advanced testing is not supported by the platform within the "Sample Tests" section. To clarify, the sample tests are available as a way to provide candidates with some starter tests that they can modify. They are not used for scoring and therefore advanced test cases are not relevant.

In other words, advanced testing is to be used only by reviewers and for internal scoring. The advanced testing features outlined in this article will not be relevant from a candidate's point of view.

# Hidden Test Cases

Hidden test cases are used when you want to test for cases that you do not wish to report back to the candidate. For example: Let's say you may have a number of edge cases that you want to test for, to see if a candidate typically writes defensive code. If you provide these tests in your test suite, the candidate will submit their code, see that they failed the edge case tests, and then proceed to fix them. You will not be able to fully determine if the candidate would normally have thought to write defensive code on their own since the test results gave the requirement away.

Hidden tests solve this problem by allowing you to include tests within the test suite that are not presented back to the candidate. From the candidate's perspective it is as if there are no edge case tests. The score that they are shown will also not reflect the edge case tests. From the reviewer's perspective these tests will be shown within the output and the score will reflect the entire suite of test cases.

## Reference

To mark an Test Case as hidden, simply write `<PROP::hidden>true` to STDOUT.

## Example

For example, given the following JavaScript Mocha tests:

```javascript
const assert = require("chai").assert;

describe("solution", function() {
  it ("should handle even values", function() {
    assert.equal(solution(2), 4);
  });

  it ("should handle odd values", function() {
    assert.equal(solution(3), 6);
  });

  it ("should gracefully handle null values", function() {
    console.log("<PROP::hidden>true");
    assert.equal(solution(null), 0);
  });
});
```

#### What the Candidate Sees:

When taking the challenge, the candidate would only see these tests once the solution is submitted.

![Reviewer Example](/images/hire/hwt-hidden-candidate.png)


#### What the Reviewer Sees:

However when reviewing the results, reviewers will see these results within the results playback.

![Reviewer Example](/images/hire/hwt-hidden-reviewer.png)

Notice how there are 3 passed test cases instead of 2. The additional hidden test cases is shown along with a label to indicate it is hidden. There is also a "Hidden" filter at the top of the results. Clicking this filter will allow you to toggle showing only hidden test cases. In the example shown, the filter is green since all hidden test cases passed. This filter can also show up as yellow or red, to indicate partial or complete failure of hidden tests.


# Tagged Test Cases

You are able to tag test cases with one or more tags, which will allow you to group results. This makes it easier from a high level overview to get an idea for how well a candidate did on a challenge, across different categories.

For example you may want to tag your test cases with "Easy", "Medium" and "Hard", or perhaps just "Basic" & "Advanced". You may also want to call out special categories, like "Optimization" or "Edge Cases". You may even want to use a combination of tags on each test case.

Tags do not affect overall scoring. They are a way to quickly identify which aspects of a challenge a solver has done well on and which they have not. A summary of each tag will be shown at the top of your results.

## Reference

To tag a test case, simply write `<PROP::tag>Tag Name` to STDOUT. You can add any number of tags to a test case simply by using multiple lines, one line per tag.

## Example

The following demonstrates how to add multiple tags to multiple test cases using Python and UnitTest.

```python
import unittest

class Test(unittest.TestCase):
  def test_should_mask_basic_phone_number(self):
    print('<PROP::tag>Basic')
    print('<PROP::tag>Phone Numbers')
    self.assertEqual(mask('123-456-7890'), '123-456-xxxx', 'last 4 of a basic number masked')

  def test_should_mask_phone_number_with_extension(self):
    print('<PROP::tag>Advanced')
    print('<PROP::tag>Phone Numbers')
    self.assertEqual(mask('(123) 456-7890 x123'), '(123) 456-xxxx x123', 'last 4 of a number with extension masked')
```

# Weighted Test Cases

Weighting test cases allow you to alter the overall scoring of a challenge. Normally each test case weighs the same, each with a default weight of 1. For example, say you have 5 test cases and a candidate passes 4: their score would be 80%. You can however change the default weight of any test case. Going back to our example, lets give the test case that the candidate got wrong is a weight of 2. That test case is now 2 times as important to the score as the other 4 test cases. That means the candidate's score would now be 66.6%.

When you use weights, candidates will have no idea that certain tests are more important than others. From their perspective all tests will be weighted the same. Weights will also not affect the passed/failed count, even for reviewers. The only thing that will be affected is the internal score shown to members of your team.

## Reference

To weight a test case, simply write `<PROP::weight>value` to STDOUT. `value` should be an integer or float, for example `<PROP::weight>2` or `<PROP::weight>2.5`.

## Example

The following example shows how to weigh a test case to be 1.5 times that of the other test case. For this example we are using C# and NUnit.

```csharp
using System;
using NUnit.Framework;

[TestFixture]
public class Tests {
  [Test]
  public void TestShouldDoubleStrings() {
    Console.WriteLine("<PROP::weight>1.5");
    Assert.AreEqual(Solution.double("2000"), 4000, "String value is doubled to 4000");
  }

  [Test]
  public void TestShouldDoubleIntegers() {
    Assert.AreEqual(Assert.AreEqual(Solution.double(2), 4, "Integer value is doubled to 4");
  }
}
```
