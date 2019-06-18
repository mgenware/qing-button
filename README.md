# lit-button

Dead simple lit-element button

## Installation

```sh
yarn add lit-button
```

## Properties

```ts
class LitButton extends LitElement {
  /* 
      Can be any combination of below:
        Color: green, blue, red, gray, black
        Size: large, small

      Defaults to gray and normal size

      e.g. class="blue large", class="red"
    */
  class: string;
  disabled: boolean;
}
```

### Examples

```html
<lit-button>Default</lit-button>
<lit-button class="green">Green</lit-button>
<lit-button class="small">Small</lit-button>
<lit-button class="black large">Black, Large</lit-button>
<lit-button .disabled="${true}">Disabled</lit-button>
```

### Development

- `yarn dev` build the project in dev mode
- `yarn build` build and lint the project in production mode
- `yarn demo` run the demo in browser (you have to build the project first)
