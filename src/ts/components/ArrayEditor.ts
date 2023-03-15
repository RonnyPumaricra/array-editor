import {
  LitElement,
  html,
  css,
  type CSSResultGroup,
  type HTMLTemplateResult,
} from "lit";

import { customElement, property } from "lit/decorators.js";

@customElement("array-editor")
class ArrayEditor extends LitElement {
  @property({ state: true, type: Array })
  arrayState: string[] = ["A", "B", "C"];

  @property({ attribute: true, reflect: true })
  joinedArray = "";

  setValueOf = (index: number) => (ev: CustomEvent) => {
    const copyState = [...this.arrayState];
    if (!(index in copyState)) {
      throw new Error(
        `Didn't find index:${index} in Array:[${copyState.join()}]`
      );
    }
    copyState[index] = ev.detail;

    this.arrayState = copyState;
    this.joinedArray = copyState.join();
  };

  getRenderableArray(): Array<number | string> {
    const renderableArray: Array<number | string> = [];
    for (let i = -1; i < this.arrayState.length * 2; i++) {
      if (i % 2 !== 0) {
        // console.log("Extra elem");
        renderableArray.push(0);
      } else {
        // console.log(this.arrayState[i / 2]);
        renderableArray.push(this.arrayState[i / 2]);
      }
    }
    return renderableArray;
  }

  addFieldAt = (pos: number) => (ev: CustomEvent) => {
    console.log("Adding field at ", pos);
    const nextArray = [...this.arrayState];
    nextArray.splice(pos, 0, "");
    this.arrayState = nextArray;
    this.joinedArray = nextArray.join();
  };

  render(): HTMLTemplateResult {
    console.log("Redrawing...");
    const renderableArray = this.getRenderableArray();
    let inputCounter = 0;
    let addBtnCounter = 0;

    return html`
      ${renderableArray.map((elem, index) =>
        typeof elem !== "number"
          ? html`
              <array-input
                @inputChange=${this.setValueOf(inputCounter++)}
                value=${elem}
              ></array-input>
            `
          : html`<add-button
              @add=${this.addFieldAt(addBtnCounter++)}
            ></add-button>`
      )}
    `;
  }

  static styles: CSSResultGroup = css`
    :host {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "array-editor": ArrayEditor;
  }
}
