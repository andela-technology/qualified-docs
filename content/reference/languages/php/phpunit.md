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

## PHPUnit Quick Start

All tests start with a subclass of `TestCase`.
You can then add one or more test case methods to that class, each of which must start with `test`.
The name of the test class must end with `Test`.

### Assertions

Use `$this->assert*` methods to create your assertions, such as `$this->assertEquals(actual, expected, [message])`.

### Example

```php
<?php
use PHPUnit\Framework\TestCase;

class TwoOldestAgesTest extends TestCase {
    public function testAlgorithm() {
        $results1 = twoOldestAges([1, 5, 87, 45, 8, 8]);
        $this->assertEquals($results1[0], 45);
        $this->assertEquals($results1[1], 87);
        $results2 = twoOldestAges([6, 5, 83, 5, 3, 18]);
        $this->assertEquals($results2, [18, 83]);
    }
}
```

# Learn More

[You can learn more on the PHPUnit website](https://phpunit.de/).