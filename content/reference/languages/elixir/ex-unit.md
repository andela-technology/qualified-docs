---
summary: Help for the ExUnit testing framework
tags:
  - elixir
  - testing
  - exunit
---

# ExUnit Testing Framework

## Overview

Qualified supports the ExUnit testing framework.

## ExUnit Quick Start

#### Solution Code:

```elixir
defmodule Challenge do
  def say_hello( name ) do
      cond do
      name == "" ->
        "Hello there!"
      true ->
        "Hello, #{name}!"
    end
  end
end
```

#### Test Fixture:

```elixir
defmodule TestSolution do
  use ExUnit.Case
  import Challenge, only: [say_hello: 1]
  test "says_hello" do
    assert say_hello("Qualified") == "Hello, Qualified!"
  end
  test "handles_blank_input" do
    assert say_hello("") == "Hello there!"
  end
end
```

# Learn More

[You can learn more on the ExUnit website](http://elixir-lang.org/docs/stable/ex_unit/ExUnit.html).
