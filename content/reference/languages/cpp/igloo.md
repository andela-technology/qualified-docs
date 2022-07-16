---
summary: Information for the Igloo testing framework for C++
tags:
  - cpp
  - "c++"
  - testing
  - igloo
---

# Igloo Testing Framework

## Overview

Qualified supports the Igloo testing framework. However, we recommend usng the [cpp/gtest](/reference/languages/cpp/gtest) framework instead of Igloo because Igloo is no longer maintained by its author.

## Basic Example

```cpp
int add(int a, int b); // the candidate's solution

Describe(add_tests) {
    It(should_work_on_a_basic_example) {
        Assert::That(add(1, 2), Equals(3));
    }
};
```

# Learn More

[You can learn more at the Igloo GitHub page](https://github.com/joakimkarlsson/igloo).
