---
title: Testing SQL Skills Without RSpec
summary: "Testing SQL Skills Without RSpec"
tags:
  - SQL
---

# Testing SQL Skills Without RSpec

## Overview

Since SQL is a high-level, declarative database query language, it's unique among the languages Qualified offers in that it doesn't have an accompanying procedural unit testing framework that scores candidate solutions on a series of test cases.

Instead, Qualified offers a default environment featuring [Ruby and RSpec](/reference/languages/sql/rspec) as the harness for running SQL solutions to validate correctness of the output.

However, for some use cases, the RSpec setup may not be the best way to test your candidates' SQL skills. This guide provides ideas for testing SQL skills with other languages and testing frameworks than the default environment.

:::info
It's a good idea to familiarize yourself with the [SQL with RSpec guide](/reference/languages/sql/rspec/) and our SQL templates before proceeding. Much of the content on this page assumes some familiarity with the basic SQL workflow Qualified offers by default. In many situations, that workflow will work for you and it won't be necessary to proceed with the suggestions in this guide.
:::

## Choosing the right level of abstraction

One important concern in testing SQL is the level of abstraction you wish to let the candidate operate at. This mostly involves deciding the amount and flavor of testing suite code to expose to the candidate while they're writing their solution, running test cases and debugging.

This section discusses the tradeoffs in selecting a particular level of abstraction in your challenge.

#### Hiding testing code

