---
summary: "Automation Workflows for Assessments"
bodyClass: 'employer-focused'
---

# Automated Assessment Workflows

Use simple yet powerful workflows to automate processing a candidate's assessment based on their score and timing.

These workflows can be used to automatically approve or reject a candidate, show a custom message, send them to a new assessment or external website, assign them to team members or labels, or even trigger custom webhooks.

> <i class="premium"></i> Some functions below are only available on with the Advanced Assessment Workflows feature.

## Getting Started

<figure>

![ADD A WORKFLOW Button](/images/hire/workflows-add-a-workflow.png)

</figure>

From the assessment details page, click the **ADD A WORKFLOW** button. This will take you to the assessment editor with the basic & default workflows ready to get started quickly.

## How Workflows Work

Workflows work by matching the against the score and/or timing of the assessment. They are matched in a top-down order as you see them on the page and only the first workflow to match is processed.

:::info
For example, if the top workflow is _WHEN Score is at least 50%_ and the second is _WHEN Score is at least 25%_, the second workflow will **never** be processed.
:::

### Default Workflow

At the bottom of the list is the _Default Workflow_. This workflow is only processed if none of the other match. If you have no other workflows enabled, the _Default Workflow_ will always be used. The default workflow can be useful if the Qualified Assessment is part of a larger hiring or education process to show custom messages or redirect the candidate to a different website.

### Basic Workflows

<figure>

![Basic Workflows](/images/hire/workflows-basic-collapsed.png)

</figure>

To make it easier to get started, basic approve and reject workflows are automatically added (but not enabled) to every assessment. These workflows have fewer options, but make it easy to get started with our automation process.

<figure>

![Basic Approve Workflow](/images/hire/workflows-basic-approve.png)

</figure>

To enable, click the slider or title, and add in a minimum or maximum score to trigger the workflow. Then enable one or more of the available options (see below for details).

:::note Note on _Send to Next Assessment_, _Mark candidate as…_, and _Send candidate to website_
These three options are interconnected. If you choose to send the candidate to a next assessment, you cannot set their status because they will be reset to _Invited_ automatically. You also cannot send them to a website since it would conflict with the next assessment.

Likewise, if you choose to set their status or send them to a website, you cannot send them to a new assessment.

You can, however, set both their status **and** send them to a website.
:::

> <i class="premium"></i> On custom plans, you can add more advanced options to the basic workflows by clicking _Show Advanced Conditions & Actions_.

### Custom Workflows <i class="premium"></i>

> Custom workflows are only with the Advanced Assessment Workflows feature.

<figure>

![Custom Workflow](/images/hire/workflows-custom.png)

</figure>

Click on **ADD CUSTOM WORKFLOW** to insert a new, custom workflow. These are more advanced workflows which can be triggered on high- or low-scores and/or slow- or fast-timing.

You can give your custom workflow a name to help you keep track of the purpose of it. Custom workflows have the all of the same actions available to them as basic workflows, including all the advanced actions.

:::note
If you add a custom workflow and do not use the basic workflows, they won't show up by default the next time you edit the assessment. You can add them back in at any time using the **RESTORE BASIC WORKFLOWS** button.
:::

### Rearranging Workflows

<div>
<figure class="align-right">

![Drag Handle](/images/hire/workflows-drag-handle.png)

</figure>
</div>

The order matters since the first workflow to match is the one that is processed. Use the drag handle on the right side of the workflow to drag the workflow up or down to re-arrange them.


# Automation Recipes

Below are a few examples which can be used as recipes to help you get started with automated workflows.

> <i class="premium"></i> Recipes marked with a star can only be configured with the Advanced Assessment Workflows feature.

## Automate Candidate Categorization

You can easily approve, reject, and add labels to candidates based on score.

### Automatically Approve Candidates

1. Enable the **Basic Approve Workflow**
2. Set the minimum score
3. Enable _Mark as Approved_

### Automatically Reject Candidates

1. Enable the **Basic Reject Workflow**
2. Set the maximum score
3. Enable _Mark as Rejected_

### Automatically Add Candidates to Labels

- For default label assignment (when not matching the score):
    1. Enable the **Basic Approve Workflow**
    2. Enable _Add to labels_ and enter any labels you want to add
    
- For label assignment based on score: <i class="premium"></i>
    1. Enable the **Basic Approve Workflow** or **Basic Reject Workflow**
    2. Set the minimum or maximum score
    3. Click _Show Advanced Conditions & Actions_
    4. Enable _Add to labels_ and enter any labels you want to add
    
:::note
Only the first matching workflow is processed. If you want to include the same label in the default workflow and in an approve or reject workflow, you'll need to copy it into each step.
:::

## Integrate Qualified into a Hiring Process

If you have an existing hiring process, and would like to integrate Qualified in the middle, one solution would be to use an automated workflow to send the candidate back to the external process after they complete.

1. First, unless you have API access configured on your account to automate invitations, you'll need to disable _Invite Only_ on the assessment
    - Click on _General Info & Settings_
    - Then click _Invitation Settings_
    - Uncheck _Invite Only_
    - Click **SAVE**
2. In your application process, send the candidates to the shareable link now visible on the assessment page.
3. Enable the redirect back to your process:
    - If you **always** will send the candidates to the same URL
        1. Enable the **Default Workflow** by clicking the slider
        2. Enable _Send candidate to website_
        3. Add the website or page to return to after the assessment is complete
    - If you want to send **passing** candidate to a different URL
        1. Enable the **Basic Approve Workflow**
        2. Set the minimum score
        3. Enable _Send candidate to website_
        4. Add the website or page to return to after the assessment is complete
    - If you want to send **failing** candidate to a different URL
        1. Enable the **Basic page Workflow**
        2. Set the maximum score
        3. Enable _Send candidate to website_
        4. Add the website or page to return to after the assessment is complete
    
  In all cases above, you can also add a custom message to be shown alongside the redirect explaining what's happening. Otherwise, the redirect will automatically trigger after a few seconds.

## Send successful candidates to the next assessment

You can easily have the candidate move through several assessments based on if they are successful.

1. Enable the **Basic Approve Workflow**
2. Set the minimum score
3. Enable _Send to next assessment_ and select the next assessment from the list

## Send unsuccessful candidates to another assessment for further evaluation <i class="premium"></i>

You can use automation to further test candidates who may have struggled with an assessment, enabling you to find candidates who may have struggled with part but are still overall a success.

1. Enable the **Basic Reject Workflow**
2. Set the maximum score to be considered failing
3. Click _Show Advanced Conditions & Actions_
4. Enable _Send to next assessment_ and select the next assessment from the list

## Assign Team Members to evaluate candidates <i class="premium"></i>

Use _Assign to team members_ to ensure that the right team members are reviewing each candidate.

### Assign the same team members every time

1. Enable the **Default Workflow**
2. Enable **Assign to team members** and add the team members

### Assign different team members based on score

This could be useful if, for example, you only want to have a developer evaluate a candidate who performed above a certain level, otherwise you want your recruiting team to handle rejecting the candidate without further review.

1. Enable the **Basic Approve Workflow** and/or **Basic Reject Workflow**
2. Set a minimum or maximum score
3. Click _Show Advanced Conditions & Actions_
4. Enable **Assign to team members** and add the team members
