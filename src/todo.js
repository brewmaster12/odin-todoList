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


export {Todo}