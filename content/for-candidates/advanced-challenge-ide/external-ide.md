---
title: "Use Your Own IDE"
summary: "Use your own desktop IDE or editor to solve a challenge"
tags:
  - external
  - ide
  - attach
order: 2
---

# Code Challenge Solver: Use Your Own IDE

Qualified supports using your own IDE (or any other file editor) for solving certain challenges when it has been enabled by the team providing the challenge. This enables you to have the benefits of both using your own, preferred development environment, while also avoiding dealing with setting up and getting an application running on your own system.

## How it works

Using a [small node terminal app called Attach](https://www.npmjs.com/package/@qualified/attach), we synchronize files from your file system back to the web IDE. The syncing process happens over web sockets. Nothing is installed in your web browser or IDE, and our [open-source program](https://gitlab.com/qualified/attach) is designed to be very minimal and only watch files associated with the challenge.

<div class="note-box note-box-info">
Make sure you keep the web browser open, as the web browser still handles saving, running, and previewing your files!
</div>

## Installing and running the Qualified Attach program

1. Choose to use your IDE:
    - Before your start the challenge choose **START IN YOUR IDE**.
    - After you've started the challenge click the **USE YOUR IDE** button at the top-right.

2. Start Attach
    - Follow the instructions within the _Use Your Own IDE_ dialog to install and run the Qualified Attach program. In most cases, this simply running a single command within your terminal.
    - Once Attach is running, it will prompt you for where to put the working directory, then sync your solution.
    - The web IDE should automatically reconfigure itself once the terminal app is connected and running.

3. Begin Editing
    - Open the working directory in your favorite editor or IDE, and begin working.
    - Every time you save a file your files are synced, and the web preview updated for web challenges.
    - You can enable automatically running tests on every save from within the web IDE by just flipping the switch in the top toolbar.

## More details

- You can disable automatic syncing of the web preview using its toggle switch.
- You can manually trigger running tests or submitting from within Attach without leaving a terminal UI, just type `t` or `s`.
- You can restart Attach if you need, just continue it from the same working directory.
- If you need to reload the web IDE, it should continue where you left off automatically.
