import { html, LitElement, css } from '../node_modules/lit-element';
import '../dist/main';

export class DemoApp extends LitElement {
  render() {
    return html`
      <lit-button>Default</lit-button> <br />
      <lit-button class="green">Green</lit-button> <br />
      <lit-button class="small">Small</lit-button> <br />
      <lit-button class="black large">Black, Large</lit-button> <br />
      <lit-button class="blue small round">Blue, small, round</lit-button>
      <br />
      <lit-button class="blue small round" disabled="true"
        >Blue, small, round, disabled</lit-button
      >
      <br />
      <lit-button disabled="true">Disabled</lit-button>
      <br />
      <lit-button autofocus="true">Autofocused</lit-button>
    `;
  }
}
DemoApp.styles = css`
  .green {
    --button-background-color: #4caf50;
    --button-color: white;
  } /* Green */
  .blue {
    --button-background-color: #008cba;
    --button-color: white;
  } /* Blue */
  .red {
    --button-background-color: #f44336;
    --button-color: white;
  } /* Red */
  .gray {
    --button-background-color: #e7e7e7;
    --button-color: black;
  } /* Gray */
  .black {
    --button-background-color: #555555;
    --button-color: white;
  } /* Black */

  .small {
    --button-font-size: 0.75rem;
    --button-padding: 0.5rem 0.75rem;
    --button-margin-bottom: 0.75rem;
  }
  .large {
    --button-font-size: 1.25rem;
    --button-padding: 1rem 1.25rem;
    --button-margin-bottom: 1.25rem;
  }
  .round {
    --button-border-radius: 0.75rem;
  }
`;
customElements.define('demo-app', DemoApp);
