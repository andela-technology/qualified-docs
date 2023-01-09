---
summary: "Help for setting up Lever Integration with Qualified"
bodyClass: 'employer-focused'
---
# Lever

Qualified integrates with Lever's [Applicant Tracking System (ATS)](https://www.lever.co/candidates/) through their [Partner Program](https://www.lever.co/partners/). Assign a special tag to a job opening or candidate in Lever, and you'll be able to automatically:

- Send assessment invitations to candidates when transitioning to a specified stage on Lever
- Update candidates' tags based on their assessment progress
- Have assessment results updated on candidate notes

## Initial Setup

1. If your subscription includes ATS Integration features, simply visit the [integrations page](https://www.qualified.io/hire/account/integrations) and find the Lever integration section. Otherwise, contact Qualified's sales team to request access to this feature.
2. Click on the "Log In to Lever" button. You'll be redirected to Lever and asked to log in. Logging in will connect your account with Qualified. Afterwards, you'll be redirected back to the Integrations page on Qualified.
3. Once you're back on Qualified, click on the "Add Trigger Stage" button.

<figure style="max-width: 800px">

![Trigger Stage Setup](/images/hire/integrations/lever/add-trigger.png)

</figure>

On the pop-up that opens, you can choose which stage from your Lever account you want as a "Trigger Stage." Once candidates are transitioned to this stage, an assessment invitation will be sent to their email based on their tags. Note that you can only choose from Stages that already exist on your Lever Account.

<figure style="max-width: 800px">

![Trigger Stage Setup](/images/hire/integrations/lever/trigger-dialog.png)

</figure>

4. For the final step, go back to your Lever account and find the "Webhooks" tabs in the "Integrations and API" section of your account settings. Once there, a new webhook directing to Qualified should exist under "Candidate Stage Change." Enable "Candidate Stage Change" and you should be completely set up.

<figure style="max-width: 800px">

![Trigger Stage Setup](/images/hire/integrations/lever/enable-webhook.png)

</figure>

## Inviting a Candidate to take an Assessment
1. Once your account is linked, your "Trigger Stage" is set, and the webhook is enabled, you should be ready to automate assessment invitations.

2. Pay attention to the assessment title you invite candidates to take. 

<figure style="max-width: 800px">

![Trigger Stage Setup](/images/hire/integrations/lever/assessment-name.png)

</figure>

On Lever, add the assessment title as a tag on either the specific candidates or on a job whose candidates you want to take the assessment.

<figure style="max-width: 800px">

![Trigger Stage Setup](/images/hire/integrations/lever/tag.png)

</figure>

3. Once the tag is set, transition the Candidates to the "Trigger Stage" you selected during the Initial Setup. The candidate should be invited and the tag changed from "Assessment Title" to "Assessment Title - Invited". **Only candidates newly in this stage will be sent an invitation. Existing candidates will be skipped.**

4. Once a candidate starts the assessment, the tag should change to "Assessment Title - Started". Once a candidate submits the assessment, the tag should change to "Assessment Title - Submitted", and the assessment results will be added as a note on the candidate.
