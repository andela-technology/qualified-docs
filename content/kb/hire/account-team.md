---
summary: "Help for configuring your Team's Settings, Users, and Billing Information"
bodyClass: 'employer-focused'
---

# Team Account

If you have owner or manager rights on the Team, you will be able to edit and manage the team's settings here.

<div class="note-box note-box-info">

To manage your log in information, see [Account](/kb/hire/account).

</div>

# <span class="icon-users"/> User Management

You can add, edit, and disable user accounts on this page.

## Inviting new Team Members

<figure>

![Invite new Team Members](/images/kb/images/hire/account-team-invite-team-member.png)

</figure>

Add one or more email addresses into the input field, then click **SEND INVITE**. Your coworkers will receive an activation email, which contains a link they must click before accessing their account.  This will give them a chance to add their name and a password as well.

## About Roles

#### Manager Seats
- **Account Managers** - Have permissions to do anything in the application.
- **Managers** - Restricted only in so far as they cannot edit other team members or manage billing on the account.

#### Reviewer User Seats
- **Reviewers** - These users are restricted to reviewing candidates only, they cannot manage team members, billing or invite candidates to new assessments.
- **Blind Reviewers** - These users are very similar to Reviewers except that they will see no personally identifiable information about the candidate. For instance, we only show them a codename for the candidates they review like "Purple Turtle". All other team members will have access to this codename so they can discuss the candidate freely without divulging identifiable information.

## Editing Users

<div>
<figure class="align-right half-scale">

![Editing Users](/images/kb/images/hire/account-team-edit-team-member.png)

<figcaption>Edit User Dialog</figcaption>
</figure>
</div>

Hover over the team member to see the **EDIT** button. This will bring up a dialog letting you edit their basic account information.

<div class="note-box">

**Note:** To edit your account information, use the [Account](/kb/hire/account) page instead.

</div>

<div class="no-clear-next"></div>

### Disabling Users

Hover over the team member to see the **DISABLE** button. Clicking on it will disable that account.

A disabled account will not be able to log in or access the site.  All of their feedback will be left as-is.

You can re-enable the account using the **ENABLE** button in the same location.


# <span class="icon-office"/> Team Profile

- **Name:** Change the team or company's name
- **Logo:** Change the team or company's name
- **Team/Product Pitch:** A long-form [markdown-enabled](/kb/general/markdown) description of your team or company.  Feel free to be expressive here, but make sure you keep the candidate's interest.  The candidate cares about why **they** want to work for **you**.


## Application Settings

Here you can customize how the Qualified Application works.

### Assessment Reviews Visibility

By default, all reviews are hidden from reviewers except their own. This helps to prevent accidental bias.

If you want your reviewers to be able to read through other team members' reviews, you can enable this here.

### Blind Reviewers: Post Decision

Blind Reviewers are a special role which anonymizes the name of candidates. 
This makes it possible to implement blind reviews and creates a more unbiased evaluation process. 

However you may not want users assigned to this role to always be blind to the candidate's real name. Its a common case that once
a candidate makes it passed the approved stage, that you may wish to dig deeper into the candidate's ability with an interact session.

Enable the "Real names once decided" option if you wish to "unblind" reviewers from seeing the candidate's real name once they are approved.


### Notification Scheme

Notification schemes are used to determine how team members will be notified about notifications within the system. 

The following options list the different types of schemes you can choose. The scheme chosen will be the default behavior associated with each assessment. You can also override the scheme within each assessment, which will change how the started/submitted notifications are sent. Candidate level notifications, such as approval and rejection, are only configurable via the team notification scheme.


- #### Entire Team
This is the default scheme. The entire team will receive notifications about all candidates. This scheme is ideal for smaller teams. Each user is able to further
filter notifications at their account settings level. For example if you want everyone to be notified, but someone on the team does not want to get "assessment started" notifications,
they can turn that off for only themselves.
- #### By Assigned Team Member
Only team members assigned to a candidate will get notified about events related to the candidate. If there is no one assigned, then the person who invited the candidate will be notified. 
- #### All Managers and Account Managers
Only Account Managers and Managers will receive notifications about candidates. Anyone who has either of these roles will receive a notification.
- #### All Account Managers
Only Account Managers will receive notifications about candidates. 
- #### All Managers
Only Managers will receive notifications about candidates. Account managers and any type of reviewer will not receive a notification. 
- #### All Reviewers and Blind Reviewers
Only Reviewers and Blind Reviewers will receive notifications about candidates. Anyone who has either of these roles will receive a notification. 
- #### All Blind Reviewers
Only Blind Reviewers will receive notifications about candidates. 
- #### No One
Notifications will not be sent out to team members, regardless of their personal notification preferences.

