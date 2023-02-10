import { displayProjects } from "./domModule";

const projectWallet = () => { 
    const projectWalletArray = []

    const addProject = (project) => {
        projectWalletArray.push(project);
        displayProjects(projectWalletArray)
    }

    
    

    return { projectWalletArray, addProject }
};

export { projectWallet }