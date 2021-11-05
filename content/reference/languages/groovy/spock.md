---
summary: Information for the Spock testing framework
tags:
  - groovy
  - testing
  - spock
---

# Spock Testing Framework

## Overview

Qualified supports writing tests for Groovy using [Spock][1].

## Quick Start

#### Solution Code:

```groovy
class Adder {
  static def add(a, b) { a + b }
}
```

#### Test Fixture:

```groovy
import spock.lang.Specification

class AdderSpec extends Specification {
  def "Adder.add returns the sum"() {
    expect:
    assert Adder.add(1, 1) == 2
  }
}
```

# Learn More

You can learn more on the [Spock website][1].

[1]: http://spockframework.org/