On one extreme, Qualified makes it possible to completely hide the test suite code from candidates. In the default RSpec classic code challenge format, this involves putting all database setup/teardown code and test cases into the _preloaded_ file. We offer a function [`compare_with`](/reference/languages/sql/rspec/#rspec-sql-custom-utilities) which generates a complete test suite and uses HTML tables to show diffs for each test case instead of language-specific data structure diffs. Results are presented without any obvious connection to the Ruby and RSpec code that generates the assertions.

Furthermore, you can disable sample tests and candidates will only be able to interface with the query output shown on the code runner user interface. 

This approach enables candidates to operate at a high level agnostic of the language driving the test harness.

#### Exposing testing code

On the other extreme, you can pick a language and write a normal test suite in its testing framework, exposing the test cases (and possibly database setup/teardown code) to the candidate as you would in a non-SQL challenge.

This approach enables candidates to work at a lower level and use a specific programming language to interact with the database and help them work through the challenge.

Although the solution code itself may still be entirely SQL, the presence of a non-SQL programming language in the harness may have an impact in the skills you'll be testing.

### Tradeoffs

The rationale with hiding the testing suite is that you may want candidates to be concerned with SQL only. Exposing the testing code can serve to confuse candidates or pollute signals, since candidates with prior experience in the testing suite language would likely be at an advantage.

However, when things go wrong in the course of a solution attempt, candidates (and sometimes reviewers and content creators) may have a hard time debugging problems when the testing code is hidden. It can be harder to understand exactly how the database was built and ascertain the contents of the tables. There's no way for candidates to tweak and experiment with the tests when they're hidden. In many cases, candidates testing for SQL are familiar with one or more languages and they'd be happy to have access to the harness code.

It might make sense to try to strike a balance between the two approaches: provide just enough information that candidates can debug, understand and experiment, while hiding most of the unsightly CSV-loading code and schema building that can be presented in the description in a more language-agnostic context. A few words of clarification can help explain whatever approach was taken and offer tips on how to interface with the testing suite, if present.

There's no single correct approach here; it's a matter of use case.

:::caution
If your preference is to hide the language, your choice for avoiding Ruby/RSpec may be driven mostly by your content creator feeling more comfortable working in another language. This is a legitimate reason to avoid Ruby, but keep in mind that our Ruby/RSpec SQL environment has useful helper methods for fetching CSVs, building tables and automatically generating testing suites. It uses a [Ruby daff gem](https://rubygems.org/gems/daff/versions/1.3.27) to show a pretty HTML diff between the actual and expected rows returned by the candidate's solution query. By striking out with another language environment, you'll be "on your own" to recreate some of these features (or live without them).

Please search the library for the Qualified's Advanced Output Syntax Walkthrough for tips on building your own HTML tables.
:::

## Using PCC to test SQL with any language

While it's possible to use either a [Classic Code Challenge (CCC)](/reference/features/challenges/code) or a [Project Code Challenge (PCC)](/reference/features/challenges/multi-file-code) to build a SQL testing harness with another language besides Ruby, we strongly recommend using a Project Code Challenge. A few advantages of PCC over CCC for custom SQL testing include:

- Support for as many files as you want, which is useful for uploading CSVs as data sources for test cases
- More flexibility for visibility; you can easily provide read-only CSVs, read-only test suites and helper files and you can hide parts of the UI entirely
- Syntax highlighting for SQL is supported by creating a file with the `.sql` extension. In CCC, highlighting defaults to whatever the language is.

One advantage of CCC is that you can provide test harnesses in many languages and let the candidate solve the challenge in the one they are most comfortable with. In practice, though, we haven't seen this use case (please let us know if you try it!).

Regardless of whether you choose CCC or PCC, the high-level workflow might be as follows:

1. Pick an [ORM](https://en.wikipedia.org/wiki/List_of_object%E2%80%93relational_mapping_software) for your language of choice. For example, you might use [SQLAlchemy](https://github.com/sqlalchemy/sqlalchemy) in Python, [Sequelize](https://github.com/sequelize/sequelize) or [Knex](https://github.com/knex/knex) in JS, or [Hibernate](https://github.com/hibernate/hibernate-orm) in Java.
2. In CCC, use your language's code to set a query string to a variable or write a function that returns the candidate's query string to the test suite. In PCC, you can create a syntax-highlighted `.sql` file and the test suite can read this file into a string.
3. Write helper functions to run before and after test cases to build the desired schema.
4. Create test cases that populate the tables with the minimal amount of data necessary to run the desired query to exercise some functionality.
5. Call the candidate's solution function or access their string variable to get their query.
6. Run the query using the ORM's "raw" feature.
7. Compare the result using an assertion.
8. Optionally, consider table formatting the actual/expected rows to help candidates debug. Some languages' assertions aren't very helpful for debugging SQL, especially when tables are large.

Prerequisite steps are enabling the database service in the challenge's configuration and checking our [package list reference](https://docs.qualified.io/reference/languages) for your language of choice to ensure an ORM is available.

These same steps work even if you're using the default RSpec environment but choose to avoid `compare_with`.

### Python example

Here's simple proof-of-concept PCC code that implements a SQL challenge without RSpec. It's using SQLite3 as the database engine. The fundamental workflow presented here should be adaptable to most languages and ORMs we offer.

This example also illustrates the lack of tabular output when queries don't match expected results. We're relying on the candidate's basic grasp of Python lists to understand and debug discrepancies in the output as they work through the challenge. Providing small, representative datasets is key to making this feasible. A sample failing output looks like this:

```
AssertionError: Lists differ: [(1, 'foo'), (2, 'quux'), (3, 'foobaz')] != [(1, 'foo'), (3, 'foobaz')]

First differing element 1:
(2, 'quux')
(3, 'foobaz')

First list contains 1 additional elements.
First extra element 2:
(3, 'foobaz')

- [(1, 'foo'), (2, 'quux'), (3, 'foobaz')]
?              -------------

+ [(1, 'foo'), (3, 'foobaz')]
```

...which is the same as would be presented in a normal Python programming challenge.

Here is the project tree:

```
data/
    widgets.csv
submission_data/
    secret_widgets.csv
tests/
    test_query.py
    test_submission.py
query.sql
widgets.py
```

Here are the project file contents:

#### `data/widgets.csv`:

This is the basic CSV data the candidate can view as they write their solution. You can also use a request to fetch it from a GitHub gist or other cloud storage location.

```
1,foo
2,quux
3,foobaz
```

#### `submission_data/secret_widgets.csv` (hidden):

This is the hidden submission test, primarily used to ensure candidates haven't hardcoded a solution that trivially satisfies the provided test cases.

```
1,foo
2,quux
3,foobar
4,foooo
5,fobaz
```

#### `tests/test_query.py`:

This is the candidate-visible test harness.

```python
import sqlite3
import unittest

import widgets

class Test(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.conn = sqlite3.connect("./workspace.db")

        with open("query.sql") as f:
            cls.query = f.read()

    @classmethod
    def tearDownClass(cls):
        cls.conn.close()

    def setUp(self):
        widgets.create_widgets_table(self.conn)

    def tearDown(self):
        widgets.drop_widgets_table(self.conn)

    def test_get_widgets_starting_with_foo(self):
        """ get widgets starting with `foo` """
        widgets.insert_widgets_from_csv(self.conn, "data/widgets.csv")
        expected = [(1, "foo"), (3, "foobaz")]
        actual = widgets.fetch_all_widgets(self.conn, self.query)
        self.assertEqual(actual, expected)
```

#### `tests/test_submission.py` (hidden):

This is the hidden submission harness that will ultimately score candidate solutions.

```python
import sqlite3
import unittest

import widgets

class SubmissionTest(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.conn = sqlite3.connect("./workspace.db")

        with open("query.sql") as f:
            cls.query = f.read()

    @classmethod
    def tearDownClass(cls):
        cls.conn.close()

    def setUp(self):
        widgets.create_widgets_table(self.conn)

    def tearDown(self):
        widgets.drop_widgets_table(self.conn)

    def test_get_more_widgets_starting_with_foo(self):
        widgets.insert_widgets_from_csv(self.conn, "submission_data/secret_widgets.csv")
        expected = [(1, 'foo'), (3, 'foobar'), (4, 'foooo')]
        actual = widgets.fetch_all_widgets(self.conn, self.query)
        self.assertEqual(actual, expected)
```

#### `query.sql`:

This is where the candidate codes their solution.

```sql
-- Task:
-- Write a query which will fetch all widgets from
-- the widgets table whose name begins with `foo`.

-- Write your query here:

SELECT *
FROM widgets
;
```

#### `query.sql` (reference solution):

This is the solution to the challenge, hidden from the candidate but available for making submission tests easier to write and providing reviewers and content managers a baseline to assess candidates against.

```sql
SELECT *
FROM widgets
WHERE widgets.name LIKE 'foo%'
;
```

#### `widgets.py`:

This is a helper file that makes the test suite simpler.

```python
import csv
import sqlite3

def insert_widget(conn, widget):
    query = "INSERT INTO widgets(name) VALUES (?);"
    conn.cursor().execute(query, (widget,))

def insert_widgets_from_csv(conn, path):
    with open(path, "r") as f:
        for row in csv.reader(f):
            insert_widget(conn, row[1])

def create_widgets_table(conn):
    query = """
    CREATE TABLE IF NOT EXISTS widgets (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL
    );
    """
    conn.cursor().execute(query)

def drop_widgets_table(conn):
    conn.cursor().execute("DROP TABLE IF EXISTS widgets;")

def fetch_all_widgets(conn, query):
    cur = conn.cursor()
    cur.execute(query)

    # Alternately, to get a dict: https://stackoverflow.com/questions/3300464/how-can-i-get-dict-from-sqlite-query
    return cur.fetchall()
```

We don't expect this approach to necessarily work for you out of the box (if it does, great! It's available as a template in our library), but we hope it helps provide a general framework you can compare against the basic RSpec option and adapt to suit your use case.
