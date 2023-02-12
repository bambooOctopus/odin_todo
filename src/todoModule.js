import { wallet } from "./walletModule";

const todo = () => {
    const projectWallet = wallet();

    const projects = () => {
        //this will be the landing/#projects screen;
        //project form and all current projects
        console.log("#projects");

        //so this would run whatever needed to set up the projects screen
        //so render the form, render all the current projects
    };

    const project = () => {
        //project page displaying all it's items
        console.log("#project");
    };

    return {projects, project, projectWallet }
};

export { todo }