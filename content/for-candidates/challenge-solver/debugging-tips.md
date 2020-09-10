---
title: "Code Challenge Solver: Debugging Tips"
summary: "Learn some tricks for debugging your code during an assessment"
---

# Challenge Solver: Debugging Tips

We provide several ways to help you write the best code you can.

## Code Errors

Most compilation & runtime errors should show up automatically in the results pane.

## Write your own test cases!

The **Sample Tests** editor is available for you to write your own test cases. These are your own cases, and usually you'll be provided with a few basic examples. Whatever changes you make to this code will be provided to the reviewer, so you can use this as an extra way to stand out, showing your ability to write quality, testable code.

You should modify the code in that view to adjust or add more test cases for debugging your code as you work. Think about additional common and edge cases you might want to add.

## STDOUT / Console Output

While Qualified doesn't support interactive debugging, you can write to `stdout` (sometimes called "system out" or "console") in any language for outputting debugging information. When you run your code, this will show alongside the test output.

### Examples:

- C
    ```c
    #include <stdio.h>
    printf("debug message\n");
    ```
- C++
    ```cpp
    #include <iostream>
    std::cout << "debug message\n";
    ```
- C#
    ```csharp
    System.Console.WriteLine("debug message");
    ```
- Java
    ```java
    System.out.println("debug message");
    ```
- JavaScript / TypeScript / CoffeeScript
    ```javascript
    console.log("debug message");
    ```
- Python
    ```python
    print "debug message"
    ```
- Ruby
    ```ruby
    puts "debug message"
    ```
- Swift
    ```swift
    print("debug message")
    ```
