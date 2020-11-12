---
summary: 'Viewing, solving, and creating classic code challenges'
bodyClass: 'employer-focused'
---

# Classic Code Challenges

Classic code challenges are the core skill-testing component of a Qualified assessment. They are available to take in multiple languages, while still providing detailed, advanced testing based on a full unit testing suite.

## Classic-Code-Challenge-Specific Details

Classic code challenges include the ability to view the instructions and code for a specific language by clicking through the language tabs.

# Solving Classic Code Challenges

The workflow for solving a classic code challenge is:

1. The candidate reviews the instructions, and setup code
2. They edit their solution, and use the **RUN TESTS** button to validate their solution
3. They can edit the test cases if they want to perform additional testing
4. Using the **SUBMIT SOLUTION** button, their code is submitted against the submission test cases, and they can review the output
5. They can repeat from step 2 as needed until they are satisfied with their solution, or the time runs out

## Classic Code Challenge Preview UI

You can open the solver for classic code challenges either by previewing an entire assessment, or using the **PREVIEW** button on a challenge.

This solver gives you the ability to test writing solution code, add or modify test cases for validating the solution, and preview the output.

:::note
Within the preview window, nothing is saved, this is purely a way to quickly view how a challenge works.
:::

# Creating Classic Code Challenges

You can create a challenge by using the **CREATE A CHALLENGE** menu in the Challenges sidebar, or you can use the **EDIT** or **DUPLICATE** buttons to modify an existing one.

## Previewing

You can preview a challenge before saving by using the **PREVIEW** button, or pressing <span class="shortcut-hint"><span class="mac-os-only" title="Command">&#8984;</span><span class="not-mac-os-only">CTRL</span> + P</span>. This will let you see how the challenge works as a candidate, including previewing scoring results. Pressing <span class="shortcut-hint"><span class="mac-os-only" title="Command">&#8984;</span><span class="not-mac-os-only">CTRL</span> + P</span> again will return you to the editor. 

## Saving & Publishing

Once you are comfortable with the challenge you have entered, you can choose to **SAVE & PUBLISH** the challenge immediately. If you aren't ready to exit the editor, you can use the **Save Changes** option under the save button menu.

If you don't want to publish the challenge, you can keep it in the _Draft_ state by using **Save Draft** under the save button menu.

Publishing the challenge will also validate the challenge. This means each language will be submitted and run against your reference solution. This helps to ensure the quality of the challenge, but also enables our system to gather important baseline information, such as the total number of tests and other basic information about the challenge.

## Editor Sections

The following sections are available:

### Description & Settings

This page provides all the general information about the challenge, such as title, summary, difficulty, and estimated time.

:::note
If you've imported a library challenge, it will be [**linked to the library version**](/for-teams/challenges/library/versions), and other options won't be editable until you unlink it.
:::

### Challenge Instructions

This page provides a side-by-side Markdown editor that allows you to provide detailed instructions to the developer.

<div class="see-also-links">

[Learn more about editing instructions](/for-teams/challenges/instructions)

</div>

### Languages

Each classic code challenge needs one or more language sections.  You can have as many as you like.

:::tip
[Click here to learn more about the available languages and environments in Qualified.](/languages)
:::

If you are starting from a blank challenge, or want to add a new language, click **ADD LANGUAGE** to choose a language to add.

<div class="see-also-links">
 
[Using the challenge editor IDE](/for-teams/challenges/code/lang)

</div>

### Language Generator

Qualified offers the ability to generate classic code challenge languages from a single configuration file. This works particularly well for algorithmic challenges whose concepts transcend the language used.

<div class="see-also-links">

[Learn more about language generation](/for-teams/challenges/code/language-generator)

</div>
