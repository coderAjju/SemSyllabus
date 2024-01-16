let menuBtn = document.querySelector(".menu");
let menuIcon = document.querySelector(".menu i");
let sideContainer = document.querySelector(".sideContainer");

let menuClick = true;
menuBtn.addEventListener("click",()=>{
    if(menuClick){
        sideContainer.style.display = "block";
        menuBtn.innerHTML = `<i class="fa-solid fa-circle-arrow-up"></i>`
        menuClick = false;
    }
    else{
        sideContainer.style.display = "none";
        menuBtn.innerHTML = `<i class="fa-solid fa-circle-arrow-down"></i>`
        menuClick = true;
    }
})