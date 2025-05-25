import {makeProject} from "./project.js";

const proj = makeProject("New project");

proj.newTodo("brush", "clean the place", "12th", "high")
proj.newTodo("clean", "clean the place", "1st", "med")
proj.newTodo("sweep", "clean the place", "50th", "low")
proj.newTodo("wash", "clean the place", "2nd", "high")


console.log(proj.projectName);

console.log(proj.todos);