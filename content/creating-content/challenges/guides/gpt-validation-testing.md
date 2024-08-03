---
title: Testing GPT Validations
summary: "This article provides guidance for ensuring your challenge GPT validations are consistent and reliable"
tags:
  - openai
  - gpt
  - llm
  - ai
  - validation
  - scoring
  - javascript
  - nodejs
  - jest
---

# Testing GPT Validations

## Overview

This is a guide to testing your GPT-validated challenges. Please begin by reading [Validating Code With a GPT](/creating-content/challenges/guides/gpt-validation), which lays the groundwork for this article and provides the Qualified challenge code that will be validated here.

Using a GPT to validate your candidate's code submissions is a powerful and flexible technique, but has the downside of reliability.

This guide shares techniques to verify that your analytics and prompts used for validation will perform consistently on a wide variety of potential candidate solutions over many runs.

## Example

### Prerequisites

This example uses Node JavaScript and the Jest testing framework. You'll want to have an [OpenAI API key](https://platform.openai.com/docs/quickstart/step-2-setup-your-api-key), handy if you want to execute the code here, although the technique could work with any other GPT API.

### Setup and Execution

Here are the versions used for writing this guide:

```
$ npm -v
10.2.4
$ node -v
v20.11.1
```

These are not hard requirements but given for reproducibility.

In a fresh directory, copy the `gpt-template.test.js` file provided below and run the following commands, filling in your OpenAI API key:

```
npm init -y
npm i jest@^29.7.0 dotenv@^16.4.5
echo "OPENAI_API_KEY=sk-proj-S...<your OpenAI API key>" > .env
npx jest
```

#### `gpt-template.test.js`

_Note: this is a large file, and the guide continues with an explanation below._

```js
const fetchAnalysis = solution => {
  const content = `Return a JSON structure with analytics for
the following code which should solve the 'two sum' algorithm problem (return true if two distinct numbers at different indexes in an array add up to a target sum):

\`\`\`js\n${solution}\n\`\`\`

Your response should use the following structure, filled out with respect to the solution code:

\`\`\`json
{
  "solutionSolvesTwoSumProblem": boolean,
  "solutionHasLinearTimeComplexity": boolean,
  "solutionHasCorrectJSDoc": boolean,
  "solutionUsesClearFunctionParameterNames": boolean,
  "solutionKeepsVariablesLocal": boolean
}
\`\`\`

Use this rubric for each scoring key:

- solutionSolvesTwoSumProblem: Is the solution code a 100% logically correct solution to the Two Sum problem described above? It's OK if it's not performant, or has non-logical issues. Make sure that the two numbers are distinct.
- solutionHasLinearTimeComplexity: Does the solution run in O(n) time? Hash/object/set lookups are considered O(1).
- solutionHasCorrectJSDoc: Solution must have a complete and correct JSDoc (no wrong types, correct JSDoc syntax, multiline-style comments (/* */), so slash comment syntax // is not acceptable, no logical inconsistencies or mistakes)
- solutionUsesClearFunctionParameterNames: twoSum function parameters must use clear variable names like \`nums\`, \`numbers\` or \`target\`. \`t\` and \`n\` are unclear. It's OK if abbreviated variable names are used in the function body.
- solutionKeepsVariablesLocal: Solution must not pollute the global scope with variables (for example, forgetting to add \`let\` or \`const\`, especially to loop control variables).`;
  // TODO could add one-shot or few-shot code examples to prompt
  return fetchCompletion(content);
};

const fetchCompletion = async (content) => {
  const messages = [{ role: "user", content }];
  const endpoint = "https://api.openai.com/v1/chat/completions";
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      messages,
      model: "gpt-4o",
      temperature: 0,
      response_format: { type: "json_object" },
    }),
  });
  const data = await response.json();

  if (!response.ok) {
    throw Error(data.error.message);
  }

  return JSON.parse(data.choices[0].message.content);
};

