---
title: Product Updates
order: 10
summary: 'Learn about new features, fixes, and other improvements'
---

# Product Updates

Learn about notable new features, fixes, and other improvements to the application!

## March 31, 2024  

### Improvements 

- **Added preloaded examples** 

  Add preloaded example for Rust and Go 

- **Directory To Tree: allow async function** 

  Directory To Tree required sync code, which was not great for a file system call. We updated the challenge tests to await any promises returned by the solution, giving candidates more flexibility to choose a better practice. 

- **Update Vue challenges to use `<script setup>`** 

  We upgraded all of our Vue 3 library content to use `<script setup>`.

### Challenges 

- **Add Express to TypeScript** 

  Added Express version 4.18.2 to TypeScript 4.9 

## February 29, 2024  

### Improvements 

- **Dart 3.3** 

  Dart 3.3 is now supported in Qualified.

### Challenges 

- **Browser DevTools Quiz** 

  This quiz tests a candidate's basic skill in working with the browser developer tools, an essential part of every developer's toolkit.

- **LLM/GPT Basics Quiz** 

  This quiz tests baseline candidate grasp of large language models (LLMs) and generative pre-trained transformers (GPTs). 

- **Python, Flask and psycopg2** 

  This template provides a starter for Flask and the psycopg2 connector for Postgres. 

- **Create ASCII 7 Segment Display challenge**

  This challenge tests the candidate's basic array and string manipulation. It's a bit tricky to represent the pivoted matrix, so candidates can get stuck, even though the algorithm is not exactly technical or demanding preexisting knowledge.

## January 31, 2024 

### Features 
 
