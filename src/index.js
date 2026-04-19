// testing modules
import { greeting } from "./modules/project.js";
import { greeting2 } from "./modules/todo.js";
import { greeting3 } from "./modules/ui.js";
import { greeting4 } from "./modules/storage.js";

// testing images
import "./style.css";
import odinImage from "./odin.jpg";

console.log(greeting);
console.log(greeting2);
console.log(greeting3);
console.log(greeting4);

const image = document.createElement("img");
image.src = odinImage;

document.body.appendChild(image);
