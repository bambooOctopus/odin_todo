import './style.css';
import { projectForm } from './projectFormModule.js';
import { formEventListener } from './formEventListenerModule.js';
import { projectFactory } from './projectFactoryModule.js';
import { projectWallet } from './projectWalletModule.js';
import { displayProjects, homeScreen } from './domModule.js';
import { projDivListener } from './projDivListener';

const todoLoop = () => {
    const todoWallet = projectWallet();
    

    const home = () => {
        homeScreen();                
        displayProjects(todoWallet);        
        formEventListener(todoWallet);             
        displayProjects(todoWallet);
        deleteProject();
        

    }

    const deleteProject = () => {
        console.log("delete project");
        projDivListener(todoWallet);
        
    }



    return { home }
}

export { todoLoop }