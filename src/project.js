import {Todo} from "./todo.js";


function makeProject(projectName) {
    return {
        projectName,
        todos: [],
        newTodo: function(title, description, dueDate, priority) {
            const newTodo = new Todo(title, description, dueDate, priority);
            this.todos.push(newTodo);
        }
    }
}

export {makeProject}
