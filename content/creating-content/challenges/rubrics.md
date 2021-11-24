---
order: 4
private: true
---

# Qualitative Rubrics
When developing your challenges, if you are planning to review the submitted candidate solutions in order to assess their quality, then you will want to define rubrics to aid your process. 

## Defining Content With A Rubric In Mind
Before we dive into the rubric functionality of Qualified, let's first talk about the importance of thinking about rubrics—regardless if you decide to utilize rubric based scoring within your process. 

When reviewing the results of an assessment, and especially when looking over code solutions, it will be tempting to penalize a candidate for issues you see with their code. It is important to respect that if the goal of the challenge was not clear to the candidate, than it is possible to penalize someone for something they didn't think they would be assessed on. This is why it is important to think about how solutions will be judged on a qualitative level, even if the judgement process will only be using a subjective approve or reject rating process. It is also important that the areas in which judgement will be placed is made clear to candidates. 

For example, if you expect candidates to write production quality code, then candidates should be clearly instructed to write production quality code. Otherwise they may simply focus on completing tasks within the expected time, instead of making sure to save some time to ensure the quality is what it should be. Furthermore, you should have a good understanding about what "production quality code" should mean both to candidates and the expected learning outcome of the challenge. Do you want to leave the definition of production quality code vague, so that you can see how the candidate interprets the meaning? Or do you want to clarify the description because it could otherwise be too open ended or unclear for the given task, leading to inconsistent or potentially unfair results?

By thinking about how you expect solutions to be qualitatively assessed, and by making those expectations clear to your candidates, you will receive a more valid sample of their work. Even in cases of subjective judgement that does not involve an objectively defined rubric, this should help to improve consistency and validity in your overall assessment.        

## Objective Rubrics

Objective Rubrics are a feature which allow you to tailor structured rubric guides for each challenge, which allow your reviewers to quickly determine if candidates meet expectations or not. They provide guidance to reviewers on how they should rate the quality of a solution on an objective basis. Using rubrics, you can capture detailed information that can be used to build a competency profile for each candidate. This level of information allows you to identity key strengths and weaknesses. When combined with subjective ratings, which give reviewers freedom to express their concerns without a defined structure, you can continue to capture your team's approval sentiment while still retaining a structured process. 

:::important Limited Beta
Objective rubrics involve features that are part of the Signal Scoring System, which is a new set of features currently in limited beta. If you are interested in learning more, please reach out to our sales team.  
:::

### Quality Signals
The building blocks of rubrics are qualities, which represent individual qualitative signals about a candidate's solution. These qualities can be defined to be anything that you might want to signal within your process, such as "Code Readability" or "Solution Elegance".  

Qualities are qualitative building blocks for creating enriched competency-based profiles. Through the use of the signals scoring system, you will be able to combine qualities to build a better understanding of the competencies they represent. You can even weight qualities differently when mapping them to competencies. We will explore how qualities are mapped as signals in more detail later.

:::tip Why use objective qualities?
**For recruiters:** They allow your team to give quick and consistent feedback, enabling you to hone in on areas that you should follow-up on within later interviews, or to un-qualify certain candidates altogether. 

**For educators:** They allow you to give structured feedback to candidates quickly and consistently. The granular scoring also allows you to later analyze where students are having the most difficulty performing, with respect to deliverable quality.   
:::

Qualities can be mapped to both autonomous scoring and human based scoring. For human based scoring, reviewers will have the option of rating each quality using a rubric. 

#### Rubric Rating Scales
Qualities are scored using ratings, which indicate where the candidate's solution falls within an objective scale. Each quality is rated using this scale by having a reviewer click on the criteria that best describes the solution. Qualified supports two different rating scale configurations. 

##### Three Point Rating Scale
The three point scale is the most commonly used scale and consists of criteria which are considered "As Expected", "Minor Concern" or "Major Concern". 

With this scale, `As Expected` is the level a reviewer should select if they feel like the solution quality is as good as one should expect or better. If the reviewer spots minor issues where the candidate should probably have performed better, they would select `Minor Concern`. If there are major issues that are indicative of serious quality issues, then `Major Concern` should be selected. 

##### Two Point Rating Scale
The two point scale is a dichotomous scale, useful for when a candidate either meets expectations or doesn't. The 3rd "minor" value is removed. This scale is used or when there is no reason for using a 3rd value.  

#### Rubric Criteria
Each quality can be configured to have one or more sets of criteria associated with it. Each criteria set is associated with a Quality scale. If multiple criteria sets are associated with the quality, then the scores from each set get averaged together to create a composite quality score. By using multiple criteria sets, you can create highly detailed scoring that goes well beyond only 3 possible score values.     

![Example rubric for "Code Readability" quality using a single set of criteria](/images/creating-content/rubric-simple.png)

![Example rubric for "Solution Elegance" quality using multiple sets of criteria, with mixed usage of scales](/images/creating-content/rubric-multi.png)

### Legacy Rubrics
Legacy rubrics within Qualified are simple "good", "neutral", and "bad" options for predefined categories, such as "Code Readability". These rubrics are enabled for all subscription types. Legacy rubrics cannot be customized per challenge, and do not provide any objective descriptions to help reviewers give objective opinions. 

:::warning Legacy rubrics are being deprecated
Legacy rubrics are being replaced by Qualified's new Signals based Objective Rubrics, which are currently in limited beta.
:::


:::info WIP Article
This article is a work-in-progress. 
:::
