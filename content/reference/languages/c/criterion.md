---
summary: Information for the Criterion testing framework for C
tags:
  - c
  - testing
  - criterion
---

# Criterion Testing Framework

## Overview

Qualified supports the [Criterion testing framework](http://criterion.readthedocs.io/en/master/). 

## Basic Example

### Solution code

```c
#include <stdlib.h>

char *reverse(const char *s) {
    int len = strlen(s);
    char *result = malloc(len + 1);
    result[len] = '\0';
    
    for (int i = 0; i < len; i++) {
        result[i] = s[len-1-i];
    }
  
    return result;
}
```

### Test suite code

```c
#include <criterion/criterion.h>
#include <stdlib.h>

extern char *reverse(const char *s);

Test(reverse, example_test) {
    char *actual = reverse("hello world");
    const char *expected = "dlrow olleh";
    cr_assert_str_eq(actual, expected);
    free(actual);
}
```

## Verbose output for complex data

A potential for confusion when using Criterion is lack of verbosity in output. When comparing data structures, consider writing a stringification helper and passing it into the optional format parameter to Criterion's assertion call.

To illustrate the problem, consider that `cr_assert_arr_eq(actual, expected, sizeof(expected));` by default produces an error `The expression (actual)[0..Size] == (expected)[0..Size] is false.` which doesn't show a diff of the two arrays. Adding an array stringification function allows for a much clearer error log. Here's a complete example:

### Preloaded code

```c
#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void ensure(bool pred, char *msg, char *file, int line) {
    if (!pred) {
        fprintf(stderr, "%s:%d: %s", file, line, msg);
        exit(1);
    }
}

char *arr_to_s(int len, int *arr) {
    int result_capacity = 16;
    int result_len = 0;
    char *result = malloc(result_capacity);
    ensure(result, "malloc", __FILE__, __LINE__);
    result[0] = '\0';

    for (int i = 0; i < len; i++) {
        char num[16];
        int previous_len = result_len;
        result_len += sprintf(num, i < len - 1 ? "%d," : "%d", arr[i]);

        if (result_len >= result_capacity) {
            result_capacity <<= 1;
            result = realloc(result, result_capacity);
            ensure(result, "realloc", __FILE__, __LINE__);
        }

        strcat(result + previous_len, num);
    }

    return result;
}
```

### Solution code

```c
#include <stdlib.h>

int *reverse(const int len, const int *nums) {
    int *result = malloc(sizeof(*result) * len);
    
    for (int i = 0; i < len; i++) {
        result[i] = nums[len-1-i];
    }
  
    return result;
}
```

### Test suite code

```c
#include <criterion/criterion.h>
#include <stdlib.h>

extern char *arr_to_s(int len, int *arr);
extern int *reverse(int len, int *nums);

Test(split_integer, reverse_test) {
    int nums[] = {1, 2, 3};
    int expected[] = {3, 2, 1};
    int len = sizeof nums / sizeof nums[0];
    int *actual = reverse(len, nums);
    char *expected_s = arr_to_s(len, expected);
    char *actual_s = arr_to_s(len, actual);
    cr_assert_arr_eq(actual, expected, sizeof(expected), 
                     "expected [%s] but got [%s]", expected_s, actual_s);
    free(expected_s);
    free(actual_s);
    free(actual);
};
```

Now, when the candidate fails a test, the log shows the arrays in a more helpful format like `expected [3,2,1] but got [42,2,1]`

This additional boilerplate does add noise to each test case, so creating a helper function to run an assertion might be a good idea.
