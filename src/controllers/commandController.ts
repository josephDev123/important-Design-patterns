import { CreateNoteTask } from "../utils/commandPattern/createNoteTask";
import { TaskInvoker } from "../utils/commandPattern/taskInvoker";
import { TaskManager } from "../utils/commandPattern/TaskManager";

export class CommandController {
  // task
  async do() {
    const taskManagerImpl = new TaskManager();
    const task = { id: "1", note: "created a note" };
    const taskCommand = new CreateNoteTask(taskManagerImpl, task);
    const TaskInvokerImpl = new TaskInvoker(taskCommand);
    TaskInvokerImpl.executeTask();
    TaskInvokerImpl.undoTask();
    TaskInvokerImpl.getTasks();
  }
}
