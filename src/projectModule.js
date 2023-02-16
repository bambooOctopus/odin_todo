import { projMainDivRefresh } from "./domUpdateModule";
import { createItem } from "./itemModule";

const project = (projectTitle) => {
    const title = projectTitle;
    const itemArray = [];

    const addItem = (item) => {
        itemArray.push(createItem(item));
        projMainDivRefresh(itemArray);
    };

    

    return { title, itemArray, addItem }

};

export { project }