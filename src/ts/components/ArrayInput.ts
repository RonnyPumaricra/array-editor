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
  value = "";

  handleInput({ target }: InputEvent): void {
    const newText = (target as HTMLDivElement).textContent;
    if (newText === null) return;
    const text: string = newText;
    console.log(text);
    this.dispatchEvent(
      new CustomEvent("inputChange", {
        detail: text,
      })
    );
  }

  handleRemove(): void {
    this.dispatchEvent(new CustomEvent("removeField", {}));
  }

  render(): HTMLTemplateResult {
    return html`
      <div
        class="input"
        contenteditable="true"
        tabindex="1"
        @blur=${this.handleInput}
        .textContent=${this.value}
      ></div>
      <div class="remove-btn" @click=${this.handleRemove}>
        <div class="less-sign"></div>
      </div>
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
      position: relative;
    }
    .input {
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
    .input:focus {
      overflow: visible;
      background-color: var(--bg-active);
    }
    .input:not(:focus) {
      text-overflow: ellipsis;
    }

    /* Remove Button */
    .remove-btn {
      position: absolute;
      inset: 1rem;
      top: auto;
      bottom: -1rem;
      height: 5rem;
      width: 5rem;
      margin: auto;
      background: var(--translucid-txt);
      border-radius: 4px;
      display: grid;
      place-items: center;
      cursor: pointer;
      /* Transition */
      opacity: 0;
      transition: opacity 200ms;
    }
    .less-sign {
      height: 0.5rem;
      width: 2.25rem;
      background: var(--primary);
    }
    .remove-btn:hover {
      opacity: 1;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "array-input": ArrayInput;
  }
}
