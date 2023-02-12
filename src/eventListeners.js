import { project } from "./projectModule";
import { projGridRefresh, projScreen } from "./domUpdateModule";


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
        event.stopPropagation();
        
    });
};

// 1. rename to mean only delete button listener
// 2. make proj-card listener
const projGridListener = (wallet) => {
    const projGrid = document.getElementById("proj-grid-div");
    projGrid.addEventListener("click", (event) => {
       

        if (event.target.nodeName == "BUTTON") {
            console.log("this is a button: " + event.target.id); 
            // 1. remove this element from the wallet
            const projId = event.target.id.split("-")[2];            
            wallet.removeProject(projId)            
        }
        else {
            return;
        };
    });
};

// this whole shit is you click on proj card you go to proj view page;
// good luck with tath shit you peasant
const projCardListener = (wallet) => {
    const projGrid = document.getElementById("proj-grid-div");

    projGrid.addEventListener("click", (event) => { 
        console.log("this is the event-------------------------------------")       
        console.log(event)
        console.log("this is the event-------------------------------------")       
        const projId = event.target.id.split("-")[2];
        const project = wallet.getProject(projId);

        if (project === undefined) {
            event.stopPropagation();
            return;
        }
        else {
            projScreen(project);            
        }
        
        
        
        

        // this dumb shit should be you click on the project card you go to the project page
        //  come on now munky tits
    });
};


//fired off in todoModule
const listen = (wallet) => {
    // fire off all the event listeners    
    projectFormListener(wallet);
    projGridListener(wallet);
    projCardListener(wallet);
};

export { listen }