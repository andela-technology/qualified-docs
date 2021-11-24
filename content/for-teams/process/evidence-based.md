---
order: 3
title: Evidence-Based Process
featured: Beta
---

# Evidence-Based Process

Qualified is designed for executing multi-stage evidence-based evaluations of software developers. This article will discuss some of the features and workflows you can consider implementing using the platform. 

:::important Limited Beta
This article discusses a process which requires access to our new Evidence Engine suite of features, which is currently in beta. If your account does not yet have access, please reach out to our team to learn more about getting it activated. 

The following features mentioned in this article are related to the Evidence Engine feature-set.

- Qualified Score
- Subscores
- Report Card
- Scorecards
:::

## What is an evidence-based process?
Evidence-based evaluations require a structured process for collecting, reviewing, and making data based decisions. We focus on "evidence" because this is really what the evaluation process is about, uncovering as many points of data possible about a candidate in order to make an informed decision about their competency for a given role. The Qualified platform centers primarily around a form of evidence that in the industry are referred to as "work samples", which are small role-related tasks that candidates complete in order to simulate how they would conduct themselves in a real world job. Work samples are not the only form of evidence that the Qualified platform collects, but they are core to the Qualified evaluation methodology. 

Where the evidence-based process comes in is not just in administering work sample tasks and seeing if candidates can complete them, but really in extracting as much information from the tasks as possible, and utilizing the work performed on those tasks for as much of the evaluation process as possible. These tasks give your team a consistent and reliable basis for reviewing the quality of work of all of your candidates who make it to a specific stage of the process.

An evidence-based process shouldn't be thought of as just an assessment, with a score computed at the end. It should be thought of as a portfolio of evidence, which you can continuously build on top of and add to as a candidate progresses through their in-depth technical evaluation. Each piece of evidence collected gives you more signals to build your decision-making process around. It is Qualified's goal to make sure you are optimizing the number of high quality signals that can be harvested from your evaluation process.

As more signals are collected, it becomes much easier to make a high-confidence decision. Qualified not only provides the ability for your team to collect those signals, but to organize them into a cohesive profile that allows your team to to see everything in one place.

### What sort of signals can be harvested from evidence-based activities?
#### % Solved Signals
The most common signal given by any form of assessment is the resulting solution solved score. This score is usually determined based on "correctness" of the task/answers. In Qualified, coding solutions produce a score based on how many unit tests are passed, and Q&A solutions produce a score based on how many questions were answered correctly.   

There is a lot that can be collected from these signals alone, such as a candidate's ability to complete code that is 100% functional, how many about a topic a candidate "knows", and how strong of a cultural fit a candidate may be based on them answering a survey that has been designed to fit the role you are hiring for. However these scores are just the start to the signals you can capture. 

The correctness of the challenge is a good starting point. If a candidate is unable to complete the work, or answer questions within an acceptable range – that can be enough for you to disqualify them. However beyond this initial filter stage, there are other signals which can be factored in. These signals can be used to filter out candidates completely, or to help rank the highest performers.

These signals are used to initially score each challenge, and will be determined as soon as the candidate submits their assessment. 

#### Scorecard Signals
Once a candidate has submitted their solutions, your team has the ability to review those submissions in detail via Scorecards. Each challenge can be configured (and all Qualified library challenges already are) to be rated in one or more signals. For example, you may have your team review how **readable** a candidate's code solution is, or how **articulate** their written response was. Each scorecard signal is rated on a 5 point scale, and a set of considerations (rubric) is provided to help your team determine which rating is most appropriate.

![Example scorecard ratings with optional feedback](/images/for-teams/performance-score-card.png) 

The scorecard signals that are rated by your team are configurable. You can enable or disable them as needed. You can even tune them, so that different signals are weighted more or less compared to others. 

:::note
Currently only a preset list of scorecard signals that can be selected, defining your own signals is a feature on our short-term roadmap.
:::

As your team reviews each solution, the signals collected from those ratings will be incorporated into the "Qualified Score", which is a composite score of all **known** signals. On the candidate's Report Card, there will be a "Qualified Score Confidence" value. As more of the candidate's solutions are reviewed by your team, this confidence score will go up (eventually maxing out at 100%). A confidence of 100% indicates that all evidence for any submitted assessments has been collected and fully scored. 

#### Future Signals

Qualified is working on providing additional signals which will be automatically scored by the system. These include:

- Time & Effort
- Code Complexity
- Code Performance
- Test Case Coverage
- Grammar & Readability 

### What sort of evidence can be collected?

Work samples, through the form of coding challenges, are the featured method for collecting samples of work from candidates. Qualified also provides scored questionnaires which can be used in a variety of ways. The following is a list of evidence that can current be collected using Code and Q&A challenges:

- Coding work samples
- Interact (code-pairing) sessions
- Multiple-choice knowledge tests
- Role-fit surveys
- Written interviews

In addition to the above, the following forms of evidence collection are currently on our short-term roadmap.

- Structured verbal interviews
- Additional question types, such as ability to upload files
- External evidence pulled from outside sources

Let's cover some of the currently supported evidence types in more detail:

