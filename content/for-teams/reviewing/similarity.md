---
order: 1
title: Preventing and Detecting Cheating
---

# Preventing and Detecting Cheating

This article describes tools and strategies for reducing occurrences of cheating and plagiarism and detecting potential cases that may occur.

:::important
The tools and techniques described in this article aren't intended to unambiguously identify the presence of cheating or prevent all cases from occurring.

Our goal is to help your team reduce occurrences of cheating and make it easier to identify possible cases rather than make definitive determinations on your behalf.
:::

## Types of Cheating
Types of cheating can involve:

- using hardcoded tables to look up solutions per test case instead of solving the problem as intended
- copying solution code from an external source
- accessing information or utilizing techniques prohibited by the instructions
- gaining privileged knowledge of the questions to be asked before taking an assessment
- using unauthorized help from a third party while taking a challenge
- outsourcing the assessment to a third party to impersonate a candidate for the technical interview.

## Code Similarity

**Code Similarity** is a feature of the Qualified platform that will compare the structure of code content to other solutions in the system. With this feature, newly submitted solutions are compared to existing solutions in the system to determine if any are similar. This comparison reports a similarity score, along with other data that can be used to inform your plagiarism detection process.

Solutions which are considered by the platform to be too similar to others will be flagged as a plagiarism risk.

:::important Premium Feature
**Code Similarity** is a premium feature. If it is not available on your subscription, please reach out to your customer success manager to discuss your options. 
:::  

### What data is tracked?
Let's quickly go over the data that is made available by the **Code Similarity** feature. 

#### Similarity Score
The similarity score is used to find solutions that are similar in approach and for identifying possibly plagiarized solutions. Our implementation is designed to scale to millions of compared solutions. It is not fooled by formatting, naming differences, or by order of operations.

A score of 100 indicates that the code is exactly the same (even though the characters within the different sets of code may actually be different). We consider solutions to be similar to others with any score above 80%. Similarity scores below that value are not actively tracked.

#### Mass Score
The mass score is used to quantify the amount of program work characterizing a candidate's solution code. This score takes into account the components of code such as operators, functions and regular expressions and calculates a form of complexity that we believe to be more useful than simply using lines of code (LoC). 

#### Risk Detection
While there are other use cases for code similarity, such as surfacing similar but not exact solutions when comparing candidate's code to others, the main application of this feature is to detect possible plagiarized solutions. There is no way for Qualified to automatically say for sure that a solution is plagiarized. The system only determines that code is similar; it doesn't know why the code is similar.

However, our system will take certain factors such as complexity into account to determine a range in which similar code starts to be considered a risk of being plagiarized. Our system will identity solutions as either "low", "medium" or "high" risk. Using this information, your team can make a final determination of the presence or absence of plagiarism.

If a candidate is identified as having any level of plagiarism risk, Qualified will set the candidate into the "Plagiarism Risk" state, which is easily viewable from the candidates sidebar. Once you review the candidate, they will be moved to the reviewed state. If you do not actively review candidate solutions as part of your workflow, you may still want to manually review any candidates who are in this state to ensure that their score should not be discarded.

### Where are similar solutions sourced from?
When comparing a candidate's solution, Qualified uses a few solution pools as its source for finding possible matches. 

- **Your own candidate solutions:** Any previous solutions submitted by other candidates on your team. 
- **Solutions from other teams:** If you are using a challenge taken from our shared library, then we also pull in solutions from all candidates who took that challenge, regardless if they are on your team or not. The solutions are anonymized so you won't know where they came from.

Qualified does not source solutions from the web. The nature of our code similarity tool makes this unnecessary. Sourcing solutions from the web is prone to false positives and negatives due to the unstructured nature of online sources. Once a candidate submits a solution found online, our system will know about it and all other candidates for that challenge will be compared to it. If you are using one of Qualified's library challenges, odds are, any solution that may have been shared online is already available within our system to be compared to, and the system will flag that candidate.

### Comparing Similar Solutions
Code Similarity combined with our Compare Solutions feature enables you to easily view similar code challenge solutions side-by-side within our solution details screen. This allows you to review similar solutions for the purposes of cheating detection while simultaneously offering insight into the clusterings of approaches candidates typically take when solving a challenge.

To compare solutions, open up your solution details screen and activate the "Compare" tab. If you have Code Similarity enabled on your subscription, "Similar" will be the default active set of solutions you are comparing against if there are similar solutions to be compared.

:::important Project Code Challenge Solutions Limitation
The current solution details interface does not support comparing similar project code solutions with each other. This is due to the complexity of having multiple files, which don't fit well within the existing UI paradigm. 

We have built a streamlined solution review dialog that does support comparing project code solutions. This dialog is currently in beta. If reviewing these types of solutions is important to your process, please reach out to your customer success manager to discuss having this dialog activated on your account.   
:::

### Which solutions are compared?
Only after an assessment result is submitted will the containing solutions be processed for similarity. Of these submitted solutions, only those which achieve at least a correctness score of 80% or more will be considered.

## Other Techniques 
Beyond the code similarity feature, there are many other techniques that you can use to combat plagiarism.

### Code Playback
Qualified provides the ability to play back an entire coding session. You can see the developer's key strokes and actions in real-time, or speed it up to get a quick glance of how the solution came to be.

This feature can be used not only to get a view into how the developer thinks, but also to identify cheating. The playback timeline will indicate any major code paste events, making it easy to identify suspicious actions that might influence a plagiarism determination. Our system will only flag code pasted from a source external to our site, ignoring paste events that were caused by normal solution development.

