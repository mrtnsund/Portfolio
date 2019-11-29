const generateProjectPage = () => {
    const content = document.getElementById("content");
    while (content.childNodes.length > 3){
        content.removeChild(content.lastChild);
    }
    const a = document.createElement("p");
    a.innerHTML = "<i>Kommer snart</i>";
    content.appendChild(a);
}

export {
    generateProjectPage
}