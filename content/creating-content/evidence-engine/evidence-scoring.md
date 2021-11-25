---
order: 2
---

# Signal Scoring

## Qualified Score

The **Qualified Score** is designed to be a single value which represents the overall evaluation score of a candidate. All signals within the Evidence Engine are associated with the Qualified Score. This score always takes the Evidence Engine configuration into account, whereas the **% Solved** score is a simple calculation of how many unit tests or answers have been passed.

![Qualified Score and % Solved - as seen on candidates list](/images/for-teams/candidate-scores.png)

The Qualified Score is a value between `0 - 10` and incorporates **all submitted evidence signals** collected by the system. Signals can include things such as the % solved score, as well as other signals, such as reviewer score card ratings provided by your team after conducting an assessment review.

:::important Keep in mind
The Qualified Score only incorporates **known** information. Any un-submitted assessments or un-reviewed scorecards will not be included. 
:::

### Non-Standardized Scoring
The Qualified Score is non-standardized. What that means is that there is not a predefined range that determines what a score means. This is done on purpose, as it is a good fit for an evidence-driven evaluation process centered on understanding a candidate's performance.

A standardized score has a rigid structure, is very hard and expensive to develop, and because of this is often not relevant enough to any given organization. For example, let us assume that you want to know how good someone is at JavaScript, and you were to use a standardized test. You administer the standardized test to a candidate and what that will tell you is how well that candidate did compared to other candidates, based on a test that was developed with certain criteria in mind – criteria that was based on a general profile of a given role. 

The concern here is that the criteria defined for the test may not be 100% relevant to the needs of a specific role within your organization. If so, then you would be comparing candidates to other candidates for things that may not matter to the role you wish to evaluate for. Instead, you want to compare candidates to other candidates based on the needs that are determined to be important to a specific role in your organization. In order to do so, you need to customize assessments to fit your specific needs, and by doing so standardized scores will become very difficult and expensive to develop. They would also be unnecessary, as you could just configure an assessment for each specific role you wish to hire for.

Qualified's approach is to provide a score that indicates performance related to the specific challenges given. For example you might give one candidate an easy assessment only focusing on basic knowledge, and they could score high on the assessment. Let's say a Qualified Score of `9.5`. Another candidate who is applying for a more senior role is given a harder assessment on the same topics as the first candidate, and also scores a `9.5`. Both candidates scored the same but the scores are not comparable to each other. These scores indicate that the candidates both did very well but what "well" means is relative to the assessments they were given. A good candidate for one role may not necessary be a good candidate for another. 

An evidence-driven approach allows your team to understand how well a candidate has done within your evaluation process. Candidates who go through the same process can be compared to each other, and candidates who perform poorly can quickly be identified. Candidates who go through a different process cannot be compared to each other. The evidence-driven approach is not focused on trying to categorized candidates into different performance categories. It instead focuses on finding candidates who can do the work, and then of those candidates, determining which show the most promise.

### Fluid Scoring & Confidence
The Qualified Score is fluid, in that as more information is collected, the score can change. For this reason, in addition to the Qualified Score there is a **Qualified Score Confidence** value. You can see this value on the Report Card, and within the tooltip shown as you hover over the score within the UI.

The confidence is a big factor within your evidence-driven process. Some signals can't be collected all at once (specifically reviewer scorecards). As more data is collected, the Qualified Score can possibly go down, and the Qualified Score Confidence will go up.

### Setting Standards
In addition to the Qualified Score itself, which is a means of ranking the highest performing candidates within an evaluation process, cut scores can also be applied. Cut scores focus on minimal performance standards. Anyone who fails to meet a minimal standard will fail their assessment, and that will be recognized within the Qualified Score UI via a red border. 

Cut scores will be covered in [more detail later](/creating-content/evidence-engine/cut-scores). For now just know that cut scores provide the ability to call out candidates who fail to meet your standards. Those standards can be configured according to your team's needs. 

### Weighting

We will cover weighting in [more detail later](/creating-content/evidence-engine/weighting), but let's quickly cover the fact that each signal on a challenge carries a weight, and that weight can be adjusted on a per signal basis. This results in signals having different levels of effect on the overall Qualified Score.

:::important Challenge Difficulty
It is also important to understand that challenge difficulty plays into weighting. The more difficult the challenge, the more the solution score will count towards the Qualified Score. This is because the difficulty acts as a weight modifier to each signal. 
:::


