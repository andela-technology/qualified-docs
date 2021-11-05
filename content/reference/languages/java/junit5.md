---
summary: Information for the JUnit 5 testing framework for Java
tags:
  - java
  - testing
  - junit5
---

# JUnit 5 Testing Framework

## Overview

Qualified supports writing test fixtures for Java using [JUnit 5][1].

## Quick Start

#### Solution Code:

```java
public class Adder {
    public static int add(int a, int b) {
        return a + b;
    }
}
```

#### Test Fixture:

```java
import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;

@DisplayName("Testing Adder")
class AdderTests {
    @Test
    @DisplayName("Adder.add(1, 1) returns 2")
    void test1() {
        assertEquals(2, Adder.add(1, 1), "1 + 1 should equal 2");
    }
    
    @Nested
    @DisplayName("Negative Integers")
    class Negatives {
        @Test
        @DisplayName("Adder.add(-1, -1) returns -2")
        void test1() {
            assertEquals(-2, Adder.add(-1, -1), "-1 + -1 should equal -2");
        }
    }
}
```

# Learn More

You can learn more on the [JUnit website][1].

[1]: https://junit.org/junit5/
