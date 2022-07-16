---
summary: Information for the JUnit testing framework for Java
tags:
  - java
  - jvm
  - testing
  - junit
---

# JUnit Testing Framework

## Overview

Qualified supports writing tests for Java using [JUnit 4](https://junit.org/junit4).

## Basic Example

### Solution

```java
public class Calculator {
    public static int add(int a, int b) {
        return a + b;
    }
}
```

### Tests

```java
import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class CalculatorTest {
    @Test
    public void testAddingTwoNumbers() {
        int actual = Calculator.add(1, 2);
        int expected = 3;
        assertEquals(expected, actual);
    }
}
```

# Learn More

You can learn more on the [JUnit website](https://junit.org/junit4/).
