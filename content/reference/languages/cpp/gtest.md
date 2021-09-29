---
summary: Information for Google Test framework for C++
tags:
  - cpp
  - "c++"
  - testing
  - gtest
---

# Google Test

## Overview

Qualified supports [Google Test](https://github.com/google/googletest/) for C++. We recommend using Google Test instead of the Igloo framework.

Google Test is only supported when C++17 with Clang 8 is used.

## Basic Example

```cpp
#include <gtest/gtest.h>
#include "challenge.h" // include the 'preloaded' file, if necessary

extern int add(int a, int b); // the candidate's solution

namespace {
TEST(Add, HandlesBasicAddition) {
    int actual = add(1, 2);
    int expected = 3;
    EXPECT_EQ(actual, expected) << "optional failure message";
}
}
```

# Learn More

See [Google Test documentation](https://github.com/google/googletest/blob/master/googletest/docs/primer.md).
