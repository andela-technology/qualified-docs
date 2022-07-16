---
summary: Information for the KotlinTest testing framework
tags:
  - kotlin
  - testing
  - kotlintest
---

# KotlinTest Testing Framework

## Overview

Qualified supports writing tests for Kotlin using [KotlinTest][1].

## Basic Example

### Solution

```kotlin
fun add(a: Int, b: Int) = a + b
```

### Tests

```kotlin
import io.kotlintest.matchers.shouldBe
import io.kotlintest.specs.StringSpec

class TestAdd : StringSpec() {
    init {
        "add(1, 1) should return 2" {
            add(1, 1) shouldBe 2
        }
    }
}
```

## Assertion Libraries

Following assertion libraries can be used:

- [Expekt](https://winterbe.github.io/expekt/)
- [Kluent](https://markusamshove.github.io/Kluent/)


# Learn More

You can learn more on the [KotlinTest website][1].

[1]: https://github.com/kotlintest/kotlintest
