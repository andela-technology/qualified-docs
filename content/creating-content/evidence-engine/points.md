---
order: 5
---

# Points & Weighting

Points are one of the advanced configuration features offered that allows you to customize how much a given signal impacts the Qualified Score and related Subscores. This is done by assigning a max number of points that a signal, subscore or score factor can count as. 

For example, you might assign "Passed Unit Tests" `100` max points but only assign "Review Scorecard" `50` max points. 

![Adjustable points configuration view](/images/creating-content/evidence-weighting.png)

## Challenge Difficulty
Before getting into assigning points to signals themselves, let's quickly cover how challenge difficulty affects things. The configuration screen predetermines the maximum amount of points that you can assign an item. This amount is determined by the challenge's difficulty.  

The following is the list of how each difficulty determines the max points that can be configured:

| Difficulty | Max Points |
| ---------- | ---------- |
|Basic       |100          |
|Intermediate|200          |
|Advanced    |400          |
|Advanced (Brutal)|800     |

By default, if you do not configure anything on the "Points" tab, then every configurable item will be assigned the maximum points. You have the option through this screen to reduce the points allowed on a per item basis.  

## Configuration Sections

Points are useful for allowing you to weight items differently. Weighting comes in when points get aggregated with other signals. How points get aggregated works differently depending on the section being configured. 

Let's cover the three sections and how they affect scoring.

### Qualified Score Factors
This is the section most relevant to how points affects the Qualified Score. Regardless of any other value from the other sections, the values in this section affect how much of the score gets allocated to the various signal factor groupings. 

By default, everything is assigned maximum points, so because they are the same point values, they are weighted equally. If you have both a `System Scored: Code` factor group, and also a `Reviewer Scored` factor group (that contains 2 different signals), by default each of these factor groups will count for 50% of the Qualified Score for the solution, since there are two groups.

Since challenge difficulty affects maximum point values, if you have two challenges that are configured exactly the same, but one is more difficult, then the more difficult one will count for at least twice as much as the other in terms of affecting the candidate's Qualified Score.

### Reviewer Scored Signals
This section deals with how the points within the `Reviewer Scored` factor group get weighted. While the group itself might count for 50% of the total Qualified Score, you might want a signal within that group to count for less of that 50%.

Therefore the points associated with Reviewer Scored Signals are focused on determining how each reviwer scored signal affects the overall "Reviewer Scored" factor. 

:::info Example
"Code Readability" and "Coding Best Practices" are configured as reviewer scored signals. This results in two Qualified Score Factors: "System Scored: Code" and "Reviewer Scored". The score factors are both left at 100 points (the maximum points allowed for a basic challenge). This means a reviewer scorecard can only ever affect up to 50% of the total Qualified Score for the solution. However you want "Code Readability" to count for more of that 50% then "Coding Best Practices". So you set "Code Readability" to `100` points, and "Coding Best Practices" to `50` points. That is `150` points total. Those `150` points will be calculated and from that a "Reviewer Scored" value will be determined, of which has been assigned a maximum of `100` points. 

If a candidate is rated 50% for "Coding Best Practices" and 100% for "Code Readability", they would score `125` points out of `150` points total, which gives them a "Reviewer Scored" value of `83` out of `100` points.
:::

### Subscores
This section deals with subscores. This section is a bit more advanced, in that it possibly contains sub-points as well. Let's discuss the subscore root weighting first.

![Root vs sub-weightings for example "React" subscore](/images/creating-content/evidence-weighting-subscores.png)

#### Root Points
The root points are only relevant when aggregating solutions within an assessment result or candidate Qualified Score. It affects how much this challenge's subscore affects the aggregate subscore. Within the solution itself, these points will have no affect.

#### Signal Sub-Weightings
These points affect the root points. For example, in the figure at the top of this article we have a "React" subscore which has "Passed Unit Tests" and "Coding Best Practices" as signals. This is because both signals have been mapped to the subscore. In this case we may decide we want "Coding Best Practices" to only be worth 30% of the "React" subscore. 

The points defined here determine acts as weightings for the subscore value, and the root points determines how that subscore value gets weighted against the same subscore on other solutions.

:::important
It is not possible to weight reviewer scored signals differently across different subscores.
:::

