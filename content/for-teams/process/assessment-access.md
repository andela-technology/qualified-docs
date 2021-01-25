---
title: Controlling Access to Assessments
order: 3
---

# Controlling Access to Take Assessments
There are a number of options available for limiting candidate access to take an assessment. Most of these options are available through the Qualified UI. More advanced configuration options are also available when managing access to assessments via the REST API.

Options span from giving candidates access for only a specific period of time, to locking the assessment until a team member manually unlocks. Later on we will also cover re-opening access to a previously submitted assessment.

## Time Based Access
There are a number of ways to limit candidates to only accessing and taking an assessment for a specific period of time. Many of these options are only available through a candidate specific invitation. If you are unfamiliar with the difference between invitations and public links, please see ["sending assessments"](../invitations) to learn more.

### Time Limits

#### Assessment Time Limit
Each assessment can be individually configured to have a time limit. Since this setting is configured on the assessment directly this access approach is **available for both invitations as well as public links**.

An assessment time limit determines how long a candidate has to work on the assessment **once they have started it**. This means that only after the candidate has clicked the "Start" button will the time limit count down begin. 

Once the timer has started, the assessment will be automatically submitted at the end of the time period. There is no way for a candidate to pause the timer. If they navigate away from the assessment and come back later, the timer will have continued to count down while they were away. If they are away when the timer runs out, the most recently saved version of their assessment will be submitted.

:::tip Minimize Candidate Stress
If you decide to utilize time limits within your process, Qualified recommends that you give enough time so that candidates won't be overly stressed about getting everything accomplished in a tight time frame. It is also a good practice to indicate to candidates within the assessment summary any time guidance that you can offer.   
:::

#### Challenge Time Limit
Similar to assessments, challenges can have time limits as well. This value can be set within the challenge's "description and settings" section when editing a challenge. By setting a time limit, you will force edits to be blocked once the time has ran out. The timer starts as soon as the challenge is started, and will run even if the candidate leaves the page. 

#### Assessment vs. Challenge Time Limits
When it comes to using challenge time limits vs assessment time limits, there are a few things to consider.

:::tip Tips 
- An assessment time limit is best used if you want to have maximum control over how much total time a candidate spends on an assessment. 
- Using an assessment time limit is not recommended if the assessment is so long that candidate fatigue or drop-off may occur, as it is not possible to schedule breaks.
- Challenge time limits allow you to give candidates breaks in between. So for example, you could have two coding challenges, each with an hour limit. Once the candidate completes the first challenge, they would be able to take a break before starting the 2nd challenge.
- Challenge time limits should be factored into the validity of your task. In the case of coding challenges, these are performance based tasks - so make sure that the time given for the task is relevant to the amount of time that a person would be expected to have doing the same task on the job.
::: 

### Invitation Expiration
:::important 
This feature is only available through the use of the invitation system. Public assessment links are not supported. 
:::

When sending invitations, it is possible to set an expiration. This expiration is specific to the invitation, and prevents access to accept the invitation after the time has expired. When sending invitations, using a invitation expiration can prevent candidates from access an assessment beyond a time frame that makes sense for you.

:::note Accepted Invitations can still be accessed
It should be noted that if a candidate clicks on the invitation link before it has expired, they will be transitioned from the "invited" to the "opened" state on the assessment result. At this point, the candidate has accepted the invitation. This means that the expiration will no longer be relevant, but it also means that the candidate may not have yet started the assessment but still can.
:::

### Assessment Access Windows
:::important 
This feature is only available through the use of the invitation system. Public assessment links are not supported. 
:::
:::caution Advanced API Setting
Access window settings are an advanced feature that is currently only available via the API. Due to the complexities of locking a candidate out of an assessment that may be in progress, you should use caution when utilizing these settings. 
:::

Access windows allow you to set on the invitation when a candidate should have specific access to an assessment. You can set both the start and/or the end date in which access should be given.

Using these settings, you can utilize assessments to implement time based online or proctored events, such as competitions or scheduled certification schedules.
   

#### Access Starts At
If this value is set, the candidate will not be able to start the assessment until the given date. If a candidate clicks on an invitation link before the access window starts, they will simply be told that they do not yet have access and will be shown when they will.

#### Access Ends At
If this value is set, the candidate will not be allowed to start the assessment after this date. If they have already started it, the assessment will be automatically be locked out of making any more edits, and will only be able to submit. 

## Assessment Locking & Unlocking
When sending an invitation, you have the option to set it as locked. What this means is that the candidate will be unable to start the assessment until someone on your team manually unlocks the assessment. 

The assessment can be unlocked directly from the interact session, or from the candidate's assessment details page. It can only be unlocked if you have previously locked the assessment when sending the invitation.

### Example Use Cases  

#### Interact Sessions
When using an interact session to collaborate with a candidate, such as for a technical interview, locking the assessment allows you to wait until everyone on your team has joined before unlocking access. This ensures the candidate cannot start the interview before you are ready.

#### Assessment Proctoring
For teams looking to manually proctor assessments, you can utilize the locking mechanism to ensure that the candidate cannot start the assessment until you have verified their identity and setup any proctoring tools you wish to use (such as initiating a new Zoom meeting).   


## Retrying an Assessment
There are times when after candidates has submitted their assessment, you would like them to continue with the assessment in some way. There are two options for retrying an assessment. 

### Reopening Assessments
Once an assessment has been submitted, it can be reopened by a team member. Reopening an assessment will give you the opportunity to invite the candidate to return to their previous submission and pick up where they left off. To reopen an assessment that has been submitted, simply navigate to the candidate's assessment result and click the "Reopen or Retake" button.

:::note Recent Change
After the reopen invitation has been sent, the assessment will remain in the submitted state until the candidate lands on the page and clicks "continue". Only then will the assessment result state and candidate be set to "started". This has changed recently, as in the past Qualified would have set the candidate back into the "started" state as soon as the reopen invite was sent.
:::  

### Retaking Assessments
It is possible to allow a candidate to retake an assessment, which will archive their previous result and allow them to start completely over. This is often useful in badging/certification use cases, but can be useful in any case where you simply want to create a clean slate for a candidate.

To retake an assessment that has been submitted, simply navigate to the candidate's assessment result and click the "Reopen or Retake" button. Make sure to select the "Retake the assessment" option.  
 
Once the retake has been scheduled, the candidate will be invited to take the assessment again. Once they start the second assessment result, the first assessment result data will be archived. Currently the Qualified UI does not have a way of viewing the previous result data, but it is stored without the database and can be accessed using the API. 

:::important Enabling Retakes
By default, this feature is disabled on your account, since it's not going to be used by everyone. If you'd like to use it, simply head over to your [team account management page](https://www.qualified.io/hire/account/team), turn on Enable Assessment Retakes, and click SAVE.
:::
 
