import { generateHomePage } from "./forside.js";

const generateProjectPage = () => {
    const content = document.getElementById("content");
    while (content.childNodes.length > 3){
        content.removeChild(content.lastChild);
    }
    const back = document.createElement("div");
    back.classList.add("back");
    back.id = "back";
    const backImg = document.createElement("img");
    backImg.src = "./img/iconfinder_back_172570.svg";
    back.appendChild(backImg);
    back.addEventListener("click", generateHomePage);

    const a = document.createElement("p");
    a.innerHTML = "<i>Kommer snart</i>";

    content.insertBefore(back, document.getElementById("header"));

    content.appendChild(a);
}

export {
    generateProjectPage
}