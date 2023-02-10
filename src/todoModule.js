import './style.css';
import { projectForm } from './projectFormModule.js';
import { formEventListener } from './formEventListenerModule.js';
import { projectFactory } from './projectFactoryModule.js';
import { projectWallet } from './projectWalletModule.js';
import { displayProjects, homeScreen } from './domModule.js';

const todoLoop = () => {
    const todoWallet = projectWallet();
    

    const home = () => {
        homeScreen();                
        displayProjects(todoWallet);        
        formEventListener(todoWallet);        
        displayProjects(todoWallet);
    }



    return { home }
}

export { todoLoop }