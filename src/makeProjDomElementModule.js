
const makeProjDomElement = (project) => {
    console.log("hello from makeProjDomElement: " + project.title );

    
    const projDiv = document.getElementById("proj-div");
    

    const proj = document.createElement("div");
    proj.classList.add("proj");

    
    const projTitle = document.createElement("p");
    projTitle.textContent = project.title;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    deleteBtn.classList.add("delete-btn")

    proj.appendChild(projTitle);
    proj.appendChild(deleteBtn);

    projDiv.appendChild(proj);
    

};

export { makeProjDomElement }