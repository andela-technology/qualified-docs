<!--{"order":2,"summary":"Help for setting up Qualified Webhooks","bodyClass":"employer-focused","id":"integrations/webhooks","parentId":"integrations","title":"Webhooks","sections":[{"title":"Webhooks","id":"webhooks","depth":1},{"title":"Setup","id":"setup","depth":2},{"title":"Events","id":"events","depth":2},{"title":"Assessment Events","id":"assessment-events","depth":3},{"title":"Assessment Result Events","id":"assessment-result-events","depth":3},{"title":"Assessment Result Solution Events","id":"assessment-result-solution-events","depth":3},{"title":"Assessment Result Review Events","id":"assessment-result-review-events","depth":3},{"title":"Challenge Events","id":"challenge-events","depth":3},{"title":"Team Candidate Events","id":"team-candidate-events","depth":3},{"title":"Data Models","id":"data-models","depth":2},{"title":"Assessment","id":"assessment","depth":3},{"title":"Assessment Result","id":"assessment-result","depth":3},{"title":"Assessment Review","id":"assessment-review","depth":3},{"title":"Challenge","id":"challenge","depth":3},{"title":"Solution","id":"solution","depth":3},{"title":"Solution Reviews","id":"solution-reviews","depth":3},{"title":"Team Candidate","id":"team-candidate","depth":3}]}-->

# Webhooks

Webhooks make it easy to tie into events that occur in the Qualified system.

<figure>

![Webhooks UI](/images/content/images/hire/webhooks.png)

</figure>

> <i class="premium"></i> Webhooks are only available on our custom plans.

## Setup

Want to be notified when a candidate starts and finishes their assessment? Interested in monitoring your own team’s development of challenges and assessments?

Simply provide a URL to your API and check the boxes for the events you want to be broadcasted to this URL. Then you can integrate into your own system actions to be taken upon completion of these events.

## Events

Either check the box to send all events, or choose from the list of webhook events to be notified of.


### Assessment Events

