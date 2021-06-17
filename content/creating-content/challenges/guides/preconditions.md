---
title: Preconditions
summary: Using preconditions judiciously
tags:
  - preconditions
  - candidate-friendliness
---

# Challenge Preconditions

### Purpose

Preconditions are often added to challenges to provide a sense of realism or introduce obstacles and requirements for candidates to deal with beyond the underlying algorithm. This practice tends to increase candidate frustration, add contrivance and harm solution quality and differentiation.

### Example and discussion

For example, consider the basic Codewars kata [Return a string's even characters.](https://www.codewars.com/kata/566044325f8fddc1c000002c) (7 kyu). The description is:

> Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".
>
> For example:
>
>     "abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
>     "a"             --> "invalid string"

The most direct solution to this challenge is:

```python
def even_chars(st):
    return list(st[1::2]) if len(st) <= 100 and len(st) > 1 else "invalid string"
```

Without the precondition requirement, the solution would be simply:

```python
def even_chars(st):
    return list(st[1::2])
```

In production code, a function that return a list that should reject certain input would typically raise an exception rather than return a string:

```python
def even_chars(st):
    if len(st) > 100 or len(st) <= 1:
        raise ValueError("input string must be between 2 and 100 characters inclusive")

    return list(st[1::2])
```

Even here, the precondition is contrived--there's no reason a maximum length restriction should be in place in production code for a function like this. Adding plot to explain away the restriction (e.g. "the boss at your company doesn't like long strings") typically only increases frustration.

Cherry-picking this one restriction also begs the question of why the type of `st` wasn't validated as well. The challenge could easily turn into:

```python
def even_chars(st):
    if not isinstance(st, str):
        raise TypeError("input must be string")
    elif len(st) > 100 or len(st) <= 1:
        raise ValueError("input string must be between 2 and 100 characters inclusive")
    # ... more preconditions ...

    return list(st[1::2])
```

All candidates will turn in more or less the same code for handling the preconditions and as such it won't act as a quality filter. The hoop-jumping required for preconditions has served only to distract candidates from focusing on the main goal: picking even letters from a string.

When completing a challenge, candidates may spend more time fussing with the code to meet the requirements than solving the problem itself.

Furthermore, adding preconditions like this harms translatability for a challenge. The example kata discussed above is impossible to translate to a language like C++ or Java directly since multiple return types would require a class or struct/union to handle the multiple types. This is a red flag that something has gone awry.

### Guidelines for preconditions

If preconditions need to be added, the recommendation is:

- Keep it simple. Avoid putting the candidate through arduous hoops that detract from delivering the core functionality.
- Keep it realistic: don't make preconditions anything that wouldn't be normal in production code.
- Keep it relevant: if the precondition actually makes sense in handling an edge case that candidates would need to handle naturally, the motivation for the requirement is clear.
- Use best practices: instead of returning odd data types or raising strange exception types, stick to whatever the most idiomatic approach is for the language.
- Write realistic unit tests. For example, assert on the precondition exception being raised by using the test suite's builtin exception assertion.
