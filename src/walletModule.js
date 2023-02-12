const wallet = () => {
    const walletArray = [];

    const addProject = (proj) => {
        walletArray.push(proj);
    };

    return { walletArray, addProject }
};

export { wallet }