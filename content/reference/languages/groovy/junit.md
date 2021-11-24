---
summary: Information for the JUnit testing framework for Groovy
tags:
  - groovy
  - testing
  - junit
---

# JUnit Testing Framework

## Overview

Qualified supports writing tests for Groovy using [JUnit 4][1].

## Quick Start

#### Solution Code

```groovy
class Adder {
  static def add(a, b) { a + b }
}
```

#### Test Fixture:

```groovy
import org.junit.Test

class TestAdd {
  @Test
  void addTest() {
    assert Adder.add(1, 1) == 2
  }
}
```

# Learn More

You can learn more on the [JUnit website][1].

[1]: https://junit.org/junit4/
