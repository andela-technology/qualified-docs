---
summary: Information for the Fuchu testing framework for F#
tags:
  - fsharp
  - "f#"
  - "f sharp"
  - testing
  - fuchu
---

# Fuchu Testing Framework

## Overview

Qualified supports the [Fuchu](https://github.com/mausch/Fuchu) testing framework for F#. Fuchu is only available in the F# 4.0 environment. Use [NUnit](/reference/languages/fsharp/nunit) for F# 6.0.


## Basic Example

### Solution

```fsharp
let add a b = a + b
```

### Tests

```fsharp
module Tests = begin
    open Fuchu
    let suite =
        testList "Add" [
            testCase "Adds two numbers" <|
                fun _ ->
                    Assert.Equal("add(1, 1) == 2", 2, add 1 1)
        ]
end
```
