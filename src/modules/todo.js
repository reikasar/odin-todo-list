// here goes todo logic

export const greeting2 = "Hello from todo.js!";

// Todo class 
export class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.id = crypto.randomUUID();
    }
}


