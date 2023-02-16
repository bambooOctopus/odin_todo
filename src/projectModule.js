import { projMainDivRefresh } from "./domUpdateModule";
import { createItem } from "./itemModule";

const project = (projectTitle) => {
    const title = projectTitle;
    const itemArray = [];

    const addItem = (item) => {
        itemArray.push(createItem(item));
        projMainDivRefresh(itemArray);
    };

    const removeItem = (itemId) => {
        

        itemArray.splice(itemId, 1);
        projMainDivRefresh(itemArray);

    };

    

    return { title, itemArray, addItem, removeItem }

};

export { project }