import {
  LitElement,
  html,
  css,
  type CSSResultGroup,
  type HTMLTemplateResult,
} from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("array-input")
class ArrayInput extends LitElement {
  @property({ attribute: true })
  value;

  handleInput(ev: InputEvent): void {
    const text: string = ev.target.textContent;
    console.log(text);
    this.dispatchEvent(
      new CustomEvent("inputChange", {
        detail: text,
      })
    );
  }

  render(): HTMLTemplateResult {
    return html`
      <div
        contenteditable="true"
        tabindex="1"
        @blur=${this.handleInput}
        .textContent=${this.value}
      ></div>
    `;
  }

  static styles?: CSSResultGroup | undefined = css`
    * {
      box-sizing: border-box;
    }
    :host {
      min-width: 150px;
      width: fit-content;
      max-width: 500px;
      height: 150px;
      margin-bottom: 1rem;
      border-radius: 24px;
      border: 4px solid currentColor;
      padding: 16px;
      display: grid;
      place-items: center;
    }
    div {
      box-sizing: border-box;
      display: block;
      width: 100%;
      height: 1.5em;
      font-size: 3rem;
      text-align: center;

      /* Text Overflow */
      overflow: hidden;
      white-space: nowrap;
      z-index: 1;
    }
    div:focus {
      overflow: visible;
      background-color: var(--bg-active);
    }
    div:not(:focus) {
      text-overflow: ellipsis;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "array-input": ArrayInput;
  }
}
