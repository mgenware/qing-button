import { html, customElement, css, property, LitElement } from 'lit-element';

@customElement('lit-button')
export class LitButton extends LitElement {
  // Styles are based on https://www.w3schools.com/css/css3_buttons.asp
  static get styles() {
    return css`
      button {
        background-color: var(--button-background-color, #e7e7e7);
        color: var(--button-color, black);
        border: var(--button-border, none);
        text-align: center;
        text-decoration: none;
        display: inline-block;
        cursor: pointer;
        font-size: var(--button-font-size, 1rem);
        padding: var(--button-padding, 0.75rem 1rem);
        margin-bottom: var(--button-margin-bottom, 1rem);
        transition: all 0.3s ease 0s;
      }
      button:hover {
        opacity: 0.8;
      }
      button:active {
        filter: brightness(80%);
      }
      button:disabled {
        pointer-events: none;
        background-color: var(--button-disabled-background-color, #e7e7e7);
        color: var(--button-disabled-color, black);
      }
    `;
  }

  @property() disabled = false;

  render() {
    return html`
      <button ?disabled=${this.disabled}>
        <slot></slot>
      </button>
    `;
  }
}
