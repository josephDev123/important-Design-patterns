export interface IEditor {
  setNote: () => void;
  getNote: () => Promise<string>;
}

export class EditorConcrete implements IEditor {
  protected content: string = "";

  constructor(note: string) {
    this.content = note;
  }

  async setNote() {
    return this.content;
  }

  async getNote() {
    const note = this.content;
    return note;
  }

  async process() {
    //send to the database
    console.log("Processing the note", this.content);
  }
}
