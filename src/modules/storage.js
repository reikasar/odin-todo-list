// here goes storage logic

export const greeting4 = "Hello from storage.js!";

// empty array for string projects list
let projects = [];

// add project to projects array using push and call saveProject func
export function addProject(project) {
   projects.push(project);
   saveProject();
};

// remove project from projects array using filter and call saveProject func
export function removeProject(id) {
   let updatedProjects = projects.filter(project => project.id !== id);
   projects = updatedProjects;
   saveProject()
}

// gets project form project array using find
export function getProject(id) {
   return projects.find(project => project.id === id);  
}

// return all projects
export function getProjects() {
   return projects;
}

// save project to localStorage
function saveProject() {
   localStorage.setItem("Data", JSON.stringify(projects));
}

// load project from localStorage
export function loadProject() {
   let parseableProject = localStorage.getItem("Data");
   if (parseableProject !== null) {
      projects = JSON.parse(parseableProject);
   }
}
