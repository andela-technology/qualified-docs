---
summary: Information for the NUnit testing framework for F#
tags:
  - fsharp
  - "f#"
  - "f sharp"
  - testing
  - nunit
---

# NUnit Testing Framework

## Overview

Qualified supports the [NUnit](https://learn.microsoft.com/en-us/dotnet/core/testing/unit-testing-fsharp-with-nunit) testing framework for F#. NUnit is only available in the F# 6.0 environment. Use [Fuchu](/reference/languages/fsharp/fuchu) for F# 4.0.

## Basic Example

### Solution

```fsharp
namespace Challenge

module Challenge =
    let add a b = a + b
```

### Tests

```fsharp
namespace Challenge.Tests

open System
open NUnit.Framework
open Challenge

[<TestFixture>]
type TestClass () =
    [<Test>]
    member this.TestAddsTwoNumbers() =
        Assert.AreEqual(Challenge.add 1 2, 3)
```
