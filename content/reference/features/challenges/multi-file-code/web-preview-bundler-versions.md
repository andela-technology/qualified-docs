---
title: Web Preview Bundler Versions
summary: "Available sandpack bundler versions for web preview, how to select one, and which frameworks each version supports"
tags:
  - web-preview
  - sandpack
  - angular
  - react
  - vue
  - javascript
  - typescript
---

# Web Preview Bundler Versions

The [Web Preview](/reference/features/challenges/multi-file-code/#web-preview) panel that renders front-end challenges in real time is powered by [Sandpack](https://sandpack.codesandbox.io/docs), a browser-based bundler built by the CodeSandbox team. Qualified hosts several versions of the Sandpack bundler, each with different capabilities and framework support.

## Default Version

The default bundler is **`0.0.54`** (smooshpack), an older but highly stable version. It remains the default for backward compatibility — every challenge that does not explicitly declare a bundler version continues to work exactly as it did when first authored, without any risk of breakage from bundler upgrades.

If you are authoring a new challenge that targets modern frameworks (Angular 12+, React 18+, Vue 3, etc.), you will want to select a newer version. See [Selecting a Version](#selecting-a-version) below.

## Available Versions

| Version | Underlying Package | Best For |
|---|---|---|
| `0.0.54` _(default)_ | smooshpack@0.0.54 | Legacy challenges, AngularJS, simple HTML/CSS/JS |
| `0.0.66` | smooshpack@0.0.66 | Legacy challenges with minor bundler fixes |
| `1.0.0` | smooshpack@1.0.0-alpha-31 | Intermediate framework versions |
| `0.10.11` | @codesandbox/sandpack-client@0.10.11 | React 16–17, Vue 2, Angular 8–11 |
| `1.20.9` | @codesandbox/sandpack-client@1.20.9 | React 17, Vue 2–3, Angular 11 |
| `2.19.8` | @codesandbox/sandpack-client@2.19.8 | Angular 12+, React 18+, Vue 3, modern ES features |

### Version Details

#### `0.0.54` — smooshpack (Default)

The original bundler. Supports basic ES modules, CommonJS, and simple framework setups. Works reliably with:
- Plain HTML, CSS, and JavaScript
- AngularJS (Angular 1.x)
- React 16 with simple setups
- Any challenge not requiring modern bundler features

#### `0.0.66` — smooshpack (Patch)

A minor patch release over `0.0.54` with small bug fixes. Use this if you encounter edge cases with `0.0.54` but don't yet need a full upgrade.

#### `1.0.0` — smooshpack (Major)

The first major smooshpack release. Improves ES module resolution and adds better support for packages that use modern JavaScript syntax internally.

#### `0.10.11` — @codesandbox/sandpack-client

The first version in the CodeSandbox `sandpack-client` package series hosted by Qualified. Adds support for:
- React 16–17 with hooks
- Vue 2
- Angular 8–11
- Better error reporting in the preview panel

#### `1.20.9` — @codesandbox/sandpack-client

A mature mid-range version with improved module resolution and error handling. Use this if `0.10.11` is sufficient but you need better stability with:
- React 17 advanced patterns
- Vue 2 and early Vue 3
- Angular 11

#### `2.19.8` — @codesandbox/sandpack-client (Recommended for Modern Frameworks)

The most capable bundler version currently available in Qualified. Required for:
- **Angular 12 and above** — resolves `zone.js` and polyfill issues that arise with older bundlers
- **React 18** — supports concurrent rendering and the new `createRoot` API
- **Vue 3** with the Composition API
- Modern TypeScript (4.x and 5.x) with strict mode

:::tip
Challenges that declare `@angular/core` version 12 or higher in their `package.json` automatically use `2.19.8` — no manual configuration needed.
:::

## Selecting a Version

To use a specific bundler version, add a `webPreview` block to your challenge's `package.json`:

```json
{
  "dependencies": {
    "@angular/core": "14.3.0"
  },
  "webPreview": {
    "bundlerVersion": "2.19.8"
  }
}
```

The `webPreview` block supports additional options:

```json
{
  "webPreview": {
    "bundlerVersion": "2.19.8",
    "bundlerURL": "",
    "template": "",
    "migrateHeadContent": false,
    "skipEval": false
  }
}
```

| Option | Type | Description |
|---|---|---|
| `bundlerVersion` | `string` | One of the version strings listed above |
| `bundlerURL` | `string` | Override with a fully custom bundler URL (advanced) |
| `template` | `string` | Override the auto-detected Sandpack template |
| `migrateHeadContent` | `boolean` | Move `<head>` styles and scripts into `<body>` |
| `skipEval` | `boolean` | Load the bundler but skip code evaluation |

:::note
`bundlerVersion` and `bundlerURL` are mutually exclusive. If both are present, `bundlerURL` takes priority.
:::

### Priority Order

The bundler selection follows this priority from highest to lowest:

1. **`webPreview.bundlerURL`** — direct URL, always wins
2. **`webPreview.bundlerVersion`** — explicit version declared in `package.json`
3. **Auto-detect** — `@angular/core` >= 12 detected in `dependencies` or `devDependencies` → `2.19.8`
4. **Default** — `0.0.54` for everything else

### Deprecated Syntax

The top-level `sandpackVersion` key is still supported but deprecated. Prefer `webPreview.bundlerVersion` instead:

```json
{
  "sandpackVersion": "2.19.8"
}
```

## Framework Compatibility Quick Reference

| Framework | Recommended Version |
|---|---|
| Plain HTML / CSS / JS | `0.0.54` (default) |
| AngularJS (1.x) | `0.0.54` (default) |
| Angular 8–11 | `0.10.11` or `1.20.9` |
| Angular 12+ | `2.19.8` _(auto-detected)_ |
| React 16–17 | `0.10.11` |
| React 18+ | `2.19.8` |
| Vue 2 | `0.10.11` or `1.20.9` |
| Vue 3 | `2.19.8` |

## Further Reading

- [Sandpack documentation](https://sandpack.codesandbox.io/docs) — official docs for the bundler powering the web preview
- [sandpack-client changelog](https://github.com/codesandbox/sandpack/blob/main/packages/sandpack-client/CHANGELOG.md) — detailed release notes for each `@codesandbox/sandpack-client` version
- [Web Preview](/reference/features/challenges/multi-file-code/#web-preview) — general overview of the web preview panel in project code challenges
- [Managing Third-Party Dependencies](/creating-content/challenges/guides/managing-third-party-dependencies) — how `package.json` works in Qualified challenges
