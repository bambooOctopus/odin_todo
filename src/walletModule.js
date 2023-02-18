import { projGridRefresh } from "./domUpdateModule";

const wallet = () => {
    const walletArray = [];

    const addProject = (proj) => {
        walletArray.push(proj);
        projGridRefresh(walletArray);
    };

    const removeProject = (projId) => {        
        walletArray.splice(projId, 1);
        projGridRefresh(walletArray);

    };

    const getProject = (index) => {
        const project = walletArray[index];    
        return project
    };

    return { walletArray, addProject, removeProject, getProject }
};

export { wallet }