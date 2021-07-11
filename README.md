# qing-button

[![Build Status](https://github.com/mgenware/qing-button/workflows/Build/badge.svg)](https://github.com/mgenware/qing-button/actions)
[![Pages Status](https://github.com/mgenware/qing-button/workflows/Pages/badge.svg)](https://github.com/mgenware/qing-button/actions)
[![npm version](https://img.shields.io/npm/v/qing-button.svg?style=flat-square)](https://npmjs.com/package/qing-button)
[![Node.js Version](http://img.shields.io/node/v/qing-button.svg?style=flat-square)](https://nodejs.org/en/)

Button component for [qing](https://github.com/mgenware/qing), based on lit.

## Demo

[Demo](https://mgenware.github.io/qing-button/)

## Installation

```sh
yarn add qing-button lit
```

## Usage

### Properties

- `disabled: boolean` indicates whether the button is disabled.
- `autofocus: boolean` indicates whether the button is focused when the page loads.
- `href: string` navigates to the given URL when clicked on.
- `disableSelectedStyle: boolean` opts out of default dimmed background when selected.

### Events

- `click` fires when clicked, doesn't bubble up.

### CSS Shadow Parts

- `button` the underlying button.

```css
qing-button.colored-border::part(button) {
  border: 4px solid yellowgreen;
  border-radius: 10px;
}
```

### CSS Variables

qing-button also has some CSS variables for quick customization.

`--button-outline-color` focus outline color, defaults to `8dc3eb`.

### Examples

See [demo](https://mgenware.github.io/qing-button/) for more examples.

```js
html`
  <qing-button @click=${() => alert('Hello world')}>Default</qing-button>
  <qing-button disabled>Disabled</qing-button>
  <qing-button autofocus>Auto-focused</qing-button>
`;
```

## Build Instructions

> This project uses [daizong](https://github.com/mgenware/daizong) to manage scripts. You need to run scripts through daizong via `yarn r <script>` or `npm run r <script>`.

### For development

- `yarn r dev` starts the development mode, which watches and compiles all source files including tests files.
- `yarn r serve` starts demo page in browser in development mode.
- `yarn r t` runs tests in development mode (requires build files).
- `yarn r tw` runs tests in development + watch mode (requires build files).

> Tip: You can keep 3 terminal tabs open to run the 3 scripts above during development.

### For production

- `yarn r build` cleans, lints, compiles the project and runs tests.

### Other scripts

You do not need to manually run these scripts, they are already integrated into other scripts.

- `yarn r lint` lints the project using ESLint, auto triggered by `yarn r build`.
- `yarn r clean` deletes all build artifacts, auto triggered by `yarn r dev` or `yarn r build`.

### No `prepublishOnly`

The `prepublishOnly` script was removed, we recommend using [np](https://github.com/sindresorhus/np) to publish packages, which will automatically run `yarn test`, which runs `yarn r build` before publishing.
