---
private: true
---

# Classic Code Challenge Editor

The classic code challenge editor provides an in-browser IDE for creating and validating code challenges.

## Quick Usage

### Solution Code Areas

- _Reference Solution_: This is a working solution to validate your tests against
- _Solution Setup_: This is the initial code that will be provided to the developer.  It can be as complex or as simple as you want, though providing _some_ foundation usually recommended.
- _Preloaded Code_: Here you can add any code that needs to be run _before_ the developer's code.  They will not be able to see this code.

### Test Code Areas

- _Test Cases_: Here's where you will define the actual tests used to validate the developer's solution.  Be as detailed as you want, but be aware that long tests may cause timeouts.  The developer will not be able to see these tests.
- _Sample Tests (Modifiable)_: Here you can provide a few sample tests for the developer to get started validating their code.  This is not required, but can provide that little hint to get started easier.

### Running Tests

- Click **VALIDATE TEST CASES** to run your _Reference Solution_ against your _Test Cases_.  Results will appear in the lower right.
- Click **VALIDATE SAMPLE TESTS** to run your _Reference Solution_ against the _Sample Tests_.

### Shortcut Keys

- <span class="shortcut-hint"><span class="mac-os-only" title="Command">&#8984;</span><span class="not-mac-os-only">CTRL</span> + '</span> Validate the reference solution against the test cases
- <span class="shortcut-hint"><span class="mac-os-only" title="Command">&#8984;</span><span class="not-mac-os-only">CTRL</span> + Enter</span> Validate the reference solution against the sample tests
- <span class="shortcut-hint"><span class="mac-os-only" title="Command">&#8984;</span><span class="not-mac-os-only">CTRL</span> + S</span> Save the challenge (will re-publish if already published)
- <span class="shortcut-hint"><span class="mac-os-only" title="Command">&#8984;</span><span class="not-mac-os-only">CTRL</span> + P</span> Open the challenge preview dialog

## Detailed Usage

- [Learn more about the challenge creator here.](/reference/features/challenges/code/lang)

## Advanced Features

- [Advanced Test Cases](/reference/features/challenges/advanced-test-cases)
  Include extra features in your test cases, such as hidden tests and tagged tests.
- [Carry Forward Solutions](/reference/features/challenges/code/carry-forward-solutions)
  Write assessments that carry the solution forward from one challenge to the next.

## Environment & Testing Framework
