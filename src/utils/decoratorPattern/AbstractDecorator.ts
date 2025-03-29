import { IEditor } from "./EditorConcrete";

export abstract class abstractDecorator implements IEditor {
  protected Editor: IEditor;
  constructor(ConcreteImp: IEditor) {
    this.Editor = ConcreteImp;
  }

  async setNote() {
    this.Editor.setNote();
  }

  async getNote() {
    return this.Editor.getNote();
  }
}
