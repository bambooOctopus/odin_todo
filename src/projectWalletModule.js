import { displayProjects } from "./domModule";

const projectWallet = () => { 
    const projectWalletArray = []

    const addProject = (project) => {
        projectWalletArray.push(project);
        displayProjects(projectWalletArray)
    };

    const removeProject = (projectIndex) => {

        if (projectIndex == 0) {
            if (projectWalletArray.length == 1 ) {
                projectWalletArray.pop();
            }
            else {
                projectWalletArray.shift();
                displayProjects(projectWalletArray);

            }

            
        }
        else {
        
        console.log(projectIndex);
        projectWalletArray.splice(projectIndex, 1);
        displayProjects(projectWalletArray);
    };
        


    };

    
    

    return { projectWalletArray, addProject, removeProject }
};

export { projectWallet }