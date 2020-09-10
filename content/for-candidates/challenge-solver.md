---
title: "Classic Code Challenge Solver"
summary: "The code challenge solver provides an in-browser mini-IDE for editing and running assessments"
---

# Classic Code Challenge Solver

The code challenge solver provides an in-browser mini-IDE for editing and running assessments.

## Completing a Code Challenge Quick Start

When you start a code challenge, you'll be provided some instructions and a starting point for your solution.

Once you've read the instructions, use the solution editor to code your solution. Use either the **RUN TESTS** or **SUBMIT SOLUTION** buttons to verify your code.

* **RUN TESTS** will run your code against the sample tests you can edit. These will not be used for scoring, but can help you work through the problem quicker.
* **SUBMIT SOLUTION** is used to submit your code against the final scoring tests.

  You will be notified once you have successfully passed the test cases for the challenge. Once you are comfortable with your solution, use the **NEXT CHALLENGE** or **REVIEW ASSESSMENT** button to move on.


# Layout

<div>
<figure class="align-right">

![Code Challenge Solver UI Layout](/images/content/images/assess/code-challenge-solver-layout.png)

</figure>
</div>

The challenge solver is divided into 5 main areas, going counter-clockwise from the top:

1. Commands
2. Your Solution code editor
3. Sample Tests code editor
4. Results Pane. (If your screen isn't very tall, the results pane is moved to a tab in section 5)
5. Help & Settings tabs

You can adjust the layout of the 4 main sections by dragging the bar between them.


-----


## Commands

### Shortcut Key Commands

- <span class="shortcut-hint"><span class="mac-os-only" title="Command">&#8984;</span><span class="not-mac-os-only">CTRL</span> + Enter</span>: Submit your solution against the final tests.
- <span class="shortcut-hint"><span class="mac-os-only" title="Command">&#8984;</span><span class="not-mac-os-only">CTRL</span> + '</span>: Submit your solution against your own tests.
- <span class="shortcut-hint"><span class="mac-os-only" title="Command">&#8984;</span><span class="not-mac-os-only">CTRL</span> + U</span>: Toggle focus between editors.

### Reset

You can reset either your solution, the sample tests, or both.

### Changing Languages

Some challenges are available in multiple languages. You may change the language using the dropdown located within the top action bar.

<div class="note-box">

[Click here to learn more about the available languages and environments in Qualified.](/languages)

</div>


### Submit Solution

<div>
<figure class="align-right">

![Submit Solution Button](/images/content/images/assess/submit-button.png)

</figure>
</div>

Submitting your solution will cause it to be validated against the challenge's own test cases. You can submit your solution as many times as needed, however the only test cases available for you to see are those that may have been provided to you by default.



### Next Challenge / Review Assessment

Once you complete a challenge, you can use this button to continue to the next challenge or review the assessment for submission.

### Run Tests

_(Within the Sample Tests Editor)_

Running tests will cause your solution to be validated against the test cases that you provide. Sometimes challenges will provide some starter test cases to help demonstrate the requirements for the challenge. These test cases may not be the same as those used for validating the challenge.


-----


## Code Editors

Our code editor is based on [CodeMirror](http://codemirror.net/).  It provides many of the features you may expect from a normal IDE, though it is much simpler.

You can use many of the keyboard commands you may expect from a normal editor, including highlighting a block of code and using <span class="shortcut-hint">Tab</span> to indent and <span class="shortcut-hint">Shift + Tab</span> to unindent.  For some languages, we have also implemented a simplified code completion.

### Testing Framework

You can edit the sample tests, which are run against a framework selected by the company when setting up your challenges.  You can see which framework is being used in the upper-right of the _Sample Test Fixtures_ section.  Clicking on the title will also open and load the reference docs file for that framework.

### Full Screen

You can expand either code editor to completely fill the browser window using the full-screen arrows (<kbd class="icon-expand"></kbd>) located above the line numbers.


-----


## Results

<div>
<figure class="align-right">

![Execution Results Pane](/images/content/images/assess/results.png)

</figure>
</div>

The results panel will give you details information about the tests that were run.  If you have any tests that fail, you'll see a red bar and one or more red exclamation marks next to the failed tests.

<div class="note-box">

**Note**: On smaller screens, the results will appear as a tab alongside these instructions, rather than below.

</div>

### Debugging

Most compilation & runtime errors should show up automatically in the results pane.

For further debugging, you can write messages out to the console or system output. These messages will show up in the results pane.

* [More Debugging Tips](/for-candidates/challenge-solver/debugging-tips)

<div class="note-box">

Due to the solution code being executed in a short-lived container, Qualified does not currently support interactive debugging.

</div>


-----


## Help & Settings

### Instructions

Carefully read and follow the instructions in this panel for information on how to solve the assessment.

### Your Notes

As you work on your solution, feel free to add detailed notes about how it works, reasoning behind your choices, documentation, etc.

This section is full-markdown enabled, so you can include lists, tables, code sections, etc.

### Help

You can browse help articles in the help pane like a mini web browser.  The home button (<kbd class="icon-home"></kbd>) will take you back to general help for the challenge solver.

If you need to see a help file large, click the new window icon (<kbd class="icon-new-window"></kbd>).

### IDE Settings

The IDE settings tab lets you customize how the editor looks and works.

- _Theme_: Light or Dark, depending on your mood.
- _Editor Mode_: This allows you to enable Vim- or Emacs-like keyboard controls.
- _Tab Mode_: We won't complain, choose the indentation style you prefer.
- _Line Wrapping_: You can disable soft wraps, if you like to scroll horizontally.
- _Line Numbers_: You can guess this one.
- _Auto Close Brackets_: Typing certain brackets will cause the matching bracket to be added automatically.
- _Smart Indent_: Enables IDE-like automatic indenting based on what characters you type.
    - _Re-Indent When Typing Special Characters_: Automatically adjusts indentation on certain characters.
