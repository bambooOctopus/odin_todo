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

    const getProject = (index) => {
        const project = walletArray[index];
        console.log("index from get project----------------------");
        console.log(index)
        console.log("-----------------------------------")
        return project
    };

    return { walletArray, addProject, removeProject, getProject }
};

export { wallet }