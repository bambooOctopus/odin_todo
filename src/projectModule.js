import { projMainDivRefresh } from "./domUpdateModule";
import { createItem, toggle } from "./itemModule";

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

    const toggleItemStatus = (itemId) => {   

        const toggleItem = itemArray[itemId];        

        if (toggleItem.status === false) {
            toggleItem.status = true;
        }
        else {
            toggleItem.status = false;
        }   
        
        projMainDivRefresh(itemArray);
        
    };

    

    return { title, itemArray, addItem, removeItem, toggleItemStatus }

};

export { project }