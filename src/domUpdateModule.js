import { projectForm, itemForm } from "./formsModule";
import { projGridCard, projMainCard } from "./projCardModule";
import { homeBtnListener, listen, itemFormListener } from "./eventListeners";


const header = () => {
    const headerDiv = document.createElement("div");
    headerDiv.classList.add("header-div");  
    

    return headerDiv
};

const sideBar = () => {
    const sideBarDiv = document.createElement("div");
    sideBarDiv.classList.add("side-bar-div");
    sideBarDiv.id = "side-bar-div";   

    return sideBarDiv;
    
};

const projGridDiv = () => {
    const gridDiv = document.createElement("div");
    gridDiv.classList.add("proj-grid-div");
    gridDiv.id = "proj-grid-div"

    // this needs to update the grid div with the wallet;

    const bodyHeader = document.getElementById("body-header-div");
    
    
    //bodyHeader.appendChild(projForm)

    
    return gridDiv;

}

const projMainDiv = () => {
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("main-div");
    mainDiv.id = "main-div"

    return mainDiv;

};

const bodyHeader = () => {
    const bodyHeader = document.createElement("div");
    bodyHeader.classList.add("body-header-div");
    bodyHeader.id = "body-header-div";    
    
    return bodyHeader
}

const body = () => {
    const bodyDiv = document.createElement("div");
    bodyDiv.classList.add("body-div");
    bodyDiv.id = "body-div";
    
    bodyDiv.appendChild(bodyHeader());
    
    
    bodyDiv.appendChild(projGridDiv());

    return bodyDiv;

};

const appendBody = (element) => {
    const bodyDiv = document.getElementById("body-div");
    
    bodyDiv.innerHTML = "";
    bodyDiv.appendChild(bodyHeader());
    bodyDiv.appendChild(element);
};

const appendBodyHeader = (element) => {
    const bodyHeader = document.getElementById("body-header-div");
    bodyHeader.innerText = ""
    bodyHeader.appendChild(element);    
}



const layOut = () => {
    const contentDiv = document.getElementById("content");

     contentDiv.appendChild(header());
     contentDiv.appendChild(sideBar());
     contentDiv.appendChild(body());


};

const projGridRefresh = (wallet) => {
   
    // 1. take the projGridDiv and remove all its children
    // 2. then go through the wallet array and populate the grid

    const projDiv = document.getElementById("proj-grid-div");
   
    projDiv.innerHTML = "";
   

    if (wallet.length > 0) {

        wallet.forEach((p, index) => {
            // 1. make a project card
            let card = projGridCard(p, index);
            // 2. append card to projDiv
            projDiv.appendChild(card);
        });

        

    } 
    else {
        return
    };

};

// update proj-main-div or whatever it's called 
const projMainDivRefresh = (itemArray) => {
    const projMainDiv = document.getElementById("proj-main-div");

    
    console.log(projMainDiv);

};

const appendMainDiv = (element) => {
    const mainDiv = document.getElementById("main-div");
    mainDiv.appendChild(element);
};

const homeScreen = (wallet) => {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "";
    layOut();
    appendBody(projGridDiv());
    appendBodyHeader(projectForm());
   
    projGridRefresh(wallet.walletArray);
    
    
    // 1. layout
    // 2. project form
    // 3. current projects
    
};

const projScreen = (proj) => {
   
   

    const bodyDiv = document.getElementById("body-div");
    const sideBar = document.getElementById("side-bar-div");
    

    const homeBtn = document.createElement("button");
    homeBtn.textContent = "home";
    homeBtn.classList.add("home-btn");
    homeBtn.id = "home-btn";
    sideBar.appendChild(homeBtn);
    
    
    appendBody(projMainDiv());
    appendBodyHeader(itemForm());
    itemFormListener(proj);

    
    

    // make/return projMainCard, append it to projGridDiv
    const projCard = projMainCard(proj);

    const mainDiv = document.getElementById("main-div");
    // should make an append main-div function();
    appendMainDiv(projCard);

    projMainDivRefresh(proj.itemArray)

    


    
    
    // 1. layout
    // 2. project info 
    // 3. item form 
    // 4. current items

};

export { homeScreen, projScreen, projGridRefresh, projMainDiv }