### Qualified Score Roll-up
Technically, there is a Qualified Score at multiple levels. 
- Each solution has a Qualified Score
- Each assessment result has a Qualified Score
- Each candidate has a Qualified Score
                                                          
Typically when referring to the Qualified Score within these docs and within the UI, we have tried to limit it to referencing the candidate level Qualified Score, and simply refer to *Assessment Score* and *Solution Score* in cases where we need to discuss scoring on a lower level. 

The reason why the score exists at multiple levels is because the scoring mechanism is the same. All signals related to a specific level are considered. So when a solution level score is determined, all submitted signals are factored together. When an assessment result level score is determined, all submitted signals are factored together in the same manner, meaning that solution scores aren't first calculated and then treated as a group. When a candidate score is calculated, all submitted signals are factored together – which assessment a solution belongs to is irrelevant.

:::info Review
To calculate the candidate Qualified Score, all related signals are rolled up into a flat list and then calculated based of their individual weights, regardless of which assessment they belong to. Signals are always weighted relative to their sibling signals. It is not possible to define weightings at an assessment level.  
:::

### Qualified Score Factors

There are different categories of signals. To make things easy to reason about, the engine groups some signals into different "factor" groups. Currently there are three groups, and only one of these groups actually contains more than one potential signal: **Reviewer Scored**

The three current factor groupings are:

1. `System Scored: Code`
1. `System Scored: Questions`
1. `Reviewer Scored`

#### System Scored: Code
**Passed Unit Tests** is currently the only signal that is included within this group. Your team likely has chosen Qualified due to its powerful code challenge functionality, so its likely that this signal will be the most utilized within your assessments. As additional signal types get added, this group may expand.

#### System Scored: Questions
**Answer Correctness** is currently the only signal that is included within this group. This score is derived from the number of correct answers on a Q&A challenge. As additional signal types are added, this group may expand.


:::note
Q&A challenge question can be assigned different points, so the correctness score has weighting built into it via this points system. Question choices themselves can even be assigned different points compared to other choice options. This is not the case with coding challenges, all unit tests on a coding challenge count the same.
:::

#### Reviewer Scored

This group comprises all signals which are scored via reviewer scorecards. A reviewer scorecard is shown to reviewers when they are reviewing solutions, allowing them to rate on a 5 point scale.
 
![Example scorecard when rating a solution](/images/for-teams/performance-score-card.png)

Multiple signals can be enabled within this grouping. Each challenge type has its own list of available standard signals that can be rated. 


![Example partial list of reviewer scored signals](/images/creating-content/scorecard-signals.png)

Later we will discuss weighting, which lets you define how each reviewer scored signal weights against others within this factor grouping. You can then define how the factor grouping weights against the other groupings.

## Subscores

Subscores are separate scores that exist apart from the Qualified Score. Their purpose is to allow you to map different signals to different subscores so that you can structure the learnings gained from each challenge assessed. For example, you may create a React based coding challenge and map the *Passed Unit Tests* (% solved) to the "React" subscore. Later on, you might issue a React based Q&A challenge and map the correct answers score to React.   

:::info
The value of a subscore has no affect on how the Qualified Score gets calculated. They are completely independent. 
:::

:::tip
By mapping different subscores, you can track separate values about the competency and job fitness objectives you wish to measure.
:::

### Subscore Configuration

#### Default Subscores
When enabling signals on the "Signals" tab, by default at least one subscore will be associated with that signal. You are not forced to use this subscore, it is simply added by default to make it easier for common cases.

#### Assigning Signals
When configuring subscores, you have full flexibility in assigning which signals get mapped to which subscore. For Q&A challenges, you can even map specific questions to a subscore – which can be very useful if you have designed a set of questions that focus on various subjects. 

#### Subject Areas

You can select from pre-defined subject areas to create a subscore. Highly popular subjects are presented for you, and you can also search the full list. 

:::note
Currently only pre-defined subjects can be selected as a subscore. We may add the ability to create custom subscores later, but currently are restricting to a pre-defined list in an attempt to create consistent structure. If there is an item missing from the list that you wish to target, please reach out to us and we can work on adding it to the list. 
:::

![Example subscore configuration with some signals already mapped](/images/creating-content/evidence-subscores.png)


:::important Limited Beta
The Evidence Engine system involves a new set of features currently in private beta. If you are interested in learning more, please reach out to our sales team.  
:::
