import {makeProject} from "./project.js";


function newProject(userInput) {

    /* Make a new project */
    const project = makeProject(userInput);


    /* Print project to screen */
    /* These will be appended to a div */
    console.log(project.projectName);

    console.log(project.todos);



    /* Add event listener, on click =>  */
    const todo = project.makeTodo(title, description, dueDate, priority);


    /*  */
    console.log(todo.checked);

    todo.toggleCheck();

    console.log(todo.checked);

    console.log(project.todos)

}

/* Add event listener, on click => */
/* newProject(userInput);
 */


/* New project button, brings up form to enter project name */
const newProjectBtn = document.getElementById("newProjectBtn");
const dialog = document.querySelector("dialog");
newProjectBtn.addEventListener("click", () => {
    dialog.showModal();
});


/* Submit the project name */
const projectNameField = document.querySelector("#projectNameField");
const submitProjectBtn = document.getElementById("submitProjectBtn");
submitProjectBtn.addEventListener("click", (event) => {
    event.preventDefault();
    dialog.close();
    newProject(projectNameField.value);
});


/*
    - setting todos as complete (check)
    - changing todo priority
    - edit todo
    - delete todo
*/