---
summary: "Help for Assessment Timing"
bodyClass: 'employer-focused'
---

# Timing Assessments

This article helps explain how timing assessments works in Qualified.

## Types of Timers

Qualified has two types of assessment timers:

- An active timer which determines how long the candidate has been working on challenges actively in the browser
- A wall clock timer which determines the total duration from start to finish

### Active Timer

The Active Timer begins as soon as the first assessment challenge is started. The timer will be paused whenever the following happens:

- User closes their browser
- User switches to another tab
- User submits a challenge and then sits on the next challenge's start screen
- User is on the review assessment screen

Each time a user starts working on a new challenge, the timer will become active again. We only ever record the active time of a single challenge. If a user opens up multiple tabs, only the most recently worked on challenge will be timed.  

**Note** that we ping the server every 10 seconds, so times may be off by a few seconds if a user closes or refreshes their window in the middle of a 10 second period.

### Wall Clock Timer

This timer will begin as soon as the assessment is started and will count down until the assessment has been submitted regardless of whether the candidate is in the browser.

When an Enforced Time Limit is set on an assessment it uses the Wall Clock Timer in order to discourage candidates from working offline to cheat the timer. If candidates choose to use their own IDE against an enforced time limit, their timing will be affected in the same way.

## Assessment Opened vs Started

An important distinction for an assessment is the timestamp it was "opened" versus when it was "started".

### Assessment Opened

An assessment is considered open when an invited candidate accepts the invitation or, for a public assessment, when a candidate authenticates either by signing up or logging into an existing account.

Once the above process is completed, the assessment is considered "opened" and the candidate is sent to the language selection screen:

<figure>

![Language Selection Screen](/images/kb/images/assess/language-selector.png)

</figure>

### Assessment Started

Once the candidate selects their challenge language for their first challenge, the assessment is considered "started" and, if configured, the wall clock timer will count down until the time limit is reached.
