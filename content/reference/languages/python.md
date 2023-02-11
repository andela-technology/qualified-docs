---
title: Python
summary: "Python Environment, Packages, and Testing Frameworks"
tags:
  - python
  - language
---

# Python

## Environment

Qualified supports Python 2.7, 3.4, 3.6, 3.7 and 3.8.

## Timeout

The sandbox environment will timeout the code within 12 seconds.

## Packages

The following Python packages are installed:

### Python 2.7

- `numpy`: `1.12.0`
- `scipy`: `0.13.3`
- `scikit-learn`: `0.18.1`
- `gmpy2`: `2.0.2`
- `pandas`: `0.13.1`
- `six`: `1.10.0`
- `pymongo`: `3.4.0`
- `redis`: `2.10.5`
- `psycopg2`: `2.7`
- `beautifulsoup4`: `4.2.1`
- `requests`: `2.7.0`
- `pycrypto`: `2.6.1`

### Python 3.4

- `numpy`: `1.12.0`
- `scipy`: `0.13.3`
- `scikit-learn`: `0.18.1`
- `gmpy2`: `2.0.2`
- `pandas`: `0.13.1`
- `six`: `1.10.0`
- `pymongo`: `3.4.0`
- `redis`: `2.10.5`
- `psycopg2`: `2.7`
- `beautifulsoup4`: `4.2.1`
- `requests`: `2.7.0`
- `pycrypto`: `2.6.1`

### Python 3.6

- `numpy`: `1.14.0`
- `scipy`: `1.0.0`
- `scikit-learn`: `0.19.1`
- `gmpy2`: `2.0.8`
- `pandas`: `0.22.0`
- `six`: `1.10.0`
- `pymongo`: `3.6.0`
- `redis`: `2.10.6`
- `psycopg2`: `2.7.4`
- `beautifulsoup4`: `4.6.0`
- `requests`: `2.7.0`
- `pycrypto`: `2.6.1`

### Python 3.7

Since Python 3.7, we have presets for different kinds of challenges. Use the Run Configuration menu in [project code challenge](/reference/features/challenges/multi-file-code) mode to select a preset.

#### Default (no preset)

- `beautifulsoup4`: `4.7.1`
- `gmpy2`: `2.0.8`
- `numpy`: `1.16.3`
- `pandas`: `0.24.2`
- `pycrypto`: `2.6.1`
- `regex`: `2019.04.14`
- `requests`: `2.21.0`
- `scikit-learn`: `0.20.3`
- `scipy`: `1.2.1`
- `six`: `1.12.0`

#### Data Science (`datascience` preset)

- `beautifulsoup4`: `4.9.0`
- `numpy`: `1.18.4`
- `pandas`: `1.0.3`
- `requests`: `2.23.0`
- `seaborn`: `0.10.1`
- `scikit-learn`: `0.22.2.post1`
- `scipy`: `1.4.1`
- `matplotlib`: `3.2.1`
- `mpld3`
- `jinja2`: `2.11.2`
- `six`: `1.14.0`
- `gensim`: `3.8.3`
- `keras`: `2.3.1`
- `networkx`: `2.4`
- `nltk`: `3.5`
- `spacy`: `2.2.4`
- `psycopg2`: `2.8.5`
- `sqlalchemy`: `1.3.16`
- `statsmodels`: `0.11.1`
- `scrapy`: `2.1.0`
- `wordcloud`: `1.7.0`

#### Django (`django` preset)

> Only available in [Project Code Challenges](/reference/features/challenges/multi-file-code).

- `django`: `2.2.1`


### Python 3.8

#### Default (no preset)

- `aiohttp`: `3.8.1`
- `beautifulsoup4`: `4.9.1`
- `flask`: `1.1.2`
- `gmpy2`: `2.0.8`
- `jinja2`: `2.11.2`
- `matplotlib`: `3.3.0`
- `mpld3`: `0.3.1.dev1`
- `numpy`: `1.19.1`
- `pandas`: `1.0.5`
- `pycrypto`: `2.6.1`
- `regex`: `2020.7.14`
- `requests`: `2.24.0`
- `scikit-learn`: `0.23.1`
- `scipy`: `1.5.2`
- `seaborn`: `0.10.1`
- `six`: `1.15.0`
- `sqlalchemy`: `1.3.19`

#### Data Science (`datascience` preset)

- `beautifulsoup4`: `4.9.1`
- `gensim`: `3.8.3`
- `graphviz`: `0.14.1`
- `jinja2`: `2.11.2`
- `keras`: `2.4.3`
- `koala2`: `0.0.35`
- `matplotlib`: `3.3.0`
- `mpld3`: `0.3.1.dev1`
- `networkx`: `2.4`
- `nltk`: `3.5`
- `numpy`: `1.19.1`
- `pandas`: `1.1.0`
- `psycopg2`: `2.8.5`
- `pydotplus`: `2.0.2`
- `requests`: `2.24.0`
- `scikit-learn`: `0.23.1`
- `scipy`: `1.5.2`
- `scrapy`: `2.2.1`
- `seaborn`: `0.10.1`
- `six`: `1.15.0`
- `spacy`: `2.3.2`
- `sqlalchemy`: `1.3.18`
- `statsmodels`: `0.11.1`
- `wordcloud`: `1.7.0`

#### Django (`django` preset)

> Only available in [Project Code Challenges](/reference/features/challenges/multi-file-code).

- `django`: `3.2`
- `djangorestframework`: `3.12.4`
- `django-filter`: `21.1`
- `django-guardian`: `2.4.0`

### Python 3.11

#### Default (no preset)

- `beautifulsoup4`: `4.11.2`
- `cryptography`: `39.0.1`
- `Flask`: `2.2.2`
- `gmpy2`: `2.1.5`
- `Jinja2`: `3.1.2`
- `matplotlib`: `3.6.3`
- `mpld3`: `0.5.9`
- `numpy`: `1.24.2`
- `pandas`: `1.5.3`
- `regex`: `2022.10.31`
- `requests`: `2.28.2`
- `scikit-learn`: `1.2.1`
- `scipy`: `1.10.0`
- `seaborn`: `0.12.2`
- `six`: `1.15.0`
- `sqlalchemy`: `2.0.2`
- `aiohttp`: `3.8.3`

## Testing

Our Python environment supports the following testing frameworks:

- [python/unittest](/reference/languages/python/unittest)
- [python/cw-2](/reference/languages/python/cw-2)
