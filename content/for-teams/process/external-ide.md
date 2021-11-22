---
order: 5
title: Allowing Candidates To Use Their IDE
private: true
---

# Allowing Candidates To Use Their Own IDE
Typically candidates will take a coding assessment within Qualified's web based IDE. However it is also possible to allow them to take Project Code Challenges within their own IDE. Candidates who utilize this option will be delighted to take the challenge using their own familiar development environment.   

:::important Labs Feature
The functionality discussed is currently available as a [labs feature](https://www.qualified.io/hire/account/labs) for all customers. You must enable it before you can utilize it within your assessments.
::: 

## Requirements
Qualified's External IDE feature uses a small node terminal app that synchronizes files from a candidate's file system back to Qualified’s web IDE. This allows developers to work in their own IDE without needing to worry about running the challenge's dependencies on their own system. 

:::tip Why a Node App?
The Node terminal app ensures that all candidate's will have a consistent testing experience, as the code that candidate's develop will still be tested against Qualified's servers, not their local machine.

Over 70% of developers surveyed by Qualified already have Node installed on their machines.
::: 

The following requirements are necessary:

- The candidate must have Node 10+ installed
- The candidate must be willing to add the qualified NPM package to their machine.

All code for the Node utility is open source and can be [found here](https://gitlab.com/qualified/attach).  

## Enabling The Option
If you want to allow developers to use their External IDE, you can enable or disable the feature team-wide although the global setting can also be overridden for any given challenge. This feature only works with Project Code Challenges, where the value of working in your own IDE is that much more significant.

## Candidate Experience
Here’s how a candidate be prompted to select their own IDE at the outset of taking a Qualified challenge.
![Web vs External IDE Start Challenge Dialog](https://images.ctfassets.net/4ol5sgskowtw/44hV45gu7YAjL6pP8E8ROX/6e545ec8ae25946b94bbb50470c96bad/Screen_Shot_2019-11-01_at_12.53.05_PM.png)

If the candidate chooses to complete a Qualified challenge using their own IDE, they will then be asked to follow the steps outlined below to begin using your External IDE.

![Use Your Own IDE Setup Dialog](https://images.ctfassets.net/4ol5sgskowtw/51G94XrgWOOilrFpPajppp/8506cecab316015947b187fd96847858/Screen_Shot_2019-11-01_at_12.53.33_PM.png)

Once these setup steps are completed candidates can work on Qualified challenges in the comfort of their own development environment.

## Process Considerations
Code written within a candidate's external IDE will not be subject to detailed code playback—you can still use our code playback feature but it will be limited to when the candidate saves code. It is best to enable this option for candidates only if you don't wish to review detailed code playback. 

External IDE is best suited to letting candidates work independently—you can’t launch an interactive session with a candidate if they’re using their own IDE, but you can still review the code that they’ve written with them via a pair-programming session thereafter.
