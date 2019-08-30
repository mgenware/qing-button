# lit-button

Dead simple lit-element button

## Installation

```sh
yarn add lit-button
```

## Properties

`disabled` when present, the button is disabled.

## CSS Variables

```
--button-background-color
--button-color
--button-border
--button-padding
--button-margin-bottom
--button-disabled-background-color
--button-disabled-color
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

### Development

- `yarn dev` build the project in dev mode
- `yarn build` build and lint the project in production mode
- `yarn demo` run the demo in browser (you have to build the project first)
