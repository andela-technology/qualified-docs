---
title: "C#"
summary: "C# Environment, Libraries, and Testing Framework"
tags:
  - csharp
  - "c#"
  - "c sharp"
  - language
NOTE: "had to trick the markdown parsers by wrapping the trailing "#" in a span below!"
---

# C<span>#</span>

## Environment

Qualified supports the following versions:

- C# 13.0 (.Net Core 9.0)
- C# 12.0 (.Net Core 8.0)
- C# 10.0 (.Net Core 6.0)
- C# 8.0 (.Net Core 3.1)
- C# 7.3 (.Net Core 2.1)
- C# 6.0 (Mono 4.8)

C# 10.0 remains the current baseline. C# versions older than 8.0 are [deprecated](/creating-content/challenges/upgrading-language-versions/#deprecation-process).


## Timeout

The sandbox environment will timeout the code within 12 seconds.

## Packages

### C# 13.0 (.Net Core 9.0)

- `NUnit`: `4.2.2`
- `NewtonSoft.Json`: `13.0.3`
- `NSubstitute`: `5.1.0`
- `StackExchange.Redis`: `2.8.16`

### C# 12.0 (.Net Core 8.0)

- `NUnit`: `4.2.2`
- `NewtonSoft.Json`: `13.0.3`
- `NSubstitute`: `5.1.0`
- `StackExchange.Redis`: `2.8.16`

### C# 10.0 (.Net Core 6.0)

- `NUnit`: `3.13.3`
- `NewtonSoft.Json`: `13.0.1`
- `NSubstitute`: `4.3.0`
- `StackExchange.Redis`: `2.6.111`

### C# 8.0 (.Net Core 3.1)

- `NUnit`: `3.12`
- `NewtonSoft.Json`: `12.0`
- `NSubstitute`: `4.2`
- `StackExchange.Redis`: `2.6.111`

### C# 7.3 (.Net Core 2.1)

- `NUnit`: `3.10`
- `Newtonsoft.Json`: `11.0`
- `NSubstitute`: `4.2`

### C# 6.0 (Mono 4.8)

- `NUnit`: `2.x`

## Testing

Our C# environment supports the following testing frameworks:

- [csharp/nunit](/reference/languages/csharp/nunit)
