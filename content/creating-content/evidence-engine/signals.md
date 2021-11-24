---
order: 1
---

# Signals

A signal is data that can be used as a measurement to signal competency or job fitness for a candidate.

Signals are measured and then mapped to various output scores. The two main types of output scores the Qualified Score, and Subscores. The [Qualified Score](/creating-content/evidence-engine/evidence-scoring/#qualified-score) gives you a way of assessing candidate's overall process, while subscores give you a way to understand specific competencies and job fit areas that a candidate might be weak in.

## Signal Types
There are multiple types of signals that can be measured. The following signals can currently be measured:
- Passed Unit Tests
- Answer Correctness
- Reviewer Ratings (Scorecards)

The following signals are planned for future release:
- Process Efficiency (Level of time & effort)
- Cyclomatic Complexity
- Test Case Coverage
- Runtime Performance
- Grammar
- Readability

The signals chosen for a given challenge depend on what the challenge is designed to test. Signals can be weighted, so that one signal is more relevant to a score than another.

## System Scored Signals

The two system scored signals currently supported are **Passed Unit Tests** and **Answer Correctness**. Passed Unit Tests are relevant for coding challenges, Answer Correctness is relevant for Q&A challenges. These are also the data that is used to determine the **% Solved** score for a solution.

:::info Disabling System Scored Signals
Currently it is not possible to disable these signals from being scored. However you can set their weight to `0` if you don't wish for them to be included within the Qualified Score.
:::

System scored signals are scored once an assessment has been submitted. 

## Reviewer Scored Signals
Once an assessment has been submitted, it can be reviewed by your team. This is where reviewer scored signals come in. They allow your team to objectively score certain aspects of a solution that require a human touch. We will refer to these types of signals as **scorecards**, since the way they are scored is by giving a scorecard (set of ratings) to reviewers to fill out and submit.

One or more scorecard signals are assigned to each challenge. For example, "Code Readability" is typically assigned to coding challenges. These scorecards are rated by your team, and those ratings later get translated into various scores. Scorecard signals are always mapped to the Qualified Score, and also are usually mapped to at least one Subscore. For example, "Code Readability" by default is mapped to a "Code Maintainability" subscore.

Once a scorecard is submitted by a reviewer, the [Qualified Score](/creating-content/evidence-engine/evidence-scoring/#qualified-score) will be updated to incorporate the new information.

### When to use Scorecards
Scorecards are an important part of an evaluation process, because it allows your team to evaluate aspects that a machine can't quantify or qualify on its own. However rating solutions takes time and manpower. In order to save your team time, we recommend that you only do a deep dive review on candidates who have performed well.

:::tip Recruiting Process Tip
When utilizing Qualified in a recruitment setting, filter out low performing candidates first. Scorecards ideally are used before the next interview, as their own stage. This allows your team time to quickly review an assessment result (or results) and determine if an interview is even warranted. It also gives you more context for when you do conduct the interview.
:::

:::tip Education Process Tip
When utilizing Qualified in an education setting, utilize scorecards to provide valuable feedback to students. Scorecards don't just allow you to rate, but also to provide feedback specific to that rating. You can utilize scorecard rating feedback to provide guidance on how the student can improve.  
:::

### Standard Scorecards
When configuring a challenge through the evidence engine configuration view, you will start on the signals tab, where you will have a number of predefined signals to choose to enable. A set of those are for scorecards.

### Customized Scorecards
The system does not currently provide a UI for creating custom scorecards from scratch, you must select a standard scorecard. This is a feature that is planned. However you can customize the standard scorecards.

Let's go over the customization options:

#### Considerations
When a reviewer rates a Scorecard signal, they are provided a list of considerations that they can review. These considerations act as a rubric. Each standard scorecard signal comes with its own pre-defined considerations list. 

![Example scorecard with considerations tooltip activated](/images/creating-content/scorecard-considerations-noted.png)

You are free to update these considerations. Markdown formatting is supported, so you are not forced to stick with the structure initially provided by Qualified.

#### Candidate Review Checklist
By default Qualified shows the names of the Scorecard signals that will be rated. This is done so that candidates are always made clear about what is expected from them. This ensures that submissions are not made that are not valid due to candidate's not clearly understanding expectations. The option is provided to disable this feature on a per signal basis, just in case a challenge design may be negatively affected by showing this information.  

![Example candidate instructions with Scorecard signals shown](/images/creating-content/qualities-candidate.png) 

:::important Limited Beta
Signals are part of the Evidence Engine, which is a beta feature that may not be enabled on your account.  
:::
