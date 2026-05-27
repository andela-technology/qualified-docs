---
title: "Code Challenges Services"
summary: "Help for the services available for code challenges"
order: 5
---

# Code Challenge Services

In additional to running code, and having access to external services, Qualified provides the ability to spin up several services to perform even more accurate testing. This includes running a database like PostgreSQL or MongoDB, or running a key-value service like Redis.

## Enabling Services

You can enable one or more services by looking for the _Enabled Services_ section for classic code or project code challenges.

* When creating a **Classic Code** challenge, check under _Description & Settings_.
* When creating a **Project Code** challenge, click on  _Challenge Config_ then go to the _Run Configuration_ tab.

From here, simply check the service you want to use. Some services also let you select the version of the service you want to use.

### Performance Concerns

Note that adding a service will increase the time it takes to run the candidate's code. This might not be very much time, but you should only enable services if they are an important part of your testing process. If using a full database isn't critical, consider mocking your data source, or using a lighter-weight service like SQLite.

## Using Services

The services provided will usually require a library to access. Most of our languages include the necessary libraries. Databases are set up before every run, so there's no data carried over.

The following includes service-specific connection information.

### MongoDB

You can connect to MongoDB using `mongodb://localhost`. This will provide an empty database to create document stores, insert data, and make queries.

### PostgreSQL

You can connect to PostgreSQL using `postgres://postgres@localhost/postgres`, though just `postgres://` should work as well.

You can choose between these built-in databases to manipulate:

* `postgres` — default database
* `test` — default database
* `spec` — an empty DB
* `dvdrental` — includes some data used by existing SQL challenges

### Redis

You can connect to Redis using `redis://localhost`. This will provide an empty datastore to work with.
