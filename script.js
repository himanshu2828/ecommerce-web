let mainImgEl = document.getElementById("mainImg");
let smallImgEl = document.getElementsByClassName("product-suggestion");


let im1 = "Images/Product/f1.jpg";
let im2 = "Images/Product/f2.jpg";
let im3 = "Images/Product/f3.jpg";
let im4 = "Images/Product/f4.jpg";

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

smallImgEl[0].onclick = function(){
    mainImgEl.src = smallImgEl[0].src;
}

smallImgEl[1].onclick = function(){
    mainImgEl.src = smallImgEl[1].src;
}

smallImgEl[2].onclick = function(){
    mainImgEl.src = smallImgEl[2].src;
}

smallImgEl[3].onclick = function(){
    mainImgEl.src = smallImgEl[3].src;
}


