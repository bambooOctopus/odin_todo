//fired off in domUpdateModule
const projectForm = () => {
    

    const formDiv = document.createElement("div");
    formDiv.id = "project-form-div";

    const form = document.createElement("form");
    form.id = "project-form";
    

    const label = document.createElement("label");    
    label.textContent = "project: ";
    

    const textInput = document.createElement("input");
    textInput.required = true;      
    textInput.placeholder = "project name"
    textInput.classList.add("text-input");
    textInput.name = "project-name";
    textInput.id = "project-name";
    

    const submitBtn = document.createElement("input");
    submitBtn.type = "submit";
    submitBtn.classList.add("submit-btn");
    submitBtn.value = "create project";



    form.appendChild(label);
    form.appendChild(textInput);    
    form.appendChild(submitBtn);
    formDiv.appendChild(form);
    
    return formDiv;
    
};

const itemForm = () => {
    

    const formDiv = document.createElement("div");
    formDiv.id = "item-form-div";

    const form = document.createElement("form");
    form.id = "item-form";
    

    const label = document.createElement("label");    
    label.textContent = "item:";
    label.style.marginRight = "1.9rem";
    

    const textInput = document.createElement("input");    
    textInput.placeholder = "item name   "
    textInput.classList.add("text-input");
    textInput.name = "item-name";
    textInput.id = "item-name";
    textInput.required = true;
    
    

    const submitBtn = document.createElement("input");
    submitBtn.type = "submit";
    submitBtn.classList.add("submit-btn");
    submitBtn.value = "create item";



    form.appendChild(label);
    form.appendChild(textInput);    
    form.appendChild(submitBtn);
    formDiv.appendChild(form);
    
    return formDiv;
    
};

export { projectForm, itemForm }