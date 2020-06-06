# lit-button

[![Build Status](https://github.com/mgenware/lit-button/workflows/Build/badge.svg)](https://github.com/mgenware/lit-button/actions)
[![npm version](https://img.shields.io/npm/v/lit-button.svg?style=flat-square)](https://npmjs.com/package/lit-button)
[![Node.js Version](http://img.shields.io/node/v/lit-button.svg?style=flat-square)](https://nodejs.org/en/)

Dead simple lit-element button

## Installation

```sh
yarn add lit-button
```

## Properties

- `disabled: boolean` indicates whether the button is disabled.
- `autofocus: boolean` indicates whether the button is focused when the page loads.
- `href: string` navigates to the given URL when clicked on.

## CSS Shadow Parts

- `button` the underlying button.

```css
lit-button.colored-border::part(button) {
  border: 4px solid yellowgreen;
  border-radius: 10px;
}
```

### Examples

```js
html`
  <lit-button @click=${() => alert('Hello world')}>Default</lit-button>
  <lit-button disabled>Disabled</lit-button>
  <lit-button autofocus>Auto-focused</lit-button>
`;
```

### Build Instructions

- `yarn dev` builds the project in dev mode
- `yarn build` builds and lints the project in production mode
- `yarn serve` runs a demo page in browser (you have to build the project first)
- `yarn test` runs UI tests
