const avatar = document.querySelector(".bio_avatar");
let device = "";
setInterval(()=>{
    device = (window.innerWidth > 700) ? "desktop" : "handheld";
    if(device == "handheld"){
        avatar.addEventListener('mouseover', ()=>{
            avatar.style.animation = "grow2x 3s ease-in-out forwards";
        })
    
        avatar.addEventListener('mouseout', ()=>{
            //animation: jump 5s ease-in-out infinite;
            avatar.style.animation = "jump 5s ease-in-out infinite";
        })
    }
}, 50)