describe("GPT Code Validation Starter Template", () => {
  describe("JavaScript", () => {
    it("should detect a clean quadratic solution with a subtle bug", async () => {
      const solution = `
const twoSum = (n, t) => {
  for (let i = 0; i < n.length; i++) {
    for (let j = i; j < n.length; j++) {
      if (n[i] + n[j] === t) {
        return true;
      }
    }
  }
  return false;
};
module.exports = twoSum;`;
      const analytics = await fetchAnalysis(solution);
      expect(analytics.solutionSolvesTwoSumProblem).toBe(false);
      expect(analytics.solutionHasLinearTimeComplexity).toBe(false);
      expect(analytics.solutionHasCorrectJSDoc).toBe(false);
      expect(analytics.solutionUsesClearFunctionParameterNames).toBe(false);
      expect(analytics.solutionKeepsVariablesLocal).toBe(true);
    });

    it("should detect a poor but correct solution", async () => {
      const solution = `
const twoSum = (n, t) => {
  for(i = 0; i < n.length; i++)
    for(j = i + 1; j < n.length; j++)
      if(n[i] + n[j] === t)
        return true;
  return false;
};
module.exports = twoSum;`;
      const analytics = await fetchAnalysis(solution);
      expect(analytics.solutionSolvesTwoSumProblem).toBe(true);
      expect(analytics.solutionHasLinearTimeComplexity).toBe(false);
      expect(analytics.solutionHasCorrectJSDoc).toBe(false);
      expect(analytics.solutionUsesClearFunctionParameterNames).toBe(false);
      expect(analytics.solutionKeepsVariablesLocal).toBe(false);
    });

    it("should detect a poor but correct solution, but with better variable names, partial global pollution", async () => {
      const solution = `
const twoSum = (numbers, target) => {
  for(let i = 0; i < numbers.length; i++)
    for(j = i + 1; j < numbers.length; j++)
      if(numbers[i] + numbers[j] === target)
        return true;
  return false;
};
module.exports = twoSum;`;
      const analytics = await fetchAnalysis(solution);
      expect(analytics.solutionSolvesTwoSumProblem).toBe(true);
      expect(analytics.solutionHasLinearTimeComplexity).toBe(false);
      expect(analytics.solutionHasCorrectJSDoc).toBe(false);
      expect(analytics.solutionUsesClearFunctionParameterNames).toBe(true);
      expect(analytics.solutionKeepsVariablesLocal).toBe(false);
    });

    it("should detect a poor but correct solution, partial global pollution (on a different loop)", async () => {
      const solution = `
const twoSum = (numbers, target) => {
  for(i = 0; i < numbers.length; i++)
    for(let j = i + 1; j < numbers.length; j++)
      if(numbers[i] + numbers[j] === target)
        return true;
  return false;
};
module.exports = twoSum;`;
      const analytics = await fetchAnalysis(solution);
      expect(analytics.solutionSolvesTwoSumProblem).toBe(true);
      expect(analytics.solutionHasLinearTimeComplexity).toBe(false);
      expect(analytics.solutionHasCorrectJSDoc).toBe(false);
      expect(analytics.solutionUsesClearFunctionParameterNames).toBe(true);
      expect(analytics.solutionKeepsVariablesLocal).toBe(false);
    });

    it("should detect a poor but correct solution, no global pollution", async () => {
      const solution = `
const twoSum = (numbers, target) => {
  for (let i = 0; i < numbers.length; i++)
    for (let j = i + 1; j < numbers.length; j++)
      if (numbers[i] + numbers[j] === target)
        return true;
  return false;
};
module.exports = twoSum;`;
      const analytics = await fetchAnalysis(solution);
      expect(analytics.solutionSolvesTwoSumProblem).toBe(true);
      expect(analytics.solutionHasLinearTimeComplexity).toBe(false);
      expect(analytics.solutionHasCorrectJSDoc).toBe(false);
      expect(analytics.solutionUsesClearFunctionParameterNames).toBe(true);
      expect(analytics.solutionKeepsVariablesLocal).toBe(true);
    });

    it("should detect an almost-correct linear solution with a subtle bug", async () => {
      const solution = `
const twoSum = (numbers, target) => {
  const seen = new Set();

  for (const n of numbers) {
    if (seen.has(target + n)) {
      return true;
    }

    seen.add(n);
  }

  return false;
};

module.exports = twoSum;`;
      const analytics = await fetchAnalysis(solution);
      expect(analytics.solutionSolvesTwoSumProblem).toBe(false);
      expect(analytics.solutionHasLinearTimeComplexity).toBe(true);
      expect(analytics.solutionHasCorrectJSDoc).toBe(false);
      expect(analytics.solutionUsesClearFunctionParameterNames).toBe(true);
      expect(analytics.solutionKeepsVariablesLocal).toBe(true);
    });

    it("should detect an almost-correct linear solution with a different subtle bug", async () => {
      const solution = `
const twoSum = (numbers, target) => {
  const seen = new Set();

  for (const n of numbers) {
    if (seen.has(target)) {
      return true;
    }

    seen.add(n);
  }

  return false;
};

module.exports = twoSum;`;
      const analytics = await fetchAnalysis(solution);
      expect(analytics.solutionSolvesTwoSumProblem).toBe(false);
      expect(analytics.solutionHasLinearTimeComplexity).toBe(true);
      expect(analytics.solutionHasCorrectJSDoc).toBe(false);
      expect(analytics.solutionUsesClearFunctionParameterNames).toBe(true);
      expect(analytics.solutionKeepsVariablesLocal).toBe(true);
    });

    it("should detect an almost-correct linear solution with yet another subtle bug, and still no proper jsdoc", async () => {
      const solution = `
// Checks if there are two numbers in the array that add up to the target sum.
//
// @param {number[]} numbers - An array of numbers to search within.
// @param {number} target - The target sum to find in the array.
// @returns {boolean} - Returns true if there are two distinct numbers in the array that add up to the target sum, otherwise false.
const twoSum = (numbers, target) => {
  const seen = new Set();

  for (const n of numbers) {
    if (seen.has(target - n)) {
      return false;
    }

    seen.add(n);
  }

  return false;
};

module.exports = twoSum;`;
      const analytics = await fetchAnalysis(solution);
      expect(analytics.solutionSolvesTwoSumProblem).toBe(false);
      expect(analytics.solutionHasLinearTimeComplexity).toBe(true);
      expect(analytics.solutionHasCorrectJSDoc).toBe(false);
      expect(analytics.solutionUsesClearFunctionParameterNames).toBe(true);
      expect(analytics.solutionKeepsVariablesLocal).toBe(true);
    });

    it("should detect a linear solution that pollutes the global scope", async () => {
      const solution = `
const twoSum = (numbers, target) => {
  const seen = new Set();
  for (n of numbers) {
    if (seen.has(target - n)) return true;
    seen.add(n);
  }
  return false;
};

module.exports = twoSum;`;
      const analytics = await fetchAnalysis(solution);
      expect(analytics.solutionSolvesTwoSumProblem).toBe(true);
      expect(analytics.solutionHasLinearTimeComplexity).toBe(true);
      expect(analytics.solutionHasCorrectJSDoc).toBe(false);
      expect(analytics.solutionUsesClearFunctionParameterNames).toBe(true);
      expect(analytics.solutionKeepsVariablesLocal).toBe(false);
    });

    it("should detect an optimal solution but with a subtle error in the jsdoc", async () => {
      const solution = `
/**
 * Checks if there are three numbers in the array that add up to the target sum.
 *
 * @param {number[]} numbers - An array of numbers to search within.
 * @param {number} target - The target sum to find in the array.
 * @returns {boolean} - Returns true if there are two distinct numbers in the array that add up to the target sum, otherwise false.
 */
const twoSum = (numbers, target) => {
  const seen = new Set();
  for (const n of numbers) {
    if (seen.has(target - n)) return true;
    seen.add(n);
  }
  return false;
};

module.exports = twoSum;`;
      const analytics = await fetchAnalysis(solution);
      expect(analytics.solutionSolvesTwoSumProblem).toBe(true);
      expect(analytics.solutionHasLinearTimeComplexity).toBe(true);
      expect(analytics.solutionHasCorrectJSDoc).toBe(false);
      expect(analytics.solutionUsesClearFunctionParameterNames).toBe(true);
      expect(analytics.solutionKeepsVariablesLocal).toBe(true);
    });

    it("should detect a basically optimal solution but with another subtle error in the jsdoc", async () => {
      const solution = `
/**
 * Checks if there are two numbers in the array that add up to the target sum.
 *
 * @param {number[]} numbers - An array of numbers to search within.
 * @param {number} target - The target sum to find in the array.
 * @returns {number} - Returns true if there are two distinct numbers in the array that add up to the target sum, otherwise false.
 */
function twoSum(numbers, target) {
  var seen = new Set();
  for (var n of numbers) {
    if (seen.has(target - n)) return true;
    seen.add(n);
  }
  return false;
}
module.exports = twoSum;`;
      const analytics = await fetchAnalysis(solution);
      expect(analytics.solutionSolvesTwoSumProblem).toBe(true);
      expect(analytics.solutionHasLinearTimeComplexity).toBe(true);
      expect(analytics.solutionHasCorrectJSDoc).toBe(false);
      expect(analytics.solutionUsesClearFunctionParameterNames).toBe(true);
      expect(analytics.solutionKeepsVariablesLocal).toBe(true);
    });

    it("should detect an optimal solution", async () => {
      const solution = `
/**
 * Checks if there are two numbers in the array that add up to the target sum.
 *
 * @param {number[]} numbers - An array of numbers to search within.
 * @param {number} target - The target sum to find in the array.
 * @returns {boolean} - Returns true if there are two distinct numbers in the array that add up to the target sum, otherwise false.
 */
const twoSum = (numbers, target) => {
  const seen = new Set();

  for (const n of numbers) {
    if (seen.has(target - n)) {
      return true;
    }

    seen.add(n);
  }

  return false;
};

module.exports = twoSum;`;
      const analytics = await fetchAnalysis(solution);
      expect(analytics.solutionSolvesTwoSumProblem).toBe(true);
      expect(analytics.solutionHasLinearTimeComplexity).toBe(true);
      expect(analytics.solutionHasCorrectJSDoc).toBe(true);
      expect(analytics.solutionUsesClearFunctionParameterNames).toBe(true);
      expect(analytics.solutionKeepsVariablesLocal).toBe(true);
    });
  });
});
```

### Sample Run

```
$ npx jest
 PASS  ./gpt-template.test.js (13.195 s)
  GPT Code Validation Starter Template
    JavaScript
      ✓ should detect a clean quadratic solution with a subtle bug (1084 ms)
      ✓ should detect a poor but correct solution (850 ms)
      ✓ should detect a poor but correct solution, but with better variable names, partial global pollution (855 ms)
      ✓ should detect a poor but correct solution, partial global pollution (on a different loop) (909 ms)
      ✓ should detect a poor but correct solution, no global pollution (947 ms)
      ✓ should detect an almost-correct linear solution with a subtle bug (1252 ms)
      ✓ should detect an almost-correct linear solution with a different subtle bug (2100 ms)
      ✓ should detect an almost-correct linear solution with yet another subtle bug, and still no proper jsdoc (1093 ms)
      ✓ should detect a linear solution that pollutes the global scope (957 ms)
      ✓ should detect an optimal solution but with a subtle error in the jsdoc (920 ms)
      ✓ should detect a basically optimal solution but with another subtle error in the jsdoc (973 ms)
      ✓ should detect an optimal solution (1144 ms)

