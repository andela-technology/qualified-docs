---
order: 3
title: Scoring Fundamentals
---

# Scoring Fundamentals


Qualified is centered around the idea of assessing software developers using "work samples"—which is a style of test that focuses on specific tasks related to the role being assessed for. Coding challenges are the primary challenge type used for focusing on these work tasks. Q&A challenges are often used to expand on the work sample, or to supplement it by testing for specific knowledge. 

Since developers are being tested on their ability to complete certain types of task, scoring in Qualified takes a criterion-referenced approach.

## Criterion Referenced
Criterion referenced means that the candidate is being assessed on their ability to achieve a standard. That standard indicates a level of competency necessary to perform well within a job role. In the case of most challenges on the Qualified platform, the candidate is expected to be able to at least complete the task. This is why most challenges expect a candidate to achieve a 100% correctness score. 

This is an important concept to remember, because Qualified is primarily concerned with assuring candidates meet a certain standard, not for comparing performance of candidates to one another (which would be a norm-referenced scoring approach). This is not to say that candidates can't prove themselves to be more capable than others. This is where quantitative vs qualitative scoring comes in, and that leads us to autonomous vs human based scoring.    

## Autonomous Scoring
Each challenge type on Qualified platform has a method for being automatically scored. Scoring is calculated as the candidate progresses through the challenge and on final submission. A single percentage score is shown next to each assessment, this score represents the correctness score.  

### Correctness Score
The score you see next to a candidate, and on each assessment result, is based off of the combined average correctness score of all challenges within the assessment. 

For example, if there are 3 challenges on an assessment, with scores of 100%, 50% and 100%, the assessment score will be (100 + 50 + 100) / 300 = 83%. Every challenge on the assessment is weighted the same when it comes to determining the assessment correctness score.  

So how are challenges scored for correctness?

#### Code Based Challenges
Classic Code Challenges & Project Code Challenges are scored based off of the submission unit tests. Each unit test counts as an equal weight to the overall score. So if there are 10 unit tests, and 8 are passed by the candidate, the score will be 80%. In other words, by default the score for Code Challenges are a reflection of number of unit tests passed. The score is never more than 100%.  

#### Q&A Challenges
Quiz Challenges contain individual questions, with every question by default counting as one point towards the challenge score. Total points are divided by earned points to calculate correctness score. For example if there are two questions—one worth 2 points and the other worth 1—then the questions will count for 66% and 33% of the total score respectively.

Each quiz question can also allow partial scores, which means that only a portion of the total points are earned based off of the candidate's answers. For example, there could be a multiple choice question that asks for 4 choices to be selected out of 10. Each correct choice is assigned one point, and if the candidate only gets 2 of the choices correct then they will only earn 2 points instead of 4. You are also able to assign choices different weights, which are also a form of point but at the choice level. In this way, different choices can be worth more or less than others to the total score for the question.

You can review these options in more detail within our [Q&A question reference documentation](/reference/features/challenges/quiz/questions).

## Guided Scoring

Quantitative and some qualitative scoring can be handled autonomously. When you want to dive deeper into the quality of a specific work sample, you will want to introduce your team into the process to help score. This is something you team will likely do anyway, especially in the case of hiring. No one wants to hire someone without looking at the quality of their code. This is where reviews come into play within Qualified. One or more members of your team can review each assessment result and provide subjective and objective details as to how well they performed.   

### Subjective Ratings
Subjective ratings don't require a rubric, and are simply a team member's opinion on how well they think the candidate did. Typically you would use subjective ratings when you want to signal to someone (such as a hiring manager) if you think the candidate should move forward in the process or not.  

Qualified provides an overall rating, and a set of individual qualities that can be rated, per each challenge—allowing each reviewer to provide their subjective and insightful feedback. An overall approve or reject rating can also be provided for the assessment itself. 

Reviews do not count as part of the correctness score, instead you will see a green, yellow or red dot next to the score within the candidates list, used to represent each reviewer's overall rating.

### Objective Ratings

While subjective ratings allow for free-form feedback and are great for communicating overall opinions, they do not provide a consistent process for measuring qualitative aspects of a work sample. If you are looking to have your reviewers provide clear messaging on how well a candidate performed within specific areas, then you will want to define a rubric that guides different reviewers towards leaving consistent and objective feedback.

When dealing with rubrics, we start to get into deeper aspects of qualitative assessment measurement, and this is where the signals scoring system comes in.    

## Signal Based Scoring
So far we have discussed the two entry level scoring features of the platform, **correctness scores** and **subjective ratings**. For many customers, this is all that you will need—especially if you wish to keep your process simple. 

For education and certification focused users, and for recruiting focused users looking to implement a thorough and consistent vetting process, there is a more advanced system that allows you to go much deeper into scoring candidates. This system is called **"signals"**.

:::important Limited Beta
The Signals system is a new set of features currently in beta. If you are interested in learning more, please reach out to our sales team.  
:::

### What are Signals?
The Signals system is based on the idea that different aspects of an assessment can be used to signal different things about a candidate. The more criterion-related signals that a candidate meets expectations on, the more likely they are high performer. Signals are carefully selected to relate to the job role being assessed for.

A signal is a value ranging from 0–10, with 10 indicating that the candidate reached full expectations. There are currently two key types of signal sources, though more will be introduced later. They are:

- **Automated score**, such as "correctness score"
- **Objective rating** via a human scored rubric

These signal sources can be mapped towards different skills and objectives, which help to build a comprehensive profile about a candidate. 

### Skills & Objectives
Signals are fundamentally about establishing a candidate's competency in multiple areas. For example, you may utilize correctness scores of only a portion of unit tests to determine how well a candidate is able to complete the requirements of a task, while other unit tests may be related to determining how well a candidate thinks about potential edge cases that weren't called out in the requirements. You might supplement these edge case unit tests with some qualitative rubrics, to score the candidate on their ability to write quality code that is both readable and robust.

### Signal Mappings

The Signals system is flexible in how skills and objectives can be scored, through the use of mappings. While our Qualified Library challenges come pre-mapped to specific skills and objectives, you may wish to customize this based off of your own specific competency models. Our team can work with you to support the models that make the most sense for your process.  

------

We have only touched briefly on signals. Since this is an advanced topic, we will not get into too much depth on it now. If you do wish to dive right in, you can [jump to our in-depth article on signals](../../../creating-content/scoring/signal-scoring). 

Otherwise, now that we have covered the conceptual basics of the system, let's work on getting your account fully setup.
       
