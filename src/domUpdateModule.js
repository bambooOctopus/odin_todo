import { projectForm } from "./formsModule";
import { projGridCard, projMainCard } from "./projCardModule";


const header = () => {
    const headerDiv = document.createElement("div");
    headerDiv.classList.add("header-div");
    

    const projForm = projectForm();
    projForm.classList.add("proj-form");
    headerDiv.appendChild(projForm)

    return headerDiv
};

const sideBar = () => {
    const sideBarDiv = document.createElement("div");
    sideBarDiv.classList.add("side-bar-div");   

    return sideBarDiv;
    
};

const projGridDiv = () => {
    const gridDiv = document.createElement("div");
    gridDiv.classList.add("proj-grid-div");
    gridDiv.id = "proj-grid-div"

    return gridDiv;

}

const body = () => {
    const bodyDiv = document.createElement("div");
    bodyDiv.classList.add("body-div");
    bodyDiv.id = "body-div"  
    bodyDiv.appendChild(projGridDiv());

    return bodyDiv;

};



const layOut = () => {
    const contentDiv = document.getElementById("content");

     contentDiv.appendChild(header());
     contentDiv.appendChild(sideBar());
     contentDiv.appendChild(body());


};

const projGridRefresh = (wallet) => {
    console.log("projGridRefresh");
    // 1. take the projGridDiv and remove all its children
    // 2. then go through the wallet array and populate the grid

    const projDiv = document.getElementById("proj-grid-div");
    console.log(projDiv);
    projDiv.innerHTML = "";
    console.log(projDiv);

    wallet.forEach((p, index) => {
        // 1. make a project card
        let card = projGridCard(p, index);
        // 2. append card to projDiv
        projDiv.appendChild(card);
    });

};

const homeScreen = () => {
    layOut();
    // 1. layout
    // 2. project form
    // 3. current projects
    
};

const projScreen = (proj) => {
    console.log("proj from projScreen up next-----------------");
    console.log(proj);
    console.log("-----------------------------------------------");
    //layOut();

    const projGridDiv = document.getElementById("proj-grid-div");
    projGridDiv.innerHTML = "";

    // make/return projMainCard, append it to projGridDiv
    const projCard = projMainCard(proj);

    projGridDiv.appendChild(projCard);


    console.log("post layout()");
    
    // 1. layout
    // 2. project info 
    // 3. item form 
    // 4. current items

};

export { homeScreen, projScreen, projGridRefresh }