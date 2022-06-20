---
summary: Information for the PHPUnit testing framework
tags:
  - php
  - testing
  - phpunit
---

# PHPUnit Testing Framework

## Overview

Qualified supports the PHPUnit testing framework:

- PHPUnit 5 (PHP 7.0)
- PHPUnit 9 (PHP 7.4)
- PHPUnit 9.5 (PHP 8)

## PHPUnit Quick Start

All tests start with a subclass of `TestCase`. You can then add one or more test case methods to that class, each of which must be `public` and start with `test`. The name of the test class must end with `Test`.

### Assertions

Use `$this->assert*` methods to create your assertions, such as `$this->assertSame(actual, expected, [message])`.

:::warning
[`assertEquals`](https://phpunit.readthedocs.io/en/9.5/assertions.html#assertequals) and similar `*Equals` methods have [surprising type coercion](https://stackoverflow.com/questions/10254180/difference-between-assertequals-and-assertsame-in-phpunit/), so `42` and `true` would be considered equal. Prefer [`assertSame`](https://phpunit.readthedocs.io/en/9.5/assertions.html#assertsame), [`assertObjectEquals`](https://phpunit.readthedocs.io/en/9.5/assertions.html#assertobjectequals), [`assertTrue`](https://phpunit.readthedocs.io/en/9.5/assertions.html#asserttrue) or type-check arguments before calling `assertEquals`.
:::

### Example

```php
<?php
use PHPUnit\Framework\TestCase;

class TwoOldestAgesTest extends TestCase {
    public function testSolution() {
        $actual = twoOldestAges([6, 5, 83, 5, 3, 18]);
        $expected = [83, 18];
        $this->assertSame($expected, $actual);
    }
}
```

# Learn More

[You can learn more on the PHPUnit website](https://phpunit.de/).
