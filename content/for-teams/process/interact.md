---
order: 5
title: Pair Programming 
---

# Pair Programming:  Interact Sessions

Pair programming is supported in Qualified through a feature called "Interact Sessions". These sessions allow one or more team members to join in on a candidate, as the candidate tries to complete an assessment. 

## Popular Use-Cases
- Conducting code pair interviews with job candidates.
- Assigning class room assignments to students and then joining in on a student's session who needs 1:1 assistance.
- Conducting post assessment reviews with job candidates or students.

## Quick Start

The easiest way to start an Interact Coding Session is to click on **Interact Sessions** from the top of the page.

:::tip
If you want to go directly to a specific developer and assessment, you can also use the **START AN INTERACT CODING SESSION** button within the candidate/student details page.
:::

### Interact Coding Sessions Dialog

![Interact Coding Sessions Dialog](/images/hire/interact-dialog.png)

This opens the Interact Coding Sessions Dialog, which will show you any active Interact Sessions you can join in on. Once a developer has connected, they will show up in the list. Click on their name to join in.

If you haven't already invited someone, use the _Invite a Candidate to a new Interact Coding Session_ option to send an invitation email and open a session.

### Preventing a Candidate From Starting Without You

When inviting a candidate to an Interact Session, you can prevent them from starting before you or other interviews have shown up by enabling _Lock the assessment from starting until unlocked_.

![Interact Dialog - Unlock Assessment](/images/hire/unlock-assessment.png)

This feature puts the candidate into a waiting mode until you manually unlock the assessment, either on the candidate's assessment result page, or from within the Interact dialog.

## Running an Interact Coding Session

![Active Interact Coding Session](/images/hire/interact-session.png)

During an interact session has started, you can:

* Watch the participant enter code in real time
* Edit the participant's solution and sample test cases for them
* View the results of the most recent test or submission attempt
* View details about the current challenge
* Jump between upcoming or already finished challenges using the sidebar links.
    * Note: When reviewing previous challenges, they will be in read-only mode
* Return to the challenge the candidate is working on by clicking *Back to Candidate's Challenge*
    * The current challenge is also noted with the small person icon (<span class="icon-candidate"/>).
* If enabled on your account, add a review to the developer's solution immediately.
  * You will be invited to provide an overall review immediately upon the candidate submitting the assessment.

## Afterwards

Once a Interact Session is complete, you still have access to all the review tools you have for normal assessments. This includes code playback, allowing you to playback the interview as it unfolded.

To learn more about reviewing candidates, see [Candidate Details View](/for-teams/candidates#candidate-student-details-view).

## Troubleshooting 
If you are starting an interactive session with someone else, and you get the message _"Unable to start an interactive session"_, the following tips can help determine the root cause, and hopefully get your session going quickly.

Qualified uses Firebase to create it's real-time interactive sessions. Without access to the Firebase service, your session will not work.

### "Unable to load Firebase"

This occurs when the library for Firebase is unable to be loaded. This is almost always caused by something like an ad-blocker preventing the client-side JavaScript library from loading.

* Ensure that you aren't using an adblocker on the Qualified domain, or at least whitelist the `firebase-*.js` library.
* Ensure you don't have any network-level firewalls preventing access to the Firebase javascript library.

### "Unable to connect to Firebase"

This occurs when the library has loaded, but the application is unable to connect to the Firebase servers.

* Ensure that you aren't blocking access to `*.firebaseio.com`.
* Ensure that you don't have any network-level firewalls preventing access to `firebaseio.com`.
* Ensure that you don't have anything preventing socket connections for real-time data.
* Check to see if there are any [known issues with the Firebase service](https://status.firebase.google.com/), which usually come back up on their own.
* If none of the above are true, try reloading the page anyway, and see if it's a temporary outage.

### "Unknown"

If an unknown error occurs, you can try the above, but focus on:

* Check to see if there are any [known issues with the Firebase service](https://status.firebase.google.com/), which usually come back up on their own.
* If none of the above are true, try reloading the page anyway, and see if it's a temporary outage.

## Contact Support

If you cannot find a solution above, please [contact Qualified support for more help](mailto:team@qualified.io?subject=Interactive%20Session%20Issues).



