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
  JoinedValue;

  handleChange(ev: CustomEvent): void {
    console.log("Changed!");
  }

  render(): HTMLTemplateResult {
    return html`
      <h1>Edit an array, insert elements and join the final result!</h1>
      <array-editor @arrayChange=${this.handleChange}></array-editor>
      <p>Click below to join the array</p>
    `;
  }

  static styles: CSSResultGroup = css`
    :host {
      padding-inline: 32px;
    }
    h1 {
      text-align: center;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "app-wrapper": AppWrapper;
  }
}
