# Qualified Docs

[![Netlify Status](https://api.netlify.com/api/v1/badges/27a6c94b-2bc0-4376-9a39-48ad05b5085f/deploy-status)](https://app.netlify.com/sites/fervent-mayer-2fb2ca/deploys)

This is Qualified's public documentation site, hosted at [docs.qualified.io](https://docs.qualified.io).

It's based on the [docc theme](https://docc-theme.netlify.com/) for [gridsome](https://gridsome.org/), a Vue framework.

## Development

### Installation

Since [docc is unmaintained](https://github.com/mrcrmn/docc), the build doesn't work well with Node 15+. Until we migrate to a newer framework, the best way to run the project locally is to downgrade to Node 14 using [nvm](https://github.com/nvm-sh/nvm) or another Node version manager. Once Node 14 is active, run `yarn install` followed by `yarn run develop` or `gridsome develop`.

### Content Structure

The `/content` folder contains all markdown articles used within these docs. Each directory represents a level of depth. Up to 3 levels of depth are shown within the applications sidebar. The 2nd level of depth is treated only as a section header, so the only information the `/content/[depth 1 folder]/[depth 2 folder]/index.html` file should contain is `title` and `order` front-matter. 

### Remark Markdown Extensions

#### Content Containers
![Content Containers](https://p191.p3.n0.cdn.getcloudapp.com/items/9ZuB6pXv/Image%202020-11-04%20at%2012.45.31%20PM.png?source=viewer&v=19cacb18db0da80c607a80a983100112)

