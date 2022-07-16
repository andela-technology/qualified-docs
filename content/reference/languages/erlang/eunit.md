---
summary: Help for the EUnit testing framework
tags:
  - elixir
  - testing
  - exunit
---

# EUnit Testing Framework

## Overview

Qualified supports the EUnit testing framework.

## Basic Example

### Solution

```erlang
-module(hello).
-export([say_hello/1, say_hello/0]).

say_hello(Str) -> "Hello, " ++ Str ++ "!".
say_hello() -> "Hello there!".
```

### Tests

```erlang
-module(hello_tests).
-include_lib("eunit/include/eunit.hrl").

say_hello_test_() ->
  {"say_hello", [{"says hello to someone", ?_assertEqual("Hello, Qualified!", hello:say_hello("Qualified"))},
                {"handles empty input", ?_assertEqual("Hello there!", hello:say_hello())}] }.
```

# Learn More

[You can learn more on the EUnit website](https://erlang.org/doc/man/eunit.html).
