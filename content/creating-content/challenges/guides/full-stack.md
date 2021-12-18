---
title: Creating full-stack web challenges
summary: "Creating full-stack web challenges"
tags:
  - full-stack web development
  - javascript
  - html
  - backend
  - frontend
---

# Creating full-stack web challenges

## Overview
Full-stack web application skills are fully testable in Qualified, but not in a single challenge. This guide is designed to help content developers who seek to test full-stack skills navigate the multiple environments at a high-level and make decisions about how to structure their assessment to work effectively with Qualified.

The suggestions here apply equally to education and hiring use cases although hiring terms such as [_candidate_](/for-teams/getting-started/core-concepts/#candidates) are used throughout the article.

## Full-stack challenge planning

### Rationale for modularized challenges
Qualified is designed to test front-end (client-side) and back-end (server-side) competencies in separate environments in isolation from one another. The rationale for this approach follows from keeping challenges targeted to measureable, specific skills and ensuring each environment (accessible primarily through our project templates) is tuned to serve a particular technology.

#### Benefits
Here are some of the benefits of testing each part of the stack separately.

- Candidate-friendliness:
  - Challenge instructions, goals, boilerplate, folder structure and code size are simpler for the candidate to understand, navigate and get up to speed with quickly. 
  - Narrowing the scope tends to increase completion rates and satisfaction with the assessment process. 
  - Candidates have more chances to take breaks during multi-part assessments and take-home projects.
  - Multiple small challenges offers the psychological boost of frequent achievements.
  - Lighter-weight environments help candidates get results quickly and reliably. The time it takes to build and serve a full-stack app would likely exceed the 12-second submission timeout in our code runner.
- Splitting the assessment by technology stack and competency increases the power of our rubrics and reporting features, making it easier to see at a glance which skills in which parts of the stack candidates performed best in.
- Reuse of challenges is easier when content is modularized. Hiring for a front-end role becomes as simple as removing the back-end challenges from your full-stack assessment.
- Development and maintenance for content developers becomes easier and streamlines collaboration in a multi-person content team.

### Deciding what to test
We recommend starting by making a list of the competencies you wish to test in your assessment agnostic of the tech stack. For example, you may wish to test the candidate's ability to build a REST API with CRUD actions and a database and a single-page application that makes requests to the API in response to user actions and renders views.

Next, list the technologies in your stack you'd like to test and identify how each one helps meet a competency goal. 

For example, the back-end might consist of a Node environment running Express and the [Sequelize](https://sequelize.org) ORM on top of a SQLite database, which helps validate the candidate's database manipulation skills. The front-end might consist of a React application, which serves to test the candidate's ability to work with the UI.

Even after splitting your project into front-and back-end components, you may consider a finer granularity. For example, a React challenge that accesses an API to create, update, edit and delete records might be well-suited to multiple challenges per component, separating styling or UI from request logic or component design.

When in doubt, we recommend erring on the side of keeping challenge scope simple, completable and verifiable.

### Validating Qualified's environments against the proposed technology stack
The next step is to ensure your desired packages and tech stack for each environment you've identified will work with Qualified, and making adjustments as necessary before developing the challenge(s). You can do this by visiting the relevant pages per language and scanning the environment presets and templates we offer.

In our example above, we might identify the [Node 12.x](/reference/languages/javascript/#node-12) environment as containing all of the relevant packages for the back-end component, and the [React](/reference/languages/javascript/#react-react-preset) preset for the front-end component.

When the environment isn't a perfect match for your desired stack, consider the skills you seek to test on a per-challenge basis and try tightening challenge scope to focus on one, two or three key skills.

For example, if you wish to test React routing skills as well as the candidate's [Puppeteer](https://github.com/puppeteer/puppeteer/) skills, consider two separate challenges: one for React Router with [Jest](https://jestjs.io/) and [React Test Utilities](https://reactjs.org/docs/test-utils.html) and a separate challenge focused on scraping/testing a single-page app with Puppeteer.

## Creating the challenge 
After planning iterations stabilize, the development process of the individual challenges can get underway.

### Choosing between quizzes, classic and project code challenges
Qualified offers [classic](/reference/features/challenges/code/#classic-code-challenges) and [project](/reference/features/challenges/multi-file-code/#project-code-challenges) challenge modes as well as quizzes. An advantage of increasing granularity on challenges is that focused content can be delivered in lightweight formats as quizzes or classic code challenges, lowering the bar of entry, shortening the assessment duration and honing the signal the challenge provides. 

This technique of mixing quizzes alongside long and short challenge lengths gives candidates variety and lets you emphasize certain skills without completely abandoning others.

### Challenge instructions
Drafting instructions early in the development process can provide insight into scoping your challenges. If instructions begin to feel heavy and complex, it may be time to narrow the scope or break the challenge into multiple parts.

### Mocking the back-end
Since the back-end (database and server) will be completely inaccessible in Web Preview as well as in the Node testing environment used to validate front-end code (whether it be React, Vue, Angular, AngularJS or vanilla JS/HTML5), mocking these services is a reliable and efficient (from an execution time perspective) solution.

In many cases, mocks can be shared between the Web Preview feature and the Node test suite. For example, in a web application with mocked HTTP responses, the same mocks may work in a Jest test suite running on our server as well as in mocked `fetch` calls specific to the Web Preview running on the client.

If a back-end is mocked in support of a front-end challenge, it's generally a good idea to mention this to the candidate explicitly in the instructions to promote transparency. Making mock files visible and read-only is a common strategy.

### Prefer APIs to server-side rendering
APIs are a more natural fit for Qualified than server-rendered apps, although both are supported. The code runner offers HTML5 capabilities but Web Preview will be unavailable for server-side challenges. Making the front-end a single-page app and the back-end a JSON API makes it easy to maximize the advantages of each.

### Alternatives to mocking
Writing mocks for large APIs can be time-consuming and may not be suitable for all use cases, particularly highly dynamic services.

Other approaches to mocking can involve hosting the back-end on a [serverless host](https://en.wikipedia.org/wiki/Serverless_computing) or an external endpoint such as [Heroku](https://www.heroku.com/).

For stateful services, issuing tokens and bookkeeping client state, navigating the possibility of interruptions to service in third-party providers and desire to avoid dependencies may be prohibitive.

Supporting an API is a useful complexity yardstick: if the mocks are becoming overwhelming to write, it's an indication that the challenge might be too complicated for its own good. Most skills can be tested in a straightforward manner given the right approach, and advanced skills need not require complex applications to assess.

### Challenge sequencing
When grouping challenges into an assessment, you'll likely experiment with different arrangements. It can be satisfying for a candidate to develop a back-end, then work on a corresponding front-end in the next challenge, with the service they created mocked. Going in the other direction and beginning with a mocked front-end may have benefits as well.

Keeping your challenges isolated gives flexibility for ordering. Baking a plot or sequence into the design can offer opportunities for not-yet-completed challenges to include solutions to earlier challenges. Keep in mind that some candidates may write opinionated solutions to earlier challenges in a series, then be disappointed when the next challenge adopts a different approach that clashes with their sensibilities.

### Test your challenges
Challenges are a software product as much as any other, requiring internal review and testing both for bugs as well as clarity in instructions, difficulty and accessibility. It's common for a challenge to go through many iterations before it can be considered complete. To the extent possible, have your team try the challenges in the assessment and offer feedback. Check out [best practices](/creating-content/challenges/best-practices/) for general tips.

