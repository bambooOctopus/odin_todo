const projectFactory = (title) => {
    const projectTitle = title
    const itemsArray = []

    const addItem = (item) => {
        itemsArray.push(item);
    }

    return { title, itemsArray, addItem }
};

export { projectFactory }