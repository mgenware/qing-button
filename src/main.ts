import {
  html,
  customElement,
  css,
  property,
  LitElement,
  CSSResultArray,
} from 'lit-element';

export type QingButtonStyle = 'primary' | 'success' | 'danger' | 'warning' | '';
const selectedButtonClass = 'selected';

@customElement('qing-button')
export default class LitButton extends LitElement {
  static get styles(): CSSResultArray {
    return [
      css`
        :host {
          display: inline-block;
        }
        button {
          margin: 0 0 1rem 0;
          background-color: #e7e7e7;
          color: black;
          border: 0;
          border-radius: 0;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          cursor: pointer;
          font-size: 1rem;
          padding: 0.6rem 0.9rem;
          transition: all 0.3s ease 0s;
        }
        button:hover {
          opacity: 0.8;
        }
        button:active,
        button.selected {
          filter: brightness(80%);
        }
        button:disabled {
          pointer-events: none;
          opacity: 0.6;
        }
        button:focus {
          box-shadow: inset 0 0 0 0.2rem var(--button-outline-color, #8dc3eb);
          outline: none;
        }
      `,
    ];
  }

  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean, reflect: true }) autofocus = false;
  @property({ type: String, reflect: true }) href = '';
  @property({ type: String, reflect: true }) btnStyle: QingButtonStyle = '';
  @property({ type: Boolean, reflect: true }) canSelect = false;
  @property({ type: Boolean, reflect: true }) selected = false;
  @property({ type: Boolean, reflect: true }) disableSelectedStyle = false;

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
        class=${this.selected && !this.disableSelectedStyle
          ? selectedButtonClass
          : ''}
        part="button"
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
    if (this.canSelect) {
      this.selected = !this.selected;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'qing-button': LitButton;
  }
}
