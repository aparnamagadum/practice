const decre=document.querySelector(".decreament");
const incre=document.querySelector(".increament");
const inp=document.querySelector("input")
const h1=document.querySelector("h1")
let count=0;
decre.addEventListener("click" , decrement);
incre.addEventListener("click" , increament);
function decrement(){
count-=Number(inp.value);
h1.innerHTML=count;
}
function increament(){
    count+=Number(inp.value);
    h1.innerHTML=count;
}


