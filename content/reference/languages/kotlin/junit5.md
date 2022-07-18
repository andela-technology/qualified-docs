---
summary: Information for the JUnit 5 testing framework for Kotlin
tags:
  - kotlin
  - testing
  - junit5
---

# JUnit 5 Testing Framework

## Overview

Qualified supports writing tests for Kotlin using [JUnit 5][1].

## Basic Example

### Solution

```kotlin
fun add(a: Int, b: Int) = a + b
```

### Tests

```kotlin
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.Nested
import org.junit.jupiter.api.Test

@DisplayName("Testing Adder")
class AdderTests {
    @Test
    @DisplayName("add(1, 1) returns 2")
    fun addTwo() {
        assertEquals(2, add(1, 1), "1 + 1 should equal 2")
    }

    @Nested
    @DisplayName("Negative Integers")
    class Negatives {
        @Test
        @DisplayName("add(-1, -1) returns -2")
        fun addTwoNegative() {
            assertEquals(-2, add(-1, -1), "-1 + -1 should equal -2")
        }
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
