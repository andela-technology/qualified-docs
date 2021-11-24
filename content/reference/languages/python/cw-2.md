---
summary: Help for the Qualified Testing Framework under Python
tags:
  - python
  - testing
---

# Qualified Testing Framework

Qualified provides a lightweight, custom testing framework for Python. However, we recommend using the standard [Python unittest](/reference/languages/python/unittest) instead.

:::tip
When taking a challenge, the test framework is already selected for you.  You can determine which framework you are using by looking in the upper-right of the _Sample Tests_ code area.
:::

## `test` module

The `test` module provides the testing functionality needed to validate a challenge's requirements, or to write your own tests if you are taking a challenge. When using Python versions before 3.7, this module is implicitly imported. On Python 3.7+, it needs to be imported with `import codewars_test as test`.

# Minimal Test Framework

A minimal test fixture looks as follows:

#### Solution Code

```python
def greet(greetor,greetee):
    return "Welcome {greetee}!  I am {greetor}.  It is a pleasure to meet!".format(
        greetor=greetor,
        greetee=greetee
    )
```

#### Fixture Code:

```python
# For Python 3.7+, add `import codewars_test as test` and `from solution import greet`
test.describe("The monk Xuanzang encounters Zhu Bajie...")
test.it("Zhu Bajie greets Xuanzang")
test.assert_equals(greet("Zhu Bajie","Xuanzang"),
                   "Welcome Xuanzang!  I am Zhu Bajie.  It is a pleasure to meet!",
                   "Failed to greet monk Xuanzang on his 'Journey to the West'")
```

We should expect this test to pass. If it did not pass, it would print as an error:

```python
Failed to greet monk Xuanzang on his *Journey to the West*
```

# Pass/Fail Functions

## `test.assert_equals(actual, expected, message)`

Checks that the actual value equals the expected value. If the test does not pass, an (optional) specified message is displayed. The default for `message` is

```python
"{actual} should be {expected}".format(actual=actual, expected=expected)
```

#### Examples:

The following examples will all pass, and print `Test Passed`

```python
test.assert_equals(1,1)
test.assert_equals(2+7,9)
test.assert_equals(False,False)
test.assert_equals(False,True and False)
test.assert_equals([],list())
test.assert_equals({1: 1}, {1: 1})
test.assert_equals("A","A", "A is A (thank you Ayn Rand).  This message will not get printed.")
test.assert_equals("You", "You", "You are you, and I suppose I am myself.  This message will not get printed.")
```

If no message is specified, then "Value is not what was expected" will print. Example:

```python
test.assert_equals("Hello", "Bonjour") # Fails and prints ""Hello" should be "Bonjour""
```

The following will all fail, and print the error specified

```python
test.assert_equals(True, False, "True is not False")
test.assert_equals(1, 2, "1 is not equal to 2.  If we could prove 1 *was* 2, all the mathematicians would have to quit and get real jobs pouring cement and emptying latrines")
test.assert_equals("CHEESE", {2:2}, "You've got your big cheese, I've got my hash type")
```

## `test.assert_not_equals(actual, unexpected, message)`

Checks that the actual value equals the expected value. If the test does not pass, an (optional) specified message is displayed. The default for `message` is

```python
"{actual} should be {unexpected}".format(actual=actual, expected=expected)
```

#### Examples:

The following examples will all pass, and print `Test Passed`

```python
test.assert_not_equals("Cordyceps unilateralis", "Ophiocordyceps unilateralis sensu lato", "These two fungi are apparently different. This message will not get printed")
```

```python
test.assert_not_equals(1+2+3, 6, "Error!  1+2+3 is 6 after all.  6 is the one and only perfect, triangular number.")
```

## `test.expect_error(message, thunk)`

Takes a message and a [*thunk*](https://en.wikipedia.org/wiki/Thunk), or unevaluated function.

If the *thunk* throws an error, this test passes. Otherwise this test fails and prints the specified message.

#### Example:

This test will pass, and print `Test Passed`:

```python
test.expect_error("We expect 1/0 to throw, since it isn't defined.  Now, if our underlying manifold was the Reimann sphere, things would be different.  This message will not get printed.", lambda : 1 / 0)
```

This test will pass, and print `Test Passed`:

```python
test.expect_error("Bad news bears: we expected stuff to blow up, but it was okay after all!", lambda : 1 + 1)
```

## `test.expect(passed, message)`

Checks to see if the value `passed` evaluates to some truthy value. Prints an optional message if provided when the test fails.

Use of this test is not considered good practice, since it is not informative.

#### Examples:

The following examples will all pass, and print `Test Passed`

```python
test.expect("You" == "You", "You are you, and I suppose I am myself.  This message will not get printed.")
```

The following will all fail, and print the error specified

```python
test.expect(1 == 2,"You fool! 1 is not 2!  Back to grade school with you!")
```

If no message is specified, then "Value is not what was expected" will print. Example:

```python
test.expect(1 == 2) # Prints "Value is not what was expected"
```

# Structuring Tests

## `test.describe(message)`

Top level method for describing/grouping a set of tests.

#### Example:

```python
test.describe("Basic Tests")
test.assert_equals(reversed([1,2]),[2,3])
test.describe("Random Tests")
from random import randint
for _ in range(100):
    (x,y,z) = [randint(0,100) for _ in range(3)]
    test.assert_equals(x*(y+z),x*y+x*z, "Distributivity of multiplication over addition failed: x = {x}, y = {y}, z = {z}".format(x=x,y=y,z=z))
```

## `test.it(message)`

Subgroups tests. Useful for printing lots of details on how you are testing.

#### Example:

```python
test.describe("Basic Tests")
test.it("Can reverse the empty list")
test.assert_equals(reversed([]),[])
test.it("Can reverse a list with one element")
for i in range(5):
    test.assert_equals(reversed([i]),[i])
test.describe("Randomized Tests")
test.it("0 is the arithmetic identity")
for i in range(5):
    test.assert_equals(i + 0, i)
```
