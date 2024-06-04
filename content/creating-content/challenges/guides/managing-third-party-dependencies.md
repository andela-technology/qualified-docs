---
title: Managing Third-Party Dependencies
summary: "A guide for best practices when using third-party dependencies in Qualified challenges and quizzes."
tags:
  - dependencies
  - maintenance
  - guides
---

# Managing Third-Party Dependencies

## Background

When creating a coding or quiz challenge in Qualified, it's common to use third-party dependencies either in the candidate (or student)-facing instructions or in the challenge code itself.

These dependencies are common points of failure for challenges. A dependency disappearing (permanently or temporarily) or changing unexpectedly can make a challenge impossible to complete, leading to a poor candidate or student experience.

As with a normal production codebase, third-party dependencies should be avoided when possible and managed carefully when unavoidable.

A good rule of thumb is to assume everything will disappear within a few years!

## Content Dependency Example

For example, a typical coding challenge may have the following dependencies:

- A technical diagram in the instructions used to illustrate a key concept
- A link to a specific React documentation or Wikipedia article in the challenge instructions to help provide a starting point for research
- An HTTP request made by tests to retrieve a JSON or CSV dataset
- A placeholder image in an HTTP file
- A script tag using a JSDelivr CDN hosting a JavaScript library
- A request to a public API endpoint

## Strategies for Managing Dependencies

Here are some strategies for managing the dependencies listed above.

### Static Assets

Datasets, images, scripts, stylesheets, fonts, SVGs and so forth can be copied to a public GitHub repository and served with raw GitHub, GitHub Pages, or a CDN. See [How to link files directly from Github (raw.github.com)](https://stackoverflow.com/questions/8779197/how-to-link-files-directly-from-github-raw-github-com) for details. Try to pin asset links to a particular release, version, branch or commit to avoid an update invalidating or removing a link.

Other hosts are possible, but the versioning, free price and reliability of GitHub are hard to beat. See [this repo](https://github.com/qualified/challenge-data) used by Qualified to host dependencies as an example. In it, we document when and where datasets were retrieved from.

### APIs

APIs can often be recreated in a simple form and hosted on a service like Google Cloud Functions. Often, data need not be accurate to real-world values or up to date, as long as it's plausible enough for the challenge's needs.

For example, a Qualified challenge used to rely on a third-party public currency conversion API that began requiring tokens, breaking the challenge. We created a simpler API from scratch, hosted as a Google Cloud Function. Our version had a couple of basic endpoints and returned one of a few JSON structures. The responses used seeded random numbers that were plausible-looking, but inaccurate as real historical conversion data. Our mock API provided all of the benefits of the third-party API, but was fully under our control, eliminating surprises and downtime.

Mocking APIs, even those under your control, is useful for tests, to ensure they're fully deterministic, execute quickly, and guarantee they won't experence network or downtime issues. We typically use the hosted API for Web Preview environments, useful as the candidate runs and experiments with their code in real time (although mocks can be useful there as well in some cases).

### CDNs

Many CDNs are safe to rely on: JSDelivr and UNPKG links for popular JS libraries, for example. For less-popular CDNs, or those with images, it generally can't hurt to host the library yourself.

Make sure to pin CDN versions rather than using "latest" semantics. Latest versions will likely fail as soon as a major version bump occurs.

### Documentation Links

Documentation links (for example, React or Angular framework documentation) tend to change every few years. While you likely won't want to back these up as they're generally non-critical to challenge completion, it's good to skim the insturctions and check these links whenever you update a challenge. Generally, if you're bumping a language or library version, it's time to update documentation links as well.

## Documenting Dependencies

For any third-party dependencies you choose to rely on, we suggest creating a file to track all of them in one place, listing dependencies along with each challenge name or id for easy access. A spreadsheet is one approach.

You can search your content exported from our API by the 'http' substring to help collect these dependencies.

## Recovering Dead Links

[The Wayback Machine](https://web.archive.org/) is a useful tool to help recover a key dataset or asset that may have disappeared abruptly. You can consider Wayback links permanent and likely more reliable than directly linking to an external resource. Wayback is sometimes subject to downtime, DDoS attacks, slowness, and extra metadata and banners that can be confusing to candidates, so it's not an ideal permanent host, however. It's generally better to host the asset yourself once you recover it from Wayback.
