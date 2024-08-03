---
title: Making HTTP Requests from Challenges
summary: "A brief guide to making HTTP requests from challenges"
tags:
  - guides
  - http
  - requests
---

# Making HTTP Requests from Challenges

## Background

Often, when creating a challenge, you'll want to make an HTTP request to an external resource to consume an API, add custom logging, or pull down a dataset used in the challenge.

## Language Support

Our code runner doesn't have `wget` or `curl` in most images, so request capabilities are generally limited beyond language features.

The languages with the best support are:

- C# (`System.Net.Http` and `Newtonsoft.Json`)
- Dart (`HttpClient` and `jsonDecode`)
- Go (`net/http` and `encoding/json`)
- Node JavaScript (`axios` or `fetch`)
- PHP (`file_get_contents`)
- PowerShell (`Invoke-RestMethod`)
- Python (`requests`, `urllib`, `pandas`)
- R (`httr`, `jsonlite`)
- Ruby (`net/http`)
- Shell (`curl`)
- TypeScript (`axios` or `fetch`)

JVM languages support requests but don't currently have a good way to parse JSON at the time of writing. Please ask if you'd like us to add support.

## Examples

The [Spelling Checker](https://www.qualified.io/hire/challenges/60fe5e4f90b0050027cd6be9) challenge has minimal examples of making HTTP requests in many languages.