#### Coding work samples
These are the major focus of the Qualified platform. There are two types of code challenges, Classic and Project. We covered these in detail
in our [core concepts](/for-teams/getting-started/core-concepts/#different-types-of-challenges) article.

For now we won't cover the obvious "writing code" use-cases for challenges. However when it comes to utilizing evidence signals, such as reviewer scorecards, there are some unique ways of utilizing project-based coding challenges that may not be obvious.

For example, you could ask candidates to review code that has already been written. In the project you could provide a `review.md` file that the candidate can use to provide their feedback. The Qualified platform allows you to manage file permissions on each file within a project code challenge, allowing you to restrict editing access to only the `review.md` file. When combined with scorecards such as "Constructive Feedback", powerful evidence-based tasks such as code reviews become possible.

You should keep alternative use-cases such as the example above in mind when designing your evaluation process. Reviewing other developer's code is likely to be a task that a candidate will be expected to perform. Why not have them review some code that your own team has written?

#### Interact (code-pairing) sessions
Interact sessions allow you to code-pair on an assessment with a candidate. Instead of asking them to meticulously complete a task, you can work with them to see how their thought process works as they go to complete the task. The goal here is less about task completion, and more about how a developer collaboratively problem solves with others. In this case, instead of scoring developers on completion, you can score them using scorecards, which are available to interviewers in the same code-pairing interface they use while interviewing candidates.

#### Multiple-Choice Aptitude Tests
Qualified is focused primarily on work samples and not traditional knowledge-based aptitude testing, however not everything is always easily testable as a work sample. Sometimes you want to assess how well a candidate is aware of certain technical concepts, or utilize scenario-based questions that have a specific correct answer to them. For these cases, Qualified provides both [multiple-choice and essay style questions](/for-teams/getting-started/core-concepts/#qa-challenges) that can be automatically scored.

Individual questions can be mapped to different subscores, and knowledge tests also support scorecards, allowing for further use-cases.

#### Role-fit Surveys

The powerful scoring engine of Q&A challenges doesn't have to be limited to knowledge-based aptitude testing. You can define weighted choice questions where some answers are "better" than others. These can be used for gauging things such as job-fitness for your candidates. This can be a powerful tool for use within a pre-screen, to automatically score if a developer fits enough of the job criteria. ATS systems often supply this type of scoring, but the Qualified engine is more powerful, and by using Qualified to score job fitness, you will be combining all of your hiring signals into one unified and structured profile.

#### Written Interviews
Many jobs today are remote, where written communication is the primary way in which team collaboration happens. Why not take some of the interview questions you typically ask on the phone and have a candidate write them out instead? This will not only give the candidate time and space to think thoughtfully through their answers, but it gives you an opportunity to see how well they communicate in written form.

Utilizing our Evidence Engine's powerful tuning features, you can make the question score of the Q&A challenge meaningless, and instead set reviewer scorecards as the only means for scoring. Once an assessment has been submitted, you can have your team review the answers and provide their ratings on things such as "Articulate Writing", "Job Motivation", etc. By doing this, not only are you capturing more evidence about how someone communicates technical details, but also are saving your team time. Now instead of a 30+ minute interview, your engineers can spend 5 minutes reviewing the candidate's answers.

### How is the evidence collected used to make decisions?

The signaling data collected from all evidence is mapped to a number of scores in the system, which enable you to break down where a candidate's strengths and weaknesses are. In addition to signals being factors of the [Qualified Score](/for-teams/getting-started/scoring/#qualified-score), each challenge also typically maps various to signals to different subscore subjects. When viewed through the candidate's report card, you are able to get a high level overview of their performance throughout the entire evaluation process.

![Example subscore section of a candidate's report card](/images/for-teams/report-card-subscore-analysis.png)

In addition to the various scoring sections of the candidate report card, a portfolio of all solutions submitted is also provided. This allows you to quickly view solutions, insights, statistical performance, and all team review data in one place.

To access this data, you can click on the circular "Qualified Score". A dialog will be shown that gives you access to both the candidate's report card and portfolio tabs.
![Click on Qualified Score to view Report Card](/images/for-teams/candidate-scores.png)

## Process Considerations
Now that we have discussed what is meant by an evidence-based process, let's discuss how to incorporate more evidence within your own process. We will specifically cover how to ensure you get the most out of your assessments, and don't just rely on the initial score as your own data point.

### Incorporate your engineering team into the review process
When a candidate submits their assessment, the system will automatically score the assessment. This "% solved" score is a starting point only. It will tell you if your candidate's were able to do the work, and how correct their work was. However there is a lot more that can be learned from the assessment. The next step is to get one or more of your engineers to review the submission. However you don't want to waste their time, so only have them review candidates which have performed well enough to warrant the additional effort.

Here is a quick overview of how Qualified recommends you incorporate a team review:

- Send candidate an assessment
- Wait for candidate to submit their work
- Disqualify (reject) any candidate which is unable to perform at a certain standard
- Have your team review remaining candidates, to score the qualitative aspects of their submissions
- Disqualify any candidate which showed too many red-flags to your team
- Invite remaining candidates either to an interview (or optionally a follow-up assessment)
- When interviewing, utilize the concerns identified during the team review process and dive deeper into those issues with the candidate

### Utilize scorecards within interact sessions

Assessments can be used as code-pairing interviews, which we call "Interact sessions". The flow is similar to sending a normal assessment, except that one or more of your team members can join the assessment session. When combined with the tools your team is already using for voice interviews (phone, Zoom, Google Meet, etc) you can conduct full code-pairing sessions that gives both your team and the candidate the ability to work on the code, without needing to share your screen. This opens up a number of benefits, all of which we will cover in our [pair programming](/for-teams/process/interact) article. One of those benefits, is that your team will have access to their scorecards from their screen, while the candidate won't have access, all while you both can still see the candidate's code. 

This allows you to conduct structured code-pairing interviews, where your team can score the candidate's session all while speaking with the candidate. Of course, all of the signal data collected from those ratings will be factored into the candidate's overall Qualified Score, as well as any subscores related to the scorecards. Giving you a full 360 view of your evaluation process, from assessment all the way through to the interview.


## Related Articles

* [Interpreting Structured Evidence: Report Cards & Portfolio](/for-teams/reviewing/report-cards)
* [Scoring Concepts: Qualified Score](/for-teams/getting-started/scoring/#advanced-scoring)

