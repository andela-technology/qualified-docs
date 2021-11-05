---
summary: Information for the JUnit testing framework for Scala
tags:
  - scala
  - testing
  - junit
---

# JUnit Testing Framework

## Overview

Qualified supports writing test fixtures for Scala using [JUnit 4][1].

## Scala with JUnit Quick Start

#### Solution Code:

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

#### Test Fixture:

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
