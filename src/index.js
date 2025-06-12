import {makeProject} from "./project.js";

const projectsList = document.getElementById("projectsList");
const heading = document.getElementById("heading");
const newTodoDiv = document.getElementById("newTodoDiv");
const todosList = document.getElementById("todosList");

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
    newProject(projectNameField.value);
});

/* Project function */
function newProject(projectName) {
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

        // Todo title
        const todoNameLabel = document.createElement('label');
        todoNameLabel.textContent = 'Enter todo:';
        const todoName = document.createElement('input');
        todoName.type = 'text';
        todoName.id = 'todoName';

        // Description
        const descriptionLabel = document.createElement('label');
        descriptionLabel.textContent = 'Description:';
        const description = document.createElement('textarea');
        description.id = 'description';

        // Due date
        const dueDateLabel = document.createElement('label');
        dueDateLabel.textContent = 'Due date:';
        const dueDate = document.createElement('input');
        dueDate.type = 'date';
        dueDate.id = 'dueDate';

        // Priority input
        const priorityLabel = document.createElement('label');
        priorityLabel.textContent = 'Priority:';
        const priority = document.createElement('select');
        priority.id = 'priority';
        priority.innerHTML = `
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
        `;

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
        printTodos();
    }

    function printTodos() {
        /* Clear page */
        todosList.textContent = "";
        /* Print the array of todos in the project */
        project.todos.forEach((todo) => {
            const todoEntry = document.createElement("li");
            todoEntry.textContent = `${todo.title}`;
            // Make checkbox for each todo
            const checkBox = document.createElement("input");
            checkBox.type = "checkbox";
            checkBox.checked = todo.checked;
            checkBox.addEventListener("change", function() {
                todo.checked = this.checked;
            });
            // Append elements
            todoEntry.appendChild(checkBox);
            todosList.appendChild(todoEntry);
            console.log(todo);
        })
    }
};

newProject("Default project");

/*
- Delete todo
- Click to expand and see description
*/