# Q&A Challenges: Options

Q&A Challenges include quite a few options to help you fine-tune them to gather evidence from your candidates.

## Challenge-Level Options

You can control the candidate experience in two key ways for Q&A Challenges:

### Time Limits

By adding a time limit to your Q&A challenge, you can simultaneously guide the candidate so they don't spend too much time, while increasing the signal-to-noise ratio for the automated challenge scoring.

#### No Time Limit

All questions are shown up front, and there's no time limit on this challenge. This type is particularly good for gathering information and lightweight quizzes.

#### Challenge Time Limit

This challenge has its own time-limit, after which the participant can no longer modify their answers. All questions are shown at once.

This type works well if you want to allow candidates time to answer each question as they need, but want to prevent them from taking too much overall time on the quiz compared to the rest of the assessment.
 
#### Per Question Time Limit

Each question has its own time limit. Questions are shown one-at-a-time, and the participant has to choose to move forward. Once the time expires or they move forward, they cannot edit a question again.

This type works particularly well for rapid-fire challenges where you are interested in testing a participants knowledge without giving them time to look up answers.

#### Per Question Time Limit with Time Bonus

This format is very similar to the above one, except the final score is based on how quickly the participant answers. You can set a range for each question, and as the time counts down, their question score drops.


### Randomize Question Order

If you are concerned about candidates sharing question answers, randomzing the question order can make this more difficult. When enabled, each candidate will see the entire set of questions in a randomized order. That order will be consistent for the candidate (returning to the quiz later will show the same order).

## Question Basics

Choose from _Multiple Choice_ or _Text_ question. You can use the arrows (`▲` and `▼`) to re-arrange questions, either by clicking or dragging.

### Prompt

Both types start with the **Prompt**, which can contain [Markdown formatting](/reference/markdown), enabling you to be as complex or simple as you like, including text styling, code formatting, lists, and even adding images.

### Other Options

![Other Options](/images/hire/quiz-other-options.png)

Under each question is a section called _Other Options_, which can be expanded by clicking on it. This contains  additional settings to refine scoring and answer formatting.

#### Points Option                

You can change the number of points awarded for a correct answer. This enables you to adjust the weight given to make some answers more important than others.

#### Partial Credit Option

If a question has more than one answer or validator, you can force all-or-nothing scoring by _unchecking_ **Allow Partial Credit**

#### Question Time Limit & Bonus Countdown Start Option

These options let you override the default per-question time limit and bonus countdown start time for _Per Question Time Limit_ Q&A variants.


### Quickly Adding Questions

![Insert Question Menu](/images/hire/quiz-insert-question-menu.png)

You can use the _Insert a new question_ (`+`) menu to quickly insert & duplicate questions above or below the question you are working on.

You can also bring this menu up while editing using `CTRL + ENTER` or `⌘ + Enter`.

## Multiple-Choice Question Options

![Multiple Choice Question](/images/hire/quiz-multiple-choice.png)

Multiple Choice Questions will have one or more answers, each of which can contain [Markdown formatting](/reference/markdown).

At least one answer must beck checked as the correct answer (to the left of the answer text). You can have multiple "correct" answers, allowing for more interesting answers.

You can re-arrange the answers easily dragging them with the double arrow.

Finally, you can remove an answer by clicking the `×` button.

### Answer Formatting

If you add several questions, but check only one, the default mode is to show the answers to the participant using _radio_ buttons, which means "select one and only one answer". If you check off more than one, the answer will use _checkboxes_, which means they can select any or all answers.

