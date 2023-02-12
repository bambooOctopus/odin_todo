import { wallet } from "./walletModule.js";
import { project } from "./projectModule.js";

const todo = () => {
    const projectWallet = wallet();
    
    

    const projectsScreen = () => {
        //this will be the landing/#projects screen;
        //project form and all current projects
        console.log("#projects");

        //so this would run whatever needed to set up the projects screen
        //so render the form, render all the current projects
    };

    const projectScreen = () => {
        //project page displaying all it's items
        console.log("#project");
    };

    return {projectsScreen, projectScreen, projectWallet }
};

export { todo }