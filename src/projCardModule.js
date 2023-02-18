// this is for proj-grid-div view



// fired off in eventListeners
const projGridCard = (proj, index) => {
    const card = document.createElement("div");
    card.classList.add("proj-card");
    card.id = "proj-card-" + index;

    const t = document.createElement("p");
    t.textContent = proj.title;
    card.appendChild(t);

    const dltBtn = document.createElement("button");
    dltBtn.textContent = "delete";
    dltBtn.classList.add("delete-btn");
    
    dltBtn.id = "proj-dlt-" + index;
    card.appendChild(dltBtn);
    
    return card
};

//this will be for proj view
// fired off in eventListeners
const projMainCard = (proj, index) => {    

    const projCard = document.createElement("div");
    projCard.classList.add("proj-main-div");
    projCard.id = "proj-main-div";

    const header = document.createElement("div");
    const headerTitle = document.createElement("p");    
    headerTitle.textContent = "        ";
    headerTitle.classList.add("big-letters");
    header.appendChild(headerTitle);

    // 1. make this a grid div
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item-div");
    itemDiv.id = "item-div";
    

    // 2. append all the items in the itemArray to that grid div
    
    projCard.appendChild(header);
    projCard.appendChild(itemDiv);
    return projCard


}

export { projGridCard, projMainCard }