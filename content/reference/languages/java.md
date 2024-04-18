---
title: Java
summary: "Java Environment and Testing Framework"
tags:
  - java
  - jvm
  - language
---

# Java

## Environment

Qualified supports Java 17, 11 and 8.

Java versions older than 17 are [deprecated](/creating-content/challenges/upgrading-language-versions/#deprecation-process). Use Java 17.

## Timeout

The sandbox environment will timeout the code within 16 seconds.

## Packages

The following packages are available:

### Java 8

- `junit:junit`
- `org.mockito:mockito-core`
- `org.assertj:assertj-core`
- `org.assertj:assertj-guava`
- `org.apache.commons:commons-lang3`
- `org.apache.commons:commons-math3`
- `com.google.guava:guava`
- `org.jsoup:jsoup`
- `org.dom4j:dom4j`
- `org.projectlombok:lombok`
- `com.fasterxml.jackson.core:jackson-annotations`
- `org.hibernate:hibernate-core`
- `org.mongodb:mongo-java-driver`
- `org.xerial:sqlite-jdbc`
- `org.postgresql:postgresql`
- `org.springframework.boot:spring-boot-starter-web`
- `org.springframework.boot:spring-boot-starter-data-rest`
- `org.springframework.boot:spring-boot-starter-validation`
- `org.springframework.boot:spring-boot-starter-test`


### Java 11

- `junit:junit`
- `org.junit.jupiter:junit-jupiter-api`
- `org.junit.jupiter:junit-jupiter-engine`
- `org.junit.platform:junit-platform-launcher`
- `org.junit.vintage:junit-vintage-engine`
- `net.jqwik:jqwik`
- `org.mockito:mockito-core`
- `org.assertj:assertj-core`
- `org.assertj:assertj-guava`
- `org.apache.commons:commons-lang3`
- `org.apache.commons:commons-math3`
- `com.google.guava:guava`
- `org.jsoup:jsoup`
- `org.dom4j:dom4j`
- `com.fasterxml.jackson.core:jackson-annotations`
- `org.hibernate:hibernate-core`
- `org.mongodb:mongo-java-driver`
- `org.xerial:sqlite-jdbc`
- `org.postgresql:postgresql`
- `org.springframework.boot:spring-boot-starter-web`
- `org.springframework.boot:spring-boot-starter-data-rest`
- `org.springframework.boot:spring-boot-starter-validation`
- `org.springframework.boot:spring-boot-starter-test`
- `org.springframework.boot:spring-boot-starter-data-jpa`
- `com.h2database:h2`


### Java 17

Java 17 has multiple presets for different kinds of challenges.

#### Default (no preset)

- `org.junit.jupiter:junit-jupiter:5.8.2`
- `junit:junit:4.12`
- `org.junit.vintage:junit-vintage-engine:5.8.2`
- `net.jqwik:jqwik:1.6.5`
- `org.mockito:mockito-core:4.4.0`
- `org.assertj:assertj-core:3.22.0`
- `org.assertj:assertj-guava:3.4.0`
- `org.apache.commons:commons-lang3:3.12.0`
- `org.apache.commons:commons-math3:3.6.1`
- `com.google.guava:guava:31.1-jre`
- `org.jsoup:jsoup:1.14.3`
- `org.dom4j:dom4j:2.1.3`
- `com.fasterxml.jackson.core:jackson-annotations:2.13.2`
- `org.xerial:sqlite-jdbc:3.36.0.3`
- `redis.clients:jedis:4.3.1`

#### Spring (`spring` preset)

- `org.junit.jupiter:junit-jupiter:5.8.2`
- `org.mockito:mockito-core:4.4.0`
- `org.assertj:assertj-core:3.22.0`
- `org.assertj:assertj-guava:3.4.0`
- `org.apache.commons:commons-lang3:3.12.0`
- `org.apache.commons:commons-math3:3.6.1`
- `com.google.guava:guava:31.1-jre`
- `com.fasterxml.jackson.core:jackson-annotations:2.13.2`
- `com.h2database:h2:2.1.210`
- `org.springframework.boot:spring-boot-starter-data-jpa`
- `org.springframework.boot:spring-boot-starter-data-rest`
- `org.springframework.boot:spring-boot-starter-security`
- `org.springframework.boot:spring-boot-starter-validation`
- `org.springframework.boot:spring-boot-starter-web`
- `org.springframework.boot:spring-boot-starter-test`
- `org.springframework.security:spring-security-test`


## Testing

Our Java environment supports the following testing frameworks:

- [java/junit](/reference/languages/java/junit)
- [java/junit5](/reference/languages/java/junit5)
