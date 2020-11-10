---
summary: "Help for setting up BambooHR Integration with Qualified"
bodyClass: 'employer-focused'
---
# BambooHR

Qualified integrates with BambooHR's [Applicant Tracking System (ATS)](https://www.bamboohr.com/applicant-tracking/) through their [Marketplace](https://marketplace.bamboohr.com/). Connect a Qualified Assessment to a Job Opening in BambooHR, and you'll be able to automatically:

- Send Assessment invitations to Applicants based on their Status within BambooHR
- Transition Applicants to a new Status when they start or complete an Assessment
- Transition Applicants to a new Status when approved or rejected in Qualified

## Initial Setup

1. If your subscription includes ATS Integration features, simply visit the [integrations page](https://www.qualified.io/hire/account/integrations) and find the BambooHR integration section.  Otherwise, contact Qualified's sales team to request access to this feature.
2. Enter your BambooHR account subdomain into the form.  This is the portion of the URL you use when accessing your team's information in BambooHR.
3. You'll be redirected to BambooHR and asked to log in.  This is the final setup step, and it will connect your account with Qualified.  Afterwards, you'll be redirected back to the Integrations page on Qualified.

## Assessment Configuration
1. Now that you've linked your accounts, you can view configuration for BambooHR when editing any of your Assessments.  Select an Assessment and click "edit."  BambooHR triggers are only active for published Assessments, but you can set your configuration prior to publishing.

2. Navigate to the BambooHR configuration page for this Assessment by clicking the link on the left side of the screen.
    <figure style="max-width: 800px">
    
    ![Assessment Config](/images/hire/integrations/bamboo/assessment-config.png)
    
    </figure>

3. At the top of this page, select the Job Opening in BambooHR you wish to associate with this Assessment.  Only applicants for this Job Opening will be checked when evaluating the automatic triggers below.  Job Openings must either be Open or Draft state to appear in this list.  Please note, data is synchronized between BambooHR and Qualified in 15 minute intervals. If the Job Opening you wish to select isn't there, verify that it's in the Draft or Open state and check again after some time has passed.
    <figure style="max-width: 800px">
    
    ![Job Selection](/images/hire/integrations/bamboo/job-selection.png)
    
    </figure>

4. If you wish to automatically invite Applicants for this Job Opening to this Assessment, select a Status an Applicant must be in to be sent an invitation.  **Only Applicants newly assigned this Status will be sent an invitation, existing applicants will be skipped.**

5. If you would like an Applicant's Status in BambooHR to change when they start or submit an Assessment, or if they are marked as "approved" or "rejected" in our system, select the Status they should change to in the appropriate field.  

## Integration Details
**Every 15 minutes, we'll check BambooHR for updates** regarding your available Job Openings and Applicant Statuses.  During this interval, we'll send Assessment Invitations that have been triggered.

We will immediately update Applicants' Statuses in BambooHR when the Candidate starts or completes an Assessment, and when they are approved or rejected.  We match Applicants to Candidates using their email address.  BambooHR will indicate that these updates were performed by the user who completed the BambooHR integration setup.
