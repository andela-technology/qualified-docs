---
order: 1
title: Detecting Cheating
---

# Detecting Cheating

This article describes tools and strategies for detecting potential cases that may occur.

:::important
The tools and techniques described in this article aren't intended to unambiguously identify the presence of cheating or prevent all cases from occurring.

Our goal is to help your team reduce occurrences of cheating and make it easier to identify possible cases rather than make definitive determinations on your behalf.
:::

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

## Code Playback
Qualified provides the ability to play back an entire coding session. You can see the developer's key strokes and actions in real-time, or speed it up to get a quick glance of how the solution came to be.

This feature can be used not only to get a view into how the developer thinks, but also to identify cheating. The playback timeline will indicate any major code paste events, making it easy to identify suspicious actions that might influence a cheating determination. Our system will only flag code pasted from a source external to our site, ignoring paste events that were caused by normal solution development.

Be aware that cheaters might type in the plagiarized solution rather than pasting from the clipboard. Frequent tab switches and a rigid and unnatural coding style may suggest a potential hand-keyed plagiarism case. We recommend [written or verbal follow-up questions](#use-written-or-verbal-reflections) if you suspect this to be the case after viewing playback.

