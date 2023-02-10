
const makeProjDomElement = (project) => {
    console.log("hello from makeProjDomElement: " + project.title );

    
    const projDiv = document.getElementById("proj-div");
    

    const proj = document.createElement("div");
    proj.classList.add("proj");

    
    const projTitle = document.createElement("p");
    projTitle.textContent = project.title;

    proj.appendChild(projTitle);

    projDiv.appendChild(proj);
    

};

export { makeProjDomElement }