---
title: Ruby
summary: "Ruby Environment, Gems, and Testing Frameworks"
tags:
  - ruby
  - language
---

# Ruby

## Environment

Qualified supports Ruby MRI 3.0, 2.5 and 2.3.

Ruby versions older than 3.0 are [deprecated](/creating-content/challenges/upgrading-language-versions/#deprecation-process). Use Ruby 3.0.

## Timeout

The sandbox environment will timeout the code within 12 seconds.

## Gems

The following gems are available for use:

### Ruby MRI 3.0

#### Default (no preset)

- [`faker`](https://rubygems.org/gems/faker/)
- [`faraday`](https://rubygems.org/gems/faraday/)
- [`mongo`](https://rubygems.org/gems/mongo/)
- [`nokogiri`](https://rubygems.org/gems/nokogiri/)
- [`pg`](https://rubygems.org/gems/pg/)
- [`rack`](https://rubygems.org/gems/rack/)
- [`rack-test`](https://rubygems.org/gems/rack-test/)
- [`redis`](https://rubygems.org/gems/redis/)
- [`rspec`](https://rubygems.org/gems/rspec/)
- [`sequel`](https://rubygems.org/gems/sequel/)
- [`sqlite3`](https://rubygems.org/gems/sqlite3/)
- [`webmock`](https://rubygems.org/gems/webmock/)

#### Ruby on Rails preset

> Only available in [Project Code Challenges](/reference/features/challenges/multi-file-code).

- [`bcrypt ~> 3.1.7`](https://rubygems.org/gems/bcrypt/versions/3.1.7)
- [`puma ~> 5.0`](https://rubygems.org/gems/puma/versions/5.0.0)
- [`rails ~> 6.1.3`](https://rubygems.org/gems/rails/versions/6.1.3)
- [`sqlite3 ~> 1.4`](https://rubygems.org/gems/sqlite3/versions/1.4.0)
- [`rspec-rails`](https://rubygems.org/gems/rspec-rails)

### Ruby MRI 2.5

- [`activesupport ~> 5.2.0`](https://rubygems.org/gems/activesupport/versions/5.2.0)
- [`factory_bot ~> 4.8.2`](https://rubygems.org/gems/factory_bot/versions/4.8.2)
- [`faker ~> 1.8.7`](https://rubygems.org/gems/faker/versions/1.8.7)
- [`faraday ~> 0.15.1`](https://rubygems.org/gems/faraday/versions/0.15.1)
- [`mongo ~> 2.5.3`](https://rubygems.org/gems/mongo/versions/2.5.3)
- [`mongoid ~> 6.2.0`](https://rubygems.org/gems/mongoid/versions/6.2.0)
- [`nokogiri ~> 1.8.2`](https://rubygems.org/gems/nokogiri/versions/1.8.2)
- [`pg ~> 1.0.0`](https://rubygems.org/gems/pg/versions/1.0.0)
- [`rack ~> 2.0.5`](https://rubygems.org/gems/rack/versions/2.0.5)
- [`rails ~> 5.2.0`](https://rubygems.org/gems/rails/versions/5.2.0)
- [`redis ~> 4.0.1`](https://rubygems.org/gems/redis/versions/4.0.1)
- [`rspec ~> 3.7.0`](https://rubygems.org/gems/rspec/versions/3.7.0)
- [`rspec-its ~> 1.2.0`](https://rubygems.org/gems/rspec-its/versions/1.2.0)
- [`sequel ~> 5.8.0`](https://rubygems.org/gems/sequel/versions/5.8.0)
- [`sinatra ~> 2.0.1`](https://rubygems.org/gems/sinatra/versions/2.0.1)
- [`sqlite3 ~> 1.3.13`](https://rubygems.org/gems/sqlite3/versions/1.3.13)
- [`webmock ~> 3.4.2`](https://rubygems.org/gems/webmock/versions/3.4.2)

### Ruby MRI 2.3

- [`activesupport ~> 5.1.2`](https://rubygems.org/gems/activesupport/versions/5.1.2)
- [`awesome_print ~> 1.8.0`](https://rubygems.org/gems/awesome_print/versions/1.8.0)
- [`bcrypt ~> 3.1.11`](https://rubygems.org/gems/bcrypt/versions/3.1.11)
- [`capybara ~> 2.14.4`](https://rubygems.org/gems/capybara/versions/2.14.4)
- [`celluloid ~> 0.17.3`](https://rubygems.org/gems/celluloid/versions/0.17.3)
- [`chronic ~> 0.10.2`](https://rubygems.org/gems/chronic/versions/0.10.2)
- [`concerning ~> 1.1.0`](https://rubygems.org/gems/concerning/versions/1.1.0)
- [`concurrent-ruby ~> 1.0.5`](https://rubygems.org/gems/concurrent-ruby/versions/1.0.5)
- [`connection_pool ~> 2.2.1`](https://rubygems.org/gems/connection_pool/versions/2.2.1)
- [`eventmachine ~> 1.2.3`](https://rubygems.org/gems/eventmachine/versions/1.2.3)
- [`factory_girl ~> 4.8.0`](https://rubygems.org/gems/factory_girl/versions/4.8.0)
- [`faker ~> 1.8.4`](https://rubygems.org/gems/faker/versions/1.8.4)
- [`faraday ~> 0.12.2`](https://rubygems.org/gems/faraday/versions/0.12.2)
- [`hamster ~> 3.0.0`](https://rubygems.org/gems/hamster/versions/3.0.0)
- [`hashie ~> 3.5.6`](https://rubygems.org/gems/hashie/versions/3.5.6)
- [`httparty ~> 0.15.6`](https://rubygems.org/gems/httparty/versions/0.15.6)
- [`jbuilder ~> 2.7.0`](https://rubygems.org/gems/jbuilder/versions/2.7.0)
- [`jwt ~> 1.5.6`](https://rubygems.org/gems/jwt/versions/1.5.6)
- [`mock_redis ~> 0.17.3`](https://rubygems.org/gems/mock_redis/versions/0.17.3)
- [`mongo ~> 2.4.3`](https://rubygems.org/gems/mongo/versions/2.4.3)
- [`mongoid ~> 6.2.0`](https://rubygems.org/gems/mongoid/versions/6.2.0)
- [`nokogiri ~> 1.8.0`](https://rubygems.org/gems/nokogiri/versions/1.8.0)
- [`pg ~> 0.21.0`](https://rubygems.org/gems/pg/versions/0.21.0)
- [`rack ~> 2.0.3`](https://rubygems.org/gems/rack/versions/2.0.3)
- [`rails ~> 5.1.2`](https://rubygems.org/gems/rails/versions/5.1.2)
- [`redis ~> 3.3.3`](https://rubygems.org/gems/redis/versions/3.3.3)
- [`rspec ~> 3.6.0`](https://rubygems.org/gems/rspec/versions/3.6.0)
- [`rspec-its ~> 1.2.0`](https://rubygems.org/gems/rspec-its/versions/1.2.0)
- [`rspec-rails ~> 3.6.0`](https://rubygems.org/gems/rspec-rails/versions/3.6.0)
- [`sequel ~> 4.48.0`](https://rubygems.org/gems/sequel/versions/4.48.0)
- [`sinatra ~> 2.0.0`](https://rubygems.org/gems/sinatra/versions/2.0.0)
- [`sqlite3 ~> 1.3.13`](https://rubygems.org/gems/sqlite3/versions/1.3.13)
- [`timecop ~> 0.9.1`](https://rubygems.org/gems/timecop/versions/0.9.1)
- [`timers ~> 4.1.2`](https://rubygems.org/gems/timers/versions/4.1.2)
- [`webmock ~> 3.0.1`](https://rubygems.org/gems/webmock/versions/3.0.1)

## Testing

Our Ruby environment supports the following testing frameworks:

- [ruby/rspec](/reference/languages/ruby/rspec)
- [ruby/cw-2](/reference/languages/ruby/cw-2)
