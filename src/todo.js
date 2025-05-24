class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checked = false;
    }

    toggleCheck() {
        this.checked = !this.checked;
    }    
}


const brush = new Todo("brush", "clean the place", "12th", "high");

console.log(brush);

brush.toggleCheck();

console.log(brush);
