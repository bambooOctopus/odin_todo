import { removeProject } from "./projectWalletModule";

const projDivListener = (wallet) => {

    const projDiv = document.getElementById("proj-div");
    console.log("projDivListener " + projDiv);
    console.log(projDiv);

    projDiv.addEventListener("click", (event) => {
        const deleteBtnId = event.target.id.split("-")[2];
        wallet.removeProject(deleteBtnId);

        
    })

};

export { projDivListener }