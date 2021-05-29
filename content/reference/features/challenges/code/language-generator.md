---
title: "Classic Code Challenge: Language Generator"
private: true
---

# Language Generator

## Background

Qualified gives developers the ability to run code in powerful testing environments designed to make them feel comfortable and productive immediately. Every language that Qualified supports comes with an industry-standard language-specific testing framework to run in-depth tests with.

The advantage of using native testing environments is that developers are empowered to read the provided tests, write their own test cases and debug their solutions much like they do in an on-the-job development workflow.

The standard alternative to providing native, language-specific test suites is to validate candidate solutions by comparing standard output using a single language-agnostic validator script. This approach lends itself to speedy challenge development but removes the benefits of candidate interaction with tests.

The drawback of using native language-specific testing environments is that a test suite must be translated into each language by hand. This can be a time-consuming task and motivates Qualified's Language Generator tool. By automating generation of challenge solution stubs and test suites, it's possible to rapidly develop challenges that use native testing suites.

## What is the Language Generator?

The Language Generator is a tool that allows teams to design challenges at a high-level by specifying a function header and a test suite in a language-agnostic YAML configuration file. This configuration file is then used to instantly generate language-specific boilerplate code and test suites in every language that the generator supports.

Let's walk through a simple example to see how to use the generator.

## Limitations of the Language Generator

The language generator is great for classic code challenges that rely on primitive data types such as strings, integers and booleans. The generator also supports 1d and 2d dynamic list array types. A full list of types is available in [supported types](#supported-types).

Challenges that involve structs, classes, hashes, mixed type lists, variable arguments and other nested or complex data structures are not supported and must be created and translated by hand.

The language generator tool does not support project challenges and cannot generate random test cases.

Although the language generator supports over a dozen languages, not all languages supported by Qualified are supported by the generator. Try out the language generator in the app to see an up-to-date list of supported languages.

## Example

Let's design a toy challenge using JavaScript as a generic point of reference to help visualize how the generator works (you don't need to write JS to use the generator).

Our toy challenge might consist of a function called `sayHello` which takes in a `name` and returns `"Hello {name}!"`.

The setup code for the candidate might be:

```javascript
function sayHello(name) {

  // TODO write your solution here

}
```

The test suite might look something like this:

```javascript
let assert = require("chai").assert;
describe('with a non empty string', function() {
  it('should say hello specifically', function() {
    assert.equal(sayHello("Qualified"), "Hello, Qualified!");
  });
});
```

In the suite above, we're checking to see if the candidate's function `sayHello` provides the greeting string we expect.

Here's the YAML configuration for this example challenge:

```yaml
entry_point: say_hello
return_type: String
parameters:
  - name: name
    type: String
test_cases:
  - describe: with a non empty string
    its:
    - it: should say hello specifically
      assertions:
      - input_arguments:
          - value: Qualified
        expected_output:
          value: Hello, Qualified!
  - describe: with an empty string
    its:
    - it: should say hello generically
      assertions:
      - input_arguments:
          - value:
        expected_output:
          value: Hello there!
example_test_cases:
  - it: should say hello
    assertions:
      - input_arguments:
        - value: Qualified
        expected_output:
          value: Hello, Qualified!
```

Let's break it down. Our `entry_point` is `say_hello`.

```yaml
entry_point: say_hello
```

Since this is translated into multiple languages, it's shown snake-cased here, but it will translate into the appropriate casing for each language. In JavaScript, it would become `sayHello` automatically.

You'll notice we designated a `return_type` of `String`:

```yaml
return_type: String
```

This must be specified. Check out Supported Types for all the available types `return_type` could be.

Next is a `parameters` entry:

```yaml
parameters:
  - name: name
    type: String
```

This is a list of parameters that the entry point function will be called with. The entry point is set up automatically for the candidate so they understand what kind of parameters to expect and where to expect we'll be sending them. In the example above, we specify that `sayHello` has a single `name` parameter with type string.

Finally, we have `test_cases` and `example_test_cases`. `example_test_cases` are provided to the candidate to view, modify and run during the challenge. The `test_cases` suite is hidden from the candidate but can be designed to show debugging information to the candidate on submission in order to lead them to the correct solution.

Let's take a look at the `test_cases`.

```yaml
test_cases:
  - describe: with a non empty string
    its:
    - it: should say hello specifically
      assertions:
      - input_arguments:
          - value: Qualified
        expected_output:
          value: Hello, Qualified!
  - describe: with an empty string
    its:
    - it: should say hello generically
      assertions:
      - input_arguments:
          - value:
        expected_output:
          value: Hello there!
```

The configuration allows the challenge designer to create assertions inside of `it` blocks which are nested inside `describe` blocks. Each assertion can have unlimited input arguments, each with a particular type and value. Given these inputs, we can specify what the expected output of the candidate's solution (`entry_point`) should be.

In JavaScript this configuration would translate to:

```javascript
let assert = require("chai").assert;
describe('with a non empty string', function() {
  it('should say hello specifically', function() {
    assert.equal(sayHello("Qualified"), "Hello, Qualified!");
  });
});
describe('with an empty string', function() {
  it('should say hello generically', function() {
    assert.equal(sayHello(""), "Hello there!");
  });
});
```

This walkthrough example has shown the basic usage of the language generator.

Sections below show how to work with different types and describe the YAML configuration in depth.

## Working with Types

Language Generator types are case-insensitive. The currently supported types are `string`, `boolean`, `integer` and `array`. The `array` type must also specify what the element's type is using diamond brackets: `Array<Integer>` or `Array<Boolean>` for statically-typed languages.

An example of a configuration with arrays might look something like this:

```yaml
entry_point: splitter
return_type: Array<String>
parameters:
    - name: word
      type: String
test_cases:
   - it: split_the_word
     assertions:
       - input_arguments:
         - value: pizza
         expected_output:
           values: [p, i, z, z, a]
```

In this case we're inputting a `String` with the value "pizza" and expecting that the `splitter` function will split the string into an array of five `String` values `['p','i','z','z','a']`.

## Supported Types

Here is a list of types supported by the language generator:

- `String`
- `Boolean`
- `Integer`
- `Array<String>`
- `Array<Boolean>`
- `Array<Integer>`
- `Array<Array<String>>`
- `Array<Array<Boolean>>`
- `Array<Array<Integer>>`


## Syntax Definition

On the top level of the configuration there are four required key mappings and one optional key.

- `entry_point` _(required)_ - The name of the function or method that will be tested. Your candidate will be coding this function.
- `return_type` _(required)_ - The type of object that will be returned from the entry point method.
- `parameters` _(required)_ - A list of parameters that will passed as arguments to the entry point method.
- `test_cases` _(required)_ - A set of test cases that will be used to test the entry point method. Each case has inputs and expected outputs. These test cases are hidden from the candidate and will determine their final score. By default, the candidate can see the output from these test cases.
- `example_test_cases` _(optional)_ - Similar to `test_cases` except that example tests are viewable and modifiable by the candidate. They are not used in the calculation of their final score.

### Parameters

`parameters` is a list specified in the YAML configuration describing the parameters to be passed to the solution method under test. For example, a function that accepts two parameters might be represented by:

```
parameters:
  - name: list
    type: Array<Array<Integer>>
  - name: x
    type: Integer
```

Where `name` is the name of the parameter specified in the entry point method for the candidate's setup code and the generated solution. The `type` can be any one of the supported types specified above.

For example, the above configuration would generate a C# parameter list like `SomeFunc(List<List<int>> list, int x)`.

### Test Cases

Test Cases contains a list of `describe` and `it` blocks that will be translated into test cases specific to each language's test framework.

#### Describe Block

The `describe` block contains a grouping of related `it` blocks. `describe` blocks help organize the code and the eventual output shown to the candidate. `describe` will contain one list, `its`, which contains `it` blocks corresponding to the `describe`.

`describe` is a string label that describes the purpose of its constituent `it` blocks.

A describe block in the YAML might look something like this:

```
test_cases:
  - describe: with a non empty string
    its:
    - it: should say hello specifically
      assertions:
      - input_arguments:
          - value: Qualified
        expected_output:
          value: Hello, Qualified!
```

#### It Block

The `it` block contains a list of assertions. It is generally recommended to stick to one assertion per `it` block for organizational purposes. Keeping each `it` block simple provides clear feedback to the candidate should they fail an assertion.

#### Assertions

The `assertions` list contains a list of `input_arguments` and the `expected_output`.

The `input_arguments` will map to the `parameters` specified at the main level of the configuration. The order in which the input argument is specified will match up to the order in which the parameter is listed. A `type` can be specified, but is not necessary because it must adhere to the `type` specified by the `parameters` list.

The `expected_output` will map to the `return_type` specified at the main level of the configuration. It can only return a single value.

#### Values

The `input_arguments` and `expected_output` will use the keyword `value` to specify inputs and outputs.

The keyword `value` can contain any of the supported types. A string can always be specified by using apostrophes, so a number can be turned into a string (`'52'` as opposed to `52`). Arrays can be listed out in the array syntax `[1,2,3]` or with `-` in the YAML list format.

#### Advanced Test Cases

`describe` and `it` blocks can define [Advanced Test Cases](/reference/features/challenges/advanced-test-cases). Use `hidden`, `weight` and `tag` to add advanced testing functionality to your it blocks, or optionally add them to an entire describe block.

```
test_cases:
  - describe: with a non empty string
    its:
    - it: should say hello specifically
      hidden: true
      tag: Basic
      weight: 1.5
      assertions:
      - input_arguments:
          - value: Qualified
        expected_output:
          value: Hello, Qualified!
```
