---
title: Core Concepts
order: 2
---
# Core Concepts
Before we get started with the Qualified platform, let's cover the concepts involved. This will serve as a nice overview of what the platform is about, and will help you understand how it all fits together as you work your way through the docs.

## Candidates
A candidate is anyone being assessed by the platform. This could be anyone from an applicant applying for a job, an employee being up-skilled in a training program, a student in a coding boot-camp, or a developer looking to certify themselves. 

A candidate is introduced into the system once they take an assessment.   

## Assessments

An assessment is one or more tasks (which we call challenges) that are given to a candidate to assess their ability. A candidate can be invited to a private assessment, or can be given a link to register to take a public assessment. Multiple assessments can be sent to candidates, often completed in sequence.

Assessments can be open-ended, or restricted so that they must be completed in a certain amount of time.

### Interact Sessions
An interact session is a collaborative assessment. For those looking to conduct pair programming sessions with candidates, interact sessions are what you are looking for. We will discuss interact sessions [in more detail later](/for-teams/process/interact). 

## Challenges

A challenge is an assessment task which can be given to a candidate. A challenge can either be a coding task or set of non-coding questions that a candidate must complete. There are many predefined challenges within the system that you can use to build your own assessments. You can also create your own challenges, either from scratch, using one of our starter templates, or by customizing one of the existing challenges within the Qualified challenge library.     

## Different Types of Challenges

### Code Challenges
There are two types of coding challenges on the Qualified platform. They each offer advantages over each other. Before we jump into describing each, let's quickly touch on some popular aspects that all coding challenge types share. 
                   
- **Code Playback**: When a candidate takes a coding challenge, everything they do is recorded so that it can be played back later. This allows your team to review the coding session later, providing you the opportunity to see their thought process as they solve a challenge. You can speed up the playback or pause it at any point and click around the code. 
- **Unit Testing**: Coding challenges are tested and scored using industry-standard unit testing frameworks. This opens up a lot of opportunity for how you might want to verify that a solution is a good one or empower the candidate to manipulate the testing code as part of their solution process.

