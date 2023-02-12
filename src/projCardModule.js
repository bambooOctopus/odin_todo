const projCard = (proj, index) => {
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

export { projCard }