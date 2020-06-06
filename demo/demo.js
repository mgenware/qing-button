import { html, LitElement, css } from '../node_modules/lit-element';
import '../dist/main';

const darkThemeClass = 'theme-dark';

export class DemoApp extends LitElement {
  render() {
    return html`
      <div id="main">
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
        <lit-button id="themes" @click=${this.switchThemes}
          >Switch themes</lit-button
        ><br />

        <h2>CSS variables</h2>
        <lit-button id="button-outline">--button-outline-color</lit-button>
      </div>
    `;
  }

  handleFocusClick() {
    this.shadowRoot.getElementById('btn').focus();
  }

  switchThemes() {
    const { classList } = this.shadowRoot.getElementById('main');
    if (classList.contains(darkThemeClass)) {
      classList.remove(darkThemeClass);
    } else {
      classList.add(darkThemeClass);
    }
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

  lit-button.green::part(button) {
    background-color: #4caf50;
    color: white;
  } /* Green */
  lit-button.blue::part(button) {
    background-color: #008cba;
    color: white;
  } /* Blue */
  lit-button.red::part(button) {
    background-color: #f44336;
    color: white;
  } /* Red */
  lit-button.gray::part(button) {
    background-color: #e7e7e7;
    color: black;
  } /* Gray */
  lit-button.black::part(button) {
    background-color: #555555;
    color: white;
  } /* Black */

  lit-button.small::part(button) {
    font-size: 0.75rem;
    padding: 0.5rem 0.75rem;
    margin-bottom: 0.75rem;
  }
  lit-button.large::part(button) {
    font-size: 1.25rem;
    padding: 1rem 1.25rem;
    margin-bottom: 1.25rem;
  }
  lit-button.round::part(button) {
    border-radius: 0.75rem;
  }
  lit-button.colored-border::part(button) {
    border: 4px solid yellowgreen;
    border-radius: 10px;
  }
  .btn-in-paragraph {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }
  .btn-group {
    display: flex;
    flex-direction: row;
  }
  .btn-group lit-button::part(button) {
    border: 1px solid gray;
  }
  .btn-group lit-button:not(:last-child)::part(button) {
    border-right: none;
  }
  .btn-group lit-button:first-child::part(button) {
    border-radius: 5px 0 0 5px;
  }
  .btn-group lit-button:last-child::part(button) {
    border-radius: 0 5px 5px 0;
  }

  :host {
    --default-back-color: yellowgreen;
    --default-fore-color: black;
  }

  .theme-dark {
    --default-back-color: black;
    --default-fore-color: #777777;
  }

  h1 {
    background-color: var(--default-back-color);
    color: var(--default-fore-color);
  }

  #themes::part(button) {
    background-color: var(--default-back-color);
    color: var(--default-fore-color);
  }

  #button-outline {
    --button-outline-color: orange;
  }
`;
customElements.define('demo-app', DemoApp);
