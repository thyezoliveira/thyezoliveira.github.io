import { projects } from "./content.js";

let shields = document.querySelectorAll(".bio_skills_holder_skill");
let projectsHolder = document.querySelector(".projects");
let allProjects = "";

projects.forEach((project, i) => {
    let template = `
    <article class="projects_article">
        <header class="projects_article_header">
            <h3>${project.titulo}</h3>
        </header>
        <img src="${project.imagem}" alt="${project.imagemAlt}" class="projects_article_thumb">
        <p class="projects_article_description">${project.descricao}</p>
        <div class="projects_article_footer">
            <p class="projects_article_footer_date">${project.data}</p>
            <a href="${project.link}" id="projectBtn${i}" class="projects_article_footer_a"><img src="./assets/iconLink.svg"
                    alt=""></a>
        </div>
    </article>
    `;
    allProjects += template;
})

projectsHolder.innerHTML = allProjects;


function activate(){
    shields.forEach(shield => {
        shield.addEventListener("mouseover", (event)=>{
            let icon = event.target;
            if(icon.classList[0] == "back"){
                icon.parentNode.style.transform = "rotateY(180deg)";
            }
        }, false)

        shield.addEventListener("mouseout", (event)=>{
            let icon = event.target;
            if(icon.classList[0] == "front"){
                icon.parentNode.style.transform = "rotateY(0deg)";
            }
        }, false)
    })
}

activate();