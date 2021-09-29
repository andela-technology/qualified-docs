---
title: Testing Standard Input and Output
summary: "Testing Standard Input and Output"
tags:
  - language-agnostic
  - standard i/o
---

# Testing Standard Input and Output

## Overview

On occasion, clients inquire about testing code that uses the standard input stream to collect input and use standard output to return results to the testing harness.

The use case is generally akin to the following simple example (shown in Java, but equally applicable to any language):

```java
class Main {
    public static void main(String[] args) {
        // get input
        int num = new java.util.Scanner(System.in).nextInt(); 
       
        // print the result
        System.out.println(num % 2 == 0 ? "even" : "odd"); 
    }
}
```

## Typical Scenarios

Some of the typical client scenarios we've seen this I/O pattern include:

1. The client was using manual review to evaluate candidates prior to Qualified.
2. The client has been using a language-agnostic testing harness to evaluate candidates and wants to migrate to Qualified.
3. The client is education-oriented and uses standard I/O as part of its curriculum.
4. The client wants to add realism to the evaluation experience by prompting the candidate to write a self-contained app rather than a single function.
5. Other online judge sites use standard I/O to evaluate solutions and a client would like to apply the same pattern to Qualified.

Other scenarios are possible as well, but these use cases provide some motivation for I/O testing.

## Qualified's Philosophy

The Qualified approach to evaluating code is unique because it's based on [industry-standard, language-specific unit testing frameworks](http://localhost:8080/reference/languages) rather than standard input and output.

The workflow that Qualified's code runner prioritizes is making a direct call to a solution function, or instantiating a solution class and letting the testing framework handle the assertions. This occurs in a single process, or in subprocesses controlled purely by the testing library, in some cases. Results from assertions are custom-formatted for pretty printing on our code runner's HTML-based user interface.

One consequence of Qualified's adoption of language-specific testing frameworks is that syntax highlighting and environment will be specific to a single language per solution. Scenario #2 presented above would be implemented by translating the language-agnostic solution harness into each language's test cases. Qualified offers a [generator](http://localhost:8080/reference/features/challenges/code/language-generator) to help ease the translation process.

The primary merit to our library-based approach is that it better reflects a real development environment than standard I/O testing. It encourages candidates to write their own test cases in a popular testing framework using established paradigms such as [test-driven development](https://en.wikipedia.org/wiki/Test-driven_development).

For example, the preferred Qualified way to test the above Java code is:

```java
class Solution {
    public static boolean isEven(int num) {
        return num % 2 == 0;
    }
}
```

And a [JUnit](https://en.wikipedia.org/wiki/JUnit) testing suite such as:

```java
import org.junit.Test;
import static org.junit.Assert.*;

public class IsEvenTest {

    @Test
    public void testEven() {
        assertTrue(Solution.isEven(2));
    }

    @Test
    public void testOdd() {
        assertFalse(Solution.isEven(1));
    }
}
```

For clients looking for the realism a large project inspires, our [Project Code Challenge](http://localhost:8080/creating-content/challenges/challenge-types/#project-code-challenges) feature offers multiple files and best approximates a natural development workflow.

That said, for those who wish to proceed with standard I/O testing in spite of the orientation of the platform, the rest of this guide will share a few general strategies for doing so.

Given that Qualified supports over 2 dozen languages, writing a standard I/O guide for every language and every use case would be prohibitive, so we focus on Java, but the techniques should apply to most other languages.

## Strategies for I/O Testing

### Run the solution in a subprocess

Most languages support running [subprocesses](https://en.wikipedia.org/wiki/Subprocess). Using a subprocess call, your testing suite can compile (if necessary) and run the candidate's solution code, passing any necessary standard input through a [pipe](https://en.wikipedia.org/wiki/Pipe) or passing [args](https://en.wikipedia.org/wiki/Command-line_interface#Arguments), and capturing standard output, perhaps even involving bidirectional interactivity.

This is a versatile strategy that will generally work, but comes with a few major downsides:

- Subprocess calls are often slow which can upset the candidate's workflow and result in false negatives and confusing errors when the testing suite times out running tests. One compilation call should suffice per test suite, but each assertion block should run on a fresh subprocess to ensure idempotency. If there are many assertions, the 12-second timeout on a submission can easily be reached.
- The boilerplate code necessary to run subprocesses in many languages can be complicated. While you can bury some of the verbosity in helper functions in the hidden preloaded file, the layer of indirection can confuse candidates and prove hard to debug if anything goes wrong.
- Prints for debugging can be frustrated by the fact that standard output is overloaded for both results and debugging messages. The code runner might not capture or format output and error from your manually-spawned subprocesses correctly, if at all, so you may need to reinvent wheels that the code runner already does well.

We anticipate that running subprocesses harms candidate experience in most cases and should only be used in very specific use cases as a last resort.

### Reflection

Some languages support reflection, the ability for code to examine and manipulate itself. Using reflection, your testing suite may be able to find and directly execute the candidate's solution code without a subprocess.

Although reflection is in-process and can fix speed issues with the subprocess approach, it still adds complexity and opens up room for confusing errors.

Using reflection is highly language-specific, so it might make it difficult or impossible to transfer the strategy to other languages should the occasion arise.

For a concrete example, See [this Stack Overflow post](https://stackoverflow.com/questions/46173987/how-to-test-a-simple-command-line-application-in-java-using-junit/46173988#46173988) which describes a full I/O-based testing suite.

We only recommend reflection for very specific use cases.

### Consider loosening requirements

In some cases, you might be able to keep the essential parts of your I/O-orientation while taking a partial step towards the in-process test cases that are natural for Qualified.

For example, using our running Java example, we can tweak `main` to accept a different parameter, and use standard output but avoid standard input, striking a compromise:

```java
import java.io.ByteArrayOutputStream;
import java.io.PrintStream;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class IsEvenTest {
    private PrintStream originalSystemOut;
    private ByteArrayOutputStream systemOutContent;

    @BeforeEach
    void redirectSystemOutStream() {
        originalSystemOut = System.out;
        systemOutContent = new ByteArrayOutputStream();
        System.setOut(new PrintStream(systemOutContent));
    }

    @AfterEach
    void restoreSystemOutStream() {
        System.setOut(originalSystemOut);
    }

    @Test
    @DisplayName("test even")
    public void testEven() {
        Solution.main(2);
        assertEquals("true\n", systemOutContent.toString());
    }

    @Test
    @DisplayName("test odd")
    public void testOdd() {
        Solution.main(1);
        assertEquals("false\n", systemOutContent.toString());
    }
}
```

