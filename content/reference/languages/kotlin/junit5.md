---
summary: Information for the JUnit 5 testing framework for Kotlin
tags:
  - kotlin
  - testing
  - junit5
---

# JUnit 5 Testing Framework

## Overview

Qualified supports writing test fixtures for Kotlin using [JUnit 5][1].

## Quick Start

#### Solution Code

```kotlin
fun add(a: Int, b: Int) = a + b
```

#### Test Fixture:

```kotlin
import org.junit.jupiter.api.*

class AddTest {
    @Test
    @DisplayName("add(1, 1) == 2")
    fun test1() {
        Assertions.assertEquals(2, add(1, 1))
    }
}
```

## Assertion Libraries

Following assertion libraries can be used:

- [Expekt](https://winterbe.github.io/expekt/)
- [Kluent](https://markusamshove.github.io/Kluent/)

# Learn More

You can learn more on the [JUnit website][1].

[1]: https://junit.org/junit5/
