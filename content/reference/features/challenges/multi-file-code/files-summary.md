---
private: true
---

# Project Challenge Editor

The code challenge creator provides an in-browser IDE for creating and validating project code challenges.

## Quick Usage

- Click on files or tasks in the sidebar to open them for editing.
- Drag file tabs around to move them around the UI. You can also resize the various tabbed panes by dragging the space between them.
- You can create new project or reference solution files & directories by using the plus icon (<span class="icon-plus"></span>)
    - _Project Files_ are all the base files that make up a challenge. These are what are provided to the candidate so they can solve the challenge.
    - _Reference Solution Files_  allow the code runner to validate your tests, as well as learn about the expected output from the tests. Any files provided in here are treated as files provided by a candidate, overriding (when allowed) the project files above.
    - Use the gear icon (<span class="icon-cog"></span>) to customize the file tree layout

### Running Tests

- Click **RUN CANDIDATE TESTS** or use <span class="shortcut-hint"><span class="mac-os-only" title="Command">&#8984;</span><span class="not-mac-os-only">CTRL</span> + '</span> to preview running the reference solution files against the candidate-visible tests.
- Click **RUN SUBMISSION TESTS** or use <span class="shortcut-hint"><span class="mac-os-only" title="Command">&#8984;</span><span class="not-mac-os-only">CTRL</span> + Enter</span> to preview running the reference solution files against the submission tests.

### Previewing Front-End Challenges

- Use the _Web Preview_ Challenge Editor Tool to see your solution rendered in real time.

### Shortcut Keys

- <span class="shortcut-hint"><span class="mac-os-only" title="Command">&#8984;</span><span class="not-mac-os-only">CTRL</span> + '</span> Run candidate tests
- <span class="shortcut-hint"><span class="mac-os-only" title="Command">&#8984;</span><span class="not-mac-os-only">CTRL</span> + Enter</span> Run submission tests
- <span class="shortcut-hint"><span class="mac-os-only" title="Command">&#8984;</span><span class="not-mac-os-only">CTRL</span> + S</span> Save the challenge (will re-publish if already published)
- <span class="shortcut-hint"><span class="mac-os-only" title="Command">&#8984;</span><span class="not-mac-os-only">CTRL</span> + P</span> Open the challenge preview dialog

## Detailed Usage

- [Learn more about the challenge creator here.](/reference/features/challenges/multi-file-code)

## Advanced Features

- [Advanced Test Cases](/reference/features/challenges/advanced-test-cases)
  Include extra features in your test cases, such as tagged and weighted tests.
