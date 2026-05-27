---
title: PHP
summary: "PHP Environment and Testing Framework"
tags:
  - php
  - language
---

# PHP

## Environment

Qualified supports PHP 7.0, 7.4, 8.0, and 8.4.

PHP 8.4 remains the current baseline. PHP versions older than 8.4 are [deprecated](/creating-content/challenges/upgrading-language-versions/#deprecation-process).

## Timeout

The sandbox environment will timeout the code within 12 seconds.

## Packages

### PHP 8.4

PHP 8.4 has multiple presets for different kinds of challenges.

#### Default (no preset)

- `phpunit/phpunit`: `^9.6`
- `codewars/phpunit-codewars`: `^1.0.1`

#### Laravel (`laravel` preset)

- `laravel/lumen-framework`: `^10.0`
- `mockery/mockery`: `^1.3.1`
- `phpunit/phpunit`: `^9.6`

## Testing

Our PHP environment supports the following testing frameworks:

- [php/phpunit](/reference/languages/php/phpunit)
