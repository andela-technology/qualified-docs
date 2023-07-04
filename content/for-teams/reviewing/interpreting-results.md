---
title: Interpreting Assessment Results
description: "How to Interpret Your Candidate's Completed Assessments"
order: 1
tags:
  - getting started
  - tips
  - assessments
  - results
  - reviewing
---

# Interpreting Assessment Results

Let's look at some specific steps you can take when reviewing and interpreting the results of a developer assessment. We’ll provide details on how you can look from a top-down perspective to funnel in on the best candidates, without spending too much time on poor candidates.

We’ll look at:

- Overall assessment results across multiple candidates
- The challenge summary
- And how to dig down into a specific challenge to learn more about your candidate’s coding habits.

## Comparing Across Candidates

Within Qualified, we provide a very high-level overview of your candidates in the form of the Assessment score. This score is calculated off the tests for each challenge within the assessment, and should mostly be used as a quick filter, and in some cases, as a relative comparison between candidates.

### Eliminating Very Poor Performers

- Most challenges are **100% solvable** by highly skilled candidates
- Candidates are allowed to submit their code as many times as they want, and don’t have a time limit by default. The tests are also “open book”, so they should know how to look for help on complex challenges.
- This means they should take the time to make sure they complete every challenge. It’s better to have spent more time and gotten the solution right, than less time and given up.
- For lower seniority positions, you may still find great candidates who didn’t get 100%
- If you see that several candidates have passed with 80–100%, while a few are getting below 50%, you can quickly eliminate those poor performers
- You may also find candidates who simply refuse to take the test — saving you some trouble very quickly
- Before eliminating poor performers, it’s always recommended that you click on the candidate’s name, and see if they left any comments on their assessment
- If they still seem like a poor fit, click on **REJECT** at the top to remove them from your inbox
- If you find that a candidate submitted too early, or maybe would like to try again, you can use the Reopen Assessment for Candidate link in the assessment summary

## Digging into the Assessment Results

Once you have eliminated the lowest performers, you can start to analyze the results of each candidate to look for stand out skills.

### Candidate Feedback

Every candidate is given the opportunity to provide feedback at the end of an assessment. This can provide insight into their experience with the test.

### Assessment Summary

Besides the score, one important detail included in the assessment summary is the overall time taken. This number can help guide your expectations for the challenge solutions.

If a candidate took a long time, but didn’t solve every challenge — or solved them poorly — you should look into that further, and maybe discuss with them what happened.

### Challenge Summary

The assessment results includes a quick overview of each challenge. You should look out for:

- **Incomplete challenges**
- **Taking a long time** to come up with a solution. The built-in assessments provided by Qualified are designed to build up the complexity, so usually you should see earlier challenges taking less time to solve than later ones
- **Exceptionally slow code**, especially for challenges that don’t require complex algorithms

### Challenge Details

At this point, you can be confident that it’s worth looking through the code solutions.

### Solution Code

Look over the final solution for the following:

- Does the solution appear to be actually **solving the challenge**, or simply working around the tests?
- If they did work around the tests, is the shortcut a valid one? Or are they simply making sure the code passes? This should stand out clearly, as low-effort solutions often just step through the inputs and return the expected output. This should be a major red flag.
- Look at the **general code quality** of the solution:
  - Good method and variable naming
  - Adherence to the coding standards for the given language: This doesn’t mean that they need to follow your team’s standards, but that they matched general conventions.
  - Consistent code style: Even if they didn’t match a specific style, if they were consistent across the entire solution, that’s a big plus.
  - Does the solution look **maintainable**? Look for:
  - Clear logic, no weird hacks
  - Using existing library functionality
  - Useful comments
  - Function and class documentation
- Did the developer go **above-and-beyond** the expectations? Bonus points for:
  - Covering edge cases
  - Validating input
  - Reporting helpful errors

:::tip Subjective vs Objective Scoring
For light weight processes, you may want to simply rollup your thoughts into a single subjective
score, using a solution review's rating. The general rubric above will work fine.

For processes where you care about tracking performance against competencies, or simply want to ensure a consistent review process, utilizing challenge specific rubrics will be a better fit.  
:::

### Output

You should open up the **Solution Details** to see more details, including the run output, where you can look for:

- Did they leave in any debugging code?
- A good solution should clean up any console logging or other debugging code.

### Example Test Cases

Qualified provides example test cases on most of our challenges. These can be used by the candidate to run their code before running it against the full test suite.

- Did they edit the example tests?
- If they edited the tests, this could be a positive sign that they are comfortable working within a test-driven environment.

### Code Playback

Our advanced code playback makes it possible to look into the programming style and thought process of your candidate.

:::tip Quick Usage Summary
You can simply use the play button to run the code, or you can click the bar at any point to see the code at that point. You can also check Key Events Only to focus on major events (ignoring most keystrokes).
:::

The code playback can give you further insight in the following ways:

- How did they **arrive at the solution**?
- Did they seem to have an idea early on?
- Did they have to start over?
- Was there a general plan to coming to the solution?
- Were there **any questionable copy-and-pastes**? (use Key events to find them)
  - These can highlight solutions that were created with AI assistance, found online, or legitimate but written with an external editor.
- Did they **run the example tests**?
  - They will show up in the code playback bar as a small circle with a “play” triangle inside it.
- Did they refactor, or **clean up the code** at the end? As they worked?

## Solution Review Examples

These are contrived just to highlight some common issues.

### Fantastic Solution

<!-- prettier-ignore -->
```javascript
var solution = {  
    /**
     * Squares the input number.
     * @param {number} num The number to square
     * @returns num squared
     */
    square: function(num) {
        validateNumber(num);
        return Math.pow(num, 2);
    },
    /**
     * Cubes the input number.
     * @param {number} num The number to cube
     * @returns num cubed
     */
    cube: function(num) {
        validateNumber(num);
        return Math.pow(num, 3);
    }
};
/**
 * Ensures the input value is a number
 * @param {number} num The number to check
 */
function validateNumber(num) {  
    if(typeof num !== 'number') {
        throw new Error('Not a number: "' + number + '"');
    }
}
```

- Has documentation
- Consistent code style (braces, spacing, string style, etc.)
- Function naming is clear (validateNumber)
- No odd logic
- Uses built-in library

### Decent Solution

<!-- prettier-ignore -->
```javascript
var solution = {
    square: function(num) {
        return num * num;
    },
    cube: function(num) {
        return Math.pow(num, 3);
    }
};
```

- Logically sound
- Covers all the requirements
- Clear naming
- Consistent code style

### Poor Solution

<!-- prettier-ignore -->
```javascript
solution = {  
"square": function(n) { return n * n },
cube: function(myNumber) {  
  console.log(myNumber)
        return myNumber * myNumber * myNumber
  }
};
```

Technically valid, but…

- Hard to read
- Inconsistent formatting
- Inconsistent naming
- Left in debugging code

### No Effort Solution

<!-- prettier-ignore -->
```javascript
var solution = {  
    square: function(num) {
        if(num === 1) return 1;
        if(num === 2) return 4;
        if(num === 3) return 9;
        if(num === 4) return 16;
    },
    cube: function(num) {
        if(num === 1) return 1;
        if(num === 2) return 8;
        if(num === 3) return 27;
        if(num === 4) return 64;
    }
};
```

- Passes tests, but only by detecting the input and returning the expected output
- Many built-in Qualified challenges won’t allow this, because we include randomized tests
