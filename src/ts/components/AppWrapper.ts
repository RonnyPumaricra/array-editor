import {
  LitElement,
  html,
  css,
  type CSSResultGroup,
  type HTMLTemplateResult,
} from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("app-wrapper")
export class AppWrapper extends LitElement {
  @property({ state: true })
  currentValue = "";

  handleReactiveUpdate(ev: CustomEvent): void {
    this.currentValue = (ev.detail as string[]).join(", ");
  }

  render(): HTMLTemplateResult {
    return html`
      <h1>
        Edit an array, insert & remove elements and join the final result!
      </h1>
      <array-editor @arrayUpdate=${this.handleReactiveUpdate}></array-editor>
      <div class="result" .textContent=${this.currentValue}></div>
    `;
    // <array-editor @arrayChange=${this.handleChange}></array-editor>
  }

  static styles: CSSResultGroup = css`
    :host {
      padding-inline: 32px;
    }
    h1 {
      text-align: center;
    }
    .result {
      text-align: center;
      font-size: 2rem;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "app-wrapper": AppWrapper;
  }
}
