import { wallet } from "./walletModule";
import { projGridRefresh } from "./domUpdateModule"
import { homeScreen } from "./domUpdateModule";
import { project } from "./projectModule";

const saveWallet = (wallet) => {
    const walletString = JSON.stringify(wallet);
    localStorage.setItem("wallet", walletString);
};

const loadWallet = (name) => {

    // this should be if there is a local storage wallet it returns an instantiated 
    // wallet obj
    // else if creates a new wallet obj and returns that.

   if (localStorage.getItem(name)) {
       console.log("load the wallet");


       const walletString = localStorage.getItem(name);
       const walletParse = JSON.parse(walletString);
       const walletArrayString = walletParse.walletArray;

       console.log(Array.isArray(walletParse))

       const walletObj = wallet();
       

       if (Array.isArray(walletParse) && walletParse.length > 0) {
           walletParse.forEach(proj => {
               let p = project(proj.title)
               console.log(p)
                walletObj.walletArray.push(p)
           });

       }
       

       

        // if ( walletParse.length > 0) {
        //     walletParse.forEach(proj => {
        //         walletObj.addProject(proj)            
        //     });
        // };

        

        return walletObj;

   }
   else {
       const returnWallet = wallet();
       return returnWallet;
   }
   


    
        
        

    // }
    // else {
    //     const walletObj = wallet();
    // }
        

    

    
    


};

const deleteWallet = () => {
    const forDeletion = localStorage.getItem("wallet");
    localStorage.removeItem(forDeletion);
};

export {saveWallet, loadWallet, deleteWallet}