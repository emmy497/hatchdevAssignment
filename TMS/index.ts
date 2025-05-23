// index.ts
import { TaskManager } from './TaskManager';

const manager = new TaskManager();

manager.createTask('Learn TypeScript');
manager.createTask('Build a project');
console.log(manager.listTasks());

// console.log(manager.completeTask(1));
// console.log(manager.updateTask(2, 'Build a task manager in TypeScript'));
// console.log(manager.listTasks());
