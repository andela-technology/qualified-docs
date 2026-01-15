---
order: 3
---
# AI Assistant for Project Challenges

The AI Assistant feature allows candidates to get real-time help while solving Advanced Code (Project) challenges. The assistant provides guidance, explanations, and debugging help without giving away complete solutions.

## Overview

The AI Assistant is designed to:
- Help candidates understand problem requirements
- Provide debugging guidance when they're stuck
- Explain coding concepts and best practices
- Enhance learning without solving problems for candidates
- Use challenge-specific context for personalized assistance

## Enabling the AI Assistant

### In the Challenge Editor

1. Navigate to your Advanced Code challenge in the editor
2. Scroll to the **Advanced Options** section
3. Check the box **"Allow participants use the assessment AI assistant"**
4. (Optional) Add a custom **AI Assistant Message** to help candidates understand what the AI can do

The AI Assistant Message will be displayed to candidates when they open the AI Assistant tab. Use this to:
- Explain what kind of help the AI can provide
- Set expectations about the AI's capabilities
- Provide challenge-specific guidance

**Example AI Assistant Message:**
```
This AI assistant can help you with:
- Understanding the project requirements
- Debugging your code
- Explaining React concepts and patterns
- Suggesting best practices

Ask questions about the challenge, your code, or general concepts!
```

### Automatic Configuration File

When you enable the AI Assistant, Qualified automatically creates a `.qualified/ai-agent.yaml` configuration file in your challenge. This file controls the AI's behavior and capabilities.

## AI Agent Configuration File

The `.qualified/ai-agent.yaml` file allows you to customize how the AI Assistant behaves for your specific challenge.

### File Location

The configuration file is automatically created at:
```
.qualified/ai-agent.yaml
```

