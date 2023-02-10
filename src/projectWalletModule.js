const projectWallet = () => { 
    const projectWalletArray = []

    const addProject = (project) => {
        projectWalletArray.push(project);
    }

    
    

    return { projectWalletArray, addProject }
};

export { projectWallet }