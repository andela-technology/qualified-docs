---
title: Upgrading Language Versions
summary: "Upgrading Language Versions"
tags:
  - deprecation
  - maintenance
order: 5
---

# Upgrading Language Versions

## Overview

Qualified supports dozens of _language versions_ in our code runner. A language version determines the syntax, features and pre-installed packages that candidates will have access to when attempting a coding challenge. Examples of language versions are Java 8, Java 11, Node 14, Node 18, Ruby 3.0, etc. Every challenge has an associated language version.

As time passes, older language versions grow increasingly outdated and decline in relevance and fitness, both for application development in general as well as for use in assessing candidates. This poses a maintenance burden for teams using challenges with outdated languages.

In most cases, candidates expect to be able to use modern syntax, recent language features and updated packages during an assessment. This holds even when applying to positions that involve legacy technologies.

Qualified generally keeps language versions and test suites updated within our library. However, many teams have built custom challenges or modified a Qualified library challenge and unlinked it from receiving updates. Responsibility for keeping such content updated rests on the team.

In most cases, it's unintentional to use challenges with outdated languages, and the situation can go unnoticed by teams until candidate feedback arrives.

## Example

Here's an example of an upgrade scenario.

A team is assessing candidates using a challenge running an outdated language version, Node 10.x, released in 2019. During the assessment, a candidate attempts to use the `.flat()` function to flatten a nested array, but receives `TypeError: [].flat is not a function`. This causes unnecessary friction, forcing the candidate to spend time identifying a workaround for a now-ubiquitous language feature that they expected to have access to.

After the candidate reaches out to the team, the team's content manager takes action and upgrades the challenge to Node >= 12.x, which supports `.flat()`.

The simple scenario described above may not be isolated to one language feature. The effect is compounded the older the language version is, both in terms of the potential for impacting the assessment experience for candidates, as well as the difficulty in upgrading the challenge for the team's content manager. Adding a library like React into the mix widens the technology gap, since most of the application's code may consist of API calls which can change dramatically from one library version to the next.

## Upgrade Process

Most upgrades are straightforward, a matter of choosing the new language from the challenge edit screen or project code challenge configuration menu. However, breaking changes are possible. Some upgrades can involve manual technical work to upgrade the code to work in the target version. Consult the documentation for your language, packages, and our [language documentation](/reference/languages) for guidance.

## Deprecation Process

When Qualified adds a new language version, older language versions are marked as deprecated in our user interface. Deprecated language versions should be upgraded to a more recent language version, preferably the latest. We'll keep deprecated languages around for awhile, but when language versions are over 4 years out of date, we may retire them. We'll contact teams with affected challenges in advance of any retirements.

As a stage in-between marking a language as deprecated and retirement, we may disable it in the language version selection dropdown. It'll still work if already selected, but won't be able to be chosen for a challenge otherwise.

## Upgrade Support

Feel free to reach out to our support team if you have any concerns or need help or guidance in upgrading language versions.
