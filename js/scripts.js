import { projects } from "./content.js";

//Function to list all projects and append in a container within cards

// let projectsHolder = document.querySelector(".projects");
// let allProjects = "";

// projects.forEach((project, i) => {
//     let template = `
//     <article class="projects_article">
//         <header class="projects_article_header">
//             <h3>${project.titulo}</h3>
//         </header>
//         <img src="${project.imagem}" alt="${project.imagemAlt}" class="projects_article_thumb">
//         <p class="projects_article_description">${project.descricao}</p>
//         <div class="projects_article_footer">
//             <p class="projects_article_footer_date">${project.data}</p>
//             <a href="${project.link}" target="_blank" id="projectBtn${i}" class="projects_article_footer_a"><img src="./assets/iconLink.svg"
//                     alt=""></a>
//         </div>
//     </article>
//     `;
//     allProjects += template;
// })

// projectsHolder.innerHTML = allProjects;