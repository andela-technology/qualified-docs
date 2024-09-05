---
summary: 'Viewing, solving, and creating project code challenges'
bodyClass: 'employer-focused'
---

# Project Code Challenges

Project code challenges allow you to deeply test a candidate's skill using complete, realistic code bases. Unlike our [classic code challenges](/reference/features/challenges/code), these can only be created against a single language, but the advantage is your candidate is able to come up with more advanced solutions that show off their experience.

## Project-Code-Challenge-Specific Details

Project code challenges have many files per challenge, which you can view inside the challenge preview.

# Solving Project Code Challenges

The workflow for solving a project code challenge is:

1. The candidate reviews the instructions, and provided setup code.
2. They edit their solution using the online web IDE, modifying editable files, or adding new ones as necessary.
3. For front-end web challenges, candidates can use the **WEB PREVIEW** to see real-time rendering for their solution while editing.
4. At any time, they can use the **RUN TESTS** button to validate their solution. They can edit the provided test cases if they want to perform additional testing.
5. Using the **SUBMIT SOLUTION** button, their code is submitted against the submission test cases. **Unlike with classic code challenges, this result is never shown to the candidate.**
    - Even if they don't click **SUBMIT SOLUTION**, Qualified will still detect when they are done with the challenge and process their solution.
6. While they can't review the submission results, they are allowed to go back and edit their solution and re-submit it as long as the assessment itself has not been submitted. This could be if, for example, they had gotten stuck but thought of a solution and want to complete the challenge.

## Project Code Challenge Preview UI

You can open the solver for project challenges either by previewing an entire assessment, or using the **PREVIEW** button on a challenge.

This solver gives you the ability to test writing solution code, add or modify test cases for validating the solution, and preview the output. As it's a preview, there is also a button to preview the submission test cases, but these will never be shown to the candidate.

:::note
Within the preview window, nothing is saved, this is purely a way to quickly view how a challenge works.
:::

# Creating Project Code Challenges

You can create a challenge by using the **CREATE A CHALLENGE** menu in the Challenges sidebar, or you can use the **EDIT** or **DUPLICATE** buttons to modify an existing one.

## Editor UI

The project editor is more advanced than the classic code editor, and works more like a traditional IDE. You can open and close various pages and files, and re-arrange the UI by dragging tabs around.

## Previewing

You can preview a challenge before saving by using the **PREVIEW** button, or pressing <span class="shortcut-hint"><span class="mac-os-only" title="Command">&#8984;</span><span class="not-mac-os-only">CTRL</span> + P</span>. This will let you see how the challenge works as a candidate, including previewing scoring results. Pressing <span class="shortcut-hint"><span class="mac-os-only" title="Command">&#8984;</span><span class="not-mac-os-only">CTRL</span> + P</span> again will return you to the editor.

## Saving & Publishing

Once you are comfortable with the challenge you have entered, you can choose to **SAVE & PUBLISH** the challenge immediately. If you aren't ready to exit the editor, you can use the **Save Changes** option under the save button menu.

If you don't want to publish the challenge, you can keep it in the _Draft_ state by using **Save Draft** under the save button menu.

Publishing the challenge will also validate the challenge. This means each language will be submitted and run against your reference solution. This helps to ensure the quality of the challenge, but also enables our system to gather important baseline information, such as the total number of tests and other basic information about the challenge.

## Running Code

The editor can run your code for previewing output against either the candidate tests (those shown to the candidate) or the submission tests (those used for scoring). Use the **RUN CANDIDATE TESTS** and **RUN SUBMISSION TESTS** buttons respectively.

### Shortcut Key Commands:

- <span class="shortcut-hint"><span class="mac-os-only" title="Command">&#8984;</span><span class="not-mac-os-only">CTRL</span> + '</span>: Run the candidate tests.
- <span class="shortcut-hint"><span class="mac-os-only" title="Command">&#8984;</span><span class="not-mac-os-only">CTRL</span> + Enter</span>: Run the submission tests.

### Run Fileset

Normally, you'll want to run the tests against the [_Reference_ fileset](#reference-solution-files). This will allow you to test that your tests are all working as expected. Occasionally, you'll want to ensure the setup files _don't_ pass the tests. To do this, switch the _Run Fileset_ mode to _Project (Setup)_, which will not include any reference files in the solution.

