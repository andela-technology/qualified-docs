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

Qualified supports the Fuchu testing framework.

These notes are adapted from: [the Fuchu repository](https://github.com/mausch/Fuchu)

## Basic Example

### Solution

```fsharp
open Fuchu

let simpleTest = 
    testCase "A simple test" <| 
        fun _ -> Assert.Equal("2+2", 4, 2+2)
```

### Tests

Tests can be grouped (with arbitrary nesting):

```fsharp
let tests = 
    testList "A test group" [
        testCase "one test" <|
            fun _ -> Assert.Equal("2+2", 4, 2+2)
        testCase "another test" <|
            fun _ -> Assert.Equal("3+3", 3, 3+3)
    ]
```

The first parameter in the assertions describes the assertion. This is usually an optional parameter in most test frameworks; in Fuchu it's required to foster descriptive failures, so you'll get a failure like "3+3 Expected value 3, actual 6" instead of just "Expected value 3, actual 6".

For more examples, including a few ways to do common things in other test frameworks like setup/teardown and parameterized tests, see the F# tests and the C# tests

### Assertions

Fuchu is mainly oriented to test organization. Although it does have a few basic assertions, you're encouraged to write your own specialized assertions for each project (they're only a couple of lines in F#), or you can use [NUnit](/reference/languages/csharp/nunit).

# Learn More

[You can learn more on the Fuchu website](https://github.com/mausch/Fuchu).
