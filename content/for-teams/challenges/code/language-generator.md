---
title: "Classic Code Challenge: Language Generator"
summary: "How to use the Language Generator"
tags:
  - languages
  - generation
  - classic
bodyClass: 'employer-focused'
---

# Language Generator

## Background

Qualified gives developers the ability to run code in powerful testing environments that should make them feel comfortable and productive immediately. Every language that Qualified supports comes with a testing environment that includes a language-specific testing framework to run in-depth tests with.

The upside of using these powerful testing environments is that developers have more control and can debug the challenge much like they would in their own custom-tailored environment that they would in on the job.

One potential downside to these custom environments is that it may sometimes be difficult or time consuming to translate challenges into other languages. This is why we built the Language Generator.

## What is the Language Generator?

The Language Generator is a tool that allows teams to design challenges with entry points, return values, and inputs - all through one YAML configuration file. This configuration file is then used to generate the challenge in every language that the generator supports.

That might sound pretty complicated. Let's break it down to a simple example to see how to use the generator.

## Example

We should start by designing a challenge. Without thinking about the configuration, we should try to think about what this challenge will become. Perhaps think about it in a language that we know well. If it were JavaScript we might want to have a function called `sayHello` which takes in a `name` and returns `"Hello [name]!"`.

So the setup code for the candidate might be:

```javascript
function sayHello() {

}
```

The test cases might look something like this:

```javascript
let assert = require("chai").assert;
describe('with a non empty string', function() {
  it('should say hello specifically', function() {
    assert.equal(sayHello("Qualified"), "Hello, Qualified!");
  });
});
```

Essentially we're just checking to see if our input of a particular string matches our expected output of another string. We've gotten pretty far into designing this challenge, so let's take a look at how the configuration would be built:

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

Let's break it down quick. So we've got our `entry_point` as `say_hello`.

```yaml
entry_point: say_hello
```

Since this is translated into multiple languages it's shown snake-cased here, but it will translate into the appropriate casing for each language. In JavaScript, it would become `sayHello` automatically.

You'll notice we designated a `return_type` of `String`

```yaml
return_type: String
```

This must be specified especially when translating into strong-typed languages. Checkout Supported Types for all the available types `return_type` could be.

Next we have our `parameters`

```yaml
parameters:
  - name: name
    type: String
```

This is our list of parameters that will be sent to the entry point. Automatically the entry point is setup for the candidate so they understand what kind of parameters to expect and where to expect we'll be sending them. In the example above we're sending `sayHello` our string `name`.

Finally we have our `test_cases` and `example_test_cases`. Example test cases are the tests available to the candidate immediately for testing. These are used to help the candidate get their feet wet and grow confident with the testing environment which may be new to them. The test cases are the ones they cannot see, but can be designed to send debugging information back to the candidate in order to lead them to the correct solution.

Let's take a look at the `test_cases`

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

The configuration allows the challenge designer to create multiple assertions inside of multiple it clauses inside of multiple describe clauses. Each assertion can have unlimited input arguments, each with their own particular type and value. Then we can specify, based on those inputs, what the expected output should be.

In JavaScript this configuration would translate out to:

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

That'll about wrap it up for example. Hope it was insightful!

## Working with Types

The Language Generator supported types are case-insensitive so you can enter them however you please. The currently supported types are `string`, `boolean`, `integer`, and `array`. The `array` type must also specify what the element's type is like so: `Array<Integer>` or `Array<Boolean>` for strongly-typed languages.

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

In this case we're inputting a `String` "pizza" and expecting that the output will split the string into an array of five `String` values `['p','i','z','z','a']`.

## Supported Types

Here is a list of all supported types:

- String
- Boolean
- Integer
- Array&lt;String>
- Array&lt;Boolean>
- Array&lt;Integer>
- Array&lt;Array&lt;String>>
- Array&lt;Array&lt;Boolean>>
- Array&lt;Array&lt;Integer>>


## Syntax Definition

On the main level of the configuration four key mappings are required, one is optional.

- `entry_point` (required) - Lets the language generator know what to name the main function or method that will be tested.
- `return_type` (required) - The type of object that will be returned from the main entry point method.
- `parameters` (required) - A list of parameters that will passed into the main entry point method.
- `test_cases` (required) - A set of test cases that will be used to test the main entry point method with inputs and expected outputs. These test cases are hidden from the candidate and will determine their final score.
- `example_test_cases` (optional) - Similar to the `test_cases` except these will be viewable and modifiable by the candidate. They are not used in the calculation of their final score.

### Parameters

The `parameters` are a list specified in the YAML configuration of the parameters to be passed to the main method. A case where we have two parameters will look something like this:

```
parameters:
  - name: list
    type: Array<Array<Integer>>
  - name: x
    type: Integer
```

Where `name` is the name of the parameter specified in the main entry point method for the candidate's setup code and the generated solution. The `type` can be any one of the supported types specified above.

### Test Cases

Test Cases contains a list of `describe` and `it` blocks that will be translated into test cases specific to the languages test framework.

#### Describe Block

The `describe` block is used to contain a series of similar `it` blocks, which will help organize the code and the eventual output. It will have one list `its` which will list of all of the `it` blocks.

A describe block in the YAML may look something like this:

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

Where `describe` is a string helping to display the purpose of the following `it` blocks.

#### It Block

The `it` block contains a list of assertions. It is generally recommended to stick to one assertion per `it` block as it is good for organizational purposes and provides strong feedback to the candidate in the case they cannot pass the assertion.

#### Assertions

The `assertions` list contains a list of `input_arguments` and the `expected_output`.

The `input_arguments` will map to the `parameters` specified at the main level of the configuration. So the order in which the input argument is specified will match up to the order in which the parameter is listed. A `type` can be specified, but it is not necessary because it must adhere to the `type` specified by the `parameters` list.

The `expected_output` will map to the `return_type` specified at the main level of the configuration. It can only return a single value.

#### Values

The `input_arguments` and `expected_output` will use the keyword `value` to specify inputs and outputs.

The keyword `value` can contain any of the supported types. A string can always be specified by using apostrophes, so a number can be turned into a string ('52' as opposed to 52). Arrays can be listed out in the array syntax seen above or with `-` in the YAML list format.

#### Advanced Test Cases

`describe` and `it` blocks can define [Advanced Test Cases](/for-teams/challenges/advanced-test-cases). Use `hidden`, `weight` and `tag` to add advanced testing functionality to your it blocks, or optionally add them to an entire describe block.

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
