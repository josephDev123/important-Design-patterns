import { Command } from "./createNoteTask";
import { TaskManager } from "./TaskManager";

export class TaskInvoker {
  history: Command[];
  taskCommand: Command;

  constructor(taskCommand: Command) {
    this.history = [];
    this.taskCommand = taskCommand;
  }

  executeTask() {
    this.history.push(this.taskCommand);
    this.taskCommand.execute();
  }

  undoTask() {
    const lastCommand = this.history.pop();
    // console.log(lastCommand);
    if (lastCommand) {
      lastCommand.undo();
    }

    return "no last command";
  }

  getTasks() {
    return this.taskCommand.getTask();
  }
}
