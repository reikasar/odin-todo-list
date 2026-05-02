// here goes project logic

export const greeting = "Hello from project.js!";

// Project object
export class Project {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.todos = [];
    this.id = crypto.randomUUID();
  }
}