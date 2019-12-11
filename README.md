# lit-button

[![npm version](https://img.shields.io/npm/v/lit-button.svg?style=flat-square)](https://npmjs.com/package/lit-button)
[![Node.js Version](http://img.shields.io/node/v/lit-button.svg?style=flat-square)](https://nodejs.org/en/)

Dead simple lit-element button

## Installation

```sh
yarn add lit-button
```

## Properties

`disabled: boolean` indicates whether the button is disabled.
`autofocus: boolean` indicates whether the button is focused when the page loads.

## CSS Variables

```
--button-background-color
--button-color
--button-border
--button-font-size
--button-padding
--button-margin-bottom
```

### Examples

```js
html`
  <lit-button>Default</lit-button>
  <lit-button class="green">Green</lit-button>
  <lit-button class="small">Small</lit-button>
  <lit-button class="black large">Black, Large</lit-button>
  <lit-button class="blue small round">Blue, small, round</lit-button>
  <lit-button .disabled=${true}>Disabled</lit-button>
`;
```

### Build Instructions

- `yarn dev` builds the project in dev mode
- `yarn build` builds and lints the project in production mode
- `yarn demo` runs the demo in browser (you have to build the project first)
