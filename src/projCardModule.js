// this is for proj-grid-div view

import { itemForm } from "./formsModule";

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

    console.log("project from projMainCard: " + proj + " is next")
    console.log(proj)
    console.log("hello from projCard");

    const bodyHeader = document.getElementById("body-header-div");
    bodyHeader.appendChild(itemForm());

    const projCard = document.createElement("div");
    projCard.classList.add("proj-main-div");
    projCard.id = "proj-main-div";

    const header = document.createElement("p");
    header.classList.add("big-letters");
    header.textContent = proj.title;

    const copyBody = document.createElement("p");
    copyBody.textContent = "boiler plate text I can't remember the boiler plate copy thing";
    
    projCard.appendChild(header);
    projCard.appendChild(copyBody);
    return projCard


}

export { projGridCard, projMainCard }