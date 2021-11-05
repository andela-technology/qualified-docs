---
summary: Help for the testthat testing framework
tags:
  - r
  - testing
  - testthat
---

# testthat Testing Framework

## Overview

Qualified supports the testthat testing framework.

## testthat Quick Start

#### Solution Code:

```r
say_hello <- function(name = NULL) {
  if (!is.null(name)) {
    paste("Hello, ", name, "!", sep="")
  }
  else {
    "Hello there!"
  }
}
```

### Test Fixture:

```r
context("Code Challenge Sample")

test_that("should say hello", {
  expect_equal(say_hello("Qualified"), "Hello, Qualified!")
})

test_that("should handle blank input", {
  expect_equal(say_hello(), "Hello there!")
})
```

# Learn More

[You can learn more on the testthat website](https://testthat.r-lib.org/).
