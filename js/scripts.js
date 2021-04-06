import { projects } from "./content.js";

let section = document.querySelector(".container");
let caixas = document.querySelectorAll(".caixa");
let btnClose = document.querySelector(".btn#btnClose");
section.addEventListener("click", bgColorChangeRandom);

caixas.forEach(caixa => {
    caixa.addEventListener("click", growBox);		
}

btnClose.addEventListener("click", shrinkBox);

function bgColorChangeRandom(e){
	e.stopPropagation();
	let randomRed = parseInt(Math.random() * 255);
	let randomGreen = parseInt(Math.random() * 255);
	let randomBlue = parseInt(Math.random() * 255);
	
	let rgb = `rgb(${randomRed},${randomGreen},${randomBlue})`;
	
	this.style.backgroundColor = rgb;
}

function growBox(e){
	e.stopPropagation();	
	this.classList.add('active');
	setTimeout(()=>{
		console.log(document.querySelector('#btnClose'))
		document.querySelector('#btnClose').classList.add('teste');
	},500)
}

function shrinkBox(e){
	e.stopPropagation();
	document.querySelector('#btnClose').classList.remove('teste');
	setTimeout(()=>{
		let caixa = document.querySelector('.caixa.active')	
		caixa.classList.remove('active')
	}, 500)
}

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