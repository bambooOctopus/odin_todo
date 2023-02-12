import { projGridRefresh } from "./domUpdateModule";

const wallet = () => {
    const walletArray = [];

    const addProject = (proj) => {
        walletArray.push(proj);
        projGridRefresh(walletArray);
    };

    return { walletArray, addProject }
};

export { wallet }