---
summary: Information for the JUnit testing framework for Kotlin
tags:
  - kotlin
  - testing
  - junit
---

# JUnit Testing Framework

## Overview

Qualified supports writing test fixtures for Kotlin using [JUnit 4][1].

## Quick Start

#### Solution Code:

```kotlin
fun add(a: Int, b: Int) = a + b
```

#### Test Fixture:

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

- [Expekt](http://winterbe.github.io/expekt/)
- [Kluent](https://markusamshove.github.io/Kluent/)

# Learn More

You can learn more on the [JUnit website][1].

[1]: https://junit.org/junit4/
