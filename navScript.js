let navbarEl = document.getElementById("navbar");
let barEl = document.getElementById("bar");
let closeEl = document.getElementById("close");

if(barEl){
    barEl.addEventListener('click', ()=>{
        navbarEl.classList.add("active");
    })
}
if(closeEl){
    closeEl.addEventListener('click', ()=>{
        navbarEl.classList.remove("active");
    })
}
