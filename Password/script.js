const inp=document.querySelector("input");
const lower=document.querySelector(".lower");
const upper=document.querySelector(".upper");
const number=document.querySelector(".number");
const symbols=document.querySelector(".symbols");
const p=document.querySelector("p");
inp.addEventListener("input" , update);
function update(){
let text=inp.value
if(text.match(/[a-z]/)){
lower.innerHTML=`<span style="color:red">lower</span>`
}
if(text.match(/[A-Z]/)){
    upper.innerHTML=`<span style="color:green">upper</span>`
}
if(text.match(/[0-9]/)){
    number.innerHTML=`<span style="color:blue">number</span>`
}
if(text.match(/[^a-zA-Z0-9]/)){
    symbols.innerHTML=`<span style="color:orange">number</span>`
}
let length=text.length
p.innerHTML=`password has ${length} chars`
}