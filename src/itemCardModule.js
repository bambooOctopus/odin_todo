const itemCard = (item, index) => {
    console.log("-------------------------------------------");
    console.log(item);
    console.log("-------------------------------------------");
    const card = document.createElement("div");
    card.classList.add("item-card");

    const itemTitle = document.createElement("p");
    itemTitle.textContent = item.title;

    const buttonDiv = document.createElement("div");
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "complete";
    toggleBtn.classList.add("submit-btn");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    deleteBtn.style.marginLeft = "1rem";
    deleteBtn.classList.add("delete-btn");
    buttonDiv.appendChild(toggleBtn);
    buttonDiv.appendChild(deleteBtn);

    card.appendChild(itemTitle);
    card.appendChild(buttonDiv);
    

    return card


};

export { itemCard }