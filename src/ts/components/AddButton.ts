import {
  LitElement,
  html,
  css,
  type CSSResultGroup,
  type HTMLTemplateResult,
} from "lit";
import { customElement } from "lit/decorators.js";

@customElement("add-button")
class AddButton extends LitElement {
  handleClick(): void {
    this.dispatchEvent(new CustomEvent("add"));
  }

  render(): HTMLTemplateResult {
    return html`
      <div class="box-button" @click=${this.handleClick}>
        <div class="plus-sign"></div>
      </div>
    `;
  }

  static styles: CSSResultGroup = css`
    :host {
      width: 0;
      position: relative;
    }
    .box-button {
      box-sizing: border-box;
      /* */
      position: absolute;
      height: 4rem;
      inset: 0 -2rem;
      margin: auto;
      display: grid;
      place-items: center;
      /* */
      // border: 4px solid var(--primary);
      border-radius: 4px;
      background-color: var(--translucid-txt);
      cursor: pointer;

      /* Transitions */
      opacity: 0;
      // opacity: 0.3;
      backdrop-filter: blur(10px);
      transition: opacity 200ms;
    }
    .box-button:hover {
      opacity: 1;
    }

    /* Plus sign */
    .plus-sign {
      position: relative;
      height: 2rem;
      width: 2rem;
    }
    .plus-sign::before,
    .plus-sign::after {
      content: "";
      background-color: var(--primary);
      position: absolute;
      width: 6px;
      height: 6px;
      inset: 0;
      margin: auto;
    }
    .plus-sign::before {
      width: 100%;
    }
    .plus-sign::after {
      height: 100%;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "add-button": AddButton;
  }
}
