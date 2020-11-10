---
summary: Information for using Jest
tags:
  - typescript
  - testing
  - jest
---

# Jest Testing Framework

## Overview

Qualified supports writing tests for TypeScript (TypeScript 3 only) using [Jest][0].

## Quick Start

- Solution Code

```typescript
export const sum = (a: number, b: number) => a + b;
```

- Test Fixture:

```typescript
import { sum } from './solution';

describe('Example', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
```

## A note on Jest's exit code behavior in [Project Code Challenges](/for-teams/challenges/multi-file-code)

When other test suites for TypeScript such as [Mocha](/reference/languages/typescript/mocha_tdd) encounter a file that fails to compile, the runner will fail the entire submission automatically. Jest's behavior is different: when a file fails to compile, the test cases inside that file are disregarded from a submission scoring standpoint, but other files in the submission may still be evaluated and produce successful assertions. This can lead to false positives for scoring candidates.

The most direct way to resolve this is to consolidate all submission tests into one `.ts` file and disable candidate-visible test `.ts` files from being included with the submission. When the submission consists of the single file, its exit code status will replicate the all-or-nothing scoring other test suites offer upon compilation errors.

Visit the [project code challenges page](/for-teams/challenges/multi-file-code) to learn more about selecting which files to send to the code runner on submission.

# Learn More

You can learn more about Jest on the [Jest website][0].

[0]: https://jestjs.io/en/
