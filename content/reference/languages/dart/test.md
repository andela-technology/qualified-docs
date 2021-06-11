---
summary: Information for Dart unit testing framework, test
tags:
  - Dart
  - testing
  - test
---

# Dart Test Framework

## Overview

Qualified supports writing tests for Dart using [`test`][1].

## Quick Start

- Solution Code

```dart
String sayHello(String name) {
  return name?.isEmpty ? "Hello, there!" : "Hello, $name!";
}
```

- Test Fixture:

```dart
import "package:test/test.dart";
import "package:solution/solution.dart";

void main() {
  group("greeter tests", () {
    test(" when name is provided", () {
      expect(sayHello("Qualified"), equals("Hello, Qualified!"));
    });
  });
}
```

# Learn More

You can learn more on the [Dart Test website][1].

[1]: https://pub.dev/packages/test

