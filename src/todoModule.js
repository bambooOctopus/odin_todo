import { wallet } from "./walletModule.js";
import { homeScreen, projScreen } from "./domUpdateModule.js";
import { listen } from "./eventListeners.js";


//fired off in index.js
const todo = () => {
    const projectWallet = wallet();
    
    

    const home = () => {        
        
        homeScreen(projectWallet);  
        listen(projectWallet);     

        //this will run homeScreen(); which will be in domUpdateModule
        // homeScreen() will build out an entire view/screen 
        // with a main div that has 2 child elements.
        // a project form div at the top and a projGridDiv at the bottom.
    };

    const proj = () => {
        //project page displaying all it's items        
        projScreen();
    };

    return {home, proj, projectWallet }
};

export { todo }