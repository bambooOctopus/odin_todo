const projectForm = () => {
    const contentDiv = document.getElementById("content");

    const formDiv = document.createElement("div");

    const form = document.createElement("form");

    const label = document.createElement("label");    
    label.textContent = "project: ";

    const textInput = document.createElement("input");
    textInput.placeholder = "project name"
    textInput.classList.add("text-input");

    const submitBtn = document.createElement("input");
    submitBtn.type = "submit";
    submitBtn.classList.add("submit-btn");
    submitBtn.value = "create project";

    form.appendChild(label);
    form.appendChild(textInput);
    form.appendChild(submitBtn);
    formDiv.appendChild(form);
    contentDiv.appendChild(formDiv);
};

export { projectForm }