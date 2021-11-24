---
title: Frequently Asked Questions
---

# Qualified Library FAQ
Qualified provides a standard challenge library which you can use to assembly assessments without having to write your own challenges. In this article we will try to cover some of the more frequently asked questions about these challenges.

## Non-zero default correctness scores
> *On some coding challenges in the library, when I submit the default code without changing anything, I get a correctness score greater than 0%. Why?*

To answer this question, let's quickly discuss the difference between traditional testing and performance based coding challenges.

Coding challenges are performance based tests, which are different than the types of tests you may be the most familiar with. With traditional testing, multiple choice and written response answers are typically how items are scored. In these testing scenarios, it is not at all difficult to complete the test. You could simply run through and pick multiple choice answers at random and write some filler text to 100% "complete" them. However the score will reflect how well you did on your completion of them. The difficulty is in getting the items correct, not completing the test.

With performance based coding challenges the completion of the task itself is the difficult part. Therefore the correctness score is directly related to how much of the task has been completed. In some cases, the task may not be starting from a completely clean slate, but already has some level of completion to it. This is why for some challenges, if you did nothing other than run the default code, you would get a correctness score higher than 0%. 

The main reason that some tasks may be partially completed is that some level of an established baseline might have been needed, as it could be possible that the candidate actually breaks functionality that was initially working. A common scenario where this comes up often is when a candidate is being asked to amend existing code with additional functionality. Ensuring the candidate completes the new functionality while keeping the existing functionality in place is required, which means unit tests are needed to ensure existing functionality isn't regressed.  

:::important Key Points 
When trying to reason why some tests might have non-zero scores simply by submitting them without changing anything, here are a few key points to keep in mind. 
 
- Performance based testing involves a different scoring paradigm than the multiple choice tests that you may be used to.
- Even in traditional multiple choice testing, selecting choices completely at random will still likely result in a non-zero score.
- It is possible for a candidate to regress the state of the code so badly that their correctness score is actually worse than that if they had simply changed nothing.
:::  


