import { abstractDecorator } from "./AbstractDecorator";

export class BoldEditor extends abstractDecorator {
  // async setNote() {
  //   `<b>${this.setNote()} </b>`;
  // }

  async getNote(): Promise<string> {
    const text = await this.Editor.getNote();
    return `<b>${text}</b>`;
  }

  async process() {
    const text = await this.getNote();
    return text;
  }
}
