---
title: "Project Challenge: Files"
summary: "Reference for editing files on project challenges"
tags:
  - challenges
  - project
bodyClass: 'employer-focused'
---

# Project Challenges: Files

A project challenge is built out of one or more virtual files. The file structure is mostly open-ended, with some restrictions to accommodate our code runner.

## File Commands

Each file will have various commands associated with it, such as rename, delete, or configuring access levels. Most file commands are in 3 ways:

- If the file is open, they will be available directly in the file editor's toolbar
- Use the file menu button inside the file tree. When hovering over a file, it will either be a menu icon (<span class="icon-actions-menu"></span>) or the access icon if the access has been changed. ([See below](#access-level))
- Right-click on the file name in the file tree, which will bring up the file menu.

# Basic File Editing

## Opening Files

Click on a file in the file tree to open its editor.

## Creating Files & Directories

There are several ways you can create or add files to our IDE:

- In either the _Project Files_ or _Reference Solution Files_ tree, use the plus icon (<span class="icon-plus"></span>) to create a new file or directory.
- Use the **Duplicate** (<span class="icon-duplicate"></span>) action from the file commands.
- **Drag-and-drop files** from your system directly into the IDE. You can drag in single files, groups of files, or even complete file trees.

## Moving and Renaming Files

You can move or rename a file using the **Rename** (<span class="icon-substitute"></span>) action from the file commands.

To move a file to a different folder, simply change its path in the rename dialog.

## Deleting Files

You can delete a file using the **Delete** (<span class="icon-trashcan"></span>) action from the file commands.

A deleted file is moved to _Deleted Files_. You can undelete the file from this location if it was a mistake.

<div class="note-box not-box-warning">
Files in this section are only saved until the page is reloaded.
</div>

# File Configuration

There are several options available to customize how files work for the candidate. Use these customizations to help provide an optimal testing experience for your candidate.

## Access Level

The access level affects the editability and visibility of a file for the candidate. By changing this value, you can create files that are read-only, unreadable, or even completely hidden. These changes can be both for reducing complexity (by removing the amount of variable content for the candidate), and improving submission test quality (by hiding content we don't want the candidate to see).

### Read/Write

This is the default, and highest level of access. A **Read/Write** file is fully editable by a candidate—including being able to delete or move the file. Unless explicitly excluded, these files will be included on both candidate and submission tests, and are the primary source for solving challenges.

<div class="note-box">
For directories, read/write is the only option that lets candidates add new files under it. It can be useful to disable read/write access on entire directories where you don't want the candidate to change files.
</div>

#### Deletable

This option is only available for read/write files. If unchecked, the file cannot be deleted or renamed. The candidate can still edit this file.

This can be useful when you want the candidate to focus on correcting or improving a file, but not to worry about file names or breaking tests.

### Read Only

A **Read-Only** file is fully visible to the candidate, but they cannot change its contents. These have many uses:

- Documentation or other content only provided for visibility.
- Tests that you would like to show the candidate, but do not want them to be able to edit. These could be base tests that you want to make sure the candidate doesn't accidentally overwrite, or even tests that are part of the submission tests.
- Library code you don't want the candidate to modify, which might represent 3rd party libraries or existing application code that shouldn't be modified.

<div class="note-box">
Note that directories can be marked as read-only, which prevents files from being added to them without preventing editing read/write files. This can be a useful technique for helping to define the application structure without being overly strict.
</div>

### Restricted

If a file is part of the test, but you don't want the candidate to view its contents, **Restricted** provides the ability to have a file or directory that's visible within the IDE, but its contents are completely hidden. Directories will not be able to be expanded, and files will not be openable.

Use cases here include:

- Hidden tests that we want to identify as existing, but not let the candidate view. This would be similar to how [classic code challenges](/for-teams/challenges/code) handle submission tests.
- Creating virtual 3rd-party services such as "remote" APIs where the inner workings are not visible to the candidate.
- Hiding content that otherwise may give away the solution, but we want the candidate to be aware the file exists (so they don't try to overwrite it).

### Hidden

A fully **Hidden** file or directory never shows up in the UI for the candidate. If they accidentally try to create a file that overlaps with a hidden file or directory, they'll get an error message about it being a restricted path, without any more information.

It's not often recommended to have fully hidden files or directories, as this can lead to a not entirely realistic testing environment. However, there are a few cases where fully hiding a directory or file make sense:

- If we have a large internal dependency and it would just be noise, and unlikely the candidate would write to that directory.
- If we want to hide a lot of submission tests from the UI. In this case, it's recommended to place all the submission tests inside a sub directory, and hide that directory.

## Run/Submit Options

A few other options are available to files for improving the testing experience and assessment results.

### Include on candidate tests & Include on submission

These options define when to send a file to the code runner. (Empty directories are never sent to the code runner.)

Both options are enabled by default, which means the file will always be included when running code.

- If a file is not part of the code solution, such as documentation, you can uncheck both options to not bother sending it.
- Uncheck **Include on candidate tests** if you don't want the file to be included when a candidate is running their tests. This could be because it's a set of tests for submission only.
- Uncheck **Include on submission** if you don't want the file to be included when submitting the solution. This may be because it's candidate-editable tests, and we don't want their tests to affect the final score. See also [Submission Ignore Paths](#submission-ignore-paths) for more ways on limiting how a candidate can affect the results.

### Go to/Create Reference/Project File

Use this action (<span class="icon-compare"></span>) to quickly create or toggle between reference and project files. Depending on your workflow, it may be faster to build the reference solution file first, then once all the tests are passing, create the project file and remove the working code. Or you may prefer to work in the opposite manner.

### Submission Ignore Paths

Under _Run Configuration_ is an option to add one or more **Submission Ignore Paths**. These paths are regular expressions that override any [Access Level](#access-level) by allowing you to ignore edits & new files made by candidates during their submission.

Using submission ignore paths allows the candidate to create files that can help them test their code—such as additional unit tests or specs—without affecting the submission scoring process.

The way they work is any candidate-created file that matches an ignore path is not included in the runtime files. If a _Project File_ matches an ignore path, the original, unedited _Project File_ will be used instead of the candidate modified one.
