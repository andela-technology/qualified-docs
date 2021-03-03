---
title: Writing Pandas Challenges
summary: "Writing Pandas Challenges"
tags:
  - python
  - pandas
  - guides
---

# Writing Pandas Challenges

## Overview

[Pandas](https://pandas.pydata.org) is a popular Python library for working with tabular data and plays nicely with Qualified's code runner. This is an in-depth guide to creating Pandas challenges in Qualified.

## Basic example
Here is a minimal "hello world" challenge example using Python 3.8. The approach is agnostic of classic or project challenge mode. 

If you're in a hurry, you can grab this code and come back to read the rest as needed.

#### Tests (`tests/test_solution.py`):

```python
import pandas as pd
import unittest

from solution import get_first_row

class Test(unittest.TestCase):
    def test_returns_first_row(self):
        """ returns the first row in the df """
        df = pd.DataFrame({
            "a": ["hello", "foo"], 
            "b": ["world", "bar"]
        })
        expected = pd.DataFrame({
            "a": ["hello"], 
            "b": ["world"]
        })
        actual = get_first_row(df)
        pd.testing.assert_frame_equal(expected, actual)
```

#### Solution setup (`solution.py`):

```python
import pandas as pd

def get_first_row(df: pd.DataFrame) -> pd.DataFrame:
    """ return the first row in the df """
    pass
```

#### Reference solution (`solution.py`):

```python
import pandas as pd

def get_first_row(df: pd.DataFrame) -> pd.DataFrame:
    """ return the first row in the df """
    return df.head(1)
```

## Loading external datasets

Given this basic approach, a common next step is to load a dataset. You can include the data within the challenge code as a data structure, dataframe or string or load it from an externally-hosted resource. 

When choosing your dataset and planning on where to host it, keep in mind:

- Qualified's runner is stateless, so your dataset needs to be loaded on every submission. If you're hosting your dataset externally, time spent waiting for a response and the possibility of request failure should be considered.
- Large datasets can be cumbersome for candidates and students; when something goes wrong, it can be difficult to detect discrepancies in a massive diff, which can frustrate the debugging process and harm completion rates.

Given these characteristics, we recommend using the most minimal dataset necessary to achieve the challenge goals. This reduces submission response time and improves the debugging experience for the candidate.

Specifically, datasets that are in the multiple-megabyte range are discouraged. In contrast, a dataset of 50-100 rows and 5-10 columns will typically provide a smooth experience.

If your goal is to test performance, you can do so by providing a tiny, representative subset of the data for sample tests which the candidate or student can focus on first for establishing correctness, then use a larger dataset for the performance component in a disjoint set of test cases.

Additionally, we recommend providing a link to the dataset in the description. Browsing it by hand can give opportunities for insight when diffs and large tables don't fit neatly into the runner.

Keep in mind that externally-hosted datasets are a dependency. Should the link rot over time or its contents be unexpectedly modified, your challenge may become impossible to complete.

In classic mode, you can use the preloaded file to make a request for an external dataset or host the source dataframe. Either way, it's important that your test suite uses a fresh dataframe per test to avoid unexpected state. Making a request per test case is inefficient, so the preferred strategy is to make a single request but copy the resulting dataframe on a per-test basis, either inside preloaded or in the test suite itself (unittest's [`setUp`](https://docs.python.org/3/library/unittest.html#unittest.TestCase.setUp) and [`setUpClass`](https://docs.python.org/3/library/unittest.html#unittest.TestCase.setUpClass) methods can come in handy here).

Here's an example of loading a dataset from an external source using the same solution and preloaded code as shown above in the basic example:

#### Preloaded (`preloaded.py`):

```python
import pandas as pd
import requests
from io import StringIO

csv_url = "https://raw.githubusercontent.com/mwaskom/seaborn-data/master/car_crashes.csv"
response = requests.get(csv_url)
response.raise_for_status()
_original_df = pd.read_csv(StringIO(response.text))

def get_clean_df():
    return _original_df.copy()
```

#### Tests (`tests/test_solution.py`):

```python
import pandas as pd
import unittest

from preloaded import get_clean_df
from solution import get_first_row

class Test(unittest.TestCase):
    def test_returns_first_row(self):
        """ returns the first row in the df """
        df = get_clean_df()
        expected = pd.DataFrame({
            "total": [18.8],
            "speeding": [7.332000000000001],
            "alcohol": [5.64],
            "not_distracted": [18.048000000000002],
            "no_previous": [15.04],
            "ins_premium": [784.55],
            "ins_losses": [145.08],
            "abbrev": ["AL"],
        })
        actual = get_first_row(df)
        pd.testing.assert_frame_equal(expected, actual)
```

Here, we've requested a reasonably-sized CSV with 51 rows and 7 columns in the preloaded module and exposed it to the test suite using the `get_clean_df()` function which returns a fresh copy of the data. We should call this function per test case to ensure no state or mutations on the dataframe are carried from case to case.

In this example, the data is quite small, so we could just as easily put the data into the preloaded section as a string and substitute it in place of `response.text` in the above code. Even here, the candidate or student would benefit from a link to the data externally, for example to [a CSV on GitHub](https://github.com/mwaskom/seaborn-data/blob/master/car_crashes.csv), which provides a searchable and readable interface for navigating the data.

Lastly, note that no sensitive information (reference solutions, API keys, etc) should be included in the preloaded module. It's possible for the candidate or student to access this file programmatically. Although the file can unlink its own source code with `os.system("rm preloaded.py")`, it should not be considered secure.

## Next steps

### NumPy
Since Pandas is built on NumPy and complex solutions to Pandas challenges often involve NumPy functions, it's recommended to `import numpy as np` in solution setup files. As with Pandas, NumPy offers a variety of fantastic testing assertions you can read about in the docs for [`numpy.testing`](https://numpy.org/doc/stable/reference/routines.testing.html). The guidelines in this document apply as well to NumPy challenges without Pandas.

### Using other libraries
You can test many Pandas competencies quite comprehensively using the setup above. However, Qualified supports other libraries which can help expand on the possibilities offered by Pandas and NumPy alone.

When using the project challenge mode, you may wish to choose the "datascience" preset, which enables some additional modules like ntlk, keras and spacy. Visit our [Python language page](/reference/languages/python/) for an up-to-date listing of presets, modules and view our [guide to classic and project challenge modes](/for-teams/getting-started/core-concepts/#different-types-of-challenges).

### Visualizing dataframes
Adding visualization to your Pandas or other data science challenges can be done in a few ways. Most simply, the classic code runner supports HTML, so you can tabularize the dataframe and render it upon each run using [`pandas.DataFrame.to_html`](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.to_html.html). Here's an example that formats the HTML block as the runner expects using the magic `<LOG:HTML:optional name>` tag and replacing newlines with the `<:LF:>` tag:

```python
print(f"<LOG:HTML:>{df.to_html()}".replace("\n", "<:LF:>"))
```

You can customize the table as much as you want:

```python
table = f"<LOG:HTML:>{df.to_html(classes='mpld3-table')}"\
"""<LOG:HTML:><style>

.mpld3-table {
  font-family: monospace;
  color: black;
  background: snow;
}

</style>"""
print(table.replace("\n", "<:LF:>"))
```

Our Python runner offers matplotlib along with [mpld3](https://github.com/mpld3) which is used to convert plots to interactive HTML visualizations powered by d3 which can be rendered on the runner. Here's an example:

```python
import matplotlib.pyplot as plt, mpld3

def display_fig(fig, label="Plot"):
    #plt.style.use("seaborn") # optional
    html = mpld3.fig_to_html(
        fig,
        d3_url="https://d3js.org/d3.v5.min.js",
        mpld3_url="https://mpld3.github.io/js/mpld3.v0.5.1.min.js"
    ).replace("\n", "<:LF:>")
    print(f'<LOG:HTML:{label}>{html}')
    print('''<OUT:HTML:><style>
    .mpld3-figure { background: #f6f6f6 !important; }
    .dark .mpld3-figure,
    .night .mpld3-figure { filter: invert(100%) hue-rotate(180deg) !important; }
    </style>
    '''.replace("\n", "<:LF:>"))

fig, ax = plt.subplots()
ax.scatter([1,2,3], [3,2,1])
ax.set_xlabel("Foo")
ax.set_ylabel("Bar")
display_fig(fig)
```

This code appends CSS that makes the plot look nice when the runner is in dark mode. You can use the same technique to modify the runner's HTML output to fit your needs.

Other libraries such as networkx can work with the mpld3 `display_fig` function shown above, which you can add to your workspace as a separate, read-only or hidden file in project mode or as a function in preloaded in classic mode and treat like a library call:

```python
import matplotlib.pyplot as plt, mpld3
import networkx as nx

from renderer import display_fig

G = nx.karate_club_graph()
fig, ax = plt.subplots(1, 1, figsize=(5, 5))
nx.draw_circular(G, ax=ax, with_labels=True)
display_fig(fig, "Karate Club")
```

Output is collapsed by default when HTML is printed as part of a passing test case.

## Tips and best practices

#### Use Pandas testing assertions
Pandas offers useful testing assertions that work well with unittest such as [`pandas.testing.assert_frame_equal`](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.testing.assert_frame_equal.html) and [`pandas.testing.assert_index_equal`](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.testing.assert_index_equal.html).

#### Prefer small tasks
If you'd like to test a series of distinct Pandas tasks on a single dataset, you can isolate the tasks as small, testable functions, each with a simple specification, rather than a single monolithic function as in most of our traditional challenges. Most of our Pandas project code content uses this approach and we find that itemizing and isolating the goals makes complex challenges more completable and approachable for candidates and students. In many cases, we start out with simple tasks and build to harder ones.

#### Keep test case results small
In keeping with small dataset mindset, expected results should be as small as possible to establish correctness. In many cases, adding a "first 5 rows" step is enough to validate the solution while keeping output and test code simple.

#### Prefer sample tests to submission tests
Well-written, thorough and non-redundant sample test cases improve user experience--hiding them in the submission tests makes it more difficult for candidates to understand requirements and complete the challenge.

#### Add simple, hidden random tests
In keeping with moving test coverage to rest primarily on sample tests, adding a hidden test using your dataset with slight value changes can help catch hardcoded solutions that return the expected dataframe literally. For project challenges, submissions can be hidden completely, so randomization is not necessary as long as the dataset is modified by, for example, adding a value of 1 to all numbers. For classic challenges, submission input and results are visible, so randomization is necessary to prevent a hardcoded solution. 

NumPy has a robust [random library](https://numpy.org/doc/stable/reference/random/index.html) you can use. Seeding the random number generator can also help you make deterministic tests and generate input dataframes dynamically.

The Stack Overflow thread [How to make good reproducible pandas examples](https://stackoverflow.com/questions/20109391/how-to-make-good-reproducible-pandas-examples) is an outstanding resource that discusses many aspects of setting up simple test cases, using random numbers and other tricks that can help you generate small datasets appropriate for use in challenges.

#### Show minimal, readable examples of expected output
Show simple actual/expected examples in your function [docstrings](https://realpython.com/documenting-python-code/#documenting-your-python-code-base-using-docstrings), possibly as valid [doctests](https://docs.python.org/3/library/doctest.html). These can help keep the instructions succinct and offer guidance to the candidate or student as they work through the challenge.

Here's an example:

```python
import pandas as pd

def get_first_row(df: pd.DataFrame) -> pd.DataFrame:
    """ return the first row in the df

    >>> get_first_row(pd.DataFrame({"a": [1, 2]}))
       a
    0  1
    >>> get_first_row(pd.DataFrame({"a": [5, 4, 3]}))
       a
    0  5
    """
    return df.head(1)

# Use for testing offline
if __name__ == "__main__":
    import doctest
    doctest.testmod()
```

#### Use [`unittest.TestCase.shortDescription`](https://docs.python.org/3/library/unittest.html#unittest.TestCase.shortDescription)
The first line of a test case docstring is a short description of the test that will be displayed on the runner in place of the test case function name. These can boost readability of test output. The examples on this page use this technique.

#### Link to the docs
Under normal circumstances, programmers consult documentation on a constant basis, so inviting the candidate or student to feel free to consult relevant docs during a challenge is good practice for reducing cheating, improving the candidate or student experience, improving the face validity of the challenge and increasing completion rates.

#### Add type hints
Python's [type hinting](https://docs.python.org/3/library/typing.html) can help candidates quickly grasp the input and output types for the functions they're expected to complete. The examples on this page use this technique.

#### Show test case results in source code order
Unittest reorders test cases which can make it hard for candidates and students to solve cases top-to-bottom in increasing difficulty and quickly match a case's output with the code. See the Stack Overflow thread [Python `unittest.TestCase` execution order](https://stackoverflow.com/questions/5387299/python-unittest-testcase-execution-order/62454506#62454506) for a variety of solutions to the problem. One solution from [our Python docs](/reference/languages/python/unittest#setup-and-tear-down) which has been used on a few challenges is[`test.TestLoader.sortTestMethodsUsing`](https://docs.python.org/3/library/unittest.html#unittest.TestLoader.sortTestMethodsUsingunit):

```python
import inspect

class Test(unittest.TestCase):
    # ... test cases ...

test_src = inspect.getsource(Test)
unittest.TestLoader.sortTestMethodsUsing = lambda _, x, y: (
    test_src.index(f"def {x}") - test_src.index(f"def {y}")
)
```

In addition to ordering, numbering the test cases by task can also help keep things orderly when there are more than a half-dozen or so tasks.

#### State whether the dataframe should be mutated
If a challenge requires a dataframe to be modified in place, it's best not to also allow the function to return a value. If a dataframe should not be modified, add a test case for this. In some cases, you may not care, in which case the description can state "you may modify the input dataframe" so the candidate or student need not worry about a gotcha upon submission.

#### Be wary of output truncation
For certain datasets, even after minimization, the default output may require some coaxing to fit nicely into the runner. Consider adding calls like

```python
pd.set_option("display.max_columns", None)
pd.set_option("display.max_rows", None)
```
to the solution setup code to help provide the candidate or student with an easy way to adjust the maximum number of rows and columns printed.

#### General challenge best practices
Our general [challenge best practices](/creating-content/challenges/best-practices/) guide offers many more general tips for writing effective challenges.

