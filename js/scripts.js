import { projects } from "./projects.js";

let container = document.querySelector(".container");
let boxes = document.querySelectorAll(".box");
let btnClose = document.querySelector(".btn");
let projectsHolder = document.querySelector(".projects");
let boxesIds = ["about","projects","skills","articles","social"];
let state = 0;
let activeBoxId = "";
let allProjects = "";

startAllEventListeners()

function startAllEventListeners(){
    boxes.forEach(box => {
        box.addEventListener("click", growActiveBox);
    })
    btnClose.addEventListener("click", shrinkActiveBox);
    activateContainerListener();
}

function activateContainerListener(){
    container.addEventListener("click", containerGridFlexToggle);
}

function growActiveBox(){
	this.classList.add('active');
    activeBoxId = this.id;
    
    nonActiveBoxesDisplayNone();
    
    setTimeout(()=>{
        container.removeEventListener("click", containerGridFlexToggle);
        showBackButton();
    },500)

    startActiveBoxContent();
}

function nonActiveBoxesDisplayNone(){
    boxes.forEach(box => {
        if(box.classList[2] != "active"){
            box.style.display = "none";
        }
    })
}

function startActiveBoxContent(){
    let activeBox = document.querySelector(".box.active");
    
    allBoxTitleDisplayNoneButNotThis(activeBox);
    spaceSocialBlocksVerticaly(activeBox);
    setBoxContentFullscreen(activeBox);
}

function setBoxContentFullscreen(activeBox){
    activeBox.children[0].classList.add("titleTopBlur");
    activeBox.children[1].classList.add("fullScreen");
    let fullScreenBox = document.querySelector(".fullScreen");
    fullScreenBox.addEventListener('scroll', getEndOfScrollToHideBackButton);
}

function spaceSocialBlocksVerticaly(activeBox){
    if(activeBox.id == boxesIds[4]){
        activeBox.children[1].children[0].style.justifyContent = "space-between";
    }
}

function allBoxTitleDisplayNoneButNotThis(activeBox){
    let activeBoxTitle = activeBox.children[0];
    if(activeBox.id != boxesIds[0]){
        activeBoxTitle.style.display = "none";
    }
}

function getEndOfScrollToHideBackButton(e){
    let scrollHeight = e.target.scrollHeight;
    let windowHeight = window.innerHeight;
    let point = parseInt(scrollHeight - windowHeight);
    
    if(e.target.scrollTop > point){
        hideBackButton();
    } else {
        showBackButton();
    }
}

function endActiveBoxContent(){
    let activeBox = document.querySelector(".box.active");
    activeBox.children[0].style.display = "initial";
    activeBox.children[0].classList.remove("titleTopBlur");
    activeBox.children[1].classList.remove("fullScreen");
    activeBox.children[1].style.paddingTop = "0";
    if(activeBox.id == boxesIds[4]){
        activeBox.children[1].children[0].style.justifyContent = "space-between";
    }
}

function showBackButton(){
    document.querySelector('#btnClose').classList.add('appear');
}

function hideBackButton(){
    document.querySelector('#btnClose').classList.remove('appear');
}

function shrinkActiveBox(e){
    let activeBox = document.querySelector('.box.active');
    endActiveBoxContent();
	hideBackButton();
    activateContainerListener();
    activeBox.id = activeBoxId;
    activeBox.classList.remove('active');
    
}

function containerGridFlexToggle(){
    if(state == 0){
        container.style.display = "flex";
        state = 1;
    }else{
        container.style.display = "grid";
        state = 0;
        allBoxesDisplayFlex();
    }
}

function allBoxesDisplayFlex(){
    boxes.forEach(box => {
        box.style.display = "flex";
    })
}

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
            <a href="${project.link}" target="_blank" id="projectBtn${i}" class="projects_article_footer_a">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                        <path class="btnIcon" id="iconLink" d="M15.2727 0H9.45453C9.05288 0 8.72725 0.325625 8.72725 0.727281C8.72725 1.12894 9.05288 1.45456 9.45453 1.45456H13.5169L6.03122 8.94031C5.74719 9.22434 5.74719 9.68478 6.03122 9.96881C6.17319 10.1108 6.35931 10.1818 6.54544 10.1818C6.73156 10.1818 6.91772 10.1108 7.05972 9.96878L14.5455 2.48306V6.54547C14.5455 6.94713 14.8711 7.27275 15.2727 7.27275C15.6744 7.27275 16 6.94713 16 6.54547V0.727281C16 0.325625 15.6744 0 15.2727 0Z"/>
                        <path class="btnIcon" id="iconLink" d="M12.3636 7.27275C11.962 7.27275 11.6363 7.59837 11.6363 8.00003V14.5455H1.45453V4.36365H8C8.40166 4.36365 8.72728 4.03803 8.72728 3.63637C8.72728 3.23471 8.40166 2.90912 8 2.90912H0.727281C0.325625 2.90912 0 3.23474 0 3.6364V15.2728C0 15.6744 0.325625 16 0.727281 16H12.3637C12.7653 16 13.0909 15.6744 13.0909 15.2727V8.00003C13.0909 7.59837 12.7653 7.27275 12.3636 7.27275Z"/>
                    </g>
                    <defs>
                        <clipPath id="clip0">
                            <rect width="16" height="16" fill="black"/>
                        </clipPath>
                    </defs>
                </svg>            
            </a>
        </div>
    </article>
    `;
    allProjects += template;
})

projectsHolder.innerHTML = allProjects;