import { html, customElement, css, property, LitElement } from 'lit-element';

@customElement('lit-button')
export class LitButton extends LitElement {
  // Styles are based on https://www.w3schools.com/css/css3_buttons.asp
  static get styles() {
    return css`
      button {
        background-color: #e7e7e7;
        font-family: -apple-system, BlinkMacSystemFont, 'Open Sans', 'Segoe UI',
          'Helvetica Neue', Helvetica, Arial, sans-serif;
        color: black;
        border: none;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        cursor: pointer;
        opacity: 1;
        font-size: 1rem;
        padding: 0.75rem 1rem;
        margin-bottom: 1rem;
        transition: all 0.3s ease 0s;
      }
      button:hover {
        opacity: 0.75;
      }
      button:active {
        filter: brightness(80%);
      }
      button:disabled {
        pointer-events: none;
        background-color: #e7e7e7;
        color: gray;
      }

      .green {
        background-color: #4caf50;
        color: white;
      } /* Green */
      .blue {
        background-color: #008cba;
        color: white;
      } /* Blue */
      .red {
        background-color: #f44336;
        color: white;
      } /* Red */
      .gray {
        background-color: #e7e7e7;
      } /* Gray */
      .black {
        background-color: #555555;
        color: white;
      } /* Black */

      .small {
        font-size: 0.75rem;
        padding: 0.5rem 0.75rem;
        margin-bottom: 0.75rem;
      }
      .large {
        font-size: 1.25rem;
        padding: 1rem 1.25rem;
        margin-bottom: 1.25rem;
      }

      .round {
        border-radius: 0.75rem;
      }
    `;
  }

  @property() class = '';
  @property() disabled = false;

  render() {
    return html`
      <button class=${this.class} ?disabled=${this.disabled}>
        <slot></slot>
      </button>
    `;
  }
}
