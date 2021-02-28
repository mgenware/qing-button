import { html, LitElement, css } from '../node_modules/lit-element';
import '../dist/main';

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
        </p>
        <qing-button autofocus>Auto-focused</qing-button>
        <br />
        <qing-button href="http://google.com">href = google.com</qing-button>
        <p>
          A <qing-button class="btn-in-paragraph">button</qing-button> in a paragraph with an icon
          <qing-button>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M12 9.229c.234-1.12 1.547-6.229 5.382-6.229 2.22 0 4.618 1.551 4.618 5.003 0 3.907-3.627 8.47-10 12.629-6.373-4.159-10-8.722-10-12.629 0-3.484 2.369-5.005 4.577-5.005 3.923 0 5.145 5.126 5.423 6.231zm-12-1.226c0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-7.962-9.648-9.028-12-3.737-2.338-5.262-12-4.27-12 3.737z"
              />
            </svg> </qing-button
          >.
        </p>
        <qing-button id="themes" @click=${this.switchThemes}>Switch themes</qing-button><br />
        <h2>Button group</h2>
        <p class="btn-group">
          <qing-button>Windows</qing-button>
          <qing-button>macOS</qing-button>
          <qing-button>Linux</qing-button>
        </p>
        <h2>CSS variables</h2>
        <qing-button id="button-outline">--button-outline-color</qing-button>
        <h2>Selected</h2>
        <qing-button canselect selected>I'm a checkbox</qing-button>
        <qing-button id="checkbox" canselect selected disableSelectedStyle
          >I'm a checkbox</qing-button
        >
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
  qing-button {
    margin-bottom: 1rem;
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
  qing-button.custom-style::part(button) {
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
  #checkbox[selected]::part(button) {
    border: 3px solid green;
  }
`;
customElements.define('example-app', ExampleApp);
