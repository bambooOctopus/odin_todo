const project = (projectTitle) => {
    const title = projectTitle;
    const itemArray = [];

    const addItem = (item) => {
        itemArray.push(item);
    };

    

    return { title, itemArray, addItem }

};

export { project }