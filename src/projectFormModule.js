const projectForm = () => {
    const contentDiv = document.getElementById("content");

    const projectFormDiv = document.createElement("div");
    projectFormDiv.id = "projectFormDiv";
    projectFormDiv.classList.add("form-div");

    const projectForm = document.createElement("form");

    const projectLabel = document.createElement("label");
    projectLabel.textContent = "project name: "

    const projectTextInput = document.createElement("input");
    projectTextInput.classList.add("text-input");

    const submitBtn = document.createElement("input");
    submitBtn.type = "submit";
    submitBtn.value = "create project";
    submitBtn.classList.add("submit-btn");

    projectForm.appendChild(projectLabel);
    projectForm.appendChild(projectTextInput);
    projectForm.appendChild(submitBtn);

    projectFormDiv.appendChild(projectForm);
    
    contentDiv.appendChild(projectFormDiv);
}

export { projectForm }