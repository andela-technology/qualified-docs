---
title: Rust
summary: "Rust Environment"
tags:
  - rust
  - language
---

# Rust

## Environment

Qualified supports Rust 1.66 and Rust 1.44 (Rust 2018).

Rust 1.44 is [deprecated](/creating-content/challenges/upgrading-language-versions/#deprecation-process). Use Rust 1.66.

## Timeout

The sandbox environment will timeout the code within 12 seconds.

## Packages

The following crates are available:

### 1.44 (Rust 2018)

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

### 1.66

- `bit-set`: `0.5.3`
- `chrono`: `0.4.23`
- `either`: `1.8.0`
- `fancy-regex`: `0.10.0`
- `float-eq`: `1.0.1`
- `futures`: `0.3.25`
- `im`: `15.1.0`
- `itertools`: `0.10.5`
- `lazy_static`: `1.4.0`
- `num`: `0.4.0`
- `once_cell`: `1.16.0`
- `quickcheck`: `1.0.3`
  - `quickcheck_macros`: `1.0.0`
- `rand`: `0.8.5`
- `regex`: `1.7.0`
- `serde`: `1.0.150`
  - `serde_derive`: `1.0.150`
  - `serde_json`: `1.0.89`
- `text_io`: `0.1.12`
- `thiserror`: `1.0.37`
- `tokio`: `1.23.0`
- `tokio-util`: `0.7.4`

## Testing

Our Rust environment supports writing unit tests using `tests` mod with
`#[cfg(test)]` attribute. See [rust/rust](/reference/languages/rust/rust).
