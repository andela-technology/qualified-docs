---
summary: Information for the JUnit 5 testing framework for Groovy
tags:
  - groovy
  - testing
  - junit5
---

# JUnit 5 Testing Framework

## Overview

Qualified supports writing tests for Groovy using [JUnit 5][1].

## Quick Start

- Solution Code

```groovy
class Adder {
  static def add(a, b) { a + b }
}
```

- Test Fixture:

```groovy
import static org.junit.jupiter.api.Assertions.assertEquals

import org.junit.jupiter.api.Test

class AdderTests {
  @Test
  void "1 + 1 = 2"() {
    assertEquals(2, Adder.add(1, 1), "1 + 1 should equal 2")
  }
}
```

# Learn More

You can learn more on the [JUnit website][1].

[1]: https://junit.org/junit5/