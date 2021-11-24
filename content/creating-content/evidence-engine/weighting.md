---
order: 5
---

# Score Weighting

Weighting is one of the advanced configuration features offered that allows you to customize how much a given signal impacts the Qualified Score and related Subscores.

![Example weighting configuration view](/images/creating-content/evidence-weighting.png)

## Challenge Difficulty Multiplier
Before getting into weighting signals themselves, its important to understand everything is weighted from a scale of `0 - 1`, with 1 being the full weight. However there is also a multiplier that is added to the weight, which causes signals to be weighted more or less compared to other challenges with a different multiplier. 

The multiplier is determined by each challenge's difficulty level. The following is the list of how each difficulty maps as a multiplier:

| Difficulty | Multiplier |
| ---------- | ---------- |
|Basic       |1X          |
|Intermediate|2X          |
|Advanced    |4X          |
|Advanced (Brutal)|8X     |

For example, let's keep things simple and consider two challenges that have not had their weightings modified from their default. This means that everything is weighted at the full `1` value within the `0 - 1` range. If challenge 1 is a **basic** challenge, and challenge 2 is a **intermediate** challenge, the signals outputted from the intermediate challenge (2X) will weigh twice as much as similar signals from the basic challenge (1X).

Where the `0 - 1` weighting range comes in, is that it allows you to tune down the multiplier so that it isn't so heavy. This is useful in cases where a signal isn't as relevant on a challenge as other sibling signals.

## Different types of weighting
There are three sections of items that can be configured. Each section works a bit differently. In some cases, the weight you set in a section will affect the internal scoring of the solution. In other cases it won't. In all cases, some form of aggregate value at the candidate's Report Card level will be affected based on how you weight an item.

### Qualified Score Factors
This is the section most relevant to how weighting affects the Qualified Score. Regardless of any other value from the other sections, the values in this section affect how much of the score gets allocated to the various signal factor groupings. 

By default, everything is weighted at `1`, which means equal weighting. If you have both a `System Scored: Code` factor group, and also a `Reviewer Scored` factor group (that contains 2 different signals), by default each of these factor groups will count for 50% of the Qualified Score, since there are two groups.

### Reviewer Scored Signals
This section deals with how the weighting within the `Reviewer Scored` factor group get weighted. While the group itself might count for 50% of the total Qualified Score, you might want a signal within that group to count for less of that 50%. 

### Subscores
This section deals with subscores. This section is a bit more advanced, in that it possibly contains sub-weightings as well. Let's discuss the subscore root weighting first.

![Root vs sub-weightings for example "React" subscore](/images/creating-content/evidence-weighting-subscores.png)

#### Root Weighting
The root weighting is only relevant when aggregating solutions within an assessment result or candidate Qualified Score. It affects how much this challenge's subscore affects the aggregate subscore. Within the solution itself, this weighting will have no affect.

#### Signal Sub-Weightings
These weightings affect the root weighting. For example, in the figure at the top of this article we have a "React" subscore which has "Passed Unit Tests" and "Coding Best Practices" as signals. This is because both signals have been mapped to the subscore. In this case we may decide we want "Coding Best Practices" to only be worth 30% of the "React" subscore. 

The weightings defined here determine the subscore value, and the root weighting determines how that subscore value gets weighted against the same subscore on other solutions.

## How to determine weights?
This article covers some advanced concepts, such as difficulty multipliers and sub-weightings. However in general you don't have to worry too much about the math. Your best bet for determining weights is to balance them relative to each other, based on the challenge itself. For example, if a challenge has the potential for a candidate to showcase their ability to utilize "Coding Best Practices", but that potential seems like only a small portion of the challenge, while other factors (such as Code Readability or Passed Unit Tests) seem much more relevant, then drop the "Coding Best Practices" signal down to what seems relevant – maybe down to only `0.2` weight (which is `20%` of the full weight possible). The UI is design to encourage you to better visualize the relative weighting of items. Don't worry about the math as much, just focus on the relative proportions.   

:::important
It is not possible to weight reviewer scored signals differently across different subscores.
:::

