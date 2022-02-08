---
order: 1
---

# Challenge Types
Assessments are created by building individual challenges and sequencing them into a series for delivery to the candidate.

We introduced the different types of challenges when we covered the [core concepts of the platform](/for-teams/getting-started/core-concepts/#different-types-of-challenges). In this article we will dive deeper and cover the unique advantages and disadvantages of each type. We'll discuss key takeaways to remember about their formats. 

## Code Challenges

Code challenges involve the candidate writing, testing and running code in our web-based development environment (Code Runner).

These challenges come in two distinct delivery formats: classic code challenges (CCC) and project code challenges (PCC). 

### Classic Code Challenges

Classic code challenges are a light-weight code challenge delivery format. CCC offers a single file of code for the candidate to work with alongside a single file unit test suite which is typically available for the candidate to read and edit.

CCC can optionally support multiple languages, allowing the candidate to choose one they're most comfortable working with.

This format is well-suited to tightly-scoped, one- or two-function challenges. These challenges don't typically involve heavy libraries or frameworks, are often language-agnostic, often involve implementing or debugging a small utility or algorithm traditionally used in hiring scenarios and are typically used in the earlier stages of an assessment.

For example, a multi-language CCC pre-screen can be offered at the beginning of an assessment to ensure candidates have basic coding competency in the desired language(s) expected of a role and are familiar with the Qualified platform before moving on to more demanding challenges or further stages of the hiring process.

Care should be taken to ensure that differences from language to language are accounted for in comparing candidates. For example, many string manipulation tasks are much simpler in Python than in C. A challenge that offers both languages may wish to account for this fact in scoring, setting time expectations, or providing boilerplate.

Another downside of classic code challenges with many language translations is that maintenance must occur on all languages.

Project Code Challenges, discussed below, are the recommended solution for intensive or specialized use-cases, enabling more flexibility at the cost of some of the simplicity and directness of the CCC format.

We've found that presenting challenges in a single-language is the common case for hiring and education scenarios, and that providing a realistic file tree vastly expands the available possibilities for assessments. We find that most hiring challenges focus on libraries, frameworks, and larger code bases to best approximate on-the-job conditions. PCC was designed with these interests in mind.

### Project Code Challenges

Project code challenges are Qualified's full-featured code challenge delivery format. This format offers multiple files in a directory structure similar to an offline development environment.

This format is single-language and is well-suited for challenges that involve many files.

For example, providing a Ruby on Rails workspace involves dozens of files which cannot be easily supported by the classic code format. A candidate will not typically edit all of the files in the workspace, but existence of these files adds context and realism unavailable in the single-file classic code format. PCC is useful for shifting the focus from writing greenfield code to reading existing code as a critical component of completing the challenge.

Challenges that involve debugging an established code base are a fantastic use-case for PCC. With multiple files and modules representing an application, realism in the debugging task is increased, approaching the experience of working in a typical large code base.

Data science challenges with dataset CSV files and contextual documents are a great fit for PCC.

For challenges with larger scope that don't fit neatly into a single file format, project code's expanded workspace can offer the necessary flexibility and space. For example, converting a multi-challenge classic code challenge sequence into PCC can be done by offering multiple test suite files and modularized instructions that guide candidates through each stage.

Web Preview (used with front-end web challenges such as React, Angular and Vue) is another typical use case for PCC. This feature is unavailable in the CCC format.

PCC's file tree offers flexibility for limiting the visibility or editability of files and can be hidden or locked entirely, offering a "focus mode" interface with less visual distraction that approaches the classic code interface.

## Q&A Challenges

Q&A challenges are quizzes that use free-text and multiple-choice questions to assess a candidate's knowledge beyond that of direct code implementation as offered in Qualified's code editor. This format is critical to ensuring a well-rounded assessment of a candidate and enables testing many knowledge domains that are difficult or unreasonable to assess correctly through code.

Some powerful use cases for Q&A include:

- Quickly testing deep domain knowledge
- Testing knowledge of domains like DevOps, cloud services, data analysis and project management that aren't conducive to assessing purely with coding tasks
- Ensuring candidate breadth of knowledge in relevant domains in a timely manner
- Assessing candidate writing skills
- Assessing candidate critical thinking skills
- Testing candidate code comprehension skills on small snippets of code
- Prompting candidates to share information about their development and career experience in a format that can be used to mimic on-site interview questions

[Learn more about options for Q&A challenges.](/creating-content/challenges/challenge-types/q-and-a-options)

Below, we'll discuss some specific advantages and disadvantages of our two quiz question formats.

### Multiple-Choice Questions

Multiple-choice questions are a classical assessment tool and offer the major advantages of being well-established, fast to answer for candidates and can be evaluated and scored instantaneously.

Multiple-choice questions have well-known downsides to bear in mind. Care should be taken to construct the questions and answers as fairly and unambiguously as possible. Random guessing is a viable strategy for candidates and cheating is harder to detect. We recommend providing enough multiple-choice questions per topic to help combat some of these sources of noise that might drown scoring signal, as well as using a variety of methods in an assessment: true/false, multiple-choice, multi-select, free-text answers and coding challenges.

Time limits are especially useful for multiple-choice questions to mitigate the usefulness of using web searches to find answers.

[Learn more about options for multiple-choice questions.](/creating-content/challenges/challenge-types/q-and-a-options/#multiple-choice-question-options)

### Free-Text Questions

Free-text questions are a great way to gain deeper insight into a candidate than may be possible with multiple choice. Free-text questions offer a strong compliment to coding samples, allowing insight into candidate thought process, writing and communication style that might be otherwise impossible to infer from code alone.

Free-text questions can range from single-word or phrase-length responses and small one-line code snippets that can be validated with a regular expression to full essays wherein candidates can be prompted to discuss design approaches, defend or justify their solution to a previous coding challenge or discuss their experience or opinions on a technology related to the job, among many other possibilities.

Free-text questions can offer a "purer" answer than multiple-choice because hints and patterns are harder to infer based on the nature and layout of the visible options. As such, converting certain multiple-choice questions to free-text can mitigate false positives resulting from random guessing and unintentional contextual clues.

The primary disadvantage of free-text questions is the difficulty of scoring them consistently and accurately. Short of a regular expression for short responses, manual human review is likely necessary.

Rubrics can be useful for ensuring manual scoring is performed consistently by reviewers across responses.

For small responses that are a word, phrase, or small code snippet that can be auto-validated with a substring or regular expression match, the possibility of typos and false negatives is introduced. Weighing this possibility against the relative merits of converting the question to multiple-choice (where false positives are more likely) is situation-dependent.

In general, we find that many quizzes are primarily driven by multiple-choice questions (including true/false, multiple-select and single-select flavors), plus a handful of auto-validated free-text responses (often, these involve code snippets or keyword terms that are hard to mistype), and up to one or two long-answer questions that require human validation.

Easy as it is to overlook, even a brief well-placed Q&A can add an extra dimension to a coding assessment!

[Learn more about options for free-text questions.](/creating-content/challenges/challenge-types/q-and-a-options/#free-text-question-options)
