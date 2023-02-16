import { createItem } from "./itemModule";

const project = (projectTitle) => {
    const title = projectTitle;
    const itemArray = [];

    const addItem = (item) => {
        itemArray.push(createItem(item));
        console.log(itemArray);
    };

    

    return { title, itemArray, addItem }

};

export { project }