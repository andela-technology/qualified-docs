---
summary: Information for the JUnit testing framework for Kotlin
tags:
  - kotlin
  - testing
  - junit
---

# JUnit Testing Framework

## Overview

Qualified supports writing tests for Kotlin using [JUnit 4][1].

## Basic Example

### Solution

```kotlin
fun add(a: Int, b: Int) = a + b
```

### Tests

```kotlin
import kotlin.test.assertEquals
import org.junit.Test

class TestAdd {
    @Test
    fun addTest() {
        assertEquals(2, add(1, 1))
    }
}
```

## Assertion Libraries

Following assertion libraries can be used:

- [Expekt](https://winterbe.github.io/expekt/)
- [Kluent](https://markusamshove.github.io/Kluent/)

# Learn More

You can learn more on the [JUnit website][1].

[1]: https://junit.org/junit4/
