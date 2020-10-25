let aboutBtn = document.querySelector("#aboutBtn");
let menu = document.querySelector("#menu");
let closeBtn = document.querySelector(".closeBtn");
let main = document.querySelector("main");/* 
let footer = document.querySelector("footer"); */

/* window.addEventListener('scroll', rolagem); */
aboutBtn.addEventListener('click', alternarSobre);
closeBtn.addEventListener('click', alternarSobre);

function alternarSobre(){
    closeBtn.classList.toggle('hidden');
    menu.classList.toggle('hidden');
    main.classList.toggle('hidden');
}

/* function rolagem(){
    let posicao = main.offset();
    console.log(posicao.top);
} */