---
title: "Classic Code Challenge Editor IDE"
summary: "Reference for editing classic code challenges in the Qualified online IDE"
tags:
  - challenges
  - code
  - classic
bodyClass: 'employer-focused'
---

# Commands

## Validate Test Cases Button

Will run the *Test Cases* against the *Reference Solution* code. Before you can publish a challenge, the tests and reference solution must match, in order to prevent unsolvable challenges from being used.

## Validate Sample Tests Button

Will run the *Sample Tests* against the *Reference Solution* code. It's helpful to run this to make sure your example test cases remain valid after updates.

## Shortcut Key Commands:

- <span class="shortcut-hint"><span class="mac-os-only" title="Command">&#8984;</span><span class="not-mac-os-only">CTRL</span> + Enter</span>: Validate the reference solution against the test cases
- <span class="shortcut-hint"><span class="mac-os-only" title="Command">&#8984;</span><span class="not-mac-os-only">CTRL</span> + '</span>: Validate the reference solution against the sample tests
- <span class="shortcut-hint"><span class="mac-os-only" title="Command">&#8984;</span><span class="not-mac-os-only">CTRL</span> + S</span> Save the challenge (will re-publish if already published)
- <span class="shortcut-hint"><span class="mac-os-only" title="Command">&#8984;</span><span class="not-mac-os-only">CTRL</span> + P</span> Open the challenge preview dialog


# Sections

## Reference Solution Tab

This is an example solution that demonstrates how to fully complete the challenge. This is the solution that is used when validating the test cases. Before you publish the challenge, the solution must complete ALL of the test cases.

This solution will **not be shown to candidates.**

## Solution Setup Tab

This is the default code that will be shown to candidates when they begin the challenge. You are not required to provide setup code before publishing a classic code challenge, however it is usually best practice to do so, even if it is only a few comments that help the candidate get started.

## Preloaded Code Tab

This code will be run before the candidate's solution. It will not be viewable by the candidate so this can be a good place to do any initial setup or provide helper methods that the candidate can use for their solution.

Some advanced uses of this code block would be to setup services such as Redis.

For example (in Ruby):

```ruby
fork { `redis-server` }
def wait_for_redis
  begin
    Timeout::timeout(0.3) do
      Redis.new.set('ready', true)
    end
  rescue => ex
    wait_for_redis
  end
end

wait_for_redis
```

## Test Cases Tab

You use the test cases block to write the tests that will be used for validating both the reference solution and the candidate's submitted solution. Some languages support multiple testing frameworks, while others only support one.

Most languages support a custom Qualified testing framework that are simplified versions that support the optional use of the spec testing pattern.

## Sample Tests Tab

The test cases that you provide here will be available to candidates as their default set of test cases. Providing a basic starter set of tests can be helpful to candidates in many cases - such as when the requirements are complex and a set of tests helps illustrates what is expected.
