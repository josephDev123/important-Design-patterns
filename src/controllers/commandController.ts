import { CreateNoteTask } from "../features/commandPattern/createNoteTask";
import { TaskInvoker } from "../features/commandPattern/taskInvoker";
import { TaskManager } from "../features/commandPattern/TaskManager";

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
