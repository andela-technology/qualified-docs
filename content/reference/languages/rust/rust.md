---
summary: Information for unit testing Rust code
tags:
  - rust
  - testing
---

# Unit Testing Rust

## Overview

Qualified supports writing tests for Rust using `tests` mod with `#[cfg(test)]` attibute.

## Quick Start

#### Solution Code

```rust
pub fn add(a: i32, b: i32) -> i32 {
    a + b
}
```

#### Test Fixture:

```rust
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_add() {
        assert_eq!(add(1, 1), 2);
    }
}
```

# Learn More

You can learn more on the [unit testing chapter][1] in [Rust by Example][0].

[0]: https://doc.rust-lang.org/rust-by-example/index.html
[1]: https://doc.rust-lang.org/rust-by-example/testing/unit_testing.html
