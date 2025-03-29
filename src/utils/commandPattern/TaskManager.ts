export class TaskManager {
  tasks: Record<string, string>[];
  constructor() {
    this.tasks = [];
  }

  addTask(task: Record<string, string>) {
    this.tasks.push(task);
  }

  getTask(taskId: string) {
    return this.tasks.find((item) => item.id == taskId);
  }

  removeTask(taskId: string) {
    const result = this.tasks.filter((item) => item.id != taskId);
    this.tasks = result;
  }
}
