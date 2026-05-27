---
title: Kotlin
summary: "Kotlin Environment and Testing Framework"
tags:
  - kotlin
  - language
---

# Kotlin

## Environment

Qualified supports Kotlin versions 2.1, 1.9, 1.5 and 1.3.

Kotlin versions older than 2.1 are [deprecated](/creating-content/challenges/upgrading-language-versions/#deprecation-process). Use Kotlin 2.1.

## Timeout

The sandbox environment will timeout the code within 12 seconds.

## Packages

### Kotlin 2.1

- `org.junit.jupiter:junit-jupiter`: `5.10.1`
- `junit:junit`: `4.13.2`
- `org.spekframework.spek2:spek-dsl-jvm`: `1.1.5`
- `com.nhaarman.mockitokotlin2:mockito-kotlin`: (via Kluent)
- `com.nhaarman:mockito-kotlin`: (Kluent dependency)
- `org.amshove.kluent:kluent`: `1.73`
- `io.kotlintest:kotlintest`: `2.0.7`
- `com.winterbe:expekt`: `0.5.0`

## Testing

Our Kotlin environment supports the following testing frameworks:

- [kotlin/spek](/reference/languages/kotlin/spek)
- [kotlin/kotlintest](/reference/languages/kotlin/kotlintest)
- [kotlin/junit5](/reference/languages/kotlin/junit5)
- [kotlin/junit](/reference/languages/kotlin/junit)
