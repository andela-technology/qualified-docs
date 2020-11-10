---
order: 3
title: Best Practices
---
# Challenge Development Best Practices

The following best practices are taken directly out of our own experience with building challenges.

## Challenge Components
### Instructions
Instructions are an often overlooked but critical component to the challenge design. It is tempting to write sparse instructions which don't take a lot of effort to write - but these are often vague or misleading and can negatively impact the effectiveness of the assessment. Here are some key things to keep in mind: 

- Instructions should be complete without sacrificing clarity and concision. 
- Avoid typos and grammatical errors.
- Use plot sparingly—prefer directly stating the coding task. Superfluous plot makes the candidate experience frustrating by increasing indirection in the requirements, introduces cultural biases and generally makes challenges more contrived. 
- When you do use plot, using **real-world scenarios** to setup the context is best. Handling a Jira ticket, receiving an email, etc. The realism of the context will aid candidates into treating the task more like you would expect them to on the job. 
- Avoid cultural-specific terms and scenarios and keep non-native English speakers in mind.
- Use graphics sparingly: text and simple markdown/ASCII is clearest. Never use images of code.
- Keep in mind browser and screen sizes when using HTML, tables and images.
- Explain any terminology and context the candidate can't be expected to understand (error heavily on the side of caution—there's little gain in proving that a candidate couldn't figure out which CFG was intended, for example).
- If information is intentionally to be withheld from the candidate, it's best to explain it to the extent possible to avoid creating a "gotcha" situation.
- Include a [rubric](../rubrics) so the candidate knows how they'll be evaluated and what the goals and deliverables are. The objectives of the challenge should be clearly stated. The purpose of the challenge should be obvious.
- State assumptions, guarantees and edge cases the candidate should consider. If you want a candidate to detect an edge case on their own, make sure the constraints of the problem allow it.

### Test Setup
- Make provided test coverage as comprehensive as possible. Any tests that aren't provided should be carefully thought out and have a specific purpose for their absence: random tests to prevent hardcoded solutions, performance tests and carefully-planned edge cases that are within the problem constraints are common options. 
- If you expect candidates to contribute to the test suite, invite them explicitly.

### Code Setup
- Avoid creating busywork for the candidate. Boilerplate should be as complete as possible and follow best practices and modern syntax.
- Ensure that the provided code doesn't throw errors or crash unless fixing these things is part of the challenge. Instead, the provided setup should trigger clear assertion errors inside the test suite related to the deliverables.

## Challenge Planning
### Setting challenge requirements and goals
- Make all requirements purposeful. The challenge scope should be as narrow as possible. For example, testing input validation in addition to a main algorithmic task is in most cases busywork. 
- Although realism is nice to have to the extent it can be attained without imposing time-wasting minutiae, some amount of simplifying assumptions are inevitable and should be embraced but chosen carefully.
- Make challenges fun to the extent possible and appropriate (or at least engaging).

### Establishing Process
#### Identifying time limitations
- Time is one of the most critical factors in creating a challenge. Generally speaking, try to be as succinct as possible: the idea is to gain as much actionable information from the candidate in as short a time as possible.
- Be aware that time limits are one of the most significant sources of stress for candidates. Most real-world work isn't speed-coding so time limits should only be present to keep the playing field fair among candidates and respect the time needs of all parties (candidate and reviewer).
- Consider time-boxing candidates by task or providing explicit estimates and setting reasonable expectations. Providing a roadmap of tasks can ease. Try to be generous with respect to imposed time limits.
#### What can realistically be tested?
In addition to time limitations, it's not always possible or ideal to test everything in code. Quizzes and short answer or written responses are underrated and should be used in most assessments.
#### What can be automatically tested?
Make clear distinctions between what you expect to be manually versus automatically tested and build the challenge accordingly.
#### Utilizing reviews and rubrics for what cannot be automatically tested
Keep rubrics simple and clearly thought-out. Vetting is an important part of ensuring relevance for each rubric item.
### Identifying learning goals & priorities
- Establish competencies/skills to be targeted
- Prioritize skills to fit within limited assessment time (budget)
- Establish how results will be judged
