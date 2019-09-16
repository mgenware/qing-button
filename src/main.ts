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
        padding: var(--button-padding, 0.6rem 0.9rem);
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
        opacity: 0.6;
      }
    `;
  }

  @property() disabled = false;
  @property() autofocus = false;

  private buttonElement: HTMLButtonElement | null = null;

  firstUpdated() {
    this.buttonElement = this.shadowRoot!.getElementById(
      'button',
    ) as HTMLButtonElement;
  }

  render() {
    return html`
      <button
        id="button"
        ?disabled=${this.disabled}
        ?autofocus=${this.autofocus}
      >
        <slot></slot>
      </button>
    `;
  }

  focus() {
    if (this.buttonElement) {
      this.buttonElement.focus();
    }
  }
}
