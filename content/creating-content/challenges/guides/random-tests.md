---
title: Random Tests
summary: Using random tests effectively in challenges
tags:
  - random tests
  - cheating prevention
---

# Random Tests

### Purpose

Random tests exist primarily to prevent hard-coded solutions. Assuming a traditional challenge format where a candidate is instructed to fill out a function, if an actual/expected diff is shown for each failed test, candidates can run the submission, copy expected output results and use a lookup table to return the correct solution for each input.

Another example where hard-coded solutions might receive a high score could be a data science challenge that offers a predictable transformation or analysis performed on a single data set. Without a hidden or random test that offers at least slight tweaks or variants on the data, false positives can arise. 

### Best practices

- Use as few tests and as small tests as are necessary to establish that the candidate has not hardcoded the solution (or whatever else the random test may be there to establish).
- Ensure console output is clean for random tests. This is usually not a problem when random tests are kept simple.
- Clearly label your random test case(s) as such.
- Consider informing candidates in the instructions that the random tests exist. This is probably not necessary for classic code challenges with visible submission tests.
- Avoid applying random tests to challenges that really don't need them. If the challenge is to create a specific UI, for example, random tests probably don't make much sense.
- Avoid too many random tests. After having written a random test case, it's tempting to add a loop and run 100 or 1000 of them. But doing so adds confusing verbosity to the output and can shift burden of evaluating correctness or performance to random tests that should be on itemized unit tests. 
- Avoid using random tests as a crutch to find and test edge cases or otherwise validate that the candidate's code meets the specification. For example, if a requirement is that code should handle the empty string, make an explicit test `"should handle empty string"` rather than generating hundreds of random tests of string lengths from 0..100 and assuming the empty string case will be tested. If there's a statistical chance that some submission may not have the empty string test show up in a random test case, the score may give a false positive. Even if you can statistically guarantee that the empty string will be tested within the random test suite, the other redundant random tests that may be needed to get to that point obscure the intent.
- Avoid using random tests as a crutch to test performance. If performance is a requirement, prefer specially-labeled, deterministic tests. A seeded random number generator may be a useful way to achieve this in a separate test. This ensures consistency and (as above) offers a clear label to communicate the intent behind the test to the candidate.