Be aware that cheaters might type in the plagiarized solution rather than pasting from the clipboard. Frequent tab switches and a rigid and unnatural coding style may suggest a potential hand-keyed plagiarism case. We recommend [written or verbal follow-up questions](#use-written-or-verbal-reflections) if you suspect this to be the case after viewing playback.

### Randomized Tests
A cheating technique involves using a lookup table to provide hardcoded responses to each test input, thereby circumventing writing an algorithm as intended.

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

### Hidden Tests
In addition, you can select challenges with hidden test suites that push the code in deterministic but unexpected ways that are beyond the tests visible to the candidate. If the candidate has used a lookup table based on the visible tests, it's extremely difficult for the candidate to anticipate entries for unknown submission tests and their score will suffer.

:::info
Hidden tests are a useful tool in the project code challenge format because workspace files have robust permission settings.

On the other hand, hidden tests are deprecated in the classic code challenge format. We recommend random tests here instead.
:::

### Select Creative Challenges
Certain styles of challenges naturally discourage cheating by design. Unusual, novel, open-ended challenges that require candidates to make design decisions tend to promote distinct, harder-to-copy solutions. Plagiarized solutions to such challenges are typically obvious.

In contrast, it tends to be easier (and therefore more tempting) for candidates to look up solutions to well-known algorithm challenges. Submissions for such challenges often vary less between candidates. Novel approaches or designs tend to appear less frequently for these classical algorithm or well-known single-function utility-style challenges. These factors can frustrate cheating prevention and detection efforts.

### Add novelty to existing challenges
If you wish to use a well-known challenge, try spicing it up with a novel twist or follow-up requirement that helps thwart would-be cheaters.

As a simple example, adding a third string to a ["Fizz Buzz"](https://en.wikipedia.org/wiki/Fizz_buzz#Programming) problem and/or using different, less easily-searchable words than "Fizz Buzz" can reduce the likelihood of cheating while improving the challenge's effectiveness.

### Encourage External Resources
If you're confident that your challenge is designed to be robust to cheating using the other suggestions in this guide, you can invite your candidates to consult documentation and perform web searches (with the caveat that you still prohibit fully plagiarized solutions).

Allowing access to resources increases candidate satisfaction, boosts the realism of challenges (coders always have access to docs and sites like Stack Overflow in the real world), and can provide incentive for candidates to work with the challenge, not around it.

With proper design of an assessment that allows external resources, candidates who attempt to learn everything on the spot will inevitably score lower than those with prior knowledge. Relying on artificial and difficult-to-enforce prohibitions may have the opposite effect, making it harder to distinguish truly knowledgeable candidates who respected an external resource prohibition and cheaters who dishonorably accessed prohibited external resources. You can design question difficulty and set time limits bearing in mind how easy it might be to find a solution through external resources.

:::tip
The more explicit you are about what's allowed and what isn't will give candidates clear-cut boundaries, making honor infractions less likely to occur and easier to detect when they do occur. If you disallow some or all external resources, stating that up front is safer than assuming it to be understood by default.
:::

### Use Time Limits
Time constraints can be used to help prevent the candidate from typing and running code snippets they're expected to mentally evaluate or performing extensive research of a concept.

Be wary of unnecessarily strict time limits, as this can have a detrimental effect on results and unfairly penalize slower readers and those with language barriers.

### Use Written or Verbal Reflections
Many of Qualified's pre-built challenges request candidates to submit a brief written response to accompany a code solution. Written responses offer important insight into candidate communication skills while also acting as a deterrent to cheating. A candidate unable to explain their code probably didn't author it!

Follow-up questions about the candidate's code during a live interview are a great way to get a sense of attribution as well. For example, you can ask the candidate to explain why they chose the approach to a coding problem that they did.

### Use Live Interact Sessions
For the most important assessments, consider a live one-on-one session conducted on a video call with the candidate. Live [pair coding sessions](/for-teams/process/interact) simultaneously decrease the likelihood of attempted plagiarism and cheating while increasing the likelihood of catching cheating should it occur.

### Rotate Content Frequently
Rotating various aspects of assessments frequently can help combat cheating. You might consider rotating:
- entire challenges
- hardcoded magic values (cheat detection "canaries")
- test case data
- easily-searchable challenge keywords and plot

Consider replacing challenges that have worn out their usefulness or that appear to correspond to high occurrences of cheating.

You can apply the [Pareto principle](https://en.wikipedia.org/wiki/Pareto_principle) to these rotations: most cheating can be prevented with a little bit of planning and effort; there are diminishing returns to spending excessive time on rotation. Higher-stakes, difficult challenges might be deserving of more attention than easy pre-screen challenges.

### Playtest Your Content
Just like a regular application, manually testing your challenges on a regular basis (in other words, "eating your own dog food") and examining results critically will help you locate exploitable flaws in the challenge.

### Use Honor Agreement Quizzes
[It's been shown](https://arxiv.org/pdf/1812.00276.pdf) that offering honor agreements before tests reduces cheating rates significantly. You can use our quiz feature to create your own honor agreement where candidates testify to abide by the rules you set forth. Offer this brief quiz at the start of your assessments.

It's natural for candidates to share interview questions and solutions online asking for tips, postmortems, reviews and help. If your goal is to keep content secure, an agreement can prohibit sharing questions and solutions as well as accessing them.

