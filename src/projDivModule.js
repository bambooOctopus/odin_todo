const createProjDiv = () => {
    const contentDiv = document.getElementById("content");
    
    const projDiv = document.createElement("div");
    projDiv.classList.add("proj-div");
    projDiv.id = "proj-div";

    contentDiv.appendChild(projDiv);
};

export { createProjDiv }