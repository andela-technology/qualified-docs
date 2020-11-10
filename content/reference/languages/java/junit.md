---
summary: Information for the JUnit testing framework for Java
tags:
  - java
  - jvm
  - testing
  - junit
---

# JUnit Testing Framework

## Overview

Qualified supports writing test fixtures for Java using [JUnit 4][1].

The notes are adapted from: [Unit Testing with JUnit - Tutorial (vogella.com)](http://www.vogella.com/tutorials/JUnit/article.html)

## Minimal Test Framework:

 - Solution Code:

```java
// Make sure your class is public
 public class Calculator {
    // You can't test private methods, so it's
    public Double multiply (Double a, Double b) {
        return a * b;
    }
}
```

 - Test Fixture:

```java
import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class CalculatorTest {
    @Test
    public void testAssociativityOfMultiplication() throws Exception {
        Calculator calc = new Calculator();
        // Try to test for behavior, rather than specific inputs
        // Otherwise people may try to cheat, and only program for exercise inputs!
        for (int i = 0; i < 100; i++) {
            Double a = Math.random();
            Double b = Math.random();
            Double c = Math.random();
            String message = String.format("(%g * %g) * %g == %g * (%g * %g)", a, b, c, a, b, c);
            assertEquals(message,
                    calc.multiply(calc.multiply(a, b), c),
                    calc.multiply(a, calc.multiply(b, c)),
                    1E-14);
        }
    }
}
```

## JUnit code constructs

### JUnit annotations

JUnit 4.x uses annotations to mark methods and to configure the test run. The following table gives an overview of the most important available annotations.

<table>
<thead>
<tr><th>Annotation</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>@Test public void method()</td><td>The `@Test` annotation identifies a method as a test method.</td></tr>
<tr><td>@Test (expected = Exception.class)</td><td>    Fails if the method does not throw the named exception.</td></tr>
<tr><td>@Test(timeout=100)</td><td>    Fails if the method takes longer than 100 milliseconds.</td></tr>
<tr><td>@Before public void method()</td><td>    This method is executed before each test. It is used to prepare the test environment (e.g., read input data, initialize the class).</td></tr>
<tr><td>@After public void method()</td><td>    This method is executed after each test. It is used to cleanup the test environment (e.g., delete temporary data, restore defaults). It can also save memory by cleaning up expensive memory structures.</td></tr>
<tr><td>@BeforeClass public static void method()</td><td>    This method is executed once, before the start of all tests. It is used to perform time intensive activities, for example, to connect to a database. Methods marked with this annotation need to be defined as static to work with JUnit.</td></tr>
<tr><td>@AfterClass public static void method()</td><td>    This method is executed once, after all tests have been finished. It is used to perform clean-up activities, for example, to disconnect from a database. Methods annotated with this annotation need to be defined as static to work with JUnit.</td></tr>
<tr><td>@Ignore</td><td>    Ignores the test method. This is useful when the underlying code has been changed and the test case has not yet been adapted. Or if the execution time of this test is too long to be included.</td></tr>
</tbody>
</table>

**Source**: [http://www.vogella.com/tutorials/JUnit/article.html#usingjunit_annotations](http://www.vogella.com/tutorials/JUnit/article.html#usingjunit_annotations)

### Assert Statements

JUnit provides static methods in the `Assert` class to test for certain conditions. These *assertion methods* typically start with `assert` and allow you to specify the error message, the expected and the actual result. An *assertion method* compares the actual value returned by a test to the expected value, and throws an `AssertionException` if the comparison test fails.

The following table gives an overview of these methods. Parameters in [] brackets are optional.

<table>
<thead><tr><th>Statement</th><th>Description</th></tr></thead>
<tbody>
<tr><td>assertEquals([String message], expected, actual, [tolerance])</td><td>    Tests that two values are the same. The optional `tolerance` is the number of decimals which must be the same (if comparing `double`s or `float`s). Note: for arrays the reference is checked not the content of the arrays.  Use `assertArrayEquals`.</td></tr>
<tr><td>assertArrayEquals([String message], expects,  actuals)</td><td>Asserts that two array types are equals.  Supported array types are: `byte[]`, `char[]`, `int[]`, `long[]`, `java.lang.Object[]`, and `short[]` </td></tr>
<tr><td>assertNull([String message], object)</td><td>    Checks that the object is null.</td></tr>
<tr><td>assertNotNull([String message], object)</td><td>    Checks that the object is not null.</td></tr>
<tr><td>assertThat([String message], T actual, Matcher&lt;T> matcher)</td><td>Asserts that `actual` satisfies the condition specified by `matcher`.</td></tr>
<tr><td>assertSame([String message], expected, actual)</td><td>    Checks that both variables refer to the same object.</td></tr>
<tr><td>assertNotSame([String message], expected, actual)</td><td>    Checks that both variables refer to different objects.</td></tr>
<tr><td>fail(String)</td><td>    Let the method fail. Might be used to check that a certain part of the code is not reached or to have a failing test before the test code is implemented. The `String` parameter is optional.</td></tr>
</tbody>
</table>

**Source**: [http://www.vogella.com/tutorials/JUnit/article.html#usingjunit_asserts](http://www.vogella.com/tutorials/JUnit/article.html#usingjunit_asserts)

## CoreMatchers DSL

The `assertThat` method allows the use of the `CoreMatchers` *Domain Specific Language* (DSL) for specifying tests.

For more notes on this see:

http://junit-team.github.io/junit/javadoc/4.10/org/hamcrest/CoreMatchers.html

Here are some examples:

```java
import static org.hamcrest.CoreMatchers.*;
import static org.junit.Assert.assertThat;

// ...

assertThat("Help! Integers don't work", 0, is(1));
/* Fails with message:
 * Help! Integers don't work
 * expected: is <1>
 * got value: <0>
 */
assertThat("Zero is one", 0, is(not(1))); // passes
```

Here is a list of the static [CoreMatchers][3] methods:

<table>
<thead>
<tr><th>Static Method</th><th>Description</th></tr>
</thead>
<tbody>
<tr><td>is(thing)</td><td>Overloaded, swiss-army-knife method.  Can check class membership, decorate another matcher, or check for equality.</td></tr>
<tr><td>equalTo(T expected)</td><td>Matches if the actual value is equal to the expected.  You can use `is(T expected)` as shorthand.</td></tr>
<tr><td>describedAs(String description, Matcher&lt;T> matcher)</td><td>Overrides the description when the `matcher` fails</td></tr>
<tr><td>allOf(Matcher&lt;T>... matchers)</td><td>Evaluates to true only if ALL of the passed in matchers evaluate to true.</td></tr>
<tr><td>anyOf(Matcher&lt;T>... matchers)</td><td>Evaluates to true if ANY of the passed in `matchers` evaluate to true.</td></tr>
<tr><td>anything()</td><td>This matcher always evaluates to true</td></tr>
<tr><td>not(T matcher)</td><td>Matches only if the underlying `matcher` does not.</td></tr>
</tbody>
</table>

## Best practices

Writing JUnit tests Qualified is different than other environments.  Here are some tips:

 - You are encouraged to output what you are testing when you test it.  That way, the person doing the exercise has some visibility into what went wrong.
 - Make randomized tests; try to test for *behavior*, rather than specific input/output pairs
 - Try to use underscores rather than camel case, as it makes it easier to read the test runner results
 - Try not to use the `assertTrue` test assertion, it's almost never informative to the person doing the exercise

[1]: http://junit.org/junit4/
[2]: http://junit.sourceforge.net/javadoc/org/junit/matchers/JUnitMatchers.html
[3]: http://junit-team.github.io/junit/javadoc/4.10/org/hamcrest/CoreMatchers.html
