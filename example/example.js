import { html, LitElement, css } from '../node_modules/lit-element';
import '../dist/main';

const darkThemeClass = 'theme-dark';

export class ExampleApp extends LitElement {
  render() {
    return html`
      <div id="main">
        <qing-button id="btn" @click=${() => alert('Hello world')}
          >Default</qing-button
        >
        <br />
        <qing-button class="green">Green</qing-button> <br />
        <qing-button class="small">Small</qing-button> <br />
        <qing-button class="black large">Black, Large</qing-button> <br />
        <qing-button class="blue small round colored-border"
          >Blue, small, round, colored-border</qing-button
        >
        <br />
        <qing-button class="blue small round colored-border" disabled>
          Blue, small, round, colored-border, disabled
        </qing-button>
        <br />
        <qing-button disabled>Disabled</qing-button>
        <br />
        <qing-button autofocus>Auto-focused</qing-button>
        <br />
        <qing-button href="http://google.com">href = google.com</qing-button>
        <p>
          A <qing-button class="btn-in-paragraph">button</qing-button> in a
          paragraph.
        </p>
        <p class="btn-group">
          <qing-button>Windows</qing-button>
          <qing-button>macOS</qing-button>
          <qing-button>Linux</qing-button>
        </p>
        <qing-button id="themes" @click=${this.switchThemes}
          >Switch themes</qing-button
        ><br />

        <h2>CSS variables</h2>
        <qing-button id="button-outline">--button-outline-color</qing-button>
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
ExampleApp.styles = css`
  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  qing-button.green::part(button) {
    background-color: #4caf50;
    color: white;
  } /* Green */
  qing-button.blue::part(button) {
    background-color: #008cba;
    color: white;
  } /* Blue */
  qing-button.red::part(button) {
    background-color: #f44336;
    color: white;
  } /* Red */
  qing-button.gray::part(button) {
    background-color: #e7e7e7;
    color: black;
  } /* Gray */
  qing-button.black::part(button) {
    background-color: #555555;
    color: white;
  } /* Black */

  qing-button.small::part(button) {
    font-size: 0.75rem;
    padding: 0.5rem 0.75rem;
    margin-bottom: 0.75rem;
  }
  qing-button.large::part(button) {
    font-size: 1.25rem;
    padding: 1rem 1.25rem;
    margin-bottom: 1.25rem;
  }
  qing-button.round::part(button) {
    border-radius: 0.75rem;
  }
  qing-button.colored-border::part(button) {
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
  .btn-group qing-button::part(button) {
    border: 1px solid gray;
  }
  .btn-group qing-button:not(:last-child)::part(button) {
    border-right: none;
  }
  .btn-group qing-button:first-child::part(button) {
    border-radius: 5px 0 0 5px;
  }
  .btn-group qing-button:last-child::part(button) {
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
customElements.define('example-app', ExampleApp);
