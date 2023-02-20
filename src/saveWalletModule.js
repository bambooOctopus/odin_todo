import { wallet } from "./walletModule";

const saveWallet = (wallet) => {
    const walletString = JSON.stringify(wallet);
    localStorage.setItem("wallet", walletString);
};

const loadWallet = (name) => {
    const walletString = localStorage.getItem(name);
    const walletParse = JSON.parse(walletString);
    const walletArray = walletParse.walletArray;

    const walletObj = wallet();

    if (walletArray.length > 0) {
        walletArray.forEach(proj => {
            walletObj.addProject(proj)            
        });
    }

    

    
    return walletObj;

};

export {saveWallet, loadWallet}