## Challenge Config

### Description & Settings

This page provides all the general information about the challenge, such as title, summary, difficulty, and estimated time.

:::note
If you've imported a library challenge, it will be [**linked to the library version**](/reference/features/challenges/library/versions), and other options won't be editable until you unlink it.
:::

#### Basic Options

##### Enable public embedding this challenge

This option allows you to enable public [embedding](/integrations/custom-integrations/embed) for the challenge so candidates can work on it on an external page.

##### Challenge-Specific Time Limit

This option allows you to set a challenge-specific time limit, which will cause the challenge to be locked from further editing once a timer expires.

##### Allow Solving with SmartIDE

This option allows you to provide the candidate with Qualified's [smart in-browser IDE](/creating-content/challenges/smart-ide) with intelligent autocompletion, code inspections, and more.

#### Advanced Options

##### Validate reference solution against tests

This allows you to publish your challenge without a working solution. This may prevent accurate scoring if the system isn't able to determine total test cases.

##### Show Feedback on Submission

If enabled, the names of failed tests are shown to the candidate after submission.

##### Limit Submission Attempts

If enabled, the candidate will only be able to click Submit a limited number of times, after which the challenge will be locked from further editing.

##### Enable Candidates to Download Project Files

If enabled, candidates will be able to download a zip of all files within a challenge while taking an assessment.

### Instructions

This page provides a side-by-side Markdown editor that allows you to provide detailed instructions to the developer.

<div class="see-also-links">

* [Learn more about editing instructions](/reference/features/challenges/instructions)

</div>

### Run Configuration

Allows you to view the environment and adjust some properties of the runtime configuration for this challenge, such as enabled services or paths that are ignored during submission.

## Project Files

These are all the base files that make up a challenge. These are what are provided to the candidate so they can solve the challenge.

<div class="see-also-links">

* [Learn more about creating, editing, and configuring files](/reference/features/challenges/multi-file-code/files)

</div>

## Reference Solution Files

Reference solution files allow the code runner to validate your tests, as well as learn about the expected output from the tests. Any files provided in here are treated as files provided by a candidate, overriding (when allowed) the project files above.

If you want to preview which files are sent to the runner at any time, open the [Files Sent to Runner](#files-sent-to-runner) tab.

<div class="see-also-links">

* [Learn more about creating, editing, and configuring files](/reference/features/challenges/multi-file-code/files)

</div>

## Web IDE Tools

### Run Output

Open to see the output from running your code. It will automatically be opened if you use the **RUN** buttons.

### Web Preview

For challenges that target front-end web development, we provide a real-time, in-IDE preview panel. You and the candidate can use this to see how a solution renders, enabling visualization of HTML5 UIs such as those generated by React, Vue and Angular.

:::note
Please note that Web Previews require a somewhat specific project layout, so you may be restricted in how your challenge is designed. Using one of the Qualified templates is the best way to get started with your front-end challenge.
:::

:::caution
Web preview is sometimes confused with the test suite evaluated on Qualified's server upon submission. Web preview and the server are separate execution environments defined by their own `package.json` files. This means an app appearing to function correctly in web preview may not necessarily pass the submitted test suite.

To help guide candidates and students, we recommend including a brief note explaining that the web preview is not used for testing purposes.
:::

:::tip
If your candidates or students are encountering issues with web preview persistently crashing their tab due to an infinite loop in the solution code, you can send them their assessment URL with `?disablewebpreview` appended to the end.

This gives the candidate a chance to fix their solution code to remove the infinite loop before resuming the web preview.
:::

### Files Sent to Runner

This tab shows a listing of which files that will be sent to the runner based on which mode in use (_Run Fileset_ and Candidate vs Submission tests).

### Initial Layout

Use this tab to configure the default layout a candidate will see when opening a challenge for the first time. (Once they've started, we'll save their tab layout for them.)

You can drag-and-drop files & IDE tools between the sections to configure which ones are opened by default, as well as the initial order. The first item in each section will be selected by default.

### IDE Settings

Configure the IDE to your liking here.

### IDE Help

Inline help for the IDE.
