---
summary: Information for the Spek testing framework
tags:
  - kotlin
  - testing
  - spek
---

# Spek Testing Framework

## Overview

Qualified supports writing tests for Kotlin using [Spek][1].

## Basic Example

### Solution

```kotlin
fun add(a: Int, b: Int) = a + b
```

### Tests

```kotlin
import org.jetbrains.spek.api.Spek
import org.jetbrains.spek.api.dsl.describe
import org.jetbrains.spek.api.dsl.it
import kotlin.test.assertEquals

class ExampleSpec : Spek({
  describe("add") {
    it("should return the sum") {
      assertEquals(2, add(1, 1))
    }
  }
})
```

## Assertion Libraries

Following assertion libraries can be used:

- [Expekt](https://winterbe.github.io/expekt/)
- [Kluent](https://markusamshove.github.io/Kluent/)

# Learn More

You can learn more on the [Spek website][1].

[1]: https://spekframework.org/
