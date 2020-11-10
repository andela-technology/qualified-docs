---
title: "Challenge: Carry Forward Solutions"
summary: "Details about how to write a challenge that will candidates to pull and modify a previous solution to another challenge."
bodyClass: 'employer-focused'
---

# Overview

Carry Forward Solutions allow you to inject a candidate's previous solution into their next challenge so their initial code is what they ended the previous challenge with. These kinds of assessments are especially good at

## Good Use Cases for Carry Forward Solutions

- Testing a candidates ability to write flexible code that can adhere to a changing specification.
- Breaking up what would otherwise be one long challenge with in-depth specification. Allowing the candidate to focus on a couple tasks at a time make lengthy challenges more manageable.
- Building an assessment of similar, carried forward challenges with Q&A questions in between. Perhaps asking them to explain how their code might evolve and then testing that out with new specifications.

## How to Use

#### 1. Create the initial Challenge

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

 We use this feature in several of our current framework-based assessment templates and we plan to continue to use it in more creative ways in the future. If you have further questions, feedback or great ideas feel free to reach out to us and discuss!
