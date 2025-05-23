// TaskManager.ts
import { Task } from './Task';

export class TaskManager {
  private tasks: Task[] = [];
  private nextId = 1;

  createTask(title: string): Task {
    const task = new Task(this.nextId++, title);
    this.tasks.push(task);
    return task;
  }

  listTasks(): Task[] {
    return this.tasks;
  }

  completeTask(id: number): string {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      task.markComplete();
      return `Task "${task.title}" marked as completed.`;
    }
    return `Task not found.`;
  }

  updateTask(id: number, newTitle: string): string {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      task.updateTitle(newTitle);
      return `Task updated to "${task.title}".`;
    }
    return `Task not found.`;
  }
}
