import { project } from "./projectModule";


const projectFormListener = (wallet) => {
    const projectForm = document.getElementById("project-form");
    

    projectForm.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log(event.target[0].value);
        // 1. use above console log value as title for project;
        const newProj = project(event.target[0].value);
        // 2. add the project to the wallet;
        wallet.addProject(newProj);
        // 3. should update the projDiv dom with new project obj;

        console.log(wallet);
        event.target[0].value = "";
        event.target[0].focus();
        
    });
};

const projGridListener = (wallet) => {
    const projGrid = document.getElementById("proj-grid-div");
    projGrid.addEventListener("click", (event) => {
       

        if (event.target.nodeName == "BUTTON") {
            console.log("this is a button: " + event.target.id);   
        }
    });
};


//fired off in todoModule
const listen = (wallet) => {
    // fire off all the event listeners    
    projectFormListener(wallet);
    projGridListener(wallet);
    
};

export { listen }