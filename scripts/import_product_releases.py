"""
Converts the product updates JSON from the Qualified API
(https://www.qualified.io/api/v1/product_releases)
to markdown suitable for qualified-docs.

This helps with the migration of product updates from the old location
(https://www.qualified.io/kb/changes) to the new location
(https://docs.qualified.io/changes).

Uses Python 3.11 (or compatible)
and markdownify (pip install markdownify==0.11.6)

Here's the new markdown format for an announcement:

```
## July 3, 2023

### Features

- **Feature 1 Name**

  Feature 1 description paragraph 1 (note the 2 space indentation)

  Feature 1 description paragraph 2 [with an external link](https://www.qualified.io/hire), [an internal link](/creating-content/challenges/smart-ide) and an image: ![Required alt text](http://placekitten.com/200/200).

- **Feature 2 Name**

  Feature 2 description paragraph 1

  Feature 2 description paragraph 2

### Improvements

- **Improvement Name**

  Improvement description paragraph 1

  ...

### Challenges

(same list format as above)

### Assessments

(same list format as above)

### Bug Fixes

(same list format as above)
```

Here's the input format of an item from the product_release API endpoint:

```
{"data": [{
  "id": "64b0244872b33800b3d4f29a",
  "date": "2023-07-13",
  "state": "upcoming",
  "description": null,
  "announcementsCount": 3,
  "changesCount": 3,
  "label": "July 13 2023",
  "features": [
    {
      "title": "Non-accuracy Scored Challenges",
      "blurb": "We have added the ability to build challenges that don't count towards the assessment's accuracy score",
      "announcement": "<p>We have added the ability to build challenges that don't count towards the assessment's accuracy score. This allows surveys and personality inventories to be developed which don't have a proper context of \"accuracy\". Solutions to these challenges will still have their own score, but will not count towards the score of the assessment result.<br></p>",
      "announcementHtml": "<p>We have added the ability to build challenges that don't count towards the assessment's accuracy score. This allows surveys and personality inventories to be developed which don't have a proper context of \"accuracy\". Solutions to these challenges will still have their own score, but will not count towards the score of the assessment result.<br></p>",
      "thumbnail": null,
      "relatedFeatureName": null,
      "type": "feature",
      "created": "2023-07-13T16:17:45.271Z",
      "documentation": null,
      "plans": "all"
    }
  ],
  "improvements": [
    {
      "title": "C# 10",
      "blurb": "C# 10 is now supported within project challenges.",
      "announcement": "<p>C# 10 is now supported within project challenges.<br></p>",
      "announcementHtml": "<p>C# 10 is now supported within project challenges.<br></p>",
      "thumbnail": null,
      "relatedFeatureName": null,
      "type": "improvement",
      "created": "2023-07-13T16:19:31.719Z",
      "documentation": null,
      "plans": "all"
    },
    {
      "title": "Elixir 1.11",
      "blurb": "Elixir version 1.11 is now supported within Project Challenges",
      "announcement": "<p>Elixir version 1.11 is now supported within Project Challenges.<br></p>",
      "announcementHtml": "<p>Elixir version 1.11 is now supported within Project Challenges.<br></p>",
      "thumbnail": null,
      "relatedFeatureName": null,
      "type": "improvement",
      "created": "2023-07-13T16:19:59.565Z",
      "documentation": null,
      "plans": "all"
    }
  ],
  "bugs": [],
  "assessments": [],
  "challenges": []
}, /* more release items */ ]}
```

"""

import contextlib
import json
import os
import re
from dateutil.parser import parse
from markdownify import markdownify


def md_paragraph(s: str) -> str:
    paras = [f"  {x}" for x in re.split(r"\n+", markdownify(s or ""))]
    return "  " + "\n\n".join(paras).strip()


def clean_title(title: str) -> str:
    title = re.sub(r"(?i) \(unfinished\)\s*$", "", title)
    title = re.sub(r"(?i) \(Copy\)\s*$", "", title)
    return title.replace("[easier version]", "(easier version)")


