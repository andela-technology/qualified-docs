---
summary: Information for the NUnit testing framework for C#
tags:
  - csharp
  - "c#"
  - "c sharp"
  - testing
  - nunit
---

# NUnit Testing Framework

## Overview

Qualified supports the NUnit testing framework.

## Basic Example

### Solution code

```csharp
public class Challenge
{
    public static int Add(int a, int b)
    {
        return a + b;
    }
}
```

### Test suite

```csharp
using NUnit.Framework;

[TestFixture]
public class AddTest
{
    [Test, Description("should add two numbers")]
    public void ShouldAddTwoNumbers()
    {
        Assert.AreEqual(3, Challenge.Add(1, 2));
    }
}
```

# Learn More

You can learn more on the [NUnit website](https://www.nunit.org/).
