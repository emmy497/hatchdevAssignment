export class Task {
  constructor(
    public id: number,
    public title: string,
    public completed: boolean = false
  ) {}

  markComplete() {
    this.completed = true;
  }

  updateTitle(newTitle: string) {
    this.title = newTitle;
  }
}
