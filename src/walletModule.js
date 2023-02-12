import { projGridRefresh } from "./domUpdateModule";

const wallet = () => {
    const walletArray = [];

    const addProject = (proj) => {
        walletArray.push(proj);
        projGridRefresh(walletArray);
    };

    const removeProject = (projId) => {
        console.log(projId);
        walletArray.splice(projId, 1);
        projGridRefresh(walletArray);

    };

    return { walletArray, addProject, removeProject }
};

export { wallet }