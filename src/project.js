import {Todo} from "./todo.js";

function makeProject(projectName) {
    return {
        projectName,
        todos: [],
        makeTodo: function(title, description, dueDate, priority) {
            const newTodo = new Todo(title, description, dueDate, priority);
            this.todos.push(newTodo);
            return newTodo;
        }
    }
}

export {makeProject}