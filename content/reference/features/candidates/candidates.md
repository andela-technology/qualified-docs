---
description: "Review and filter assessment results"
title: Candidates
---

# Reviewing Assessment Results

Once you have some assessment results, you can begin the process of filtering, reviewing, approving and rejecting them.

# Candidate/Student List

Clicking on **Candidates** or **Students** shows you a sortable, filterable list of the developers who have taken an assessment.

## Filtering
<img alt="Candidate or Student List Filters" src="/images/hire/candidates-list-filters.png" class="align-right" id="candidate-list-filters-image">

You can quickly narrow down this list to the candidates or students you are most interested in using the filters on the left side of the app.

- You can search, which is a great way to find a specific person by name or email.
    - You can clear the search filter by clicking the <kbd class="icon-x"></kbd> button.


- Selecting from the list of states (_Inbox_, _Current_, _Started_, etc) quickly narrows down developers by where they are in the process.
    - The default is _Inbox_, which includes anyone who has not been rejected or archived.
    - _Current_ and the filters below it show you anyone you are still working on.
    - _Archived_ lets you find anyone you've marked as archived because you are no longer working on them.
    - The number next to each state shows the number of **matching** candidates based on other filters, including your search text.


- The filters below that allow you to narrow even further by picking a specific assessment, and filtering out team members, and more based on the features on your account.
    - If you select a filter, clicking _Clear All_ will clear the all of those filters for you.
    - **Labels** are defined by you and your team, and can be used to group candidates and students however works best for you. For example, you might want to group students by semester, such as _Summer 2017_.
    - **Assigned To:** Depending on your account configuration, you may have the ability to assign candidates or students to one or more team members.
    - **Reviewed By:** Depending on your account configuration, your team may have the ability to provide manual reviews of candidates or students.
    - **Assessments:** Select an assessment to limit the results to candidates or students who have taken a specific assessment.
    - **Interact Session Only:** You can filter results to only show those that have had at least one Interact Session.
    - **Hide Team Members** can be useful if your team has been testing assessments.

## Sorting

<div>
<figure class="align-right">

![Candidate/Student List Sorting](/images/hire/candidates-list-sorting.png)

<figcaption>Clicking on the column headers sorts the list</figcaption>
</figure>
</div>

You can click the headers above the columns to reorder the list of developers.  By default, the list is sorted by score, then by recent activity, so you see your best and most recently active candidates or students first.

## Editing Multiple Candidates at Once

You can select multiple candidates using the checkboxes on the candidates list to quickly make changes.

* [Bulk Editing](/for-teams/candidates/bulk-editing)

## Default View

![Default View](/images/hire/default-view.png)

Checking this box saves the current searching, filtering, sorting, and page count information and stores it as your default view when switching back to the Candidates/Students list.

Uncheck the box to revert to the generic default view without any searching, filtering, sorting, and the default page count.

## Pagination

![Pagination](/images/hire/paginator.png)

If you have a lot of developers on screen, you will be able to flip between pages of them using the paginator at the bottom.

# Candidate/Student Details View

Click on a developer's name to switch to the _Candidate/Student Details View_. This page allows you to see all the information that has been collected about a developer in one place.

:::tip
The left hand side of this screen allows you to quickly navigate between developers, and retains the filters you've applied from the previous page.
:::

## Status & Actions

You can change the candidate's status through the action buttons at the top.  You can also invite a candidate to take a new assessment.

The candidate's current status in the assessment process is **bolded**.

<figure>

![Candidate Actions](/images/hire/candidate-actions.png)

<figcaption>Some of the actions available on a candidate</figcaption>
</figure>

:::tip
You can use [bulk editing](/for-teams/candidates/bulk-editing) to manage multiple candidates at once.
:::

### Labels

You can put any candidate or student into one or more labels, which can help with sorting and managing large lists of developers.

### Team Member Assignment

If enabled on your account, you can assign one or more team members to be responsible for reviewing a developer's results.

### Notes

If enabled on your account, you can add overall notes about a candidate or student. There can be multiple notes per developer, and these are for your internal use. Unlike reviews (explained later), these are not intended to be specific to the individual assessment results.

## Assessments

At the bottom you'll find a tabbed section that contains all the details about the assessments taken by the developer.

Each assessment is in it's own tab, and you can switch between them by clicking the title.  The icon next to the tab shows you the status of the assessment: _Started_ (<span class="icon-status-new"></span>) or _Submitted_ (<span class="icon-status-done"></span>). If an assessment was interactive, you'll see an Interact icon (<span class="icon-interact-session"/>) as well.

Each assessment includes a list of the solutions within that assessment.  You can quickly see how well the developer did on a particular challenge within that table, or click on the title of a challenge to jump down to learn more about their solution.

:::tip Stats
<div>
<figure class="align-right half-scale">

![Assessment Result Stats](/images/hire/stats.png)

</figure>
</div>

The overall score and individual challenge scores and timing will include statistical charts once you've had enough candidates
run through the system. If the challenge is from the Qualified, you'll often see the global results as well.

The stats show up as a micro chart. To get more detailed information, click on the micro chart and you can see more details.

:::

### Reviews

<div>
<figure class="align-right">

![Candidate/Student List Sorting](/images/hire/start-review.png)

</figure>
</div>

If your account supports it, you can create a complete review of the entire candidate's assessment. Clicking on **START A REVIEW** will walk you through the process of reviewing each solution as well as providing an overall score.

:::note
Reviews are for internal use only, and are never sent to the candidate.
:::

### Abandoned Assessments

Qualified will help detect when an assessment has been likely abandoned by a candidate. This happens when a candidate is on an untimed test and they leave without submitting.

In these cases, there will be a notification underneath the candidate's assessment details letting you know it's potentially abandoned and that you can mark it as submitted for the candidate.

### Solutions Summary

<figure>

![Challenge Details](/images/hire/candidate-solution-summary.png)

</figure>

Next you'll find the solutions summary. Each challenge in the assessment will be listed in this table, along with the automated score, a statistical breakdown, and timing information. You can click on the title of the challenge to jump down to see more details about the solution.

### Solutions

<figure>

![Challenge Details](/images/hire/candidate-solution.png)

</figure>

Each solution includes more detailed information stats, scoring, here, and enables you to quickly see the candidate's solution.

- If you have reviews enabled, this is also where you'll see a summary of the review results.
- To see their solution or answers, click on _Show Solution Code_ or _Show Solution Answers_.
- If the candidate has left any notes about their solution, click _Show Candidate Notes_ to view them.

For complete technical details on each solution, including code playback & test suite results, [click on **SOLUTION DETAILS** to open up the complete history for this solution.](/for-teams/candidates/solutions)

* [Solutions](/for-teams/candidates/solutions)
