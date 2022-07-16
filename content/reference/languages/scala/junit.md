---
summary: Information for the JUnit testing framework for Scala
tags:
  - scala
  - testing
  - junit
---

# JUnit Testing Framework

## Overview

Qualified supports writing tests for Scala using [JUnit 4][1].

## Basic Example

### Solution

```scala
object Sample {
  def sayHello(name: String) = {
    if (name.length() > 0) {
      "Hello, " + name + "!"
    }
    else {
      "Hello there!"
    }
  }
}
```

### Tests

```scala
import org.junit.Test
import org.junit.Assert._

class SampleSuite {
  @Test
  def should_say_hello = {
     assertEquals(
       "Hello, Qualified!",
       Sample.sayHello("Qualified"),
     )
  }
  @Test
  def should_handle_empty_string = {
     assertEquals(
       "Hello there!",
       Sample.sayHello(""),
     )
  }
}
```

# Learn More

You can learn more on the [JUnit website][1].

[1]: https://junit.org/junit4/
