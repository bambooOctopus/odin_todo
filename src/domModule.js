import { projectForm } from "./projectFormModule.js";

const displayWalletProjects = (wallet) => {
    console.log("hello from display wallet projects");
    wallet.forEach(project => console.log(project));
};




const homeScreen = () => {
    // 1. display the project form
    projectForm()       
};

const displayProjects = (wallet) => {
    //this should make the projects into a dom element and update the dom
    if (wallet.length > 0) {
        wallet.forEach(project => console.log(project));
    }
};

export { homeScreen, displayProjects }