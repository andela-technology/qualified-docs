---
summary: Information for the hspec testing framework for Haskell
tags:
  - haskell
  - testing
  - hspec
---

# hspec Testing Framework

## Overview

Qualified supports [hspec][1], a *Behavior Driven Development* (BDD) test framework for Haskell modeled after Ruby's popular [Rspec][2] framework.

For more information, see: [https://hspec.github.io/][1]

[1]: https://hspec.github.io/
[2]: https://rspec.info/

## Setup

A minimal test setup for GHC 8.2.2 looks as follows:

### Solution

```haskell
module Example where

add :: Num a => a -> a -> a
add = (+)
```

### Tests

```haskell
module ExampleSpec where -- test module name MUST end with Spec
import Test.Hspec
import Example

spec :: Spec -- `spec` is required
spec = do
  describe "Example" $ do
    it "add a b" $ do
      (add 1 1) `shouldBe` (2 :: Integer)

main :: IO () -- `main` is optional
main = hspec spec
```

In Hspec, `Expectation` is a type alias for `IO ()`

## Pass/Fail methods

### shouldBe

```haskell
shouldBe :: (Eq a, Show a) => a -> a -> Expectation
```

The vast majority of the time, a test will simply require that a function output a specified value.

#### Examples:

```haskell
1 `shouldBe` 1 -- Will pass and display "Test Passed"
```

```haskell
Nothing `shouldBe` Just "NOOOO"
{-
expected: Just "NOOOO"
but got: Nothing
-}
```

### shouldSatisfy

```haskell
shouldSatisfy :: Show a => a -> (a -> Bool) -> Expectation
```

`shouldSatisfy` asserts that some predicate holds for a given value.

***NOTE***: It is not a good considered good practice to write tests with `shouldSatisfy`, as the output is not generally informative.  It is much better to use `shouldBe` instead.

#### Examples:

```haskell
"bar" `shouldSatisfy` (not . null) -- Will pass and display "Test Passed"
```

```haskell
 23 `shouldSatisfy` (> 42)  -- Will fail and display:
{-
23 did not satisfy predicate!
-}
```

### shouldReturn

```haskell
shouldReturn :: (Eq a, Show a) => IO a -> a -> Expectation
```

`shouldReturn` asserts that an action returns a given value.

#### Examples:

```haskell
putStrLn "Haskell is awesome!" `shouldReturn` ()
-- Will pass and display "Test Passed"
```

### shouldThrow

```haskell
shouldThrow :: Exception e => IO a -> Selector e -> Expectation
```

`shouldThrow` asserts that an exception is thrown. The precise nature of that exception is described with a `Selector`.

#### Examples:

```haskell
error "foobar" `shouldThrow` anyException
```

A `Selector` is a predicate, it can simultaneously constrain the type and value of an exception.

```haskell
throw DivideByZero `shouldThrow` (== DivideByZero)
```

To select all exceptions of a given type, `const True` can be used.

```haskell
error "foobar" `shouldThrow` (const True :: Selector ErrorCall)
```

For convenience, predefined selectors for some standard exceptions are provided.

```haskell
error "foobar" `shouldThrow` anyErrorCall
```

Some exceptions (like `ErrorCall`) have no `Eq` instance, so checking for a specific value requires pattern matching.

```haskell
error "foobar" `shouldThrow` (\e -> case e of
    ErrorCall "foobar" -> True
    _ -> False
    )
 ```

For such exceptions, combinators that construct selectors are provided. Each combinator corresponds to a constructor; it takes the same arguments, and has the same name (but starting with a lower-case letter).

```haskell
error "foobar" `shouldThrow` errorCall "foobar"
```

### hidden

```haskell
data Hidden = Module String | FromModule String String
hidden :: [Hidden] -> Expectation
```

Allows the user to hide imported modules and functions from imported modules.  Useful for testing functions already implemented in other libraries.

#### Examples:

Suppose we wanted to write an exercise where the user has to reimplement `xor`.  We don't want them to use `xor` from `Data.Bit`, so we don't want the following code to pass.

```haskell
module Solution where
import qualified Data.Bit (xor)

xor :: Int -> Int
xor = Data.Bit.xor
```

If we add into the test suite

```haskell
hidden [Module "Data.Bit"]
```

Then the above code will fail, since it imports `Data.Bit`.

If we wanted to allow for the other functions in `Data.Bit` except `xor` and `and`, we could add to our test suite:

```haskell
hidden [FromModule "Data.Bit" "xor", FromModule "Data.Bit" "and"]
```

## QuickCheck

### Using QuickCheck with Hspec

You can use arbitrary QuickCheck properties with Hspec, but they must be of type `Property`. QuickCheck's `property` function can be used to turn anything that is a member of the `Testable` class into a `Property`.

For more information, see the [QuickCheck Tutorial][QuickCheck]

[QuickCheck]: https://www.haskell.org/haskellwiki/Introduction_to_QuickCheck2

#### Example:

```haskell
module ExampleSpec where -- test module name MUST end with Spec
import Test.Hspec
import Test.QuickCheck

spec :: Spec -- `spec` is required
spec = do
  describe "read" $ do
    context "when used with ints" $ do
      it "is inverse to show" $ property $
        \x -> (read . show) x == (x :: Int)

main :: IO () -- `main` is optional
main = hspec spec
```
