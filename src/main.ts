import { html, css, LitElement, CSSResultArray } from 'lit';
import { property, customElement } from 'lit/decorators.js';

export type QingButtonStyle = 'primary' | 'success' | 'danger' | 'warning' | '';
const selectedButtonClass = 'selected';

@customElement('qing-button')
export class QingButton extends LitElement {
  static get styles(): CSSResultArray {
    return [
      css`
        :host {
          box-sizing: border-box;
          display: inline-block;
          user-select: none;
        }
        button {
          width: 100%;
          height: 100%;
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

  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) autofocus = false;
  @property({ type: Boolean }) canSelect = false;
  @property({ type: Boolean }) disableSelectedStyle = false;
  @property({ type: String }) href = '';
  @property({ type: String }) btnStyle: QingButtonStyle = '';
  @property({ type: Boolean, reflect: true }) selected = false;

  private buttonElement: HTMLButtonElement | null = null;

  firstUpdated() {
    if (!this.shadowRoot) {
      throw new Error('Unexpected undefined shadowRoot');
    }
    this.buttonElement = this.shadowRoot.querySelector('button');
  }

  render() {
    return html`
      <button
        class=${this.selected && !this.disableSelectedStyle ? selectedButtonClass : ''}
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
    e.preventDefault();
    e.stopImmediatePropagation();
    if (this.href) {
      window.location.href = this.href;
      return;
    }

    if (this.canSelect) {
      this.selected = !this.selected;
      this.dispatchEvent(new CustomEvent<undefined>('check'));
    }
    this.dispatchEvent(new CustomEvent<undefined>('click'));
  }
}

export default QingButton;

declare global {
  interface HTMLElementTagNameMap {
    'qing-button': QingButton;
  }
}
