import { generateHomePage, generateProsjektKnapp, generateStrek, generateLenker } from "./forside.js";
import { generateProjectPage } from "./prosjekt.js";

import "particles.js";
import { generateProjectPage as project } from "./prosjekt.js";

particlesJS.load('particles-js', 'assets/particles.json', function () {
});
const content = document.getElementById("content");

const generateParticles = () => {
    const particles = document.createElement('div');
    particles.id = "particles-js";
    return particles;
}
const generateHeader = () => {
    const header = document.createElement("div");
    header.id = "header";
    const headerTekst = document.createElement("p");
    headerTekst.id = "headerTekst";
    headerTekst.innerHTML = "Morten Sund";
    header.appendChild(headerTekst);
    return header;
}

const prosjektKnapp = generateProsjektKnapp();
prosjektKnapp.addEventListener("click", project);

content.appendChild(generateParticles());
content.appendChild(generateHeader());
content.appendChild(prosjektKnapp);
content.appendChild(generateStrek());
content.appendChild(generateLenker());

