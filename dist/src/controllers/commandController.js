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
exports.CommandController = void 0;
const createNoteTask_1 = require("../utils/commandPattern/createNoteTask");
const taskInvoker_1 = require("../utils/commandPattern/taskInvoker");
const TaskManager_1 = require("../utils/commandPattern/TaskManager");
class CommandController {
    // task
    do() {
        return __awaiter(this, void 0, void 0, function* () {
            const taskManagerImpl = new TaskManager_1.TaskManager();
            const task = { id: "1", note: "created a note" };
            const taskCommand = new createNoteTask_1.CreateNoteTask(taskManagerImpl, task);
            const TaskInvokerImpl = new taskInvoker_1.TaskInvoker(taskCommand);
            TaskInvokerImpl.executeTask();
            TaskInvokerImpl.undoTask();
            TaskInvokerImpl.getTasks();
        });
    }
}
exports.CommandController = CommandController;
