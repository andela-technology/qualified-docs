---
summary: Information about the Pester testing framework for PowerShell
tags:
  - powershell
  - testing
  - pester
---

# Pester Testing Framework

Qualified supports the [`Pester`](https://github.com/pester/Pester) unit testing framework for PowerShell.

## Classic Code Examples

### Quick Start

Here is a minimal example of validating PowerShell code in Qualified's classic code challenge environment using Pester.

#### Solution code

```powershell
function Add-Numbers($a, $b) {
    return $a + $b
}
```

#### Test cases

```powershell
BeforeAll {
    . $PSCommandPath.Replace('.Tests.ps1', '.ps1')
    # Or
    # . $PSScriptRoot/Solution.ps1
}

Describe "Add-Numbers" {
    It "adds positive numbers" {
        Add-Numbers 1 1 | Should -Be 2
    }
    It "adds negative numbers" {
        Add-Numbers 1 -6 | Should -Be -5
    }
}
```

### Optional preloaded file

Classic code lets you set up boilerplate for the candidate or test suite in a pre-loaded file `$PSScriptRoot/Preloaded.ps1`.

#### Preloaded

```powershell
function Preloaded-Add($a, $b) {
    return $a + $b
}
```

#### Solution

```powershell
. $PSScriptRoot/Preloaded.ps1

function Add-Numbers($a, $b) {
    return Preloaded-Add $a $b
}
```

#### Test cases

```powershell
BeforeAll {
    . $PSCommandPath.Replace('.Tests.ps1', '.ps1')
}

Describe "Add-Numbers" {
    It "adds positive numbers" {
        Add-Numbers 1 1 | Should -Be 2
    }
    It "adds negative numbers" {
        Add-Numbers 1 -6 | Should -Be -5
    }
}
```

## Project Code Examples

### With separate `src` and `tests` directories

#### `src/Add-Numbers.ps1`

```powershell
function Add-Numbers($a, $b) {
    return $a + $b
}
```

#### `tests/Add-Numbers.Test.ps1`

```powershell
BeforeAll {
    . $PSScriptRoot/../src/Add-Numbers.ps1
}

Describe "Add-Numbers" {
    It "adds positive numbers" {
        Add-Numbers 1 1 | Should -Be 2
    }
}
```

### With source and test files in the root directory

#### `Add-Numbers.ps1`

```powershell
function Add-Numbers($a, $b) {
    return $a + $b
}
```

#### `Add-Numbers.Tests.ps1`

```powershell
BeforeAll {
    . $PSCommandPath.Replace('.Tests.ps1', '.ps1')
}

Describe "Add-Numbers" {
    It "adds positive numbers" {
        Add-Numbers 1 1 | Should -Be 2
    }
}
```
