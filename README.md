# qing-button

[![Build Status](https://github.com/mgenware/qing-button/workflows/Build/badge.svg)](https://github.com/mgenware/qing-button/actions)
[![npm version](https://img.shields.io/npm/v/qing-button.svg?style=flat-square)](https://npmjs.com/package/qing-button)
[![Node.js Version](http://img.shields.io/node/v/qing-button.svg?style=flat-square)](https://nodejs.org/en/)

Button component for [qing](https://github.com/mgenware/qing), based on lit-element.

## Demo

[Demo](https://mgenware.github.io/qing-button/)

## Installation

```sh
yarn add qing-button lit-element
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

```js
html`
  <qing-button @click=${() => alert('Hello world')}>Default</qing-button>
  <qing-button disabled>Disabled</qing-button>
  <qing-button autofocus>Auto-focused</qing-button>
`;
```

### Build Instructions

> This project uses [daizong](https://github.com/mgenware/daizong) to manage scripts. You need to run scripts through daizong via `yarn r <script>` or `npm run r <script>`.

- `yarn r dev` compiles, and watches files in dev mode
- `yarn r serve` runs the demo page in browser (you have to build the project first)
- `yarn r build` builds, lints and tests the project in production mode
