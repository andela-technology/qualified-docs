---
summary: Information for the ScalaTest testing framework for Scala
tags:
  - scala
  - testing
  - scalatest
---

# ScalaTest Testing Framework

## Overview

Qualified supports writing test fixtures for Scala using [ScalaTest][1].

## Scala with ScalaTest Quick Start

#### Solution Code

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
import org.scalatest._

class SampleSpec extends FlatSpec with Matchers {
  behavior of "Sample.sayhello"
  it should "return a greeting to given name" in {
    Sample.sayHello("Qualified") should equal ("Hello, Qualified!")
  }
  it should "handle empty string" in {
    Sample.sayHello("") should equal ("Hello there!")
  }
}
```

ScalaTest supports many other [testing styles](https://www.scalatest.org/user_guide/selecting_a_style).

# Learn More

[You can learn more on the ScalaTest website][1].

[1]: https://www.scalatest.org/
