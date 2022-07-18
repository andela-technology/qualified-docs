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

## Basic Example

### Solution

```groovy
class Adder {
  static def add(a, b) { a + b }
}
```

### Tests

```groovy
import org.junit.Test
import static org.junit.Assert.assertEquals

class TestAdd {
  @Test
  void "1 + 1 = 2"() {
    assertEquals(2, Adder.add(1, 1))
  }
}
```

# Learn More

You can learn more on the [JUnit website][1].

[1]: https://junit.org/junit4/
