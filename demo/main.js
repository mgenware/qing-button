import { html, css, LitElement } from '../node_modules/lit/index.js';
import '../dist/main.js';

const darkThemeClass = 'theme-dark';

export default class ExampleApp extends LitElement {
  render() {
    return html`
      <div id="main">
        <p>
          <qing-button>Default</qing-button>
          <qing-button btnStyle="primary">Primary</qing-button>
          <qing-button btnStyle="success">Success</qing-button>
          <qing-button btnStyle="warning">Warning</qing-button>
          <qing-button btnStyle="danger">Danger</qing-button>
          <qing-button class="custom-styles">Custom styles</qing-button>
          <qing-button disabled>Disabled</qing-button>
          <qing-button id="button-dark">Dark</qing-button>
        </p>
        <p><qing-button autofocus>Auto-focused</qing-button></p>
        <p><qing-button href="http://google.com">href = google.com</qing-button></p>
        <p>A <qing-button class="btn-in-paragraph">button</qing-button> in a paragraph.</p>
        <p><qing-button id="themes" @click=${this.switchThemes}>Switch themes</qing-button></p>
        <h2>Button group</h2>
        <p class="btn-group">
          <qing-button>Windows</qing-button>
          <qing-button>macOS</qing-button>
          <qing-button>Linux</qing-button>
        </p>
        <h2>CSS variables</h2>
        <p><qing-button id="button-outline">--button-outline-color</qing-button></p>
        <h2>Selected</h2>
        <p>
          <qing-button canselect selected>I'm a checkbox</qing-button>
          <qing-button id="checkbox" canselect selected disableSelectedStyle
            >I'm a checkbox</qing-button
          >
        </p>
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
  qing-button[btnStyle='success']::part(button) {
    background-color: #4caf50;
    color: white;
  }
  qing-button[btnStyle='primary']::part(button) {
    background-color: #008cba;
    color: white;
  }
  qing-button[btnStyle='danger']::part(button) {
    background-color: #f44336;
    color: white;
  }
  qing-button[btnStyle='warning']::part(button) {
    background-color: #ffae00;
    color: white;
  }
  qing-button.custom-styles::part(button) {
    border: 4px solid yellowgreen;
    border-radius: 10px;
    background-color: #50009b;
    color: white;
  }

  .btn-in-paragraph {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }
  .btn-group {
    display: flex;
    flex-direction: row;
  }
  .btn-group qing-button {
    min-width: 100px;
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
  #button-dark {
    --button-outline-color: gray;
  }
  #button-dark::part(button) {
    background-color: black;
    color: #959595;
  }
  #checkbox[selected]::part(button) {
    border: 3px solid green;
  }
`;
customElements.define('example-app', ExampleApp);
