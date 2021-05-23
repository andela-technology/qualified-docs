---
title: "Challenge: Carry Forward Solutions"
summary: "Details about how to write a challenge that will candidates to pull and modify a previous solution to another challenge."
bodyClass: 'employer-focused'
---

# Overview

Carry-forward solutions allow you to inject a candidate's previous solution into the next challenge as part of an assessment. Challenges that use carried solutions are useful for testing more complex or evolving sets of requirements than would be in scope for a single challenge.

:::note
With the introduction of [Project Code Challenges](/reference/features/challenges/multi-file-code/#project-code-challenges) and [Embed](/integrations/custom-integrations/embed/#embedding-full-assessments), we no longer encourage using the carry-forward feature of classic code challenges in most cases.

Information on this page exists for historical purposes and for very specific use-cases not covered by PCC and Embed.
:::


## Good Use Cases for Carry Forward Solutions

- Testing a candidates ability to write flexible code that can adhere to a changing specification.
- Breaking up what would otherwise be one long challenge with in-depth specification. Allowing the candidate to focus on a couple tasks at a time make lengthy challenges more manageable.
- Building an assessment of related challenges with Q&A questions in between. This might involve prompting candidates to explain how their code might evolve and then testing that out with new specifications.

## How to Use

#### 1. Create the initial challenge

First create or designate a challenge that you wish to pull the solution forward from. You'll want this challenge to make use of the code from the previous challenge, but to also expand on it in some way.

#### 2. Pull it forward!

Create the next challenge that will make use of the previous challenge's solution. While building this challenge, click on "Reference Another Solution" to see a list of published challenges for you to choose from:

<figure>

![Reference Another Solution](/images/hire/reference-another-solution.png)

</figure>

Once you choose a challenge to import the solution from it will be automatically pulled into the candidate's solution setup. You can treat this import like code, as when the challenge is made ready for the candidate it will be a simple token replacement:

<figure>

![Import Solution](/images/hire/import-solution.png)

</figure>

**It's important not to modify the `@include` comment unless you know the ID of the challenge you want to pull from. Even then we'd encourage you to use the "Reference Another Solution" dropdown and simply remove the previous `@include` token.**

 ## What's next?

That's up to you to decide! You can make several challenges that link together to make up an assessment. You can make one challenges that pull from two distinct different challenges. It's all up to your imagination!

If you have further questions, feedback or great ideas feel free to reach out to us and discuss!
