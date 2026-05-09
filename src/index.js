// testing modules
import { greeting } from "./modules/project.js";
import { greeting2 } from "./modules/todo.js";
import { greeting3 } from "./modules/ui.js";
import { greeting4 } from "./modules/storage.js";

// testing images
import "./style.css";
import odinImage from "./odin.jpg";

// imports from todo.js
import { Todo } from "./modules/todo.js";

// imports from project.js
import { Project } from "./modules/project.js";

// imports from storage.js
import { loadProject, getProjects, addProject } from "./modules/storage.js";

loadProject();

if(getProjects().length === 0) {
    let defaultProject = new Project("Inbox", "");
    addProject(defaultProject);
};


console.log(greeting);
console.log(greeting2);
console.log(greeting3);
console.log(greeting4);

const image = document.createElement("img");
image.src = odinImage;

document.body.appendChild(image);
