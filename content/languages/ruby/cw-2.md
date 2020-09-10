---
summary: Help for the Qualified Testing Framework under Ruby
tags:
  - ruby
  - testing
---

# Qualified Testing Framework

Qualified provides a lightweight, custom testing framework for Ruby that makes it easy to build and take a challenge.  When creating a challenge, you can choose to use [Rspec](/languages/ruby/rspec) instead.

<div class="note-box">
When taking a challenge, the test framework is already selected for you.  You can determine which framework you are using by looking in the upper-right of the _Sample Tests_ code area.
</div>

## `Test` Object

The Test class provides the testing functionality needed to validate a challenge's requirements or write your own tests if you are taking a challenge. It is a frozen singleton class and cannot be modified.

# Pass/Fail methods

## `Test.expect(passed, msg = nil)`

Core assertion method that all other methods build off of. msg argument is optional. If it is not provided then a generic message will be used. Best practice is to provide your own message.

Pass/Fail status will be written to the output stream.

## `Test.assert_equals(actual, expected, msg = nil)`

Checks that the actual value equals the expected value. A useful message will be displayed
for both pass and fail outcomes. The msg argument is optional. If given it will be displayed in addition to the typical message used.

## `Test.assert_not_equals(actual, unexpected, msg = nil)`

Checks that the actual value does not equal the unexpected value. A useful message will be displayed for both pass and fail outcomes. The msg argument is optional. If given it will be displayed in addition to the typical message used.

## `Test.expect_error(msg, &block)`

Useful for testing that an error was expected to happen. msg is optional but best practice is to provide one.

## `Test.expect_no_error(msg, &block)`

Useful for testing that an error was not expected to happen. msg is optional but best practice is to provide one.

# Spec Methods:

## `Test.describe(msg, &block)`

Top level method for describing/grouping a set of tests. Globally aliased as "describe".

```ruby
describe "Foo" do

end

# or

Test.describe "Foo" do

end
```

## `Test.it(msg, &block)`

Used in conjunction with describe to group related sets of tests in a spec. Globally aliased as "it".

```ruby
describe "Foo" do
    it "should be defined" do
        Test.expect(defined?(Foo), "Foo is not defined")
    end
end
```

## `Test.before(&block)`

Any blocks sent to this method will be called before each it spec is ran.

```ruby
# this is a contrived example
describe "Foo" do
    a = 0

    # called before each spec is ran
    before do
        a++;
    end

    it "should should do something" do
        Test.assert_equals(a, 1)
    end

    it "should do something else" do
        Test.assert_equals(a, 2)
    end
end
```


# Helper Methods:

## `Test.random_number() → Integer`

Returns a random number. Useful for testing dynamic values that can't easily by hard coded into solutions

## `Test.random_token() → String`

Returns a random string. Useful for testing dynamic values that can't easily by hard coded into solutions
