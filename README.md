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

## CSS Variables

```
--button-color
--button-background-color
--button-border
--button-font-size
--button-margin
--button-padding
--button-display
--button-cursor
--button-transition
--button-outline-color
```

### Examples

```js
html`
  <lit-button id="btn" @click=${() => alert('Hello world')}>Default</lit-button>
  <lit-button class="green">Green</lit-button>
  <lit-button class="small">Small</lit-button>
  <lit-button class="black large">Black, Large</lit-button>
  <lit-button class="blue small round">Blue, small, round</lit-button>
  <lit-button .disabled=${true}>Disabled</lit-button>
  <lit-button autofocus>Auto-focused</lit-button>
`;
```

### Build Instructions

- `yarn dev` builds the project in dev mode
- `yarn build` builds and lints the project in production mode
- `yarn demo` runs the demo in browser (you have to build the project first)
- `yarn test` runs UI tests
