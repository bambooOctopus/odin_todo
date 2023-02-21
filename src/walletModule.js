import { projGridRefresh } from "./domUpdateModule";
import { deleteWallet, saveWallet } from "./saveWalletModule";

const wallet = () => {
    const walletArray = [];

    const addProject = (proj) => {
        walletArray.push(proj);
       
        // 1. remove the old saved wallet
        //deleteWallet();
        
        // 2. save the new wallet
        saveWallet(walletArray);

        projGridRefresh(walletArray);

       
    };

    const removeProject = (projId) => {        
        walletArray.splice(projId, 1);
        projGridRefresh(walletArray);
        saveWallet(walletArray)

    };

    const getProject = (index) => {
        const project = walletArray[index];    
        return project
    };

    return { walletArray, addProject, removeProject, getProject }
};

export { wallet }