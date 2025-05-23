"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskManager = void 0;
// TaskManager.ts
const Task_1 = require("./Task");
class TaskManager {
    constructor() {
        this.tasks = [];
        this.nextId = 1;
    }
    createTask(title) {
        const task = new Task_1.Task(this.nextId++, title);
        this.tasks.push(task);
        return task;
    }
    listTasks() {
        return this.tasks;
    }
    completeTask(id) {
        const task = this.tasks.find((t) => t.id === id);
        if (task) {
            task.markComplete();
            return `Task "${task.title}" marked as completed.`;
        }
        return `Task not found.`;
    }
    updateTask(id, newTitle) {
        const task = this.tasks.find((t) => t.id === id);
        if (task) {
            task.updateTitle(newTitle);
            return `Task updated to "${task.title}".`;
        }
        return `Task not found.`;
    }
}
exports.TaskManager = TaskManager;
