# playground-webpack-boilerplate

> A full-featured Webpack setup with hot-reload, lint-on-save, unit testing & css extraction.

## Usage

**It is recommended to use npm 3+ for a more efficient dependency tree.**

``` bash
$ npm install -g playgrounds-cli
$ playgrounds create my-playground
$ cd my-playground
$ npm i
$ npm run dev
```

## What's Included

- `npm run dev`: first-in-class development experience.
  - Webpack
  - State preserving hot-reload
  - State preserving compilation error overlay
  - Lint-on-save with ESLint
  - Source maps

- `npm run build`: Production ready build.
  - JavaScript minified with [UglifyJS](https://github.com/mishoo/UglifyJS2).
  - HTML minified with [html-minifier](https://github.com/kangax/html-minifier).
  - CSS across all components extracted into a single file and minified with [cssnano](https://github.com/ben-eb/cssnano).
  - All static assets compiled with version hashes for efficient long-term caching, and a production `index.html` is auto-generated with proper URLs to these generated assets.
