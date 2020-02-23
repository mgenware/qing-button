import { html, customElement, css, property, LitElement } from 'lit-element';

@customElement('lit-button')
export default class LitButton extends LitElement {
  // Styles are based on https://www.w3schools.com/css/css3_buttons.asp
  static get styles() {
    return css`
      :host {
        display: inline-block;
      }
      button {
        background-color: var(--button-background-color, #e7e7e7);
        color: var(--button-color, black);
        border: var(--button-border, none);
        border-radius: var(--button-border-radius, 0);
        text-align: center;
        text-decoration: none;
        display: var(--button-display, inline-block);
        cursor: var(--button-cursor, pointer);
        font-size: var(--button-font-size, 1rem);
        padding: var(--button-padding, 0.6rem 0.9rem);
        margin: var(--button-margin, 0 0 1rem 0);
        transition: var(--button-transition, all 0.3s ease 0s);
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
      button:focus {
        box-shadow: 0 0 0 0.2rem var(--button-outline-color, #8dc3eb);
        outline: none;
      }
    `;
  }

  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) autofocus = false;
  @property({ type: String }) href = '';

  private buttonElement: HTMLButtonElement | null = null;

  firstUpdated() {
    if (!this.shadowRoot) {
      throw new Error('Unexpected undefined shadowRoot');
    }
    this.buttonElement = this.shadowRoot.getElementById(
      'button',
    ) as HTMLButtonElement;
  }

  render() {
    return html`
      <button
        id="button"
        ?disabled=${this.disabled}
        ?autofocus=${this.autofocus}
        @click=${this.handleClick}
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

  private handleClick(e: Event) {
    if (this.href) {
      window.location.href = this.href;
      e.preventDefault();
      e.stopImmediatePropagation();
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lit-button': LitButton;
  }
}
