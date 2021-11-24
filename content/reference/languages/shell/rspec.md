---
summary: Information about the RSpec testing framework for Shell
tags:
  - shell
  - testing
  - rspec
---

# RSpec Testing Framework for Shell

Qualified's shell environment uses Ruby and RSpec to execute the candidate's shell script as a subprocess and make behavior-driven assertions on the output.

## Running the candidate's solution script

A function `run_shell` is provided to execute the candidate's code and display errors on the code runner UI:

```ruby
# Runs given `script`.
#
# @param script [String] shell commands to execute. Defaults to contents of `solution`.
# @param file [String, nil] path to read `script` from. Overrides `script` if given.
# @param output [Boolean] shows the output if true (default).
# @param args [Array] arguments passed to the `script`.
#
# @return [String] The output (stdout) from the executed shell script.
def run_shell(script: $solution, file: nil, output: true, args: [])
```

Normally, you'll use `run_shell` with the `args` parameter only and accept the remaining defaults:

```ruby
# run the solution code; in effect: `./solution.sh 2 3`
actual = run_shell(args: [2, 3])
```

Since the output is a string, for challenges with complex structures like nested arrays, you may want to deserialize the output.

In some cases, it might make sense to instruct the candidate to write results to file instead of stdout, depending on the challenge. If you use files, it's a good idea to remove them between test cases to ensure a fresh slate on each run.

Since most other languages call the solution directly, we recommend using `run_shell` inside a wrapper as shown below.

## Basic Example

The notes below are adapted from [rspec-core](https://rspec.info/documentation/3.3/rspec-core/).

RSpec uses the words "describe" and "it" so we can express concepts like a conversation:

```ruby
"Describe the adder script."
"It adds two numbers."
```

```ruby
def add(a, b)
  run_shell(args: [a, b])
end

describe "adder script" do
  it "adds two numbers" do
    actual = add(2, 3)
    expected = "5" # run_shell returns a string
    expect(actual).to eq(expected)
  end
end
```

The describe method creates an `ExampleGroup`. Within the block passed to describe you can declare examples using the `it` method.

Under the hood, an example group is a class in which the block passed to describe is evaluated. The blocks passed to it are evaluated in the context of an instance of that class.

## Get Started

Start with a simple example of behavior you expect from your system:

```ruby
def subtract(a, b)
  run_shell(args: [a, b])
end

describe "subtract" do
  it "subtracts two numbers" do
    actual = subtract(5, 2)
    expected = "3"
    expect(actual).to eq(expected)
  end
end
```

Run this by clicking the **VALIDATE TEST CASES** in the challenge creator, or **RUN TESTS** when taking a challenge, and you will see a failure similar to:

```
  subtractor script
  subtracts two numbers
✘ expected: "3"
     got: "0"

(compared using ==)
```

Address the failure by defining the script:

```
#!/bin/bash

echo $(($1 - $2))
```

Now run the spec again, and watch it pass:

```
adder script
  #subtracts two numbers
    Test Passed
```

# Learn More

[You can learn how to use it on the RSpec Website](https://rspec.info/).
