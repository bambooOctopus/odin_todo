import { projectFactory } from './projectFactoryModule'
import { clearInput } from './domModule';



const formEventListener = (wallet) => {
    const forms = document.querySelectorAll("form");
    const form = forms[0];
    const walletObj = wallet;
    
   
    
    form.addEventListener("submit", (event) => {
        event.preventDefault();       

        if (walletObj != undefined) {
            let proj = projectFactory(event.target[0].value)
            walletObj.addProject(proj);
            clearInput();
            console.log(walletObj.projectWalletArray)
        }
        
        // 0. if the walletObj isn't undefined :)

        // 1. make the input a project obj
        
        // 2. push the project to wallet
        //wallet.addProject(proj);
        
    });

    
}



export { formEventListener }