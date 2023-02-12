const header = () => {
    return "header"
};

const sideBar = () => {
    return "sideBar";
};

const body = () => {
    return "contentBody";

};

const homeScreen = () => {
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

    contentDiv.appendChild(contentHeader);
    contentDiv.appendChild(contentSideBar);
    contentDiv.appendChild(contentBody);

};

export { homeScreen }