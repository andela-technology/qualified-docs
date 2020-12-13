---
order: 3
title: Scoring Fundamentals
---

# Scoring Fundamentals

Qualified is centered around the idea of assessing software developers using "work samples," a testing style that offers tasks related to the role being assessed for. Coding challenges are the primary challenge type used for assessing these work tasks. Q&A challenges are often used to expand on the work sample, or to supplement it by testing additional knowledge. 

Since developers are being tested on their ability to complete certain types of tasks, scoring in Qualified takes a criterion-referenced approach.

## Criterion-Referenced
Criterion-referenced means that the candidate is being assessed on their ability to achieve a standard. A standard is the level of competency necessary to perform well within a job role. In the case of most challenges on the Qualified platform, the candidate is expected to be able to at least complete the task. This is why most challenges expect a candidate to achieve a 100% correctness score. 

This is an important concept to remember, because Qualified is primarily concerned with ensuring candidates meet a certain standard, not comparing performance of candidates to one another (that is, a norm-referenced scoring approach). This is not to say that candidates can't prove themselves to be more capable than others. This is where quantitative versus qualitative scoring comes in, and that leads us to autonomous versus human-based scoring.    

## Autonomous Scoring
Each challenge type on Qualified platform has a method for being automatically scored. Scores are calculated as the candidate progresses through the challenge and on final submission. A single percentage score is shown next to each assessment. This score represents the correctness score for the assessment.  

### Correctness Score
The score next to a candidate's name on each assessment result is the candidate's combined average correctness score of all challenges within the assessment.

For example, if there are 3 challenges in an assessment and a candidate submits scores of 100%, 50% and 100% on the challenges, the assessment score will be (100 + 50 + 100) / 300 = 83%. Every challenge on the assessment is weighted the same when it comes to determining the assessment correctness score.  

Challenges are scored for correctness differently depending on whether the challenge is a coding challenge or a question-and-answer quiz.

#### Coding Challenges
The two formats Qualified offers for delivering a coding challenge, Classic Code Challenges and Project Code Challenges, are scored using submission unit tests. Each unit test is weighted equally in computing the overall score. If there are 10 unit tests and the candidate passes 8 of them, the candidate's score will be 80%. In other words, by default, the score for Code Challenges are a reflection of number of unit tests passed. The score is never more than 100%.  

#### Q&A Challenges
Quiz Challenges contain individual questions that each contribute one point by default to the challenge score. Total points are divided by earned points to calculate correctness score. For example, if there are two questions—one worth 2 points and the other worth 1—then the questions will count for 67% and 33% of the total score respectively.

Each quiz question can also allow partial scores, which means that only a portion of the total points are earned based on the candidate's answers. For example, there could be a multiple choice question that asks for 4 choices to be selected out of 10. Each correct choice is assigned one point. If the candidate answers 2 of the choices correctly, then they will only earn 2 points instead of 4.

You can assign choices different weights. In this way, particular responses to a question can be worth more or less than others in determining the total score for the question.

You can review these options in more detail within our [Q&A question reference documentation](/reference/features/challenges/quiz/questions).

## Guided Scoring
Quantitative and some qualitative scoring can be handled autonomously. However, a typical hiring team will manually inspect work samples in order to distinguish among top automatically-scored candidates. Qualified offers guided scoring and reviews as a framework for teams to review work samples. One or more members of the team can review each assessment result and provide subjective and objective ratings of candidate performance.   

### Subjective Ratings
Subjective ratings don't require a rubric and are simply a team member's opinion of the candidate's performance. Typically, subjective ratings are used to signal to a hiring manager whether the candidate should move forward in the hiring process or not.  

Qualified provides an overall rating and a set of individual qualities that can be rated per challenge. This allows each reviewer to provide subjective feedback and insights. Additionally, an overall approval or rejection can be applied to an assessment result.

Reviews do not count as part of the correctness score. Instead, you will see a green, yellow or red dot next to the score within the candidates list which represents each reviewer's overall rating.

### Objective Ratings
While subjective ratings allow for free-form feedback and are great for communicating overall opinions, they do not provide a consistent process for measuring qualitative aspects of a work sample. If you are looking to have your reviewers provide clear feedback on candidate performance within pre-established categories, you can define a rubric that guides reviewers to provide consistent and objective feedback.

When dealing with rubrics, we start to get into deeper aspects of qualitative assessment measurement. This is where the signals scoring system comes in.    

## Signal-Based Scoring
So far we have discussed the two entry-level scoring features of the platform, **correctness scores** and **subjective ratings**. For many customers, this is all that you will need—especially if you wish to keep your process simple. 

For users in education and certification domains as well as those in recruitment seeking to implement a thorough and consistent vetting process, there is a more advanced system that allows you to go much deeper into scoring candidates. This system is called **"signals"**.

:::important Limited Beta
The Signals system is a new set of features currently in beta. If you are interested in learning more, please reach out to our sales team.  
:::

### What are Signals?
The Signals system is based on the idea that different aspects of an assessment can be used to identify specific qualities in a candidate. The more criterion-related signals that a candidate meets expectations on, the more likely they are high performers. Signals are carefully selected to relate to the job role being assessed for.

A signal is a value ranging from 0–10, with 10 indicating that the candidate reached full expectations. There are currently two key types of signal sources, though more will be introduced later. They are:

- **Automated score**, such as "correctness score"
- **Objective rating** via a human-scored rubric

These signal sources can be mapped towards various skills and objectives which help to build a comprehensive profile for a candidate. 

### Skills and Objectives
Signals are fundamentally about establishing a candidate's competency in multiple areas. For example, you may utilize the correctness scores of a portion of unit tests to determine how well a candidate is able to complete the requirements of a task, while other unit tests may relate to the candidate's ability to address edge cases. You might supplement these edge case unit tests with some qualitative rubrics to score the candidate on their ability to write quality code that is readable and robust.

### Signal Mappings
Mappings enable the Signals system to flexibly score skills and objectives. While our Qualified Library challenges come pre-mapped to specific skills and objectives, you may wish to customize them to match your target competency models. Our team can work with you to support the models that make the most sense for your process.  

------

We have only touched briefly on signals. Since this is an advanced topic, we will not get into too much depth on it now. If you do wish to dive in, you can [jump to our in-depth article on signals](/creating-content/scoring/signal-scoring).

Otherwise, now that we have covered the conceptual basics of the system, let's work on getting your account fully set up.
       
