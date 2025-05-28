import {makeProject} from "./project.js";

const projectsList = document.getElementById("projectsList");

/* New project button, brings up form to enter project name */
const newProjectBtn = document.getElementById("newProjectBtn");
const projectDialog = document.getElementById("projectDialog");
newProjectBtn.addEventListener("click", () => {
    projectDialog.showModal();
});

const todoDialog = document.getElementById("todoDialog");

function submitProject(projectName) {
    /* Create the project */
    const project = makeProject(projectName);

    const projectEntry = document.createElement("li");
    projectEntry.textContent = `${project.projectName}`;

    /* New todo button */
    const newTodoBtn = document.createElement("button");
    newTodoBtn.textContent = "New todo";
    newTodoBtn.addEventListener("click", () => {
        /* Brings up form to enter todo info */
        todoDialog.showModal();
    });

    /* Append elements to DOM */
    projectEntry.appendChild(newTodoBtn);
    projectsList.appendChild(projectEntry);


    

    /* Submit todo button */
    const submitTodoBtn = document.getElementById("submitTodoBtn");
    submitTodoBtn.addEventListener("click", (event) => {
        event.preventDefault();
        todoDialog.close();
        const todo = project.makeTodo(todoName.value, description.value, dueDate.value, priority.value);
        console.log(todo);
    })

};

/* Submit todo info */
const todoName = document.getElementById("todoName");
const description = document.getElementById("description");
const dueDate = document.getElementById("dueDate");
const priority = document.getElementById("priority");


/* Submit the project name */
const projectNameField = document.getElementById("projectNameField");
const submitProjectBtn = document.getElementById("submitProjectBtn");
submitProjectBtn.addEventListener("click", (event) => {
    event.preventDefault();
    projectDialog.close();
    submitProject(projectNameField.value)
});

submitProject("Default project");


/* Add event listener, on click =>  */
/* const todo = project.makeTodo(title, description, dueDate, priority); */


/*
    - setting todos as complete (check)
    - changing todo priority
    - edit todo
    - delete todo
*/