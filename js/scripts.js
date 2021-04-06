import { projects } from "./content.js";

let container = document.querySelector(".container");
let boxes = document.querySelectorAll(".box");
let btnClose = document.querySelector(".btn");
let state = 0;
let activeBox = "";

boxes.forEach(box => {
    box.addEventListener("click", growBox);
})

container.addEventListener("click", containerGridFlexToggle);
btnClose.addEventListener("click", shrinkBox);

function growBox(e){
	this.classList.add('active');
    
    if(this.id != "null"){
        activeBox = this.id;
        this.id = null;
        boxes.forEach(box => {
            if(box.classList[1] != "active"){
                box.style.display = "none";
            }
        })
         
        setTimeout(()=>{
            container.removeEventListener("click", containerGridFlexToggle);
            document.querySelector('#btnClose').classList.add('appear');
        },500)
    }
}

function shrinkBox(e){
    container.addEventListener("click", containerGridFlexToggle);
    let box = document.querySelector('.box.active');
    box.id = activeBox;
    box.classList.remove('active');
	document.querySelector('#btnClose').classList.remove('appear');
	setTimeout(()=>{
        boxes.forEach(box => {
            box.style.display = "flex";
        })
	}, 500);
}

function containerGridFlexToggle(){
    if(state == 0){
        container.style.display = "flex";
        state = 1;
    }else{
        container.style.display = "grid";
        state = 0;
    }
}

//Function to list all projects and append in a container within cards

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
            <a href="${project.link}" target="_blank" id="projectBtn${i}" class="projects_article_footer_a"><img src="./assets/iconLink.svg"
                    alt=""></a>
        </div>
    </article>
    `;
    allProjects += template;
})

projectsHolder.innerHTML = allProjects;