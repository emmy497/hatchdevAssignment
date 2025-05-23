"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts
const TaskManager_1 = require("./TaskManager");
const manager = new TaskManager_1.TaskManager();
manager.createTask('Learn TypeScript');
manager.createTask('Build a project');
console.log(manager.listTasks());
// console.log(manager.completeTask(1));
// console.log(manager.updateTask(2, 'Build a task manager in TypeScript'));
// console.log(manager.listTasks());
