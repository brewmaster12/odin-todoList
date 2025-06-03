import {makeProject} from "./project.js";

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
});

/* Todo form info */
const todoName = document.getElementById("todoName");
const description = document.getElementById("description");
const dueDate = document.getElementById("dueDate");
const priority = document.getElementById("priority");

const todoDialog = document.getElementById("todoDialog");

const heading = document.getElementById("heading");

const newTodoDiv = document.getElementById("newTodoDiv");

const todosList = document.getElementById("todosList")


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
        /* Brings up form to enter todo info */
        todoDialog.showModal();
    });

    /* Append elements to DOM */
    projectEntry.appendChild(projectBtn);
    projectsList.appendChild(projectEntry);

    newTodoDiv.textContent = "";
    newTodoDiv.appendChild(newTodoBtn);


    /* Submit todo button */
    const submitTodoBtn = document.getElementById("submitTodoBtn");
    submitTodoBtn.addEventListener("click", (event) => {
        event.preventDefault();
        todoDialog.close();
        submitTodo(todoName.value, description.value, dueDate.value, priority.value);
    })

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
    - setting todos as complete (check)
    - changing todo priority
    - edit todo
    - delete todo
*/