Test Suites: 1 passed, 1 total
Tests:       12 passed, 12 total
Snapshots:   0 total
Time:        13.22 s, estimated 40 s
Ran all test suites.
```

### Explanation

While there's a lot of code here, it's mostly repeated and isn't complex.

`fetchAnalysis` and `fetchCompletion` wrap the OpenAI API call and contain the validation prompt. This code is the same as the validator used in the challenge.

Following that are a dozen test cases, each of which runs a possible candidate solution against the GPT analyzer. The asssertions in each test case ensure that the analyzer responds appropriately to the given input.

For example, for the final test, `"should detect an optimal solution"`, the solution code is highly optimal in every respect, so we expect the GPT to recognize that and return a positive score for all of the analytics it's been prompted to consider. On the other hand, the analyzer should report that the solution in the `"should detect an optimal solution but with a subtle error in the jsdoc"` test should fail the JSDoc test, but score well otherwise.

### Ensuring Flexibility

Adding more test cases with various possible candidate solutions helps ensure that the validation analytics and prompt are flexible.

_Flexibility_ means that GPT scoring is accurate on a wide variety of possible solution inputs. Testing only a few possible input solutions provides a limited guarantee that the behavior is correct on that particular subset.

Ideally, test suites would contain dozens or hundreds of possible solutions to ensure appropriate behavior across a wide range of inputs. However, maintaining extensive test suites is likely prohibitive, particularly for challenges with multiple language versions. Be prepared to make tradeoffs between coverage and development time.

GPTs may be useful in generating larger suites (but should be spot checked for overlapping tests and ensuring plenty of interesting variants--sometimes GPTs struggle to imagine poor-quality code, since they're trained to follow best practices).

More practically, tune your prompts to a dozen or so best-effort solutions initially, then monitor your newly-released challenge and adjust the validator whenever you find that it doesn't perform well on a particular input, integrating those failing inputs into the test suite.

You can also test drive a GPT validation suite by logging its output or using soft assertions, enabling you to run it on real code submissions as part of a traditional coding challenge test suite, but without penalizing your candidates. You can analyze, iterate on the prompt and only release it once you're confident in the results. Exporting a large set of existing candidate submissions for a particular challenge can give you a dataset to begin testing against.

Be wary of overfitting your prompt to your specific solution inputs. Adding plenty of diverse solutions reduces the chances of overfitting.

Note that the test code has a TODO, suggesting using one-shot or few-shot prompt examples. This adds complexity to the prompt, but may improve reliability. Use caution to ensure that the GPT isn't over-indexed on solutions that look like the examples and struggles as soon as an unforeseen input arrives.

### Ensuring Consistency

With a test suite in place, it's easy to run it 100 times to identify occasional failures. If no failing runs occur, that's a good indication that the suite is reliable enough to support a live challenge, assuming it's been tested on a wide range of inputs, as described in the previous section.

When failing runs do occur, try to get a ballpark sense of how often they occur. One failure of 100 may be tolerable for certain use cases, but other use cases may require further prompt engineering and adjustment, or may require discarding a particular analysis metric entirely if it can't be made to work consistently.

Alternatively, if a particular analysis assertion is very powerful and provides a good deal of value but fails 10% of the time, it may still be worth keeping around as a soft assertion to speed up human review.

Another technique for dealing with flaky assertions is running them multiple times concurrently and taking a majority vote, possibly with different LLMs or prompts.

Let the test suite guide your prompt engineering and analytic choices. When you're satisfied with the consistency, you can reflect the prompt and metrics back to your challenge.

After releasing the challenge, monitor submission results for consistency. Be prepared to respond to occasional failures, by adapting your analyzer and overriding incorrect scoring results.
