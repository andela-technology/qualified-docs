---
title: Validating Code with a GPT
summary: "This guide provides a starter for using a GPT to validate candidate and student code submissions with OpenAI's API."
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

# Validating Code with a GPT

## Overview

This guide shows how you can integrate [GPT](https://en.wikipedia.org/wiki/Generative_pre-trained_transformer) analysis on your candidate and student's code submissions using [OpenAI's API](https://openai.com/api/).

This is an extremely powerful feature, allowing you to automate fuzzy analysis beyond basic test case assertions. You can use the GPT to check code quality, test performance characteristics of a solution, validate a written response, and enforce style guidelines, among other things.

This enables you to automatically analyze submissions on a much deeper level than naive correctness, without necessarily resorting to human review.

In addition to greenfield coding challenges, GPT analysis makes educational and refactoring challenges more feasible. The technique is language-agnostic and makes possible more use cases than the simple example shown in this guide. We'd love to hear what ideas you come up with!

## Example

### Prerequisites

This example illustrates the GPT validation concept using Node JavaScript and the Jest testing framework. The only requirement for getting started is creating an [OpenAI API key](https://platform.openai.com/docs/quickstart/step-2-setup-your-api-key), although the technique could work with any other GPT API.

Before plugging your key into the example below, make sure you can consume the API outside of Qualified, for example by running any simple `curl` command provided by the API documentation.

### Challenge Instructions

For the contrived example here, we'll use a simple, classic algorithm challenge with a refactoring twist. The technique works just as well on a more realistic challenge, such as writing a React or Django app.

> Your task is to improve a solution to the Two Sum problem. This problem asks whether two different numbers in an array add up to a target sum. Return true if so, false otherwise.
>
> Your job is to improve the time complexity, add a JSDoc, and generally clean up the code.

### Solution Setup

This is the JavaScript code the candidate starts with. The solution is correct and passes the sample tests below, but has a number of code quality issues the candidate must fix.

```js
const twoSum = (n, t) => {
  for(i = 0; i < n.length; i++)
    for(j = i + 1; j < n.length; j++)
      if(n[i] + n[j] === t)
        return true;
  return false;
};
module.exports = twoSum;
```

### Sample Tests

These traditional unit tests are provided to the candidate. The provided solution above already passes these tests. The tests help provide context for how the function is consumed and enforce the desired behavior, helping the candidate avoid regressions when refactoring.

```js
const twoSum = require("./solution");

describe("Two Sum", () => {
  it("should handle a small array with a two sum", () => {
    expect(twoSum([1, 5, 4], 9)).toBe(true);
  });

  it("should handle a small array without a two sum", () => {
    expect(twoSum([1, 5, 5], 9)).toBe(false);
  });

  it("should reject using the same element twice", () => {
    expect(twoSum([5, 4, 7], 10)).toBe(false);
  });
});
```

### Submission Tests

Here's the interesting part. In addition to the standard assertions, this test uses OpenAI's JSON mode and a prompt asking for a variety of "fuzzy" analytics that we'd normally rely on human review to score.

```js
const fs = require("node:fs/promises");
const twoSum = require("./solution");

// Not a valid key--add your own OpenAI API key here.
// It won't be exposed to the candidate as long as it remains in the
// "Test Cases" file in classic code challenges, or in a hidden file
// in a project code challenge.
const OPENAI_API_KEY = "sk-proj-S0...";

describe("Two Sum", () => {
  it("should handle a small array with a two sum", () => {
    expect(twoSum([1, 5, 4], 9)).toBe(true);
  });

  it("should handle a small array without a two sum", () => {
    expect(twoSum([1, 5, 5], 9)).toBe(false);
  });

  it("should reject using the same element twice", () => {
    expect(twoSum([5, 4, 7], 10)).toBe(false);
  });
});

describe("Two Sum analytics", () => {
  let analysis;

  beforeAll(async () => {
    analysis = await fetchAnalysis();
  });

  it("should solve the two sum problem", () => {
    expect(analysis.solutionSolvesTwoSumProblem).toBe(true);
  });

  it("should have linear time complexity", () => {
    expect(analysis.solutionHasLinearTimeComplexity).toBe(true);
  });

  it("should have a correct JSDoc", () => {
    expect(analysis.solutionHasCorrectJSDoc).toBe(true);
  });

  it("should use clear function parameter names", () => {
    expect(analysis.solutionUsesClearFunctionParameterNames).toBe(true);
  });

  it("should keep variables local and not pollute the global scope", () => {
    expect(analysis.solutionKeepsVariablesLocal).toBe(true);
  });
});

const fetchAnalysis = async () => {
  const solution = await fs.readFile("./src/solution.js", "utf-8");
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
      Authorization: `Bearer ${OPENAI_API_KEY}`,
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
```

You're welcome to use this as a starter for your GPT challenges and experiments. The prompt here is just a starting point--many more analytics could be collected and enforced than these.

You can clean up the test file by moving `fetchCompletion` to the preloaded file, but make sure to keep your API key and prompt in the submission tests for security.

### Reference Solution

Finally, this is the hidden reference solution that passes all of the tests. The candidate is expected to refactor the starter solution to something along these lines to pass the challenge.

```js
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

module.exports = twoSum;
```

## Considerations

### Hallucinations

GPTs [hallucinate](https://en.wikipedia.org/wiki/Hallucination\_(artificial_intelligence)), introducing nondeterminism into scoring. A false positive can occur if a GPT claims a solution is correct when it isn't, and a false negative occurs if the GPT claims a solution is incorrect when it isn't.

[Best practice](https://towardsdatascience.com/llm-evals-setup-and-the-metrics-that-matter-2cc27e8e35f3#ac42) is to use temperature 0. Prompt engineering and choosing reasonably objective metrics (or subjective metrics that aren't likely to cause false negatives) can help ensure that scoring is performed correctly.

We have an in-depth guide to [testing your GPT-driven challenge validations](/creating-content/challenges/guides/gpt-validation-testing). Following that guide, we've tested the validation code presented here on hundreds of tests and dozens of candidate solutions and found it to achieve consistent results. The problem domain is constrained and the metrics are clear and leave enough wiggle room that the LLM should not make mistakes that might penalize the candidate unfairly very often.

If you're concerned about false negatives, you can log the GPT response rather than assert on it, and use the analysis as a basis for human review. In this case, a more verbose prompt like "Provide a code review of the solution in a couple sentences" could be useful to facilitate quick human review, in addition to itemized metrics, but be careful when generating long responses since the request will take longer to return.

You can also ask the GPT to err on the side of being generous with scoring, since false negatives are probably worse than false positives.

### Performance

Making calls to the OpenAI API takes time. Use the latest model (`"gpt-4o"` used in the above code may be outdated by the time you read this, necessitating an update), or try a few to see which runs fastest for your use case, keeping in mind other metrics, like accuracy.

The above code runs in about 3 seconds with the OpenAI call and about 1 second without it, so there is little performance impact. The limit for a submission is currently 12 seconds. Asking the GPT to provide brief responses dramatically speeds up the response time, as done in this example.

### Rate Limits, Cost and Security

GPTs incur cost per token generated, and you may want to proxy your request to add rate limits to particular candidates. Realistically, the risk of abuse is low, but it's worth keeping in the back of the mind. Keep an account limit and watch out for emails that. You could use fail-safes in challenges and remove the analytics if the API call is unsuccessful due to a billing reason. This avoids inconveniencing candidates who run up against a rate limit through no fault of their own and allows them to complete the challenge.

Keep your API keys secure in the submission tests in classic code challenges, or in a hidden file in a project code challenge. You can rotate keys if exposed or use a proxy service (such as a Google Cloud Function) to hide them entirely.

You may wish to keep your prompt secure. [Prompt injection attacks](https://genai.owasp.org/llmrisk/llm01-prompt-injection/) are unlikely for the example above, since we're using JSON mode and never logging the result of the call--only accessing certain boolean keys. But if you were to log the API call, this would be a consideration.

### Downtime and Dependency Maintenance

OpenAI's API can have downtime, which might break a challenge that blindly relies on it. While this should be a rare occurrence, you can use fallback calls using multiple APIs in cases like this. Monitoring their API status and using alerts to avoid inviting candidates to assessments when downtime occurs can be useful. You can reinvite candidates who encountered API problems through no fault of their own while attempting an assessment.

OpenAI may also deprecate or remove models from time to time, creating problems for challenges that rely on it.

As with any third-party dependency, expect some amount of monitoring and maintenance.

### With Great Power...

GPT validation is a powerful feature. Use it judiciously! Poor prompt engineering, carelessly-chosen metrics, hallucinations and performance issues can cause a poor candidate or student experience.

When used well, GPT validation can help you quickly develop content, provide immediate feedback to candidates, help students write high-quality code, automate reviewing, and enable you to easily validate solutions deeply in ways that weren't accessible or possible until recently.

## Ideas and Use Cases

Here are some ideas for using a GPT in a Qualified code challenge.

Note that GPTs may not be optimal for all of these use cases. Some are interesting and powerful ideas, but entail risks of false positives and negatives which should be managed on a case-by-case basis.

### Enforcing and Reporting on Code Quality

Detecting code quality issues and enforcing standards is probably the most straightforward and obvious use case for GPT validation in coding challenges. Examples of metrics you can easily test include:

- Time complexity
- Memory complexity
- Cyclomatic complexity
- Security (such as SQL injection, XSS, CSRF, exposed keys, catastrophic backtracking, etc)
- Variable naming
- Web accessibility
- Documentation and commenting
- Solution simplicity
- Usage of a particular design, like breaking out helper functions or sub-components
- Adherence to style guidelines like [PEP-8](https://peps.python.org/pep-0008/), [ESLint](https://eslint.org/), [Rubocop](https://rubocop.org/), etc

### Evaluating Solution Correctness

Solution correctness is best validated with tests, but a GPT can act as a supplementary check, and can even help verify solutions in languages not yet supported in Qualified.

Here are some examples where a GPT can lend a hand to a traditional test suite:

- Pseudocode
- Proprietary languages like DAX, MDX, ABAP, MATLAB, Salesforce's Apex, Trading View's Pine Script
- a [DSL](https://en.wikipedia.org/wiki/Domain-specific_language) of your invention
- Configuration files (Nginx, Apache `httpd.conf`, Terraform, Ansible, Gradle, Dockerfiles, Kubernetes, GitHub actions, Jenkins, CircleCI, Travis CI, GitLab CI, Azure Pipelines, Chef, Puppet, Cloudformation, Grafana, etc)
- Machine learning and data science libraries like Pytorch, Tensorflow, and Spark that are otherwise prohibitive for the code runner to handle (the candidate may wish to write code locally, then paste their solution in)
- SQL flavors like MySQL and Oracle PL/SQL
- Excel formulas and VBA
- CSS, CSS preprocessors like Sass, Tailwind, and layout
- Allowing a candidate to write their solution in any language they choose

### Detecting Feature Usage

You can use a GPT to detect usage (or lack thereof) of particular language features or techniques, such as particular data structures or libraries or implementation details that are difficult to reliably unit test.

For example:

- "Does the solution correctly implement a quicksort algorithm?"
- "Does the solution use a trie?"
- "Does the solution use functional React components and hooks rather than class components?"
- "Does the solution use Tailwind for all CSS styling?"

### Cheating Detection

Without [random tests](/creating-content/challenges/guides/random-tests/), candidates may be able to pass tests by hardcoding solutions. Asking the GPT whether the solution code truly solves the problem can help mitigate this risk, without the trouble of writing random tests.

### Validating Candidate-Written Tests

A GPT can validate candidate-written test suites, particularly in heavier frameworks like Cucumber, Playwright and Cypress, and estimate code and edge case coverage.

This is typically difficult to do in Qualified, since you'd need a "meta test suite" to run and assert on the candidate's solution.

### Scoring Written Responses

Written answers, essays, and free text quizzes can be checked by a GPT. Here are some metrics that could be scored:

- Correctness and accuracy
- Grammar and syntax
- Writing skill
- Thoroughness
- Ensuring that specific topics were discussed

### Scoring Systems Design Responses

GPTs can validate candidate-generated systems architecture or API designs, both in free text and in ASCII diagram formats.

### Providing Hints

A GPT can provide brief hints, code reviews and interactive feedback, either live during a challenge or after the fact as part of automated review or hidden scoring.

### Validating Pull Requests

A GPT can validate pull requests and code reviews written by the candidate by integrating with the GitHub API.

### Visualizing Output

A GPT could be prompted to provide visualizers for candidate solutions. The visualizers can be shown on the code runner or web preview. The code they generate would need to be short, so supplementary pre-generated boilerplate in [D3](https://d3js.org/) or [Chart.js](https://www.chartjs.org/) could save precious time during a code run.
