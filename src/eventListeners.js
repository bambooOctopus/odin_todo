import { project } from "./projectModule";
import { projScreen, homeScreen } from "./domUpdateModule";

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

const itemFormListener = (proj) => {
    const itemForm = document.getElementById("item-form");

    itemForm.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log(event.target[0].value);

        event.target[0].value = "";
        event.target[0].focus();
        
    });
};


/// OK
// the following two event listeners need to be combined in to one
// there shouldn't be two listeners on the same div
// just one that listens for delete buttons and one that listens
// for if it's a card or not
// then it does what it needs to do 


// 1. rename to mean only delete button listener
// 2. make proj-card listener
const projGridListener = (wallet) => {
    const projGrid = document.getElementById("proj-grid-div");
    projGrid.addEventListener("click", (event) => {
        const splitId = event.target.id.split("-")
        const projCardId = splitId[0] + splitId[1];
        console.log(projCardId)
       

        if (event.target.nodeName == "BUTTON") {
            console.log("this is a button: " + event.target.id); 
            
            // 1. remove this element from the wallet
            const projId = event.target.id.split("-")[2];            
            wallet.removeProject(projId)            
        }
        else if (projCardId === "projcard") {            
            const projId = event.target.id.split("-")[2];
            const project = wallet.getProject(projId);
            projScreen(project);
            
        };
    });
};



const sideBarListener = (wallet) => {
    const sideBar = document.getElementById("side-bar-div");
    sideBar.addEventListener("click", (event) => {
        if (event.target.nodeName == "BUTTON") {
            homeScreen(wallet);
            listen(wallet);
        }
    });
};

//fired off in todoModule
const listen = (wallet) => {
    // fire off all the event listeners    
    projectFormListener(wallet);
    projGridListener(wallet);
    sideBarListener(wallet);

    // 1. add sideBarListener(wallet);
    // 2. in sideBarListener if the target is a button, and that buttons id is home;
    // 3. run homeScreen();
    // 4. run projGridRefresh();  
    
    
};

export { listen, itemFormListener }