---
title: Cheating Mitigation
order: 4
---

# Cheating Mitigation

Addressing cheating starts with planning, both when creating new content and when using existing content.

We suggest starting by defining "cheating" as it applies to your unique case. What may be cheating in certain contexts may be permissible in others.

Some forms of cheating such as impersonation or live human assistance are universally apparent, but other potential cheating risks may not be so clear-cut. For example, powerful tools such as large language models like [ChatGPT](https://en.wikipedia.org/wiki/ChatGPT) and [Copilot](https://en.wikipedia.org/wiki/GitHub_Copilot) are part of normal developer workflows and may be allowed in some assessments.

:::info
There is no silver bullet when it comes to cheating. You'll likely need a combination of approaches at every stage of the assessment process to deal with cheating effectively.

The strategies presented in this guide aren't intended to catch all occurrences of cheating and may not be useful for your specific case. Applying a subset of these strategies that makes sense for your needs can help make your results more trustworthy and reduce cheating to a manageable level.
:::

## Types of Cheating

Cheating can involve:

- Using hardcoded tables to look up solutions per test case instead of solving the problem as intended
- Copying solution code from an external source
- Accessing information or utilizing techniques or tools prohibited by the instructions, including external resources or AI assistance (ChatGPT, GitHub Copilot)
- Gaining privileged knowledge of the questions to be asked before taking an assessment
- Using unauthorized human help while taking a challenge
- Outsourcing the assessment to a third party to impersonate a candidate for the technical interview
- Reverse-engineering the challenge in a manner that isn't in the spirit of the Task.

Some of these forms may not apply to your case.

## Mitigation Strategies

### Anticipate LLM Usage

We suggest two general approaches for preparing for candidates using large language models (LLMs) and other forms of AI coding assistance to write solutions:

1. Explicitly allow (or even encourage) LLMs and offer more difficult challenges and quizzes that candidates likely can't solve completely with AI assistance. After all, AI is part of a normal development workflow now.

  Candidates may presume AI assistance is allowed if not informed otherwise. Other candidates may abstain from using it if it's not explicitly allowed, creating an uneven playing field.
2. Explicitly disallow AI assistance with an [agreement quiz](https://www.qualified.io/hire/challenges/6430a737ab85b2001310d550/) explaining that you'd like to test baseline development skills without AI. Use our [cheating detection](/for-teams/reviewing/detecting-cheating/) flags and optionally hand-check passing submissions to reject candidates who don't abide by the prohibition.

Regardless of which approach you follow, quizzes with short per-question time limits are a useful tool to force candidates to use their own knowledge. Additionally, coding challenges with limited submissions require candidates to check and trust their code to a greater extent, making AI assistance risky to rely on indiscriminately given its tendency to [hallucinate](https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)) and produce incorrect answers.

Keeping an eye on incoming submissions helps identify patterns of AI usage. If a challenge is consistently defeated without effort and isn't helping you measure your candidates' skills, rotate it out. LLMs are evolving quickly, so prepare to adapt your assessments accordingly.


### Prevent Hardcoded Solutions

A cheating technique involves using a lookup table to provide hardcoded responses to each test input, thereby circumventing writing an algorithm as intended.

#### Randomized Tests

You can use randomized test cases to prevent this strategy from achieving a passing score on a submission.

Many of our challenges in our library already contain randomized tests. Note that within high-stakes situations such as job selection, candidates very rarely (< 1%) cheat in a way that randomized testing is necessary. However, in cases of education with large classrooms or other situations where you anticipate cheating to be a significant issue, randomized testing may be something you want to consider.

:::warning
Random tests can be misused and become harmful to the challenge. These tests are best as a supplement to well-labeled, deterministic unit tests which should be primarily used to validate your specification.

We encourage using the most minimal random test(s) necessary to prevent hardcoded solutions.
:::

:::caution
Random tests require a reference solution to be in the submission tests. You can delete the submission test and preloaded files to prevent them from being viewed programmatically by submitted code.

Use caution with protected access tokens and other sensitive information in these files.
:::

#### Hidden Tests

In addition, you can select challenges with hidden test suites that push the code in deterministic but unexpected ways that are beyond the tests visible to the candidate. If the candidate has used a lookup table based on the visible tests, it's extremely difficult for the candidate to anticipate entries for unknown submission tests and their score will suffer.

:::info
Hidden tests are a useful tool in the project code challenge format because workspace files have robust permission settings.

On the other hand, hidden tests are deprecated in the classic code challenge format. We recommend random tests here instead.
:::

### Select Creative Challenges

Certain styles of challenges naturally discourage cheating by design. Unusual, novel, open-ended challenges that require candidates to make design decisions tend to promote distinct, harder-to-copy solutions. Plagiarized solutions to such challenges are typically obvious.

In contrast, it tends to be easier (and therefore more tempting) for candidates to look up solutions to well-known algorithm challenges. Submissions for such challenges often vary less between candidates. Novel approaches or designs tend to appear less frequently for these classical algorithm or well-known single-function utility-style challenges. These factors can frustrate cheating prevention and detection efforts.

### Add Novelty to Existing Challenges

If you wish to use a well-known challenge, try spicing it up with a novel twist or follow-up requirement that helps thwart would-be cheaters.

As a simple example, adding a third string to a ["Fizz Buzz"](https://en.wikipedia.org/wiki/Fizz_buzz#Programming) problem and/or using different, less easily-searchable words than "Fizz Buzz" can reduce the likelihood of cheating while improving the challenge's effectiveness.

### Encourage External Resources

If you're confident that your challenge is designed to be robust to cheating using the other suggestions in this guide, you can invite your candidates to consult documentation and perform web searches (with the caveat that you still prohibit fully plagiarized solutions).

Allowing access to resources increases candidate satisfaction, boosts the realism of challenges (programmers always have access to docs and sites like Stack Overflow in the real world), and can provide incentive for candidates to work with the challenge, not around it.

With proper design of an assessment that allows external resources, candidates who attempt to learn everything on the spot will inevitably score lower than those with prior knowledge. Relying on artificial and difficult-to-enforce prohibitions may have the opposite effect, making it harder to distinguish truly knowledgeable candidates who respected an external resource prohibition and cheaters who dishonorably accessed prohibited external resources. You can design question difficulty and set time limits bearing in mind how easy it might be to find a solution through external resources.

:::tip
The more explicit you are about what's allowed and what isn't will give candidates clear-cut boundaries, making honor infractions less likely to occur and easier to detect when they do occur. If you disallow some or all external resources, stating that up front is safer than assuming it to be understood by default.
:::

### Use Time Limits

Time constraints can be used to help prevent the candidate from typing and running code snippets they're expected to mentally evaluate or performing extensive research of a concept.

Be wary of unnecessarily strict time limits, as this can have a detrimental effect on results and unfairly penalize slower readers and those with language barriers.

### Use Written or Verbal Reflections

Many of Qualified's pre-built challenges request candidates to submit a brief written response to accompany a code solution. Written responses offer important insight into candidate communication skills while also acting as a deterrent to cheating. A candidate unable to explain their code probably didn't author it!

Nowadays, written reflections are less useful since LLMs can author them. On the other hand, LLM writing styles tend to be fairly easy to identify.

Follow-up questions about the candidate's code during a live interview are a great way to get a sense of attribution as well. For example, you can ask the candidate to explain why they chose the approach to a coding problem that they did.

If you don't have the resources to follow up with everyone, you can clearly indicate to your candidates that they _may_ be selected to explain their solution. This may be enough to discourage some would-be cheaters.

### Use Live Interact Sessions

For the most important assessments, consider a live one-on-one session conducted on a video call with the candidate. Live [pair coding sessions](/for-teams/process/interact) simultaneously decrease the likelihood of attempted plagiarism and cheating while increasing the likelihood of catching cheating should it occur.

### Rotate Content Frequently

Rotating various aspects of assessments frequently can help combat cheating. You might consider rotating:
- entire challenges
- hardcoded magic values (cheat detection "canaries")
- test case data
- easily-searchable challenge keywords and plot

Consider replacing challenges that have worn out their usefulness or that appear to correspond to high occurrences of cheating.

You can apply the [Pareto principle](https://en.wikipedia.org/wiki/Pareto_principle) to these rotations: a good deal of cheating can be prevented with a bit of planning and effort; there are diminishing returns to spending excessive time on rotation. Higher-stakes, difficult challenges might be deserving of more attention than easy pre-screen challenges.

### Playtest Your Content

Just like a regular application, manually testing your challenges on a regular basis (in other words, "eating your own dog food") and examining results critically will help you locate exploitable flaws in the challenge.

### Use Honor Agreement Quizzes

[Studies](https://arxiv.org/pdf/1812.00276.pdf) show that offering honor agreements before tests reduces cheating rates significantly. You can use our quiz feature to create your own honor agreement where candidates testify to abide by the rules you set forth. Offer this brief quiz at the start of your assessments and explicitly state which resources are allowed and which aren't.

It's natural for candidates to share interview questions and solutions online asking for tips, postmortems, reviews and help. If your goal is to keep content secure, an agreement can prohibit sharing questions and solutions as well as accessing them.