- **Qualified and Learnosity Integration** 

   We've partnered with Learnosity to integrate Qualified coding challenges into Learnosity assessments! Our custom question type enables students to solve project and classic coding challenges in a Learnosity assessment, powered by Qualified's Embed engine. 

  Check our post [Qualified and Learnosity Partnership: Bridging the Skills Gap with Developer Assessments](https://andela.com/blog-posts/qualified-and-learnosity-partnership-bridging-the-skills-gap-with-developer-assessments) to learn more.

### Improvements 

- **Erlang 26** 

    Erlang 26 is now supported within classic code challenges.

- **Elixir 1.15** 

    Elixir 1.15 is now supported within Qualified.

- **Add deprecated language version labels** 

    A new "deprecated" label was added to old language versions in the challenge edit and detail views. This helps content managers identify which language versions will be removed in the future. For further information and tips on upgrading your content, please check our [guide for upgrading language versions](https://docs.qualified.io/creating-content/challenges/upgrading-language-versions/#upgrading-language-versions).
  
### Bug Fixes

- **Fixed report card "Portfolio" tab performance issue**

  :::note
  Signals customers only
  ::: 

    Users were experiencing heavy lag, especially with scrolls, once the Portfolio tab was activated and the number of assessment results was 6 or more. This issue was fixed.
    
### Challenges

- **ASCII 7 Segment Display challenge** 

    This challenge tests the candidate's basic array and string manipulation skills.

:::info
Note that Product Updates was on hiatus for 6 months. No major updates occurred during this time beyond standard bug fixes and challenges. We'll continue on a monthly basis going forward.
:::

## July 13, 2023

### Features

- **Non-accuracy Scored Challenges**

  We have added the ability to build challenges that don't count towards the assessment's accuracy score. This allows surveys and personality inventories to be developed which don't have a proper context of "accuracy". Solutions to these challenges will still have their own score, but will not count towards the score of the assessment result.

### Improvements

- **C# 10**

  C# 10 is now supported within Qualified.

- **Elixir 1.11**

  Elixir version 1.11 is now supported within Qualified.

## June 15, 2023

### Improvements

- **Improved Challenge Starter Code**

  We have improved the code used for many of our custom challenge examples, updating them to a new set of best practices.

- **Improved font rendering**

  We have improved some of our font rendering around numerical numbers for a more consistent experience.

- **Improved insights related to potential cheating**

  We have improved our insight detection algorithms related to how events such as outside paste events are tracked and reported.

- **Random question preview answer sort order**

  When previewing Q&A challenges with random questions, you now have the option to view the answer sheet in the same order as the randomized questions.

## May 29, 2023

### Challenges

- **AWS: Create and Destroy S3 Bucket Objects**

  In this challenge, you'll interact with an AWS S3 bucket.

- **AngularJS: Counter**

  Create a simple AngularJS Counter which responds to click events.

- **AngularJS: Turbo Counter**

  Create a somewhat more advanced AngularJS Counter which includes a step size.

- **Bash Linux Quiz**

  This challenge tests your knowledge of Bash scripting on Linux.

- **Cascading String**

  In this challenge, you'll create ASCII art by arranging the words in a string in a cascade pattern.

- **Corner String**

  In this challenge, you'll arrange a string along the corner of a rectangle.

- **Cross String**

  In this challenge, you'll arrange a string in a cross pattern.

- **Find Package Version**

  In this challenge, you'll write a simple script to determine which version of a package we're using.

- **Flask/SQLAlchemy: Debug Dataclass**

  In this challenge, you'll debug a Flask GET route that's not returning the data as expected.

- **GitHub: Locate a Feature Release**

  In this challenge, you'll figure out when a particular feature was added to a popular open source project.

- **Jest Testing Quiz**

  Try your hand at a quiz on the basics of writing unit tests with Jest and associated patterns and best practices.

- **Linux: Total Memory**

  In this challenge, you'll tell us how much memory we have on our machine.

- **Make a Name Tag**

  In this challenge, you'll make a "Hello" name tag!

- **Make a Name Tag (Easier Version)**

  In this challenge, you'll make a "Hello" name tag!

- **Metaprogramming: The Builder of Things**

  Create a `Thing` class that makes heavy use of metaprogramming.

- **Pandas: Categorize Dates**

  In this challenge, you'll put a series of dates into one of a few buckets.

- **Pandas: Split Names**

  In this challenge, you'll split a series of names in a Pandas dataframe.

- **Playwright Quiz**

  This quiz tests your Playwright knowledge.

- **PowerShell Quiz**

  Try a quiz on PowerShell.

- **Product Designer**

- **Puppeteer Quiz**

  This quiz is designed to test your Puppeteer knowledge, from basic to advanced concepts.

- **Pyright: Add Typing**

  In this challenge, you'll add type hints to existing Python code.

- **Pysparkling**

- **React Testing Library Quiz**

  Try your hand at a quiz on the basics of writing React unit tests with React Testing Library.

- **Ruby’s Eleven**

  In this challenge, you'll hack into an authentication system!

- **Sample Honor Agreement**

  This is an honor agreement. You will agree to not use LLMs or human assistance on the following assessment.

- **Split HTML Table Row**

  In this challenge, you'll split an HTML table row using a specific class as a cut-off point.

- **Staircase String**

  In this challenge, you'll make a string of words into a staircase!

- **Staircase String (R Debugging)**

  In this challenge, you'll debug an ASCII art string algorithm.

- **Turtle Graphics: 10 PRINT**

  In this turtle graphics challenge, you'll draw the classic "10 PRINT" pattern.

- **Turtle Graphics: Color Bars**

  In this turtle graphics challenge, you'll draw a series of bars (horizontal stripes) along the canvas.

- **Turtle Graphics: Truchet Tiles**

  In this turtle graphics challenge, you'll draw Truchet Tiles.

## February 22, 2023

### Challenges

- **Pandas: Working with the Attention Dataset**

  In this challenge, you'll complete a few basic data processing tasks with Pandas.

- **Turtle Graphics: Draw a Box**

  In this turtle graphics challenge, you'll write code to draw a simple box.

## December 14, 2022

With this release, we've added improved functionality for inviting large cohorts, and fixed some small issues that affect a subset of our users. Not to mention, there's **23 new challenges** to check out!

### Features

- **Bulk Candidate Invitations**

  With this update, you can now easily invite large cohorts of candidates and students, right from within our application. Our system will now process the invitations in the background, as well as providing tools to monitor the progress of the invitations, and filter the candidate list via the invitation cohort.

  Any unsuccessful invitations are now tracked as well, and you'll be able to easily copy the lists of successful and unsuccessful emails during or after the cohort has been processed.

  [Read More in the Docs](https://docs.qualified.io/for-teams/process/invitations/#bulk-invite-new-candidates)

### Improvements

- **Warn on long assessments**

  Sometimes when you are creating an assessment, it's easy to lose sight of how long that assessment will take to solve. We now warn when an assessment is getting excessively long, or has a lot of challenges.

  The limits we currently recommend are 4 hours and 10 challenges. Note that we still won't stop you from publishing long assessments.  

  If you really like very long assessments, and don't want to be notified, don't worry! We've added a team-wide option to turn off the warning. Just visit your team account page, and disable **Warn on long assessments.**

  [Read More in the Docs](https://www.qualified.io/hire/account/team)

### Challenges

- **Angular: Figlet Fonts**

  Create a component in Angular which makes calls to an ASCII font API.

- **Express/pg: Comment Chains**

  In this challenge, you'll work with the `pg` package to connect to and query a Postgres database and expose the data on an Express route.

- **Express/pg: Comment Chains with Trees**

  In this challenge, you'll work with the `pg` package to connect to and query a Postgres database and expose the data on an Express route.

- **Find Open Days at Time**

  This challenge tests your array filtering and mapping abilities.

- **Find Open Days at Time (Debug)**

  This challenge tests your debugging skills on a small piece of code.

- **Find the Snake**

  Find the snake on a 2d grid.

- **Flask: Simple Authentication**

  In this challenge, you'll roll your own simple Flask authentication endpoint.

- **Front-End: Select a Pie Chart Slice**

  In this challenge, you'll figure out which slice of a pie chart the user's mouse is hovering over.

- **Interleave Linked Lists in N-Sized Chunks**

  In this challenge, you'll interleave linked lists in `n`-sized chunks.

- **Isogram With Tolerance**

  Check if a string is an isogram, but allowing for `k` duplicate letters.

- **Largest V in a Matrix**

  In this challenge, you'll find the largest V-shaped subarray in a matrix.

- **Linux: List Character Device Names**

  In this challenge, you'll write code to find device names on a Linux system.

- **Linux: List No Login Usernames**

  In this challenge, you'll write code to find users with a particular login shell on a Linux system.

- **Map Dots to Boxes**

  Create a data structures for a dots and boxes game.

- **Markdown Heading Unflattening**

  In this challenge, you'll unflatten a list of markdown headings into a tree structure.

- **Merge JSON Stream**

  In this challenge, you'll merge a series of whitespace-delimited JSON into a single list.

- **Merge Sorted Chunks**

  In this challenge, your task is to merge sorted sub-arrays into a single array.

- **Puppeteer: Wait For Input**

  Use the Puppeteer library to find relative text on a page.

- **React: Modal**

  This challenge involves writing code to close a custom React modal.

- **React: Snake Puzzle (Detect Completed Level)**

  In this challenge, you'll add functionality to a React snake puzzle game.

- **StimulusJS: Dispatch Debug**

  In this challenge, you'll debug a small StimulusJS app.

- **StimulusJS: Notes data-controller Debug**

  In this challenge, you'll debug a small StimulusJS app.

- **Testing: Sinon Timers**

  Write unit tests for an exponential backoff algorithm with Mocha, Chai and Sinon.

### Bug Fixes

- **Fixed bug with Billed Usage Report for certain teams**

  We've fixed an issue with the [Billed Usage Report (within Data Export)](https://www.qualified.io/hire/account/data-export) for certain teams. You can once again review your usages without error.

  [Read More in the Docs](https://www.qualified.io/hire/account/data-export)

- **Fixed rare issue with embedded assessments when hiding the welcome screen**

  We've fixed an issue where embedded assessments can become blank if there's an issue with the invitation.

## September 14, 2022

We've expanded SmartIDE and out improved Interact experience to Classic Code!

### Features

- **SmartIDE comes to Classic Code challenges!**

  [Back in May we introduced SmartIDE for our Project challenges](https://www.qualified.io/kb/changes#2022-05-11), and many of our customers wondered if we were going to bring it to our Classic Code challenges.

  Well now we have! SmartIDE is our answer to bridge the gap between web editors and desktop editors, while maintaining the zero-effort startup experience our web IDE has always provided. And with adding it to Classic Code, even our most streamlined code challenge experience can now get the benefits of this feature.

  ![Qualified SmartIDE autocomplete](https://res.cloudinary.com/strive/image/upload/35517fd0b8059e430ce28bd5e53c4965-3_at_12.png)  

  Make sure to [check out the SmartIDE docs to learn more on how to enable this feature on your team](https://docs.qualified.io/creating-content/challenges/smart-ide/).

### Improvements

- **New Interact experience for Classic Code challenges!**

  We expanded our new interact experience to classic code challenges!  

  This all-new, ground up design allows multiple people to not only edit the solution, but also tracks focus, cursor position, and selection across all users simultaneously.

- **Verify when a team member is invited from a new domain**

  If you now accidentally invite a team member from a domain never used before on your team, you'll get an alert. This can help to prevent accidentally inviting a candidate as a team member, and also catch certain types of typos.

  The check only compares against active or invited team members, so if you deactivate team members with old or invlalid domains, they will be ignored until you use that domain again.

### Bug Fixes

- **Ensured the correct term for assessments is shown to candidates**

  We've fixed a few places where the term "assessment" wasn't swapped with the preferred term.

## August 30, 2022

Many bug fixes and some small improvements throughout the application in this release!

### Features

- **Billing Usages Data Export**

  If your team has a custom plan with data exporting, account owners can now export a CSV with all the usages that have been billed within a given timeframe. This export will include detailed information about the usage, including when it was billed, which assessment & candidate was being billed, and if it was included or an overage.

  [Account owners can click here to view this report.](https://www.qualified.io/hire/account/data-export)

- **Enabled SmartIDE for Vue Challenges**

  You can now solve Vue challenges with SmartIDE

### Improvements

- **Added "This Year" and "Last Year" filters to reporting**

  You can now filter by the current year or the previous year for our advanced reports

  [Read More in the Docs](https://docs.qualified.io/for-teams/reviewing/reporting/)

- **Identify improperly configured clocks on candidate computers**

  If a candidate's computer is significantly out-of-sync with our server, it can cause issues such as an assessment or challenge timer ending early.

  For timed assessments, we now identify this in a time-zone-agnostic manner, and if the user's computer is significantly out-of-sync (greater than a ±5 minutes difference), we notify them.

  They can still bypass the dialog if they choose, but hopefully this gives them a chance to correct their machine's clock before starting.

- **Logging out of invite-only assessments no longer results in an error**

  If you log out of an invite-only assessment, you'll now be thanked for completing the assessment, rather than shown an error.

### Challenges

- **Rock, Paper, Scissors Smart Contract**

  Code a Smart Contract for the game Rock, Paper, Scissors.

### Bug Fixes

- **Fix for missing assessment titles**

  For teams with over 1000 assessments, we fixed a bug that prevented the client from showing assessment titles in certain situations.

- **Improve handling of assigning team members when inviting candidates**

  We fixed some issues around assigning team members when inviting candidates.

- **Update Qualified Score dynamically**

  We now automatically update the Qualified Score on candidates when changes are made to their assessments or profile.

## June 27, 2022

This release includes a lot of smaller behind-the-scenes improvements, some changes to how candidates are listed, better CodeMirror history, and a bunch of new challenges.

### Improvements

- **Archive Candidates are now separated out**

  We no longer show archived candidates in the "All" list, which has also been renamed to *Open*. Archived candidates are still visible under the *Archived* filter, and by default will also show up when searching.

- **Code Editor Undo improvements**

  You can now undo to your hearts content! Our editor now supports 200 history points. We also fixed the small bug that let you undo past the beginning of your work.

### Challenges

- **Chart.js: NBA Blocked Shots Pie Chart**

  In this challenge, you'll create a pie chart to show which positions blocked the most shots per game in a dataset for a professional basketball season.

- **Detect Exterior Cells**

  Given a 2d grid of characters representing a top-down game level, determine which cells are outside a wall.

- **Git: Merge Their Changes**

  In this git challenge, you'll resolve a merge conflict by choosing the changes from the branch you're merging.

- **NodeJS & Express Quiz**

  This quiz tests your knowledge of the NodeJS ecosystem along with the Express web framework.

- **Testing: Greeter (Mocha)**

  Write unit tests for a simple greeter function in Mocha/Chai.

- **Web Scraping: Nested Comments**

  This challenge involves scraping nested comments from HTML.

- **d3.js: SF Crime Choropleth**

  This challenge involves creating a choropleth map of crime by district in San Francisco.

- **d3.js: SF Geojson**

  In this challenge, you'll create a geojson map of the police districts of San Francisco using d3.js.

### Bug Fixes

- **Markdown Improvements**

  Markdown no longer eats text that looks like an HTML element, such as <here>, which is now escaped and rendered in place.

## May 11, 2022

This release introduces one of our most exciting features yet: SmartIDE!

### Features

- **Introducing SmartIDE: Code completion, docs, and error-checking right in our code editor**

  SmartIDE is our answer to bridge the gap between web editors and desktop editors, while maintaining the zero-effort startup experience our web IDE has always provided. We've taken our existing easy-to-use, web-based IDE, and added in intelligent, useful development tools to improve you and your candidate's code editing experience in a massive way.

  ![Qualified SmartIDE autocomplete](https://docs.qualified.io/images/hire/smart-ide-preview.png)  

  [Check out the complete documentation to learn more](https://docs.qualified.io/creating-content/challenges/smart-ide/) about how to enable and start using this feature with your candidates today!

### Challenges

- **Detect Shapes in an Image**

  In this challenge, you'll detect the shapes in a black and white image.

- **Flask: Notes CRUD API**

  In this Flask API challenge, you'll build routes for a basic "notes" CRUD app.

- **Flask: Notes PUT Route**

  In this Flask API challenge, your task is to add a method to a route to allow users to update a resource.

- **Git: Show Commit Message**

  In this git and bash challenge, you'll return the message of the n-th most recent commit for a repo.

- **Pandas: Sum Positive Chunks**

  In this Pandas challenge, you'll sum runs of contiguous positive numbers in a series.

## April 21, 2022

This release includes an amazingly powerful new feature for pair-programming on project challenges, but it also includes a ton of challenges, a few smaller improvements, and lots of bug fixes!

### Features

- **Pair Programming (Interact) Support for Project Code Challenges**

  We've added the ability to real-time, pair-program with candidates and students in our project challenge interface. This all-new, ground up design allows multiple people to not only edit the solution, but also tracks focus, cursor position, and selection across all users simultaneously.

  [Learn more about the differences between project and classic code in our documentation.](https://docs.qualified.io/for-teams/process/interact/#project-code-challenges)

### Improvements

- **Improve challenge preview layout**

  When previewing project challenges, you'll now get more accurate layouts. This includes seeing the candidate notes tab, among other improvements.

### Challenges

- **AI: Tic Tac Toe Computer Opponent**

  Code an AI routine for Tic Tac Toe.

- **AWS Quiz**

  This quiz tests your understanding of AWS.

- **Analytical Reasoning Quiz**

  This quiz is intended to test your analytical reasoning skills.

- **Android Quiz**

  This quiz tests conceptual understanding of the Android ecosystem.

- **Bar Graph (Vertical)**

  In this challenge, you'll be writing a program that will print out a vertical bar graph.

- **Continuous Integration/Continuous Deployment (CI/CD) Quiz**

  This quiz is designed to test your knowledge of Continuous Integration/Continuous Deployment (CI/CD).

- **Data Structures & Algorithms Quiz**

  This quiz tests your understanding of algorithms and data structures.

- **Design Prompt: Elevator App**

  Describe how you'd design an elevator application.

- **Design Prompt: Quiz App**

  In this design prompt, you'll be describing how you'd approach designing a multiple-choice quiz application.

- **Django REST Framework: Pagination**

  Add pagination to a simple Django REST Framework app!

- **Django: Record Store API**

  In this challenge, you'll build a simple REST API for a record store.

- **Django: Record Store API Models**

  Begin creating models for a Record Store API in Django.

- **Django: Record Store Authentication**

  In this challenge, you'll add a token authentication scheme to an existing record store API.

- **Front-End: Category Filter (JS focus)**

  In this challenge, you'll implement filtering on an HTML list.

- **Front-End: Child Event Listeners**

  In this challenge, handle events on buttons inside card boxes to enable them to be selected and deselected.

- **Front-End: Figlet Fonts**

  Create an app in vanilla JS which provides an interface to an ASCII font API.

- **Front-End: Landing Page**

  Create a basic landing page with HTML and CSS.

- **Front-End: Limit Checked Checkboxes**

  Write a function to limit the number of checkboxes that can be checked at once.

- **Front-End: Pizza Checkout**

  Implement a pizza ordering form with special requirements for selecting toppings.

- **Front-End: Sortable Debug**

  In this front-end challenge, debug a drag-and-drop function.

- **Integer Partitions**

  Calculate some statistics related to integer partitions.

- **Kubernetes Quiz**

  This quiz tests your knowledge of Kubernetes commands and concepts.

- **Networking Quiz**

  This is a quiz about networking concepts.

- **Puppeteer: Figlet Fonts Debug**

  Debug a test suite for an app in vanilla JS which provides an interface to an ASCII font API.

- **Puppeteer: Find Mutual Parent**

  Use the Puppeteer library to find the closest mutual parent of `n` DOM elements.

- **Quantitative Reasoning Quiz**

  This quiz is intended to test your quantitative reasoning skills.

- **React: Expandable List Debug**

  Debug a simple component that lets a user make lists of text items.

- **Spring Boot: PathVariable Debug**

  In this challenge, debug a misbehaving GET route in a controller.

- **Terraform Quiz**

  This quiz tests your knowledge of HashiCorp's Terraform tool.

- **Vue: Click Counter**

  Create a simple Counter component in Vue which responds to click events.

- **Vue: File Tree**

  Create a component that renders a collapsable file tree structure.

- **Vue: File Tree Debug**

  Debug a component that renders a collapsable file tree structure.

- **Wordle Colorizer**

  Implement the Wordle colorizer algorithm.

### Bug Fixes

- **Improved score reporting in emails & webhooks**

  In the past, it was possible to occasionally get the wrong score in an email or webhook. We've corrected this issue.

## February 14, 2022

Introducing a few new features for Q&A challenges, new reports, and some new challenges.

### Features

- **Challenges By Topic Pivot Report**

  For advanced report users, we have added a new report that allows reporting on challenges based their topic.

- **Challenges Performance & Uniformity Pivot Report**

  For advanced report users, we have added a new report that allows you to understand overall challenge performance, code similarity and solution homogeneity.

- **Randomize Q&A Question Order**

  If you are concerned about candidates sharing question answers, randomizing the question order can make this more difficult. When enabled, each candidate will see the entire set of questions in a randomized order. That order will be consistent for the candidate (returning to the quiz later will show the same order).

  [Read More in the Docs](https://docs.qualified.io/creating-content/challenges/challenge-types/q-and-a-options/#randomize-question-order)

### Improvements

- **New Free-Text Question Formats**

  You can now choose plain text multi-line and long-form essays for free-text answer formats. These new options enable a few more use cases for Q&A challenges.

  [Read More in the Docs](https://docs.qualified.io/creating-content/challenges/challenge-types/q-and-a-options/#answer-format)

### Challenges

- **PowerShell**

- **PowerShell Project**

- **React Native: Calculator (easier version)**

  Build a calculator UI for a provided custom expression parser in React Native.

- **Redis**

  This is a simple starter template for Redis challenges.

## December 9, 2021

New challenges oh my! Just in time for the holidays, we have published a large set of new challenges including React Native, Django, Express JS and more!

### Challenges

- **Align Parentheses Vertically**

  Align parentheses vertically in a SQL query string.

- **Configuration File Parser**

  Write a configuration file parser.

- **Django: TODO API**

  In this challenge, you'll create a simple CRUD API that tracks tasks you plan to do.

- **Django: TODO API Create User Debug**

  Fix a broken view in Django.

- **Django: TODO API Foreign Key**

  In this Django challenge, your task is to add a foreign key to a model to associate TODO tasks with users.

- **Django: TODO API LoginRequiredMixin Debug**

  In a Django API, your task is to fix some routes which should be protected but aren't.

- **Django: TODO API with Pagination**

  Add pagination to a simple REST API for tracking tasks to do.

- **Express: Record Store API**

  Using the defined Mongoose schema and models, implement CRUD actions for an API which offers JSON responses.

- **Express: Record Store API Authentication**

  Build a basic authentication system for a record store application by creating routes for signing up users and allowing them to log in and out.

- **Express: Record Store API Mongoose Models**

  Implement a Mongoose Schema for three Models according to the given definitions.

- **Front end: Google Sheets Employee Table**

  Pull data from a Google Sheet and display it on a web page in a table.

- **Inside Out Array Traversal**

  Write code to iterate over the elements of an array from inside to out.

- **Java Quiz**

  This is a quiz on various facets of the Java programming language.

- **Making Change (Go Debugging)**

  Debug a small function that is randomly failing.

- **Making Change: Part 2 (Go Debugging)**

  Debug an algorithm that isn't giving the correct answer.

- **Nested Configuration Structure to YAML (easier version)**

  Iterate through a nested structure to populate a template.

- **Nested Configuration Structure to YAML (harder version)**

  Iterate through a nested structure to populate a template.

- **OOP: Cancelable Queue**

  Implement a queue with a cancelation feature.

- **React Native: Calculator**

  Build a calculator application with custom expression parser in React.

- **React Native: File Tree**

  Create a component that renders a collapsable file tree structure.

- **React Native: Spelling Fixer**

  Create a component that uses an API to automatically correct misspelled words.

- **React Quiz**

  Try your hand at a quiz on many aspects of the React user interface library.

- **React: Calculator (easier version)**

  Build a calculator UI for a provided custom expression parser in React.

- **React: File Tree (debug)**

  Debug a component that renders a collapsable file tree structure.

- **SQL: Latest Wiki Articles**

  Find the latest version of an article in a database.

- **SQL: Wiki Article Versions**

  Fetch a collection of edits to a particular article from a database.

- **Staggered Linked List**

  Convert a singly-linked list to a \_staggered\_ link list.

- **jq: Filter Inner Array**

  Write a jq filter to select a subset of an inner array without modifying its enclosing object.

- **jq: Filter Parent Array Based on Child Properties**

  Write a jq filter to select parent elements based on the values of certain inner properties in a nested structure.

- **jq: Nested Key Totals (harder version)**

  Write a jq filter to sum a series of inner properties in a nested structure.

- **jq: Nested Key Totals (easier version)**

  Write a jq filter to sum a series of inner properties in a nested structure.

### Assessments

- **Evidence Engine Showcase**

  This is a selection of challenges meant to showcase Evidence Engine.

## December 1, 2021

We have been hard at work on these game changing platform upgrades. These features are so big, we are releasing them as beta first to continue collecting feedback so we can get them just right. 

If you would like to be part of our beta program for either feature, please reach out to our sales team via our in-app messenger.

### Features

- **Evidence Engine Beta**

  Configurable score cards, powerful weighting and points allocation, subscores, and highly detailed report cards. This is the biggest upgrade to our platform in years! The Evidence Engine ushers in a new era of evidence-driving evaluations on the Qualified platform.

  [Read More in the Docs](/for-teams/process/evidence-based/)

- **Smart IDE Beta**

  Auto-complete, linting and more. Now when working on project challenges, candidates will be able to get rich feedback as they work, just like they would in their own desktop IDEs!

## September 21, 2021

### Features

- **Code Diffing**

  You can now diff candidate code from its starting point, allowing you to see exactly what was changed. You can find this feature within the Solution Review dialog, by navigating to an assessment and clicking View Details by a solution, or by starting a review.   

  This feature is particularly useful for Project Code Challenges, where it can be hard to determine what of many files are the same and which have edits.

## August 30, 2021

### Features

- **MS SQL 2019**

  MS SQL (aka Microsoft SQL Server) 2019 has been added as a SQL option for SQL classic code challenges. Create a new classic code challenge and select SQL as you language. From here you can use the version dropdown to select "MS SQL 2019".

### Improvements

- **Postgres 13**

  In addition to Postgres 9, we now support version 13 for SQL based classic code challenges.

- **Webhook Events: Recent Response**

  The recently added Webhook events UI has been updated to show the most recent REST response. This can be useful for debugging what your server is returning to Qualified when webhooks are being sent.

## August 13, 2021

### Features

- **Realtime Active Candidate Counts**

  We have made improvements to how we handle real time data in our app. As part of this mostly background related change, we have also introduced a small but useful feature. From the dashboard you can now see how many candidates are actively taking an assessment. When clicking on the active candidates count, you will be taken to the "Join Interact Session" dialog where you can choose to join any of the active sessions taking place.

### Challenges

- **Computer Architecture Quiz**

  This quiz is an overview of computer architecture concepts and MIPS assembly.

- **Front end: JavaScript Quiz**

  Try a quiz on the ins and outs of vanilla browser JavaScript and ES6.

- **Rails: Record Store Token Authentication**

  In this challenge, you'll add new routes to an existing API to manage authentication, then apply your new authentication scheme to protect a set of previously-public routes.

- **React Native: Assembly Line**

  Build an application that enables items to be moved through a series of stages.

- **React Native: Post Fetcher**

  Create a React Native component with a button to fetch posts from an API and a simple search feature.

- **Spelling Checker**

  Write a GET request to hit an API and determine if a word is misspelled.

### Assessments

- **Mobile: React Native Pre-screen**

  This assessment involves writing a couple of simple components as a test of your React Native skills.

- **Mobile: React Native Primary Assessment**

  This assessment involves creating two miniature React components: an ordered list and a productivity application prototype. You'll also provide a written response to a prompt to reflect on the code you wrote.

## July 15, 2021

Big webhook improvements, a new way to inspect solutions, and several new challenges & assessments are all included in this release!

### Features

- **Inspect Solutions: Make temporary modifications and run code when reviewing solutions**

  ![Inspect Solution button](https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/cefaefe7c0d22becacd17ad184fbfeb1-inspect_solution.png)Have you ever been reviewing candidate or student code, and wanted to get a deeper look into why their code was failing? With our new *Inspect Solution* feature, you can easily do just that.

  Simply click the new button when looking at a solution's details, and you'll be able to edit the code and run both the original tests and the submission tests. This feature opens up several new use cases:

  * Use this feature to get deeper insights into where the developer might have made mistakes.

  * Verify issues with running code (especially code that might be experiencing intermittent issues, such as due to random test cases).

  * Share a screen with the candidate or student later for review.

  * Use this to open solutions on a projector to discuss with your team, allowing quick edits and testing theories.

  ***But wait, there's more!***

  Not only can you edit the final solution, you can use this feature to inspect *any moment in the playback timeline*! With this additional feature, you can dig into where a student or candidate might have had trouble that led them down a wrong path.

- **Multiple Webhook Endpoints**

  Along with the other improvements to webhooks, we now support multiple endpoints, so you can configure different services to handle different webhooks—or even multiple services to handle the same webhook events!

- **Webhook Manager**

  You can now manage your webhooks with our new advanced webhook interface. Within this interface, you can not only control your webhooks with finer control, you can also see previous events, find failed events, and re-run them whenever you want.

### Challenges

- **Testing: Greeter (Jest)**

  Write unit tests for a simple greeter function in Jest.

- **Testing: Greeter (RSpec)**

  Write unit tests for a simple greeter function in RSpec.

### Assessments

- **Back-End: ExpressJS Take-Home**

  Work with NodeJS and Express to write a web-scraping app that serves data on an endpoint.

- **Back-End: SQL Primary Assessment**

  In this assesment, you'll write a few SQL queries.

- **DevOps: Pre-screen**

  In this assessment, you'll write a shell script and a SQL query to showcase your skills.

- **DevOps: Primary Assessment**

  Try an assessment designed to test your core scripting and SQL skills.

## June 15, 2021

Our largest release of the year, this deployment includes many new under-the-hood improvements, design changes, bug fixes, and preparation for lots of new work that's coming up!

### Features

- **All New Stats and Insights for assessment results**

  We've replaced our old stats with a much more powerful stats and insights functionality. This new tool is available inside the solutions dialog (seen when you are looking at solution details or reviewing a student or candidate).

  It not only provides detailed statistics that are far more effective than our old solution, it also uses our proprietary engine to automatically surface insights into how the candidate thinks and works.

  We're very excited about this feature, and this is just the beginning of what we have planned for it.

- **Email-based authentication for candidates & students on public assessments.**

  For public assessments, we've switched our old authentication system for a more effective and easier-to-use system that relies on simple email links, rather than expecting students or candidates to add a password.

  This change will only affect public assessments, as any candidate arriving using one of our invitation links will automatically be authenticated.

### Improvements

- **A more accurate dashboard funnel chart**

  We've made some changes to make the dashboard funnel chart more accurate.

- **Assessment results export data now includes candidate remarks**

  It's now possible to export the feedback your candidates have given through our data export feature. Go to team settings, navigate to "Data Export", and choose your settings for which assessment result data you wish to download.

- **Many behind-the-scenes updates to how data is presented**

  We've made several major changes to how our data is stored and presented, which should lead to performance improvements and more.

  This change makes loading lists of data, such as candidates or challenges, much more efficient. We're also using this data change to improve the kinds of information we can show, and will continue to lead to new features later on.

- **New Challenges listing**

  Bringing the challenges listing up to par with the candidates and assessments listing, we've updated the challenges listing to provide more information with a space-efficient design.

  This new design showcases more useful information while allowing more challenges to be visible on the screen at once.

### Challenges

- **React Native: Counter**

  Create a simple Counter component in React Native which responds to press events.

- **React Native: Ordered List**

  Create a component that enables a user to create a sorted list of items.

- **React Native: Turbo Counter**

  Expand on a basic Counter component to add a step size.

### Bug Fixes

- **Fixed issue causing resending invitations to throw a server error**

- **Fixed multiple markdown editor scrolling together**

  We fixed a small bug that could cause markdown editors to scroll together.

## May 27, 2021

This update brings improvements to embedded assessments and limited attempts, as well as many new challenges.

### Features

- **Read-Only and Restricted Embedded Assessments**

  Bringing embedded assessments to feature parity with embedded challenges, you can now embed full assessments in a read-only or restricted state!

  With this option, assessments can be reopened for candidates, but preventing them from making changes to the assessment content or results. In *readonly* mode, users cannot edit the assessment at all, but can run code or see the web preview. In *restricted* mode, users can make edits to code challenges and run tests locally, but those changes are not saved.  

  This feature allows for several new use cases, including:

  * Reopen for review: Allow candidates to review their solution without modifying the results.

  * Reopen in "sandbox" mode: Candidates can review and play around with their solution, without worrying about affecting the final score.

  * Readonly or restricted mode for reviewing: Allow team members to review solutions in an interactive mode.

### Improvements

- **Bulk Editing in User Management**

  We've added the ability to change the role and/or action status on multiple team members at once. Just search through and check off the team members you want to modify, and then use the **Edit Users** button at the top.

  We've also made it easier to invite new team members if you have a lot, by moving team member invitation to a button at the top.

- **Improves Submission Feedback and Limited Attempts experience**

  We've added more features to improve the experience with limited attempts and submission feedback.

  If a candidate has remaining attempts along with submission feedback, we've put in more restrictions to ensure they complete all attempts or have no errors before submitting their assessment.

  One of the big things we've changed is we no longer allow submission at all if there are remaining attempts.

  ![Review and Final Submission screen in a Qualified assessment](https://res.cloudinary.com/strive/image/upload/9af0171a320c619e3dbf81134224cdc3-review.png)

- **Increased security of embedded assessments**

  Embedded assessments can no longer be opened in a new tab. Previously, a candidate could open the embedded assessment in a new tab by right-clicking in the frame and opening it in a new window. This could cause issues with the SDK attempting to manage the assessment experience, as well as allow the candidate to skirt around certain limitations.

  The Embed SDK now uses a unique URL that only works when embedded, and if the URL is opened outside the frame, the assessment will not load.

### Challenges

- **Front end: Vanilla SPA**

  Write a simple single page application without a framework.

- **Puppeteer: Find Text in Nearby Container**

  Use the Puppeteer library to find relative text on a page.

- **Puppeteer: Infinite Scroller**

  Use the Puppeteer library to write a test for an infinite scrolling feed in a web application.

- **React: Figlet Fonts**

  Create a component in React which provides an interface to an ASCII font API.

- **React: Inventory**

  Expand on a basic Counter component to create a simple inventory management interface.

- **React: Inventory with Fetch**

  Expand on a basic Inventory component to fetch data from a mock API endpoint.

- **Stem Service: Promise Caching**

  Fix an Express route which is supposed to efficiently serve word prefix stems from a large word list.

## May 3, 2021

New responsive mode, new documentation, and a new challenge await!

### Features

- **Web Preview: Responsive Mode**

  You can now use a responsive mode in Web Previews. This mode is similar to one provided by the developer tools in modern browsers. When enabled, it allows you to resize the preview window freely, to experiment with different resolutions or devices. We've added some general-purpose device profiles, the ability to type in a specific number, and even a "rotate screen" button to imitate the mobile experience.

  ![A 'Hello React' app running in Qualified's Web Preview](https://res.cloudinary.com/strive/image/upload/c5346773be05731dd423a62d07889914-29_at_9.png)  

  To cap it off, we've added the ability to set the initial state of a web-enabled challenge to use responsive mode by default. This can be used to help guide developers to use the mode when taking an assessment.

  You'll find this feature under ***Challenge Config***, then click on ***Initial Layout***, and set the ***Default Responsive Mode.***

  **![Configuration for Web Preview responsive mode in Project Code Challenges](https://res.cloudinary.com/strive/image/upload/ff02e4eee1f8b8e9cc0611023d57edb8-29_at_9.png)**

### Improvements

- **New Product Documentation**

  We've finished migrating over to our [new product documentation](https://docs.qualified.io). These new docs are more complete, and provide an improved experience when learning about our product features.

  You can find the new documentation inside the application, or visit it directly at <https://docs.qualified.io/>

  If you have any bookmarks to old documentation, have no fear, because the old links will redirect to the appropriate articles on the new site.

### Assessments

- **Dotnet**

  This Dotnet assessment tests your basic C# skills.

## April 21, 2021

### Challenges

- **Find Unique Filenames**

  Given a text file of CSV-like filenames, determine which are unique per row.

- **Interleave Values**

  In this task, you'll write code to interleave values in a nested array structure.

- **Interleave Values Debug**

  In this task, you'll debug code which should interleave values in a nested array structure.

- **NumPy: Chop Array**

  Chop the tops off an array in NumPy.

- **React: Book Search Debug (written response)**

  Fix a search tool which should locate specific titles from a collection of books.

- **React: Dynamic Input Debug**

  Debug a component that offers the ability to add, delete and reorder input fields.

- **Ruby On Rails: Record Store Validations and Callbacks**

  In this challenge, add validations and callbacks to models in a simple record store API.

- **jq: Reverse Leaf Arrays**

  Write a jq filter to manipulate a nested structure.

## March 23, 2021

### Features

- **Deployment Notifications**

  When a new deployment is released, users already using the application will be notified to refresh in order to pull down the latest release.

### Improvements

- **API: Schedule Retry endpoint now returns the relevant invitation record**

  When calling the schedule retry API, the assessment result is returned with an invitation field containing the new or existing invitation. You can use this information to update the invitation URL.   

  This allows the schedule retry API to be used instead of the invite candidates API - since previously the invite candidates API was the only way to return the relevant invitation data.

## March 11, 2021

### Features

- **Provide your own support links to candidates or students**

  You can now provide your own support link (to a web form or email, for example) within assessments. This link will be shown within invitation emails, when starting an assessment, and inside the *Get Help* link inside the assessment sidebar menu.

  This link can either be a link to a website, or a mailto: link that points to an email.

  To add up this link, [visit your Team Profile page, and edit the *Support Link* field](https://www.qualified.io/hire/account/team).

### Improvements

- **Security Improvement: Only account managers are allowed to regenerate API keys**

  For customers using the API, security has been improved by limiting the users who are allowed to regenerate API keys. This change was implemented in order to better prevent existing integrations from accidentally being broken from a user who did not understand what they were doing.

### Bug Fixes

- **Run output tab initial messaging**

  Previously it was possible for the initial state of the Run Output tab to show some confusing text. This has been fixed to clearly state what the window is and that results will show once the code is run.

## March 8, 2021

### Features

- **New API Endpoint: Assessment Results Exhibit**

  A new API endpoint has been added which makes it easier to consume assessment result information. This endpoint will combine key data from multiple internal models, allowing you to make only one request to retrieve useful information. If you are looking to consume API data in order to present your own results to candidates, this endpoint will be much easier to work with.

### Improvements

- **Improved filter list performance**

  Improved filter lists for teams with lots of labels, assessments, or team members. If you have a lot of items in the list, not only have we improved the performance of loading these items, we've also changed the rendering to ensure a smoother experience.

- **Made Q&A Challenge Text Unselectable**

  Q&A Challenge text is no longer selectable, to make it more difficult to look up answers online.

- **Performance improvements on teams with large, highly active candidate & student cohorts**

  We've made significant improvements to the performance of the app when teams have a lot of active users.

  * We've changed how the initial list of candidates (students) is loaded.

  * We've reduced the real-time update rate to prevent a large, active group of users from causing constant updates.

  * We've reduced the kinds of update events we send out regularly.

  We hope these changes make using the application more pleasant!

- **Q&A challenge UX key hints now clickable**

  The key hints alongside multiple choice Q&A questions are now clickable.

### Bug Fixes

- **Fixed Project Challenges within Interact**

  Project challenges now reflect real-time data in Interact sessions again. We identified an issue that caused the real-time data to either not show up at all, or go stale even when the candidate makes updates.

  These have been fixed, along with improvements to the frequency of updated events.

- **Q&A Challenge Answers Bug Fixed**

  We've fixed an issue where Q&A solution answers can get out-of-sync with the challenge.

## March 4, 2021

### Bug Fixes

- **API Errors due to high demand**

  Database connection pool was increased in order to handle higher throughput. This fixes an issue where the API was returning errors due on a subset of requests due to connection timeouts.

- **Labels not loading within filter dropdown**

  If more than 3k labels were associated with your account, they would fail to load within the filter list. A significantly higher amount of labels should now be possible.

- **Submission files fixed**

  It was previously possible for a candidate to delete a file that was left as deletable, even though it was part of the ignore path. This was causing some submissions to fail with "no tests found".

- **Webhooks and score data out of sync**

  A race condition in some rare cases was causing webhooks to be sent reporting a zero score. In addition, some candidates would show 0% as their score while their assessment result would say 100%. This has been corrected and any impacted data has been repaired.

## February 24, 2021

We've added a new feature to make Automated Workflows even more useful!

### Features

- **New Automated Workflow Action: Immediate Retry**

  We've added the ability to immediately trigger an assessment to reopen within an automated workflow. The most common use case for this would be if you wanted to make sure a student has passed all the challenges before moving on.

  Combined with a custom message, this provides a clean experience for having the student continue working on their assessment.

  You can also configure the immediate retry to use Retakes (if enabled on your Team). In this case, the candidate or student would be asked to try again, from a clean slate.

## February 16, 2021

New activity log lets you see everything your candidate has been doing, helping with identifying areas where candidates struggle within your assessments.

### Features

- **Activity Log**

  When you are viewing a candidate's assessment results, you can now open their activity log. This log allows you to see all the steps a candidate has taken along their assessment journey.  

  ![Activity Log button in Qualified's UI](//res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/8fd9d40a5ad473f5c05edaea253bbd87-17_at_1.png)

  You can also use this log to see previous takes (if this feature is enabled on your account), or even the candidate's complete history across multiple assessments.

  ![Activity Log modal](//res.cloudinary.com/strive/image/upload/fb16039d00c9adca2908872d968104dd-17_at_2.png)

### Bug Fixes

- **Fixed issue with updating project challenges and candidate submissions.**

  There was a rare issue where candidates could have trouble submitting project challenges that had been updated.

  In these scenarios, non-editable submission tests could be updated in a non-compatible manner with the candidate's existing solution. In these cases, if the candidate was still working on the challenge, their local tests would pass, while their submission tests would fail.

  This fix preserves the original tests from when the candidate started the challenge.

- **Web Previews now work with 3rd-party cookies disabled**

  Web previews should no longer throw an error when 3rd-party cookies are disabled under modern browsers. Due to a recent security enhancement in common browsers, 3rd-party cookies are often disabled by default. We've changed the infrastructure around our web preview server to prevent this issue in most situations.

## January 26, 2021

Our first big feature release of the year includes the ability to retake assessments from scratch, improvements to reopening assessments, improvements to the assessment report, and more!

### Features

- **Assessment Retakes**

  Introducing a new feature for Qualified, you can now enable your candidates to retake assessments from the beginning.

  This feature is designed to allow for multiple complete attempts on the same assessment. Unlike the basic reopen experience, this feature will create an all-new assessment result for the candidate, letting them start the entire assessment over from scratch. The old assessment result data will be historically preserved.

  By default, this feature is disabled on your account, since it's not going to be used by everyone. If you'd like to use it, simply head over to [your team account management page](https://www.qualified.io/hire/account/team), turn on ***Enable Assessment Retakes***, and click SAVE.

  Once enabled, you can visit any candidate with a submitted assessment result, and use the ***Reopen or Retake*** button. In the invite dialog, you'll have a new option, ***Retake the assessment***. When the candidate visits the assessment link again, a new copy of the assessment will be created and the candidate can start over.

  We're still working on providing a way within the UI to see previous assessment results, but old assessment results are available within the API. Contact your sales representative if you'd like to learn more.

### Improvements

- **Share Candidate Assessment Report Improvements**

  We've added more options to configuring reports, which are now [documented within the API docs](https://docs.qualified.io/integrations/custom-integrations/api/#assessment-results-share).  

  You can now include the `hide` parameter when making requests to the `share` endpoint within the API. This ensures that hidden sections cannot be overridden, as these parameters are signed into the secure token.

  See the [documentation for more details](https://docs.qualified.io/integrations/custom-integrations/api/#assessment-results-share) on how this parameter works.

- **Blind Reviewers can use Interact**

  Blind Reviewer accounts can now use the Interact feature. Note: this still does not expose the candidate's name or email to the reviewer within the app.

- **Reopen Improvements**

  When reopening an assessment for a candidate, you are now given the ability to configure more options. The process has also been improved in small ways, such as:

  * The assessment result remains in the submitted state until the candidate returns to the page, ensuring a more consistent experience for the candidate and more accurate tracking of assessment state.

  * You can choose to add all the invitation options, since reopening and inviting a candidate now have the exact same workflow.

  * Reopening can now be replaced with Retakes, if that feature is enabled on your account.

### Bug Fixes

- **Fixes ability to preview project challenges with hidden files**

  Project challenges with hidden files had a small bug with running code. This has been fixed. Note that this only affected previewing challenges within the main application, and did not affect candidates.

- **Missing Project Code Solution data added to web hook payloads**

  Data related to project code solutions were not being included in web hook payloads, when classic code and quiz solutions were.

## December 28, 2020

### Improvements

- **Challenge & Assessment Server Side Report Filters**

  For reporting users, you now have the ability to filter certain reports by challenge or assessment, allowing you more control over which data is being reported on.   

  This is particularly useful if you have a lot of candidates, and are hitting issues with too much unrelated data being sent from the server. Since reports restrict the number of records you can return, you can end up with data you don't need while older data that is relevant is omitted from the results. Now with server side filters, you can reduce the records returned to make the data more useful towards your specific reporting needs.

## December 1, 2020

A small release as we near the end of 2020 with an improvement to reopening assessments and a few new front-end challenges.

### Improvements

- **Reset challenge timers when reinviting candidates**

  You can now easily reset challenge-level timers when reinviting a candidate. This makes it easy to allow a candidate to attempt any timed challenge that they may have not gotten to due to outside factors.

  This option is available in two location: when using the REOPEN FOR CANDIDATE button, or when inviting a candidate to the same assessment. In both cases, you'll find a slider to reset any challenge level time limits.

  (Note that this won't allow a candidate to re-take a Q&A challenge with per-question timers.)

### Challenges

- **Front end: On-screen keyboard (CSS)**

  Add positioning to an on-screen keyboard component using CSS.

- **Front end: On-screen keyboard (greenfield)**

  Create an on-screen keyboard using vanilla JS.

- **Front end: On-screen keyboard (new functionality)**

  Add functionality to an existing on-screen keyboard component.

