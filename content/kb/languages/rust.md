---
title: Rust
summary: "Rust Environment"
tags:
  - rust
  - language
---

# Rust

## Environment

Qualified supports Rust 1.44 (Rust 2018).

## Timeout

The sandbox environment will timeout the code within 12 seconds.

## Packages

The following crates are available:

- `bit-set`: `0.5.2`
- `chrono`: `0.4.11`
- `itertools`: `0.9.0`
- `lazy_static`: `1.4.0`
- `num`: `0.2.1`
- `quickcheck`: `0.9.2`
  - `quickcheck_macros`: `0.9.1`
- `rand`: `0.7.3`
- `regex`: `1.3.9`
- `serde`: `1.0.111`
  - `serde_derive`: `1.0.111`
  - `serde_json`: `1.0.53`
- `text_io`: `0.1.8`

# Testing

Our Rust environment supports writing unit tests using `tests` mod with
`#[cfg(test)]` attribute. See [rust/rust](/kb/languages/rust/rust).
