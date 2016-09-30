<p align="center">
  <img src="bf-pg.gif" />
</p>

# playgrounds

A service & framework for building demo sites.

# Usage

```bash
$ npm i
```

```bash
$ npm run create <name> <optional template>
```

## templates

simple webpack (default):

```bash
$ npm run create my-app
```

react + webpack:

```bash
$ npm run create my-app webpack-react
```

threejs + webpack:

```bash
$ npm run create my-app webpack-threejs
```

Check out your new playground:

```bash
$ cd playgrounds/<name>
```

```bash
$ npm i
```

Start dev server:

```bash
$ npm run dev
```

Create new build:

```bash
$ npm run build
```


# Features

- `npm run dev`: first-in-class development experience.
  - State preserving hot-reload
  - State preserving compilation error overlay
  - Lint-on-save with ESLint
  - Source maps

- `npm run build`: Production ready build.
  - JavaScript minified with [UglifyJS](https://github.com/mishoo/UglifyJS2).
  - HTML minified with [html-minifier](https://github.com/kangax/html-minifier).
  - CSS across all components extracted into a single file and minified with [cssnano](https://github.com/ben-eb/cssnano).
  - All static assets compiled with version hashes for efficient long-term caching, and a production `index.html` is auto-generated with proper URLs to these generated assets.
