---
order: 6
title: Cut Scores
---

# Cut Scores
When developing challenges and assessments, we recommend using a criterion-referenced process. This means selecting and creating content that tests a candidate's ability to perform as expected on a job-related task. Cut scores allow you to specify the minimum threshold that a candidate must achieve before they are considered to be able to perform the task at an acceptable level. 

## System Scored: Code Signals
Most coding challenges within Qualified's library are designed so that 100% of the unit tests must be correct in order to pass the challenge. However, it is possible to configure challenges to permit passing with a lower score. For example, a challenge might present a large number of bugs to fix with an idea that candidates are only expected to resolve a certain percentage within a given time span. These tests can help detect outstanding candidates without ruling average performers out entirely. Cut scores broaden the style of challenges that can be offered.

## System Scored: Answers Signals

For Q&A challenges it is expected to set an answer correctness score that is lower than 100%. This is due to Q&A challenges being knowledge based and not task completion based. Unless the question set is incredibly easy, you wouldn't expect everyone to pass without getting a single question wrong. When developing Q&A challenges you want to have at least a few subject matter experts take the challenge, so that you can get an understanding for what an average score would be, and then base your cut score around that.   

## Reviewer Scored Signals
In addition to being able to set cut scores for correctness of a challenge, you can also set cut scores for reviewer scored items, either collectively or individually. This value is often set lower by default (usually around 50% for Qualified library challenges), but should be raised higher if your team has stricter standards.

![Typical coding challenge cut score configuration, with 100% test cases required and 50% reviewer score card (overall)](/images/creating-content/evidence-cut-scores.png)

:::note
The scale used is always `0 - 100`, even though reviewer scorecards are often presented within the UI as `0 - 10`. For this view we opted to have a single scale across all items. Scorecards are on a 5 point rating scale, so assuming only one reviewer, the only score possibilities for a single reviewer scored signal is `0`, `25`, `50`, `75`, `100`. 
:::

## How cut scores affect data

If a single cut score is not met for any challenge solution, both the solution and the assessment result will be considered failed. When an assessment result is failed, it will be noted within the candidate's report card. 

The candidate's Qualified Score will also display in a red color, to indicate at least one failure.

![Pass/fail Qualified Score examples](/images/creating-content/qualified-score-pass-fail.png)

:::info Keep in mind
Notice how in the above example the scores are very similar, but one failed and one did not. It could even be possible for a passing score to be lower than a failing score. This is due to the criterion-referenced nature and how cut scores can be applied in multiple places. Someone may score well but fall short on a specific cut score. Keep this in mind when determining cut scores. You want them to target minimal expectations only, and let the Qualified Score do the work of identifying best performers.    
:::

:::important Limited Beta
Cut scores are part of the Evidence Engine, which is a beta feature that may not be enabled on your account. If you are interested in learning more, please reach out to our sales team.
:::