def clean_announcement(announcement: str) -> str:
    announcement = (
        announcement.replace("\n", "")
        .replace("<here>", "`<here>`")
        .replace(
            '"/hire/account/team"',
            "https://www.qualified.io/hire/account/team",
        )
    )
    return re.sub(
        r'<img src="([^"]+)"',
        lambda x: f'<img alt="{alt(x.group(1))}" src="{x.group(1)}"',
        announcement,
    )


def clean_doc_link(href: str) -> str:
    href = href if href.startswith("http") else "/" + href
    return f'<a href="{href}">Read More in the Docs</a>'


def alt(src: str) -> str:
    alt_text_for_src = {
        "https://res.cloudinary.com/strive/image/upload/35517fd0b8059e430ce28bd5e53c4965-3_at_12.png": "Qualified SmartIDE autocomplete",
        "https://docs.qualified.io/images/hire/smart-ide-preview.png": "Qualified SmartIDE autocomplete",
        "https://res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/cefaefe7c0d22becacd17ad184fbfeb1-inspect_solution.png": "Inspect Solution button",
        "https://res.cloudinary.com/strive/image/upload/9af0171a320c619e3dbf81134224cdc3-review.png": "Review and Final Submission screen in a Qualified assessment",
        "https://res.cloudinary.com/strive/image/upload/c5346773be05731dd423a62d07889914-29_at_9.png": "A 'Hello React' app running in Qualified's Web Preview",
        "https://res.cloudinary.com/strive/image/upload/ff02e4eee1f8b8e9cc0611023d57edb8-29_at_9.png": "Configuration for Web Preview responsive mode in Project Code Challenges",
        "//res.cloudinary.com/strive/image/upload/w_1000,h_1000,c_limit/8fd9d40a5ad473f5c05edaea253bbd87-17_at_1.png": "Activity Log button in Qualified's UI",
        "//res.cloudinary.com/strive/image/upload/fb16039d00c9adca2908872d968104dd-17_at_2.png": "Activity Log modal",
    }
    return alt_text_for_src[src]


def print_note(note: dict) -> None:
    print(f"- **{clean_title(note['title'])}**\n")

    if note["announcement"]:
        print(md_paragraph(clean_announcement(note["announcement"])))

    docs_to_skip = (
        "https://docs.qualified.io/for-teams/process/interact/",
        "https://docs.qualified.io/creating-content/challenges/smart-ide/",
    )

    if note["documentation"] and note["documentation"] not in docs_to_skip:
        print()
        print(md_paragraph(clean_doc_link(note["documentation"])))

    if note["announcement"] or note["thumbnail"] or note["documentation"]:
        print()


def print_release(release: dict) -> None:
    print("##", parse(release["date"]).strftime("%B %-d, %Y"))
    print()

    if release["description"]:
        print(markdownify(release["description"] or "").strip())
        print()

    categories = (
        ("features", "Features"),
        ("improvements", "Improvements"),
        ("challenges", "Challenges"),
        ("assessments", "Assessments"),
        ("bugs", "Bug Fixes"),
    )

    for category, pretty_category in categories:
        if release[category]:
            print("###", pretty_category)
            print()

            for note in release[category]:
                print_note(note)


def main() -> None:
    out_path = os.path.join("content", "changes.md")
    header = """---
title: Product Updates
order: 10
summary: 'Learn about new features, fixes, and other improvements'
---

# Product Updates

Learn about notable new features, fixes, and other improvements to the application!
"""

    # product-releases.json is from
    # https://www.qualified.io/api/v1/product_releases
    # which can be captured without an API key in the network tab at
    # https://www.qualified.io/kb/changes (may be taken down at some point)
    # or accessed through the API directly.
    with open(os.path.join("scripts", "product-releases.json")) as f:
        releases = json.load(f)["data"]

    with open(out_path, "w") as f, contextlib.redirect_stdout(f):
        print(header)

        for release in releases:
            print_release(release)


if __name__ == "__main__":
    main()
