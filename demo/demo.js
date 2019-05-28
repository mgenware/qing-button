import { html, LitElement } from '../node_modules/lit-element';
import '../dist/main';

export class DemoApp extends LitElement {
  render() {
    return html`
      <lit-button>Default</lit-button> <br />
      <lit-button class="green">Green</lit-button> <br />
      <lit-button class="small">Small</lit-button> <br />
      <lit-button class="black large">Black, Large</lit-button> <br />
      <lit-button .disabled=${true}>Disabled</lit-button>
    `;
  }
}

customElements.define('demo-app', DemoApp);
