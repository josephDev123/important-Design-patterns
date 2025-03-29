import { TaskManager } from "./TaskManager";

export interface Command {
  execute(): Promise<void>;
  undo(): Promise<void>;
  getTask(): Promise<void>;
}

export class CreateNoteTask implements Command {
  private taskManager: TaskManager;
  private task: Record<string, string>;

  constructor(taskManager: TaskManager, task: Record<string, string>) {
    this.taskManager = new TaskManager();
    this.task = task;
  }

  async execute(): Promise<void> {
    // Implement logic to write the file
    this.taskManager.addTask(this.task);
    console.log(`added ${JSON.stringify(this.task)}`);
    return;
  }

  async undo(): Promise<void> {
    // Implement logic to undo file writing
    this.taskManager.removeTask(this.task.id);
    console.log(`removed id:${this.task.id} from task manager`);
    return;
  }

  async getTask() {
    console.log(this.taskManager.tasks);
    return;
  }
}
