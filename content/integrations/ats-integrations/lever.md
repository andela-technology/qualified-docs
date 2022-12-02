---
summary: "Help for setting up Lever Integration with Qualified"
bodyClass: 'employer-focused'
---
# Lever

Qualified integrates with Lever's [Applicant Tracking System (ATS)](https://www.lever.co/candidates/) through their [Partner Program](https://www.lever.co/partners/). Assign a special tag to a Job Opening or candidate in Lever, and you'll be able to automatically:

- Send Assessment invitations to Candidates when transitioning to a specified stage on Lever
- Update Candidates' tags based on their Assessment progress
- Have Assessment results updated on Candidate notes

## Initial Setup

1. If your subscription includes ATS Integration features, simply visit the [integrations page](https://www.qualified.io/hire/account/integrations) and find the Lever integration section.  Otherwise, contact Qualified's sales team to request access to this feature.
2. Click on the "Log In to Lever" button. You'll be redirected to Lever and asked to log in. Logging in will connect your account with Qualified. Afterwards, you'll be redirected back to the Integrations page on Qualified.
3. Once you're back on Qualified, click on the "Add Trigger Stage" button. On the pop-up that opens, you can choose which stage from your Lever account you want as a "Trigger Stage." Once Candidates are transitioned to this stage, an Assessment Invitation will be sent to their email based on their tags. Note that you can only choose from Stages that already exist on your Lever Account.
4. For the final step, go back to your Lever account and find the "Webhooks" tabs, in the "Integrations and API" section of your account Settings. Once there, a new webhook directing to Qualified should exist under "Candidate Stage Change." Enable "Candidate Stage Change" and you should be completely set up.

## Inviting a Candidate to take an Assessment
1. Once your account is linked, your "Trigger Stage" is set, and the webhook is enabled, you should be ready to automate Assessment Invitations.

2. Take note of the Assessment Title you want to invite Candidates to take. On Lever, add the Assessment Title as a Tag on the candidates or job whose candidates you want to take the Assessment.

3. Once the Tag is set, transition the Candidates to the "Trigger Stage" you selected during the Initial Setup. The candidate should be invited and the tag change from "Assessment Title" to "Assessment Title - Invited". **Only Candidates newly in this Stage will be sent an invitation, existing candidates will be skipped.**

4. Once a Candidate starts the Assessment, the Tag should change to "Assessment Title - Started". Once a Candidate submits the Assessment, the Tag should change to "Assessment Title - Submitted", and the Assessment Results will be added as a note on the Candidate.

## Integration Details
**Every 15 minutes, we'll check BambooHR for updates** regarding your available Job Openings and Applicant Statuses.  During this interval, we'll send Assessment Invitations that have been triggered.

We will immediately update Applicants' Statuses in BambooHR when the Candidate starts or completes an Assessment, and when they are approved or rejected.  We match Applicants to Candidates using their email address.  BambooHR will indicate that these updates were performed by the user who completed the BambooHR integration setup.
