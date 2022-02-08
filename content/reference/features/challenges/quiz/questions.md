---
title: "Q&A Challenge Questions"
summary: "Reference for editing the questions on Q&A challenges"
tags:
  - challenges
  - quiz
bodyClass: 'employer-focused'
---

# Q&A Challenges: Questions

This page enables you to add the questions for this Q&A challenge.

## Q&A Type

Qualified offers four types of Q&A challenges:

### No Time Limit

All questions are shown up front, and there's no time limit on this challenge. This type is particularly good for gathering information and lightweight quizzes.

### Q&A Time Limit

This challenge has it's own time-limit (outside the overall assessment limit), after which the participant can no longer modify their answers. All questions are shown at once.

This type works well if you want to allow candidates time to answer each question as they need, but want to prevent them from taking too much overall time on the Q&A compared to the rest of the assessment.

### Per Question Time Limit

Each question has it's own time limit. Questions are shown one-at-a-time, and the participant has to choose to move forward. Once the time expires or they move forward, they cannot edit a question again.

This type works particularly well for rapid-fire challenges where you are interested in testing a participants knowledge without giving them time to look up answers.

### Per Question Time Limit with Time Bonus

This format is very similar to the above one, except the final score is based on how quickly the participant answers. You can set a time range for each question, and as the time counts down, their question score drops.

## Question Basics

Choose from _Multiple Choice_ or _Text_ question. You can use the arrows (<span class="icon-chevron-up"/> and <span class="icon-chevron-down"/>) to re-arrange questions, either by clicking or dragging.

### Prompt

Both types start with the **Prompt**, which can contain [Markdown formatting](/general/markdown), enabling you to be as complex or simple as you like, including text styling, code formatting, lists, and even adding images.

### Other Options
<figure>

![Other Options](/images/hire/quiz-other-options.png)

</figure>

Under each question is a section called _Other Options_, which can be expanded by clicking on it. This contains  additional settings to refine scoring and answer formatting.

#### Points Option                

You can change the number of points awarded for a correct answer. This enables you to adjust the weight given to make some answers more important than others.

#### Partial Credit Option

If a question has more than one answer or validator, you can force all-or-nothing scoring by _unchecking_ **Allow Partial Credit**

#### Default Answer (Text Questions) Option

For text questions, you can optionally provide a default answer, which is filled in by default for the candidate. They can use this base answer to make modifications such as code refactoring.

#### Question Time Limit & Bonus Countdown Start Option

These options let you override the default per-question time limit and bonus countdown start time for _Per Question Time Limit_ Q&A variants.


### Quickly Adding Questions

<div>
<figure class="align-right half-scale">

![Insert Question Menu](/images/hire/quiz-insert-question-menu.png)

</figure>
</div>

You can use the _Insert a new question_ (<span class="icon-plus"/>) menu to quickly insert & duplicate questions above or below the question you are working on.

You can also bring this menu up while editing using <span class="shortcut-hint"><span class="mac-os-only" title="Command">&#8984;</span><span class="not-mac-os-only">CTRL</span> + ENTER</span>.

## Multiple Choice Questions

<div>
<figure class="align-right half-scale">

![Multiple Choice Question](/images/hire/quiz-multiple-choice.png)

</figure>
</div>

Multiple Choice Questions will have one or more answers, each of which can contain [Markdown formatting](/reference/markdown).

At least one answer must beck checked as the correct answer (to the left of the answer text). You can have multiple "correct" answers, allowing for more interesting answers.

You can re-arrange the answers easily dragging them with the double arrow (<span class="icon-drag-sort"/>).

Finally, you can remove an answer by clicking the <span class="icon-x"/> button.

<div class="no-clear-next"></div>

### Answer Formatting

If you add several questions, but check only one, the default mode is to show the answers to the participant using _Radio_ buttons, which means "select one and only one answer". If you check off more than one, the answer will use _Checkboxes_, which means they can select any or all answers.

You can override this default by going into _Other Options_ and changing the **Maximum Number of Answer Selections**.

### Weighted Choices
With weighted multiple choice questions, you can now use Qualified's Q&A challenges for more than ever before. They are now even better for automatically determining job fit via a questionnaire, improved aptitude quizzes, and even getting to know your candidate better.

Weighted multiple choice questions work exactly as normal multiple choice questions from the candidate's point-of-view, but now you can assign different values to each question. The total score for the questions can then be assigned anything you want, such as the sum of all correct answers, the highest correct answer, or any value in-between.

