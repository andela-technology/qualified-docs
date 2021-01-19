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

- C# 6.0 (Mono 4.8)
- C# 7.3 (.Net Core 2.1)
- C# 8.0 (.Net Core 3.1)

## Timeout

The sandbox environment will timeout the code within 12 seconds.

## Packages

### C# 6.0 (Mono 4.8)

- `NUnit`: `2.x`

### C# 7.3 (.Net Core 2.1)

- `NUnit`: `3.10`
- `Newtonsoft.Json`: `11.0`
- `NSubstitute`: `4.2`

### C# 8.0 (.Net Core 3.1)

- `NUnit`: `3.12`
- `NewtonSoft.Json`: `12.0`
- `NSubstitute`: `4.2`

## Testing

Our C# environment supports the following testing frameworks:

- [csharp/nunit](/reference/languages/csharp/nunit)