This file is:
- **Read/Write** access for content creators
- **Read-only** for candidates (they can view but not modify it)
- **Not included in test runs** (doesn't affect solution execution)

### Configuration Structure

#### Instructions

Define the AI's role and behavior:

```yaml
instructions: |
  You are an AI assistant helping candidates with coding challenges. Your role is to:
  - Provide guidance and explanations without giving away the solution
  - Help candidates understand the problem requirements
  - Suggest debugging approaches when they're stuck
  - Explain coding concepts and best practices
  - Enhance their understanding and help them learn, not just solve problems for them
  
  Use the session context from working memory to provide relevant, personalized assistance from the very first message.
```

#### Tone

Set the AI's communication style:

```yaml
tone: helpful, encouraging, educational
```

#### Constraints

Define high-level constraints for the AI:

```yaml
constraints:
  - Do not provide complete solutions
  - Focus on teaching and guiding
  - Use challenge-specific context when available
```

### Tools Configuration

Control which capabilities the AI has access to. Each tool can be enabled or disabled:

```yaml
tools:
  getChallengeContextTool:
    description: "Get challenge context, instructions, and requirements"
    enabled: true
  
  getSolutionCodeTool:
    description: "View candidate's current solution code for debugging"
    enabled: true
  
  explainCodeTool:
    description: "Explain code concepts, patterns, and implementations"
    enabled: true
  
  debugCodeTool:
    description: "Identify and fix bugs in candidate's code"
    enabled: true
  
  generateCodeTool:
    description: "Generate code examples and patterns (not complete solutions)"
    enabled: true
  
  syntaxReferenceTool:
    description: "Provide language syntax help and examples"
    enabled: true
  
  bestPracticesTool:
    description: "Suggest code improvements and best practices"
    enabled: true
```

**Available Tools:**

| Tool | Description | Use Case |
|------|-------------|----------|
| `getChallengeContextTool` | Access challenge instructions and requirements | Help AI understand what the candidate is trying to solve |
| `getSolutionCodeTool` | View candidate's current code | Enable debugging and code review |
| `explainCodeTool` | Explain code concepts and patterns | Teaching programming concepts |
| `debugCodeTool` | Identify and fix bugs | Help candidates debug their solutions |
| `generateCodeTool` | Generate code examples (not full solutions) | Provide implementation examples |
| `syntaxReferenceTool` | Provide language syntax help | Quick reference for syntax questions |
| `bestPracticesTool` | Suggest code improvements | Teach best practices and clean code |

### Guardrails Configuration

Fine-tune the AI's behavior with specific constraints:

```yaml
guardrails:
  maxCodeLinesPerResponse:
    description: "Maximum number of code lines the AI can include in responses"
    enabled: true
    value: 15
  
  educationalFocusLevel:
    description: "Level of educational guidance provided by the AI"
    enabled: true
    value: "high"  # Options: low, medium, high
  
  hintLevel:
    description: "How direct or subtle the AI's hints should be"
    enabled: true
    value: "moderate"  # Options: low, moderate, high
```

**Available Guardrails:**

| Guardrail | Type | Options | Description |
|-----------|------|---------|-------------|
| `maxCodeLinesPerResponse` | Number | Any positive integer | Limits code snippets to prevent giving away too much |
| `educationalFocusLevel` | String | `low`, `medium`, `high` | Controls how much the AI focuses on teaching vs. solving |
| `hintLevel` | String | `low`, `moderate`, `high` | Controls how direct or subtle hints should be |

## Customization Examples

### Example 1: Beginner-Friendly Challenge

For challenges aimed at beginners, you might want more direct help:

```yaml
instructions: |
  You are helping beginners learn to code. Be patient and provide clear explanations.
  Break down complex concepts into simple steps.

tone: patient, clear, encouraging

guardrails:
  maxCodeLinesPerResponse:
    enabled: true
    value: 20  # Allow more code examples
  educationalFocusLevel:
    enabled: true
    value: "high"
  hintLevel:
    enabled: true
    value: "high"  # More direct hints
```

### Example 2: Advanced Challenge

For advanced challenges, you might want more subtle guidance:

```yaml
instructions: |
  You are assisting experienced developers with a complex challenge.
  Provide strategic guidance and point them in the right direction without being too explicit.

tone: professional, concise, thought-provoking

guardrails:
  maxCodeLinesPerResponse:
    enabled: true
    value: 10  # Limit code examples
  educationalFocusLevel:
    enabled: true
    value: "medium"
  hintLevel:
    enabled: true
    value: "low"  # More subtle hints
```

### Example 3: Debugging-Focused Challenge

For challenges where debugging is key:

```yaml
tools:
  getChallengeContextTool:
    enabled: true
  getSolutionCodeTool:
    enabled: true
  debugCodeTool:
    enabled: true  # Focus on debugging
  explainCodeTool:
    enabled: true
  generateCodeTool:
    enabled: false  # Disable code generation
  syntaxReferenceTool:
    enabled: true
  bestPracticesTool:
    enabled: true

guardrails:
  educationalFocusLevel:
    enabled: true
    value: "high"
  hintLevel:
    enabled: true
    value: "moderate"
```

## Candidate Experience

### Accessing the AI Assistant

When the AI Assistant is enabled, candidates will see an **"AI Assistant"** tab in the IDE alongside their code files.

### Team Member Preview

When team members preview or edit a challenge with the AI Assistant enabled:
- A banner appears indicating "Preview Mode - Team Member View"
- The chat is **disabled** (read-only) for team members
- Team members can see the AI Assistant Message but cannot interact with the chat
- This ensures the AI Assistant is only available to actual candidates

### AI Assistant Message Banner

If you configured an AI Assistant Message, candidates will see it displayed prominently when they open the AI Assistant tab. This helps set expectations and guide candidates on how to use the assistant effectively.

## Best Practices

### Writing Good Instructions

1. **Be specific about the AI's role**: Clearly define what the AI should and shouldn't do
2. **Set boundaries**: Explicitly state that complete solutions should not be provided
3. **Encourage learning**: Focus on teaching and understanding, not just solving
4. **Use challenge context**: Reference specific aspects of your challenge

### Configuring Tools

1. **Enable relevant tools**: Only enable tools that make sense for your challenge
2. **Disable code generation for pure problem-solving**: If you want candidates to write all code themselves
3. **Keep debugging tools enabled**: These help candidates learn without giving away solutions

### Setting Guardrails

1. **Adjust hint level based on difficulty**: More subtle hints for advanced challenges
2. **Limit code lines**: Prevent the AI from writing too much code at once
3. **High educational focus**: Ensures the AI prioritizes teaching over solving

### Writing AI Assistant Messages

1. **Be clear and concise**: Explain what the AI can help with
2. **Set expectations**: Let candidates know the AI won't solve everything for them
3. **Provide examples**: Show what kinds of questions work well
4. **Challenge-specific guidance**: Mention specific technologies or concepts

## Troubleshooting

### AI Assistant Not Appearing

- Verify the challenge is an **Advanced Code** challenge (not Classic Code)
- Check that **"Allow participants use the assessment AI assistant"** is enabled
- Ensure the `.qualified/ai-agent.yaml` file exists in your challenge

### Configuration Not Taking Effect

- Make sure the YAML syntax is valid
- Check that tool names are spelled correctly
- Verify guardrail values are within allowed ranges

### AI Providing Too Much Help

- Reduce `hintLevel` to `"low"` or `"moderate"`
- Decrease `maxCodeLinesPerResponse`
- Set `educationalFocusLevel` to `"high"`
- Disable `generateCodeTool` if needed

### AI Not Providing Enough Help

- Increase `hintLevel` to `"moderate"` or `"high"`
- Increase `maxCodeLinesPerResponse`
- Ensure relevant tools are enabled
- Update instructions to be more helpful

## Technical Details

### File Management

- The configuration file is automatically created when you enable the AI Assistant
- The file is automatically removed when you disable the AI Assistant
- You can manually edit the `.qualified/ai-agent.yaml` file in the challenge editor
- Changes to the configuration take effect immediately for new chat sessions

### Permissions

- **Content Creators**: Full read/write access to the configuration file
- **Candidates**: Read-only access (can view but not modify)
- **Team Members**: Can view in preview mode but chat is disabled

### Integration

The AI Assistant integrates with:
- Challenge instructions and requirements
- Candidate's solution code
- Programming language context
- Test results and feedback
