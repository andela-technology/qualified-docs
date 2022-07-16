---
summary: Information for the OUnit testing framework
tags:
  - ocaml
  - testing
  - ounit
---

# OUnit Testing Framework

## Overview

Qualified supports the OUnit testing framework.

### Basic Example

```ocaml
module Tests = struct
    open OUnit
    let suite = [
        "Person module" >:::
            [
                "test_greet" >:: (fun _ -> 
                    let person : Person.t = { Person.name = "Jack" } in
                    assert_equal "Hello, Jack!" (Person.greet person) 
                )
            ]
        ]
    ;;
end
```

# Learn More

[You can learn more on the OUnit website](https://ounit.forge.ocamlcore.org/api-ounit/index.html).