You can override this default by going into _Other Options_ and changing the [**Maximum Number of Answer Selections**](#maximum-number-of-answer-selections).

### Weighted Choices
With weighted multiple choice questions, you can use Q&A challenges for automatically determining job fit via a questionnaire, improved aptitude quizzes, and even getting to know your candidate better.

Weighted multiple choice questions work exactly as normal multiple choice questions from the candidate's point-of-view, but now you can assign different values to each question. The total score for the questions can then be assigned anything you want, such as the sum of all correct answers, the highest correct answer, or any value in-between.

You can even assign negative values to some answers. While the candidate's score can never go below zero for a question, this can allow some incorrect or undesirable answers to offset a positive one.

Some simple use cases:

- **Job Fit—Skills:** Here you may be looking for someone with skills in different languages, but you prefer some languages over others. So, as an example, you might assign a 10 to TypeScript, a 9 to JavaScript, and a 5 to CoffeeScript. If the question has a max value of 10, then selecting TypeScript, or any 2 or more answers, gives the candidate a full score for that question.
- **Skill Aptitude Question—Single Choice:** In this scenario, you may have a technical question that has several correct answers. You may choose to assign a higher score to the answers that are better.
This format could be a single-choice question, where there's multiple correct answers, but the candidate can only choose one. Depending on which one they choose, they might not get 100%, but they could still get 50% of the points for that question.
- **Skills Aptitude Question—Multiple Choice:** Similar to the above use case, but in case, the candidate could pick multiple answers. This might be a great place to use negative values, reducing their score even if they pick the "right" answer among several incorrect answers.
- **Personality Question:** Here you can use a Q&A challenge like a questionnaire to learn more about your candidate. For example, asking them about hobbies. You can assign different weights to the different hobbies to highlight candidates with interests that may better align to the job position.
And these are just some of the use cases you can use weighted multiple choice questions for. We'd love to hear from you about how you find ways to use this new Q&A feature to improve your hiring process.

### Maximum Number of Answer Selections

By default, the number of answers allowed is limited to the number of correct answers. In practice, this means that:

- When one answer is selected, the interface switches to radio buttons, which only allow a candidate to choose one of the answers
- When two or more answers are selected, the interface switches to checkboxes, and the candidate is prompted to choose up to the number of correct answers.

However, you can override this functionality to fine-tune the experience. Under _Other Options_, you can override the **Maximum Number of Answer Selections**:

- Choosing _All Answers_ forces the interface into checkbox mode, and allows the candidate to choose more answers than are correct. This will cause their score to go back down for each incorrect answer.
- You can limit the selections to **one** answer. This is useful if you have multiple valid answers, but only want one selected. This forces the interface into radio-button mode. This plays well with [custom weights](#answer-scoring) to allow full credit for selecting from several valid answers.
- You can set the number of selections to any other value, forcing the interface into checkbox mode, and allowing the candidate to pick more options. This can be very effective in survey mode, where many options are valid, but you only want the candidate to select a limited number of answers.

## Free-Text Question Options

Despite seeming very simple, free-text questions can be customized in many ways to provide a unique experience.

### Answer Format

Changing the answer format affects how the input field and answer is rendered. All answers are still stored as text. Selecting the right answer format can help guide your candidate to answering the question in the way you prefer.

- **Short Answer**: This is intended for simple, one-line answers. The input is a single line, and the text is rendered without any formatting.
- **Long Answer (Plain Text)**: This provides a multi-line input to candidates, to encourage them to expand on an answer.
- **Long Answer (Markdown-Enabled)**: Similar to the above, except the editor uses our markdown-editor, and allows for basic formatting. The output is rendered to HTML.
- **Essay (Plain Text)**: This is an extended long-answer format. It is rendered with a full-page editor, and intended for Q&A challenges where the essay is the only question, or at least the primary focus.
- **Essay (Markdown-Enabled)**: Similar to the above, except the editor uses our markdown-editor, and allows for basic formatting. The output is rendered to HTML.
- **Code (Short)**: Candidates enter their answer using a code editor with code-aware formatting. You can choose from any of our supported programming languages, or plain text. This version only allows for a single line to be entered. The answer is rendered using code-highlighting.
- **Code (Multiline)**: Similar to the above, except the editor allows for multiple lines.

### Validation Matchers

Free text questions can be automatically scored by adding one or more **optional** validation matchers. These can be used to validate in one of several ways:

- **Includes Text**: The answer must include the provided text somewhere. The validation can be case sensitive (_a=A_), or can ignore case (_a≠A_).
- **Excludes Text**: The answer must **not** include the provided text. You can set the case sensitivity as well.
- **Equals Exactly**: The answer must exactly equal the provided text. You can set the case sensitivity.
- **Does Not Equal**: The answer must not be the provided text. You can set the case sensitivity. Note: this usually will work better as _Excludes Text_.
- **Matches Pattern**: The answer must match the provided [Regular Expression](https://en.wikipedia.org/wiki/Regular_expression). You can set the _Case Insensitive_ (`i`) and _Multiline_ (`m`) flags on the expression.
- **Doesn't Match Pattern**: The answer must **not** match the provided Regular Expression, with the same options as above.

If they all are correctly matched (or not found), the question is awarded full points. If some or none match, the score awarded is based on the _Partial Credit_ setting.

You can remove a validation matcher by clicking the `×` button.

#### Previewing Validation Matcher Results

![Text Question - Preview Matcher Results](/images/hire/quiz-text-matcher-preview.png)

If you have at least one validation matcher, you can use _Preview Matcher Results_ to test how the scoring works. Click on _Preview Matcher Results_ to open the _Matcher Preview_ tool. 

In here, you can add text to the left-hand pane. The right-hand pane shows you the auto-scored results, including marking correct and incorrect matchers. To see which matchers are correctly matching or not, look above and to the right of each matcher for a `✓️` or `×`.

The calculated score is shown as well.

### Default Answer

You can optionally provide a default answer, which is filled in for the candidate to modify. This can be used as for testing skills such as code refactoring, or providing a foundation for complex answers.