You can even assign negative values to some answers. While the candidate's score can never go below zero for a question, this can allow some incorrect or undesirable answers to offset a positive one.

Some simple use cases:

- **Job Fit—Skills:** Here you may be looking for someone with skills in different languages, but you prefer some languages over others. So, as an example, you might assign a 10 to TypeScript, a 9 to JavaScript, and a 5 to CoffeeScript. If the question has a max value of 10, then selecting TypeScript, or any 2 or more answers, gives the candidate a full score for that question.
- **Skill Aptitude Question—Single Choice:** In this scenario, you may have a technical question that has several correct answers. You may choose to assign a higher score to the answers that are better.
This format could be a single-choice question, where there's multiple correct answers, but the candidate can only choose one. Depending on which one they choose, they might not get 100%, but they could still get 50% of the points for that question.
- **Skills Aptitude Question—Multiple Choice:** Similar to the above use case, but in case, the candidate could pick multiple answers. This might be a great place to use negative values, reducing their score even if they pick the "right" answer among several incorrect answers.
- **Personality Question:** Here you can use a Q&A challenge like a questionnaire to learn more about your candidate. For example, asking them about hobbies. You can assign different weights to the different hobbies to highlight candidates with interests that may better align to the job position.
And these are just some of the use cases you can use weighted multiple choice questions for. We'd love to hear from you about how you find ways to use this new Q&A feature to improve your hiring process.

## Text Questions

<div>
<figure class="align-right half-scale">

![Text Question](/images/hire/quiz-text.png)

</figure>
</div>

Each free text question can be one of the following formats:

- **Short Answer**: This is intended for simple, one-line answers. The input is a single line, and the text is rendered without any formatting.
- **Long Answer (Plain Text)**: This provides a multi-line input to candidates, to encourage them to expand on an answer.
- **Long Answer (Markdown-Enabled)**: Similar to the above, except the editor uses our markdown-editor, and allows for basic formatting. The output is rendered to HTML.
- **Essay (Plain Text)**: This is an extended long-answer format. It is rendered with a full-page editor, and intended for Q&A challenges where the essay is the only question, or at least the primary focus.
- **Essay (Markdown-Enabled)**: Similar to the above, except the editor uses our markdown-editor, and allows for basic formatting. The output is rendered to HTML.
- **Code (Short)**: Candidates enter their answer using a code editor with code-aware formatting. You can choose from any of our supported programming languages, or plain text. This version only allows for a single line to be entered. The answer is rendered using code-highlighting.
- **Code (Multiline)**: Similar to the above, except the editor allows for multiple lines.

<div class="no-clear-next"></div>

### Validation Matchers

Free text questions can be automatically scored by adding one or more **optional** validation matchers. These can be use to validate in one of several ways:

- **Includes Text** The answer must include the provided text somewhere. The validation can be case sensitive (_a=A_), or can ignore case (_a≠A_).
- **Excludes Text** The answer must **not** include the provided text. You can set the case sensitivity as well.
- **Equals Exactly** The answer must exactly equal the provided text. You can set the case sensitivity.
- **Does Not Equal** The answer must not be the provided text. You can set the case sensitivity. Note: this usually will work better as _Excludes Text_.
- **Matches Pattern** The answer must match the provided [Regular Expression](https://en.wikipedia.org/wiki/Regular_expression). You can set the _Case Insensitive_ (`i`) and _Multiline_ (`m`) flags on the expression.
- **Doesn't Match Pattern** The answer must **not** match the provided Regular Expression, with the same options as above.

If they all are correctly matched (or not found), the question is awarded full points. If some or none match, the score awarded is based on the _Partial Credit_ setting.

You can remove a validation matcher by clicking the <span class="icon-x"/> button.

### Previewing Validation Matcher Results

<div>
<figure class="align-right half-scale">

![Text Question - Preview Matcher Results](/images/hire/quiz-text-matcher-preview.png)

</figure>
</div>

If you have at least one validation matcher, you can use _Preview Matcher Results_ to test how the scoring works. Click on _Preview Matcher Results_ to open the _Matcher Preview_ tool. 

In here, you can add text to the left-hand pane. The right-hand pane shows you the auto-scored results, including marking correct and incorrect matchers. To see which matchers are correctly matching or not, look above and to the right of each matcher for a <span class="icon-checkmark"/> or <span class="icon-x"/>.

The calculated score is shown as well.
