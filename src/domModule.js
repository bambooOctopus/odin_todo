import { projectForm } from "./projectFormModule.js";
import { makeProjDomElement } from "./makeProjDomElementModule.js";
import { createProjDiv } from "./projDivModule.js";

const displayWalletProjects = (wallet) => {
    console.log("hello from display wallet projects");
    wallet.forEach(project => console.log(project));
};




const homeScreen = () => {
    // 1. display the project form
    projectForm();  
    // 2. add projDiv to the dom     
    createProjDiv();
};

const clearProjDiv = () => {
    
    const projDiv = document.getElementById("proj-div");
    projDiv.innerHTML = "";
};

const displayProjects = (wallet) => {
    //this should feed makeProjDomElements all the projects in the wallet.
    
    if (wallet.length > 0) {
        clearProjDiv();
       
        wallet.forEach(project => makeProjDomElement(project));
    }
};

const clearInput = () => {
    const textInput = document.querySelector("input");
    textInput.value = "";  
    textInput.focus();  
}

export { homeScreen, displayProjects, clearInput }