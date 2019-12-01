import { generateProjectPage } from "./prosjekt";

const generateProsjektKnapp = () => {
    const prosjektKnapp = document.createElement("div");
    prosjektKnapp.classList.add("innhold");

    const innholdProsjekter = document.createElement("div");
    innholdProsjekter.classList.add("innholdProsjekter");
    
    const innholdProsjekterTekst = document.createElement("p");
    innholdProsjekterTekst.classList.add("innholdProsjekterTekst");
    innholdProsjekterTekst.innerHTML = "Prosjekter";

    innholdProsjekter.appendChild(innholdProsjekterTekst);

    prosjektKnapp.appendChild(innholdProsjekter);
    prosjektKnapp.style.cursor = "pointer";

    return prosjektKnapp;
}

const generateStrek = () => {
    const strek = document.createElement("hr");
    return strek;
}

const generateLenker = () => {
    const lenker = document.createElement("div");
    lenker.classList.add("lenker");

    const github = document.createElement("a");
    github.href = "https://github.com/mrtnsund";
    github.style.target = "_blank";
    const linkedin = document.createElement("a");
    linkedin.href = "https://www.linkedin.com/in/morten-sund-930873116/";
    linkedin.style.target = "_blank";
    const mail = document.createElement("a");
    mail.href = "mailto:mrtnsund@gmail.com";

    const githubLenke = document.createElement("div");
    githubLenke.classList.add("lenke");
    const githubLenkeTekst = document.createElement("p");
    githubLenkeTekst.classList.add("lenkeTekst");
    githubLenkeTekst.innerHTML = "GitHub";
    githubLenke.appendChild(githubLenkeTekst);
    github.appendChild(githubLenke);

    const linkedinLenke = document.createElement("div");
    linkedinLenke.classList.add("lenke");
    const linkedinLenkeTekst = document.createElement("p");
    linkedinLenkeTekst.classList.add("lenkeTekst");
    linkedinLenkeTekst.innerHTML = "LinkedIn";
    linkedinLenke.appendChild(linkedinLenkeTekst);
    linkedin.appendChild(linkedinLenke);

    const mailLenke = document.createElement("div");
    mailLenke.classList.add("lenke");
    const mailLenkeTekst = document.createElement("p");
    mailLenkeTekst.classList.add("lenkeTekst");
    mailLenkeTekst.innerHTML = "GitHub";
    mailLenke.appendChild(mailLenkeTekst);
    mail.appendChild(mailLenke);


    lenker.appendChild(github);
    lenker.appendChild(linkedin);
    lenker.appendChild(mail);

    return lenker;
}
const generateHomePage = () => {
    const content = document.getElementById("content");
    while (content.childNodes.length > 4){
        content.removeChild(content.lastChild);
    }
    const prosjektKnapp = generateProsjektKnapp();
    prosjektKnapp.addEventListener("click", generateProjectPage);

    const tilbakeKnapp = document.getElementById("back");
    document.getElementById("headerTekst").innerHTML = "MORTEN SUND";
    content.removeChild(tilbakeKnapp);
    content.appendChild(prosjektKnapp);
    content.appendChild(generateStrek());
    content.appendChild(generateLenker());
}


export {
    generateProsjektKnapp, generateStrek, generateLenker, generateHomePage
}