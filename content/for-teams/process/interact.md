---
order: 4
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

This feature puts the candidate into a waiting mode until you manually unlock the assessment, either on the candidate's assessment result page or from within the Interact dialog.

## Running an Interact Coding Session

![Active Interact Coding Session](/images/hire/interact-session.png)

Once an Interact session has started, you can:

* Watch the participant enter code in real time
* Edit the participant's solution and sample test cases for them
* Trigger code runs and submissions for the candidate
* View the results of the most recent test or submission attempt
* View details about the current challenge
* Jump between upcoming or already finished challenges using the sidebar links.
* Return to the challenge the candidate is working on by clicking *Back to Candidate's Challenge*
    * The current challenge is also noted with the small person icon.
* If enabled on your account, add a review to the developer's solution immediately.
  * You will be invited to provide an overall review immediately upon the candidate submitting the assessment.

:::tip
The key to a great Interact session is **communication**.

Even though this format allows anyone to make changes at any time, the experience works best when the candidate and interviewers are communicating ideas, rather than just editing code.
:::

Interact works with both types of code challenges. There are a few differences between classic code challenges and project code challenges worth noting.

### Project Code Challenges

Project Code Challenges use a proprietary shared code editor that allows any single person in the session to be making edits at any one time. It's mostly automatic: when someone starts editing, other users are blocked out in real time while they make changes. As soon as they complete, the editor is opened up again, and anyone can take control. 

Every user in the session can also create, rename, and even delete files from the solution. These changes will be reflected immediately to everyone else in the session.

#### Following Active Editor Focus

The code editor will automatically open files being edited, and scroll and show highlighted code while others are editing. This helps keep everyone on the same page during the call—literally!

If you want to temporarily break away from following the current editor, you can use the dropdown menu in the Interact button, and uncheck _Automatically show and focus on changed files_. This will allow you to retain focus on a different file or tab, even if edits are happening. The edits and selection changes will continue in the background on this tab.

Reenable this option to return to following changes.

:::tip
Use cursor position and text selections to highlight concepts and code to share. Every other user in the session will be shown that file, and scrolled to the highlighted text automatically!
:::

#### Who has control?

Whenever someone makes a change, you'll see their name at the top of the IDE in the Interact button. If the button is blue, they are actively making changes. If the button is not blue, you are free to take over editing at any moment by clicking into a file.

:::tip
If you ever need to forcibly take over control, you can click the blue button in the toolbar, which will give you control over the editing session immediately.
:::

#### Running Code

* If you want to run the candidate's code, click the **RUN TESTS** button. This will run the tests via the candidate's computer, and relay the results back to you. If the button is grayed out, the candidate is not connected. (If you don't see this button, you are likely working on a web challenge without candidate tests.)
* If web preview is enabled on the challenge, everyone in the session will be able to see the results in real time on their own system.
* You can also use the **SUBMIT SOLUTION** button to submit the candidate's solution. This will send the solution off to be tested on our system. For most challenges, this will then take you to the next challenge.
  * If submission feedback is enabled on this challenge, and some tests fail, interviewers will be shown the detailed results of the submission. Candidates will be shown the normal list of failed test names.

### Classic Code Challenges

Classic Code Challenges use a simultaneous multi-user code editor. It allows everyone on the call to make changes at once.

It has a few limitations, including requiring the candidate to be connected to make changes. You also will not be able to automatically follow along with the focus of other users as they make changes. This format also is unable to track who is making the edits for playback.

When using the classic code challenge pair-programming editor, you simply make changes into either the code or tests editor. These changes will automatically appear for other users.

:::note
This older format will eventually be migrated to the new format for Project challenges. Keep an eye on our [product releases](https://www.qualified.io/kb/changes) to learn more.
:::

## Afterwards

Once a Interact Session is complete, you still have access to all the review tools you have for normal assessments. This includes code playback, allowing you to playback the interview as it unfolded.

To learn more about reviewing candidates, see [Candidate Details View](/reference/features/candidates#candidate-student-details-view).

## Troubleshooting 
If you are starting an interactive session with someone else, and you get the message _"Unable to start an interactive session"_, the following tips can help determine the root cause, and hopefully get your session going quickly.

Qualified uses Firebase to create its real-time interactive sessions. Without access to the Firebase service, your session will not work.

### "Unable to load Firebase"

This occurs when the library for Firebase is unable to be loaded. This is almost always caused by something like an ad-blocker preventing the client-side JavaScript library from loading.

* Ensure that you aren't using an ad blocker on the Qualified domain, or whitelist the `firebase-*.js` library.
* Ensure you don't have any network-level firewalls preventing access to the Firebase JavaScript library.

### "Unable to connect to Firebase"

This occurs when the library has loaded, but the application is unable to connect to the Firebase servers.

* Ensure that you aren't blocking access to `*.firebaseio.com`.
* Ensure that you don't have any network-level firewalls preventing access to `firebaseio.com`.
* Ensure that you don't have anything preventing socket connections for real-time data.
* Check to see if there are any [known issues with the Firebase service](https://status.firebase.google.com/), which usually resolve on their own.
* If none of the above are true, try reloading the page anyway, and see if it's a temporary outage.

### "Unknown"

If an unknown error occurs, you can try the above, but focus on:

* Check to see if there are any [known issues with the Firebase service](https://status.firebase.google.com/), which usually resolve on their own.
* If none of the above are true, try reloading the page and see if it's a temporary outage.

## Contact Support

If you cannot find a solution above, please [contact Qualified support for more help](mailto:team@qualified.io?subject=Interactive%20Session%20Issues).



