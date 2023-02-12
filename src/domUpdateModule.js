import { projectForm } from "./formsModule";


const header = () => {
    const headerDiv = document.createElement("div");
    headerDiv.classList.add("header-div");
    const h = document.createElement("h1");
    h.textContent = "header";
    headerDiv.appendChild(h);

    return headerDiv
};

const sideBar = () => {
    const sideBarDiv = document.createElement("div");
    sideBarDiv.classList.add("side-bar-div");
    const h = document.createElement("h1");
    h.textContent = "sideBar";
    sideBarDiv.appendChild(h);

    return sideBarDiv;
    
};

const body = () => {
    const bodyDiv = document.createElement("div");
    bodyDiv.classList.add("body-div");
    
    

    const projForm = projectForm();
    bodyDiv.appendChild(projForm);

    return bodyDiv;

};

const layOut = () => {
    const contentDiv = document.getElementById("content");

    const contentHeader = document.createElement("p");
    contentHeader.textContent = header();
    contentHeader.classList.add("big-letters");

    const contentSideBar = document.createElement("p");
    contentSideBar.textContent = sideBar();
    contentSideBar.classList.add("big-letters");

    const contentBody = document.createElement("p");
    contentBody.textContent = body();
    contentBody.classList.add("big-letters");

     contentDiv.appendChild(header());
     contentDiv.appendChild(sideBar());
     contentDiv.appendChild(body());


};

const homeScreen = () => {
    layOut();
    // 1. layout
    // 2. project form
    // 3. current projects
    
};

const projScreen = () => {
    layOut();
    // 1. layout
    // 2. project info 
    // 3. item form 
    // 4. current items

};

export { homeScreen, projScreen }