---
summary: Information for Lua unit testing framework Busted
tags:
  - lua
  - testing
  - busted
---

# Busted Test Framework

## Overview

Qualified supports writing tests for Lua using [Busted][1].

## Quick Start

#### Solution Code:

```lua
local t = {}
function t.add(a, b)
  return a + b
end
return t
```

#### Test Fixture:

```lua
local t = require 'solution'
describe("add", function()
  it("should add numbers", function()
    assert.are.same(2, t.add(1, 1))
  end)
end)
```

# Learn More

You can learn more on the [Busted website][1].

[1]: https://olivinelabs.com/busted/
