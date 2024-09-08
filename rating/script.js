const btn1=document.querySelector(".one")
const btn2=document.querySelector(".two")
const btn3=document.querySelector(".three")
const btn4=document.querySelector(".four")
const btn5=document.querySelector(".five")
const div=document.querySelector("div")
btn1.addEventListener("click",oneStar);
btn2.addEventListener("click",twoStar);
btn3.addEventListener("click",threeStar);
btn4.addEventListener("click",fourStar);
btn5.addEventListener("click",fiveStar);
function oneStar(){
   div.innerHTML='<i class="fas fa-sad-tear"></i>'
}
function twoStar(){
    div.innerHTML='<i class="fas fa-sad-tear"></i>'
 }
 function threeStar(){
    div.innerHTML='<i class="fas fa-sad-tear"></i>'
 }
 function fourStar(){
    div.innerHTML='<i class="fas fa-sad-tear"></i>'
 }function fiveStar(){
    div.innerHTML='<i class="fas fa-sad-tear"></i>'
 }