"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskInvoker = void 0;
class TaskInvoker {
    constructor(taskCommand) {
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
exports.TaskInvoker = TaskInvoker;
