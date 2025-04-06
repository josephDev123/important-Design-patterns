"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNoteTask = void 0;
const TaskManager_1 = require("./TaskManager");
class CreateNoteTask {
    constructor(taskManager, task) {
        this.taskManager = new TaskManager_1.TaskManager();
        this.task = task;
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            // Implement logic to write the file
            this.taskManager.addTask(this.task);
            console.log(`added ${JSON.stringify(this.task)}`);
            return;
        });
    }
    undo() {
        return __awaiter(this, void 0, void 0, function* () {
            // Implement logic to undo file writing
            this.taskManager.removeTask(this.task.id);
            console.log(`removed id:${this.task.id} from task manager`);
            return;
        });
    }
    getTask() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(this.taskManager.tasks);
            return;
        });
    }
}
exports.CreateNoteTask = CreateNoteTask;
