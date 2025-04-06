"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskManager = void 0;
class TaskManager {
    constructor() {
        this.tasks = [];
    }
    addTask(task) {
        this.tasks.push(task);
    }
    getTask(taskId) {
        return this.tasks.find((item) => item.id == taskId);
    }
    removeTask(taskId) {
        const result = this.tasks.filter((item) => item.id != taskId);
        this.tasks = result;
    }
}
exports.TaskManager = TaskManager;