#### Classic Code Challenges
A Classic Code Challenge is our simplest form of coding challenge. It focuses on giving the candidate a single file to solve a task in. This format works well for basic coding tasks, where there is typically a method/function stub which needs to be completed. For anyone familiar with [Codewars](https://www.codewars.com), or other coding platforms, this will be a familiar format. 

While Project Code, discussed below, is the recommended type of coding challenge, there are still good reasons for utilizing Classic Coding Challenges:
- They allow you to configure multiple languages for the task, so that the candidate can choose which language they wish to use to solve it.
- They don't involve a file tree, and can be very effective if you only wish to test someone on a very simple/straight-forward single file task.  
- CCC supports the ability to pair code with candidates within an interactive coding session.

#### Project Code Challenges
A Project Code Challenge is our newest and now recommended approach to testing developers on their ability to code. It provides a format that that is more capable and flexible, allowing you to test for coding tasks that involve multiple files. Back-end and Front-end web development tasks, using frameworks such as React and Ruby on Rails, are good fits for project challenge. This challenge format also offers a number of unique configuration options, such as hiding certain files from candidates, or allowing them to see the file but not edit it.  

### Q&A Challenges
Question & Answer challenges allow you to configure one or more multiple choice and/or free-text questions. These challenges are similar to traditional quizzes and tests. However, within Qualified, Q&A challenges are often used for a variety of purposes beyond a traditional quiz.

Here are a few utilization suggestions:

- Testing technical knowledge  
- Surveying and automatically scoring how well a candidate might fit within a given role (job fit)
- Follow-up questions to a coding challenge
- Asking candidates to write a code review of multiple excerpts of code
- Administering written interview questions
- Providing non-coding work samples, such as replying to an email, a research task, or an analysis task

While Q&A challenges only offer two question types, these question types are much more powerful than they may initially seem. 

#### Multiple Choice Questions
Multiple choice questions can be configured with the following options:
- Single choice
- Multiple choice with a fixed choice count
- Multiple choice with a non-fixed choice count
- Weighted single choice, where some choices are more correct than others   
- Weighted multiple choice, where some choices are more correct than others

#### Free-Text Questions
Free text questions can be configured to expect written text, or code. In code mode, code is not executed, but it is formatted for the candidate. Regular expressions or simple string matchers can be configured to test for keywords within the answer. You can configure multiple matchers and give different weights to each.

## Assessment Results
You will sometimes see references to something called an assessment result. This is simply the result of the candidate taking an assessment.

<svg viewBox="0 0 700 404" width="100%" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g transform="translate(35 59)"><rect fill="#535f72" height="314.5" rx="8" width="263"/><text fill="#fff" font-family="SourceSansPro-Semibold, Source Sans Pro" font-size="16" font-weight="500"><tspan x="88.02" y="29">Assessment</tspan></text><text fill="#fff" font-family="SourceSansPro-Light, Source Sans Pro" font-size="14" font-weight="300"><tspan x="36.457" y="50">Acts as the "blank" test blueprint</tspan></text><g fill="#96a1b3"><circle cx="131.5" cy="297" r="4"/><circle cx="112.5" cy="297" r="4"/><circle cx="150.5" cy="297" r="4"/></g><g transform="translate(15 74)"><rect fill="#96a1b3" height="53" rx="8" width="233"/><text fill="#fff" font-family="SourceSansPro-Regular, Source Sans Pro" font-size="14"><tspan x="52.118" y="31.5">Classic Code Challenge</tspan></text></g><g transform="translate(15 147)"><rect fill="#96a1b3" height="53" rx="8" width="233"/><text fill="#fff" font-family="SourceSansPro-Regular, Source Sans Pro" font-size="14"><tspan x="48.25" y="31.5">Project Code Challenge</tspan></text></g><g transform="translate(15 220)"><rect fill="#96a1b3" height="53" rx="8" width="233"/><text fill="#fff" font-family="SourceSansPro-Regular, Source Sans Pro" font-size="14"><tspan x="70.279" y="31.5">Q &amp; A Challenge</tspan></text></g><g transform="translate(367)"><rect fill="#205b20" height="315" rx="8" width="263"/><g fill="#4bb05d"><circle cx="131.5" cy="297" r="4"/><circle cx="112.5" cy="297" r="4"/><circle cx="150.5" cy="297" r="4"/></g><text fill="#fff" font-family="SourceSansPro-Light, Source Sans Pro" font-size="14" font-weight="300"><tspan x="14.194" y="50">Stores the result of taking the assessment</tspan></text><text fill="#fff" font-family="SourceSansPro-Semibold, Source Sans Pro" font-size="16" font-weight="500"><tspan x="64.58" y="29">Assessment Result</tspan></text><g transform="translate(15 74)"><rect fill="#4bb05d" height="53" rx="8" width="233"/><text fill="#fff" font-family="SourceSansPro-Regular, Source Sans Pro" font-size="14"><tspan x="56.542" y="31.5">Classic Code Solution</tspan></text></g><g transform="translate(15 147)"><rect fill="#4bb05d" height="53" rx="8" width="233"/><text fill="#fff" font-family="SourceSansPro-Regular, Source Sans Pro" font-size="14"><tspan x="52.674" y="31.5">Project Code Solution</tspan></text></g><g transform="translate(15 220)"><rect fill="#4bb05d" height="53" rx="8" width="233"/><text fill="#fff" font-family="SourceSansPro-Regular, Source Sans Pro" font-size="14"><tspan x="74.703" y="31.5">Q &amp; A Solution</tspan></text></g></g><path d="m313 145 34 17-34 17v-10h-30v-14h30z" fill="#96a1b3" fill-rule="nonzero"/></g><text fill="currentColor" font-family="SourceSansPro-Light, Source Sans Pro" font-size="18" font-weight="300"><tspan x="266.426" y="37">Parts of an Assessment</tspan></text></g></svg>

## Solutions
Similarly, you may sometimes see references to solutions. This is simply the candidate's solution to a challenge. As each candidate starts to solve a challenge associated to an assessment, a solution will be created on their corresponding assessment result.


## Qualified Library
Qualified provides a library of pre-built challenges that you can use within your assessment. When you use a challenge from the Qualified library, it will actually be imported as a copy into your team's library, where you can freely edit the challenge, duplicate it and tweak it, or use it as a building block for building a completely different challenge.

Challenges within our library sometimes get updates. If you import a challenge from the Qualified library, you have the option to not change it and keep it linked, so that any minor updates that are published by Qualified will be automatically synced to your copy.

Keep in mind that your subscription level may not have access to every challenge within the library. If you are on a trial, you will only have access to small subset of the complete library.  

## Team Library
This is where your own challenges are kept. Any challenge you import from the Qualified library or any challenge you create from scratch or from a template will be kept here. All team members have access to this library and to each challenge created within it.

## Challenge Templates
When creating a new challenge, you will be given the option to create it from a template. Templates help you get started with a specific language or technology. If you wish to completely start from scratch, Classic Code Challenges and Q&A challenges also have bare templates with nothing added to them. 

Additionally, you use any challenge from the Qualified library or a custom template from your team library as a starting point to creating content.

## Assessment Templates
When creating a new assessment, you will have the option to choose a pre-existing template. These templates are some recommended assessments that can get you started quickly. You are free to customize the settings or challenges on any of your assessments, including those created from a template.

## Team Members
A team member is a user of the system which is able to view candidates. Any users you set up on your account will be a team member. Candidates on the other hand, have their own individual accounts which are not part of your team. 
