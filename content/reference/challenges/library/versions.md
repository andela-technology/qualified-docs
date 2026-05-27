---
title: "Challenge Versions"
summary: "Semantic Versioning system for Qualified Challenges"
tags:
  - challenges
  - versions
bodyClass: 'employer-focused'
---

# Semantic Challenge Versioning

This article explains Qualified's challenge semantic versioning system, which is used to keep a history of challenge updates as well automatically broadcasting updates to challenges where applicable.

## Versioning Overview

Qualified uses the semantic versioning scheme for its challenges, where there are three integer values representing the major, minor and patch versions respectively. For example a challenge on major version 1, minor version 2, patch version 3 would show version **1.2.3**.

## Automatic Updates

If you import (or have imported) your challenges from Qualified, you will be able to select the option to automatically update your challenge whenever a minor change or a patch change to the Qualified challenge occurs.

If a challenge is linked to a Qualified version, it can configure the level of updates it would like to receive at the top of the Challenge Editor:

<div>
<figure>

![Receive automatic challenge updates from Qualified](/images/hire/automatic-updates.png)

</figure>
</div>

While Automatic Updates are configured, you cannot modify the contents of the challenge. You are free to make changes to some of the basic fields, but code, questions, and advanced options are linked to the current library challenge.

### Disabling Updates & Enabling Editing

If you would like to customize the imported challenge, you can choose to **Disable Automatic Updates**, which will unlink the challenge from the Qualified Challenge Library.

Please note that this cannot be undone once the challenge is saved, as re-linking the challenge will overwrite any changes you make.


## Update Types

### Major Updates

Major changes create a new forked challenge and the changes are breaking enough that switching will affect the candidate's scoring, so it is not an option to automatically upgrade to major versions.

Major changes for **Classic Code Challenges** include:
 - Removing a language implementation
 - Updating test cases where the challenge taker's stats could be affected
 - Updating a language implementation's version in a breaking way, where old solutions may not work
 - Updating a language implementation's test framework
 
Major changes for **Project Code Challenges** include:
  - Changes to the file structure that would affect the results
  - Updating test cases where the challenge taker's stats could be affected
  - Updating the language version in a breaking way, where old solutions may not work
  - Updating the test framework

Major changes for **Q&A Challenges** include:
 - Adding a new question
 - Removing a question
 - Modifying a question where it affects scoring

### Minor Updates

Minor changes are generally reserved for changes that will affect the user experience in some way, potentially making it slightly easier or more difficult. These will not affect scoring or stats directly.

Minor changes for **Classic Code Challenges** include:
 - Editing Instructions that will may affect comprehension
 - Adding a Language, which is disabled by default
 - Changing the functionality of Test Cases to handle additional edge cases
 - Updating the Reference Solution
 - Changing a language version in a non-breaking way
 
Minor changes for **Project Code Challenges** include:
 - Editing Instructions that will may affect comprehension
 - Changing the functionality of Test Cases to handle additional edge cases
 - Updating the Reference Solution
 - Changing the language Version in a non-breaking way

Minor changes for **Q&A Challenges** include:
 - Modifying the wording of a question that may affect comprehension

### Patch Updates

Patch changes for **Classic or Project Code Challenges** include:
 - Modifying the instructions in a way that will not likely affect comprehension
 - Updating Test Case error messages

Patch changes for **Q&A Challenges** include:
 - Modifying the instructions
 - Modifying a question in a way that will not likely affect comprehrension
