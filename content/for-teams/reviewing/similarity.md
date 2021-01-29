---
order: 1
title: Detecting Potentially Plagiarized Solutions
---

# Detecting Potentially Plagiarized Solutions

**Code Similarity** is a feature of the Qualified platform that will compare the structure of code content to other solutions in the system. With this feature, newly submitted solutions are compared to existing solutions in the system to determine if any are similar. This comparison reports back a similarity score, as well as some other data that can be used to inform your process.

Solutions which are considered by the platform to be too similar to others will be flagged as a plagiarism risk.

:::important Premium Feature
**Code Similarity** is a premium feature. If it is not available on your subscription, please reach out to your customer success manager to discuss your options. 
:::  

## What data is tracked?
Let's quickly go over the data that is made available by the **Code Similarity** feature. 

### Similarity Score
The similarity score is used to find solutions that are similar in approach, and also for identifying possibly plagiarized solutions. Our implementation is designed to scale to millions of compared solutions. It is not fooled by formatting, naming differences, or by order of operations.

A score of 100 indicates that the code is exactly the same (even though the characters within the different sets of code may actually be different). We consider solutions to be similar to others with any score above 80%, similarity scores below that value are not actively tracked.

### Mass Score
The mass score is used to determine how "much stuff" is going on within a candidate's solution. This score takes into account things like operators, functions, regular expressions, etc and calculates a form of complexity that we believe to be more useful than simply using lines of code (LoC). 

### Risk Detection
While there are other use cases for code similarity, such as simply surfacing similar but not exact solutions when comparing candidate's code to others, the main application of this feature is to detect possible plagiarized solutions. There is no way for Qualified to automatically say for sure that a solution is plagiarized, since the system only determines that code is similar, it doesn't know why the code is similar. However our system will take certain factors into account, such as complexity, to determine a range in which code being similar starts to be considered a risk of being plagiarized. Our system will identity solutions that may be at risk as either "low", "medium" or "high" risk. From there your team can decide if you believe the solutions to in fact be plagiarized. 

If a candidate is identified as having any level of plagiarism risk, Qualified will set the candidate into the "Plagiarism Risk" state, which is easily viewable from the candidates sidebar. Once you review the candidate, they will be moved to the reviewed state. If you do not actively review candidate solutions as part of your workflow, you may still want to manually review any candidates who are in this state, to ensure that their score should not be discarded.

## Where are similar solutions sourced from?
When comparing a candidate's solution, Qualified uses a few solution pools as its source for finding possible matches. 

- **Your own candidate solutions:** Any previous solutions submitted by other candidates on your team. 
- **Solutions from other teams:** If you are using a challenge taken from our shared library, then we also pull in solutions from all candidates who took that challenge, regardless if they are on your team or not. The solutions are anonymized, so you won't actually know where they came from.
Qualified does not source solutions from the web, as this isn't really necessary and is highly prone to false positives and false negatives, due to the unstructured nature of online sources. Once a candidate submits a solution found online, our system will know about it and all other candidates for that challenge will be compared to it. If you are using one of Qualified's library challenges, then the chances are any solution that may have been shared online is already available within our system to be compared to, and the system will flag that candidate.

## Comparing Similar Solutions
When combined with our compare solutions feature, you can easily view similar code challenge solutions side-by-side within our solution details screen. This allows you to review other similar solutions, not just for cheat detection purposes, but also for getting a sense for what other types of closely similar solutions are being submitted in general.

To compare solutions, open up your solution details screen and activate the "Compare" tab. If you have Code Similarity enabled on your subscription, "Similar" will be the default active set of solutions you are comparing against, if there are similar solutions to be compared.

:::important Project Code Challenge Solutions Limitation
The current solution details interface does not support comparing similar project based solutions with each other. This is due to the complexity of having multiple files, which don't fit well within the existing UI paradigm. 

We have built a streamlined solution review dialog that does support comparing project based solutions. This dialog is currently in beta. If reviewing these types of solutions is important to your process, please reach out to your customer success manager to discuss having this dialog activated on your account.   
:::

## Which solutions are compared?
Only after an assessment result is submitted will the containing solutions be processed for similarity. Of these submitted solutions, only those which achieve at least a correctness score of 80% or more will be considered.

## Other Techniques 
Beyond the code similarity feature, there are some other techniques that you can use to combat plagiarism.

### Code Playback
Qualified provides the ability to playback an entire coding session. You can see the developer's key strokes in real-time, or speed it up to get a quick glance of how the solution came to be. 

We recommend using this feature not only to get a view into how the developer thinks, but also to identify any red flags. The playback timeline will indicate any major code paste events, making it even easier for you to identify important events that you should pay attention to. Check out what was pasted in and see if it makes sense. Our system will only flag code pasted from an external source, so you won't get a bunch of noisy paste events that were caused by normal solution development.

### Randomized Tests
This isn't a way to detect cheating, but to prevent it. Since the Qualified platform utilizes unit tests to test code, you can write randomized tests if you prefer. These randomized tests make it impossible for a candidate to hardcode their solution to pass specific test values. Many of our challenges in our library already contain randomized tests. However we should note, that within high-stakes situations such as job selection, candidates very rarely (< 1%) cheat in a way that randomized testing is necessary. However in cases of education with large classrooms, randomized testing may be something you want to consider.
