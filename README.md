# qing-button

[![Build Status](https://github.com/mgenware/qing-button/workflows/Build/badge.svg)](https://github.com/mgenware/qing-button/actions)
[![Pages Status](https://github.com/mgenware/qing-button/workflows/Pages/badge.svg)](https://github.com/mgenware/qing-button/actions)
[![npm version](https://img.shields.io/npm/v/qing-button.svg?style=flat-square)](https://npmjs.com/package/qing-button)
[![Node.js Version](http://img.shields.io/node/v/qing-button.svg?style=flat-square)](https://nodejs.org/en/)

A simple button component based on [lit](https://lit.dev/).

## Demo

[Demo](https://mgenware.github.io/qing-button/)

## Installation

```sh
npm i qing-button lit
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
