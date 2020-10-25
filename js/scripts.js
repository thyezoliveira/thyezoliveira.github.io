let aboutBtn = document.querySelector(".aboutBtn");
let closeBtn = document.querySelector(".closeBtn");
let githubBtn = document.querySelector(".githubBtn");
let contactBtn = document.querySelector(".contactBtn");
let menu = document.querySelector(".menu");
let main = document.querySelector("main");

/* window.addEventListener('scroll', rolagem); */
aboutBtn.addEventListener('click', alternarSobre);
closeBtn.addEventListener('click', alternarSobre);
githubBtn.addEventListener('click', openGithub);
contactBtn.addEventListener('click', openWhatsapp);

function alternarSobre(){
    closeBtn.classList.toggle('hidden');
    menu.classList.toggle('hidden');
    main.classList.toggle('hidden');
}

function openGithub(){
    window.open("https://github.com/thyezoliveira", "_self");
}

function openWhatsapp(){
    window.open("https://api.whatsapp.com/send?phone=+5522998548514", "_self");
}