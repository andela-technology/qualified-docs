---
title: Sending Assessments
order: 2
---

# Sending Assessments
There are two ways in which candidates get introduced into the system. Typically, candidates are invited to a specific assessment. The candidate will receive an email with a secure link they can use to start the assessment. A password is not required to start the assessment.

The second way is to set an assessment to be public. Through the public link you can send the URL alone, and have candidates start an assessment without an invitation. This bypasses using invitations completely and allows candidates to register themselves. 

:::tip
It is highly recommended that you keep your assessment private, and invite each candidate you wish to give access to. This will protect your assessment, as well as allow you to track if the candidate opens the email and clicks the link.
::: 

## Using Qualified's Invite System

There are two quick ways to get started inviting candidates with Qualified.

- Send a link through Qualified, which makes it extremely easy to get started
- Send an email manually to the participant, with your unique public link to your assessments

There are several advantages to inviting the developer through the Qualified email, including:

- **Track who's been invited:** Invited developers show up immediately, so you can easily see if you've already invited someone.
- **Re-send Invites:** Re-send invites with a single click on the candidate or student's details page.
- **Easier Login For Developers:** The developer will be given a special link that makes it quicker for them to get started.
- **Support Invite-Only Assessments:** Public-URL assessments can be shared between friends. If you use Qualified to invite your developer, you can configure an assessment to be invite-only.

In addition, if you are an API user, the [invitation API](/integrations/custom-integrations/api/#assessment-invitations-invite-candidates) can be used even if you do not intend to send emails directly through Qualified. 

### From Anywhere

![Invite Candidates Dialog](/images/hire/invite-dialog.png)

From anywhere within the app, you can click **INVITE CANDIDATE** in the upper-right to send an email through Qualified. This will bring up a dialog that lets you select an assessment, then add one or more candidates via email or selecting from previous candidates.

This dialog contains several features, depending on your account configuration, including:

- Inviting new & previous candidates & students.
- Send a copy of the email to yourself.
- Adding a custom message.
- Prevent candidates from starting an assessment until the assessment is unlocked.
- The ability to assign candidates or students to a particular team member.
- The ability to add a candidate to one or more labels.

:::info Invite Without Sending an Email  
You can disable sending the email, by unselecting _Send invitation to candidate now_.
This can be useful if you want to track invited participants, but don't want them to start yet. You can also use this if you'd rather send your own custom email. In this case, you can copy the Invite & Practice links from within the candidate's details.
:::


### From the Assessment Page

![ ](/images/hire/assessment-invite-candidate.png)

### Invite via Qualified

The details page for any assessment has a **INVITE CANDIDATE** button available for easily inviting a developer to a specific assessment.

## Public Assessments
If you wish to allow any candidate to register themselves for an assessment, without first needing to be directly invited, then you can set an assessment to be public.  

:::warning Billing Considerations
If you open up your assessment to be public, then anyone with the public URL will be able to take your assessment. This could result in unexpected costs as you may end up being billed for more candidates than you initially expected. Please keep this in mind when using this method, and protect the URL if you can. 
:::

### Enabling
To make an assessment public, simply click the "Make assessment public" link shown below the invite button. 

:::note
A candidate who reaches the assessment via a public link will only show up in your candidate list once they register for the assessment.
:::

### Sharing
Once this setting has been enabled, you will be provided a URL that you can use to share the assessment to anyone. 

![ ](/images/hire/invite-actions.png)

You will still be able to invite candidates privately, even if the assessment is public.

## Notifications

When you invite a developer to take an assessment, a notification may be sent out via email once the assessment is started, and again once it is submitted. By default, the assigned team members will receive notifications. If no team members are assigned, or your subscription does not include the team member assignment feature, then notifications will be sent only to the team members who have previously invited the developer to take an assessment. If the developer was not invited, but entered through an open assessment link, then up to 5 team members will receive the notification. The limit of 5 is there to prevent accidental spamming of your team member's inboxes.

**Note** that users who have their notification settings turned off for the assessment started and submitted events will not receive notifications. You can adjust these settings within your account notification settings.
