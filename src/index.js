import {makeProject} from "./project.js";
/* import { bringUpTodoForm } from "./todoForm.js";
 */
const projectsList = document.getElementById("projectsList");

/* New project button, brings up form to enter project name */
const newProjectBtn = document.getElementById("newProjectBtn");
const projectDialog = document.getElementById("projectDialog");
newProjectBtn.addEventListener("click", () => {
    projectDialog.showModal();
});

/* Submit the project name */
const projectNameField = document.getElementById("projectNameField");
const submitProjectBtn = document.getElementById("submitProjectBtn");
submitProjectBtn.addEventListener("click", (event) => {
    event.preventDefault();
    projectDialog.close();
    todosList.textContent = "";
    submitProject(projectNameField.value);
    /* const project = makeProject(projectNameField.value) */
});

/* Todo form info */
/* const todoName = document.getElementById("todoName");
const description = document.getElementById("description");
const dueDate = document.getElementById("dueDate");
const priority = document.getElementById("priority"); */

const heading = document.getElementById("heading");
const newTodoDiv = document.getElementById("newTodoDiv");
const todosList = document.getElementById("todosList");


/* Project function */
function submitProject(projectName) {
    /* Create the project */
    const project = makeProject(projectName);

    heading.textContent = `${project.projectName}`;

    const projectEntry = document.createElement("li");
    const projectBtn = document.createElement("button");
    projectBtn.textContent = `${project.projectName}`;
    /* Project button function */
    projectBtn.addEventListener("click", () => {
        heading.textContent = `${project.projectName}`;
        newTodoDiv.textContent = "";
        newTodoDiv.appendChild(newTodoBtn);
        todosList.textContent = "";
        printTodos();
    });

    /* New todo button */
    const newTodoBtn = document.createElement("button");
    newTodoBtn.textContent = "New todo";
    newTodoBtn.addEventListener("click", () => {
        bringUpTodoForm();
    });

    /* Append elements to DOM */
    projectEntry.appendChild(projectBtn);
    projectsList.appendChild(projectEntry);

    newTodoDiv.textContent = "";
    newTodoDiv.appendChild(newTodoBtn);


    function bringUpTodoForm() {
        // Create dialog
        const todoDialog = document.createElement("dialog");
        todoDialog.id = "todoDialog";

        // Create form
        const todoForm = document.createElement("form")
        todoForm.id = "todoForm"

        // Create form elements
        const todoNameLabel = document.createElement('label');
        todoNameLabel.textContent = 'Enter todo:';
        const todoName = document.createElement('input');
        todoName.type = 'text';
        todoName.id = 'todoName';

        const descriptionLabel = document.createElement('label');
        descriptionLabel.textContent = 'Description:';
        const description = document.createElement('input');
        description.type = 'text';
        description.id = 'description';

        const dueDateLabel = document.createElement('label');
        dueDateLabel.textContent = 'Due date:';
        const dueDate = document.createElement('input');
        dueDate.type = 'text';
        dueDate.id = 'dueDate';

        const priorityLabel = document.createElement('label');
        priorityLabel.textContent = 'Priority:';
        const priority = document.createElement('input');
        priority.type = 'text';
        priority.id = 'priority';

        // Submit button
        const submitTodoBtn = document.createElement("button");
        submitTodoBtn.textContent = "Submit";
        submitTodoBtn.type = "submit";
        submitTodoBtn.id = "submitTodoBtn";

        // Assemble form
        todoForm.appendChild(todoNameLabel);
        todoForm.appendChild(todoName);
        todoForm.appendChild(descriptionLabel);
        todoForm.appendChild(description);
        todoForm.appendChild(dueDateLabel);
        todoForm.appendChild(dueDate);
        todoForm.appendChild(priorityLabel);
        todoForm.appendChild(priority);
        todoForm.appendChild(submitTodoBtn);

        // Append form to dialog
        todoDialog.appendChild(todoForm);

        // Add dialog to body
        document.body.appendChild(todoDialog);

        // Show the dialog
        todoDialog.showModal();

        // Form submission
        submitTodoBtn.addEventListener("click", (event) => {
            event.preventDefault();
            todoDialog.close();
            submitTodo(todoName.value, description.value, dueDate.value, priority.value);
        });
    }

    /* Create and print todo */
    function submitTodo(title, description, dueDate, priority) {
        /* Create todo */
        project.makeTodo(title, description, dueDate, priority);

        /* Clear page */
        todosList.textContent = "";

        printTodos();
    }

    function printTodos() {
        /* Print the array of todos in the project */
        project.todos.forEach((todo) => {
            const todoEntry = document.createElement("li");
            todoEntry.textContent = `${todo.title}`;
            todosList.appendChild(todoEntry);
        })
    }
};

submitProject("Default project");


/*
    NOTES 3/6 17:25
    - Make new git branch
    - Use this branch to re-write the code; do without submitProject or at least make it less unwieldy
    - See comment in the submitProjectBtn
*/


/*
    - setting todos as complete (check)
    - changing todo priority
    - edit todo
    - delete todo
*/