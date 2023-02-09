const formEventListener = () => {
    const forms = document.querySelectorAll("form");
    const form = forms[0];
    
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log(event.target[0].value);
    });

    
}



export { formEventListener }