These methods are specific to updates concerning assessments so they emit a [Assessment](#assessment) in the `data` property.

- **Assessment Created** (assessment.created) - This event will fire when an assessment has been created.
- **Assessment Updated** (assessment.updated) - This event will fire when an assessment has been updated.
- **Assessment Published** (assessment.published) - This event will fire when an assessment has been published. At this point it will become available for candidate usage.
- **Assessment Destroyed** (assessment.destroyed) - This event will fire when an assessment has been deleted. This is a soft delete, so the assessment will in fact continue to exist should you need to reference it later.

### Assessment Result Events

These methods pertain specifically to a candidate's assessment outcome so they will emit an [Assessment Result](#assessment-result) in the `data` property.

- **Assessment Started** (team_candidate.started_assessment) - This event will fire when a candidate selects their language and begins their challenge.
- **Assessment Submitted** (team_candidate.submitted_assessment) - This event will fire when a candidate has completed their challenge and clicks submit. Once this has occurred, the candidate can no longer update the assessment.

### Assessment Result Solution Events

These methods pertain specifically to a candidate's solution within an assessment so they will emit a [Solution](#solution) in the `data` property.

- **Solution Created** (solution.created) - This event will fire when a candidate starts to work on their solution for a challenge.
- **Solution Updated** (solution.updated) - This event will only fire when a candidate tests or submits their code solution. For Q&A solutions, this event will fire on all updates.

### Assessment Result Review Events

These methods reference the assessment result that is a team member's evaluation of a candidate's assessment result. It will an emit an [Assessment Result Review](#assessment-result-review) in the `data` property.

- **Assessment Result Review Created** (assessment_result_review.created) - This event will fire when an assessment result review has been created by a team member.
- **Assessment Result Review Updated** (assessment_result_review.updated) - This event will fire when an assessment result review has been updated by a team member.
- **Assessment Result Review Submitted** (assessment_result_review.submitted) - This event will fire when an assessment result review has been submitted by a team member.
- **Assessment Result Review Destroyed** (assessment_result_review.destroyed) - This event will fire when an assessment result review has been deleted. This is a permanent delete, so further references to the challenge may not be valid.

### Challenge Events

These methods are specific to updates concerning challenges so they emit a [Challenge](#challenge) in the `data` property.

- **Challenge Created** (challenge.created) - This event will fire when a team member has created a new challenge. It will emit an [Challenge](#challenge) as it's `data`.
- **Challenge Updated** (challenge.updated) - This event will fire when a team member has updated a challenge.
- **Challenge Published** (challenge.published) - This event will fire when a challenge is published. At this point the challenge will become available for candidate usage.
- **Challenge Destroyed** (challenge.destroyed) - This event will fire when a challenge is deleted. This is a permanent delete, so further references to the challenge may not be valid.

### Team Candidate Events

These methods are specific to updates concerning team candidates so they emit a [TeamCandidate](#team-candidate) in the `data` property.

- **Team Candidate State Changed** (team_candidate.created) - This event will fire whenever a team candidate's state changes. This includes when a team candidate is first created, due to an invite or starting an assessment via a public link.
- **Team Candidate Label Added** (team_candidate.label_added) - This event will fire whenever a team candidate has a label added. If multiple labels are added at the same time, a unique event for each one will be fired.
- **Team Candidate Label Removed** (team_candidate.label_removed) - This event will fire whenever a team candidate has a label removed. If multiple labels are removed at the same time, a unique event for each one will be fired.

## Simulating and Firing events for development

See the API docs at https://qualified.io/api/docs#webhook-examples for a set of APIs for simulating and triggering webhook events.

## Data Models

The data sent emitted by the configured webhooks can be broken down according to their data models.

### Assessment

The assessment represents the set of challenges that a candidate can be presented with.

**Properties**

- title
- summary
- purpose
- challenges: Set of [challenges](#challenge)

### Assessment Result

The assessment result represents a candidate's outcome after taking their challenges.

**Properties**

- id
- score
- accumulated_seconds
- workflow_name
- abandoned
- state
- candidate_remarks
- passing_score
- invited_at
- started_at
- submitted_at
- candidate
- team_candidate
- assessment
- solutions: Set of [solutions](#solution)

### Assessment Review

The assessment review represents a team member's evaluation of a candidate's assessment result.

**Properties**

- feedback
- rating
- state
- submitted_at
- reviewed_by_id: The team member who reviewed this candidate
- team_candidate_id: The candidate who has received this review
- assessment_result_id: The associated assessment result
- solution_reviews: A set of [solution reviews](#solution-reviews)

### Challenge

Represents a challenge within your library.

**Properties**

- id
- _type
- title
- estimated_type
- topics
- summary
- purpose

### Solution

Represents a candidate's attempt to solve a particular challenge.

**Properties**

- id
- _type
- score
- passed_test_cases
- total_test_cases
- weighted_test_cases
- attempts
- language
- first_test_case_solved_at
- completed_at
- wall_time
- challenge: The [challenge](#challenge) this solution pertains to

### Solution Reviews

Represents a team member's review of a particular candidate's challenge solution.

**Properties**

- rating
- feedback
- challenge_id: The id of the [challenge](#challenge) for this review
- solution_id: The id of the [solution](#solution) for this review

### Team Candidate

Represents the developer taking the assessment. For education customers, this entity is called a "Student" within the UI.

**Properties**

- name
- first_name
- last_name
- anonymouse_name
- email
- state
- prev_state
- labels: Array of strings
- test_team_member: true if the team candidate is actually a team member taking the assessment)
- highest_score
- recent_assessment_result: assessment result with the most recently updated state
- assessment_results_count
- added_label: Only present for `team_candidate_label_added` event
- removed_label: Only present for `team_candidate_label_removed` event
