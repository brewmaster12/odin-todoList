import {makeProject} from "./project.js";

const content = document.getElementById("content");

/* New project button, brings up form to enter project name */
const newProjectBtn = document.getElementById("newProjectBtn");
const dialog = document.querySelector("dialog");
newProjectBtn.addEventListener("click", () => {
    dialog.showModal();
});

/* Submit the project name */
const projectNameField = document.getElementById("projectNameField");
const submitProjectBtn = document.getElementById("submitProjectBtn");
submitProjectBtn.addEventListener("click", (event) => {
    event.preventDefault();
    dialog.close();
    /* Creates the project */
    const project = makeProject(projectNameField.value);

    /* Append the project to DOM */
    const projectLi = document.createElement("li");
    projectLi.textContent = `${project.projectName}`;
    content.appendChild(projectLi);


});


/* Add event listener, on click =>  */
/* const todo = project.makeTodo(title, description, dueDate, priority); */


/*
    - setting todos as complete (check)
    - changing todo priority
    - edit todo
    - delete todo
*/