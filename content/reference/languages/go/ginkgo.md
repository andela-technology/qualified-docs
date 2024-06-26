---
summary: Information for the Ginkgo testing framework
tags:
  - go
  - golang
  - testing
  - ginkgo
  - gomega
---

# Ginkgo Testing Framework

Qualified uses the [Ginkgo](https://onsi.github.io/ginkgo/) BDD testing framework with [Gomega](https://onsi.github.io/gomega/) matcher library.


### Test Structure

```go
package challenge // import "qualified.io/challenge"

func Add(a, b int) int {
  return a + b
}
```

```go
package challenge_test

import (
  . "github.com/onsi/ginkgo"
  . "github.com/onsi/gomega"
  . "qualified.io/challenge"
)

var _ = Describe("Add", func() {
  It("should add integers", func() {
    Expect(Add(1, 1)).To(Equal(2))
  })
})
```

#### Notes

The package name (`challenge` in above example) can be arbitrary (`[a-z][a-z\d]*`).

The import path can be configured with [canonical import path](https://golang.org/doc/go1.4#canonicalimports).
The default is `codewarrior/{package name}`.

Preloaded code is just another file in the `challenge` package and can be used to add auxiliary code callable from the solution or test suite:

```go
package challenge // import "qualified.io/challenge"

func MeaningOfLife() int {
  return 42
}
```

### Matchers

```go
Expect(ACTUAL).To(M)
Expect(ACTUAL).ToNot(M)
Expect(ACTUAL).NotTo(M)
```

- [Provided Matchers](https://onsi.github.io/gomega/#provided-matchers)
- [Custom Matchers](https://onsi.github.io/gomega/#adding-your-own-matchers)
