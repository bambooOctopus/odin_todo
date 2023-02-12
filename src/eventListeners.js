const projectFormListener = () => {
    const projectForm = document.getElementById("project-form");

    projectForm.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log(event.target[0].value);
        event.target[0].value = "";
        event.target[0].focus();
    });
};


//fired off in todoModule
const listen = () => {
    // fire off all the event listeners
    projectFormListener();
};

export { listen }