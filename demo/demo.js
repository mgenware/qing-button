import { html, LitElement, css } from '../node_modules/lit-element';
import '../dist/main';

export class DemoApp extends LitElement {
  render() {
    return html`
      <lit-button id="btn" @click=${() => alert('Hello world')}
        >Default</lit-button
      >
      <br />
      <lit-button class="green">Green</lit-button> <br />
      <lit-button class="small">Small</lit-button> <br />
      <lit-button class="black large">Black, Large</lit-button> <br />
      <lit-button class="blue small round colored-border"
        >Blue, small, round, colored-border</lit-button
      >
      <br />
      <lit-button class="blue small round colored-border" disabled>
        Blue, small, round, colored-border, disabled
      </lit-button>
      <br />
      <lit-button disabled>Disabled</lit-button>
      <br />
      <lit-button autofocus>Auto-focused</lit-button>
      <br />
      <lit-button href="http://google.com">href = google.com</lit-button>
      <p>
        A <lit-button class="btn-in-paragraph">button</lit-button> in a
        paragraph.
      </p>
      <p class="btn-group">
        <lit-button>Windows</lit-button>
        <lit-button>macOS</lit-button>
        <lit-button>Linux</lit-button>
      </p>
    `;
  }

  handleFocusClick() {
    this.shadowRoot.getElementById('btn').focus();
  }
}
DemoApp.styles = css`
  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

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
  .colored-border {
    --button-border: 4px solid yellowgreen;
    --button-border-radius: 10px;
  }
  .btn-in-paragraph {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }
  .btn-group {
    display: flex;
    flex-direction: row;
  }
  .btn-group lit-button {
    --button-border: 1px solid gray;
  }
  .btn-group lit-button:not(:last-child) {
    --button-border-right: none;
  }
  .btn-group lit-button:first-child {
    --button-border-radius: 5px 0 0 5px;
  }
  .btn-group lit-button:last-child {
    --button-border-radius: 0 5px 5px 0;
  }
`;
customElements.define('demo-app', DemoApp);
