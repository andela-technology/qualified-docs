---
summary: Information about the unittest testing framework for Python
tags:
  - python
  - testing
  - unittest
---

# unittest Testing Framework

Qualified supports the [`unittest`](https://docs.python.org/3/library/unittest.html) unit testing framework.

:::note
From Python 3.7, the solution module is no longer imported implicitly to avoid confusing error messages. Tests must use `import solution` from the `solution` module and optional preloaded code can be accessed using `import preloaded`.
:::


## Basic Example

Here is a minimal example of unit testing in Qualified's Python 3.7 environment by explicitly importing the `solution` and `preloaded` modules. For [Project Code Challenges](/for-teams/challenges/multi-file-code), these imports can be any module name in the workspace.

```python
import unittest

import preloaded # preloaded code you can provide the solution and/or test module (omit if preloaded is empty)
import solution  # the candidate's solution

class Test(unittest.TestCase):
    def test_add(self):
        ''' add two numbers '''
        self.assertEqual(solution.add(2, 1), 3)
        
    def test_subtract(self):
        ''' subtract two numbers '''
        self.assertEqual(solution.subtract(2, 1), 1)
        
    def test_division_by_zero(self):
        ''' divide by zero '''
        self.assertRaises(ZeroDivisionError, solution.divide, 42, 0)
```

As demonstrated above, methods intended to be tested must begin with the prefix `test`. The `Test` class name is flexible. Verbose test descriptions can be provided with a simple [docstring](https://www.python.org/dev/peps/pep-0257/).

If you're using Python versions older than 3.7 in our code runner, the solution and preloaded modules are implicitly imported into the testing module as `from solution import *`.

Visit [unittest — Basic Example](https://docs.python.org/3/library/unittest.html#basic-example) for a simple, platform-agnostic example of `unittest`.

## Assertions

The crux of each test is a call to [`assertEqual()`](https://docs.python.org/3/library/unittest.html#unittest.TestCase.assertEqual) to check for an expected result; [`assertTrue()`](https://docs.python.org/3/library/unittest.html#unittest.TestCase.assertTrue) or [`assertFalse()`](https://docs.python.org/3/library/unittest.html#unittest.TestCase.assertFalse) to verify a condition; or [`assertRaises()`](https://docs.python.org/3/library/unittest.html#unittest.TestCase.assertRaises) to verify that a specific exception gets raised. These methods are used instead of the `assert` statement so the test runner can accumulate all test results and produce a report.

## Setup and Tear Down

The [`setUp()`](https://docs.python.org/3/library/unittest.html#unittest.TestCase.setUp) and [`tearDown()`](https://docs.python.org/3/library/unittest.html#unittest.TestCase.tearDown) methods allow you to execute code before and after each test method.

Similarly, you can use [`setUpClass()`](https://docs.python.org/3/library/unittest.html#unittest.TestCase.setUpClass) and [`tearDownClass()`](https://docs.python.org/3/library/unittest.html#unittest.TestCase.tearDownClass) to run code before all tests run and after all tests complete, respectively.

## Test Ordering

Unittest reorders test cases by default which can cause frustration for candidates and students when matching test case code with the output displayed on the runner. There are a variety of solutions to the problem which you can read about on [this Stack Overflow thread](https://stackoverflow.com/questions/5387299/python-unittest-testcase-execution-order), but the following approach should work for typical cases:

```python
import inspect

class Test(unittest.TestCase):
    # ... test cases ...

test_src = inspect.getsource(Test)
unittest.TestLoader.sortTestMethodsUsing = lambda _, x, y: (
    test_src.index(f"def {x}") - test_src.index(f"def {y}")
)
```
