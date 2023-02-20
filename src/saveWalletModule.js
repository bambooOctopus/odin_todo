const saveWallet = (wallet) => {
    const walletString = JSON.stringify(wallet);
    localStorage.setItem("wallet", walletString);
};

const loadWallet = (wallet) => {
    const walletString = localStorage.getItem("wallet");
    const walletObj = JSON.parse(walletString);
    return walletObj;

};

export {saveWallet, loadWallet}