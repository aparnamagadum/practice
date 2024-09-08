const div=document.querySelector("div");
let div1=document.createElement("div")
let btn=document.querySelector(".start")
let btn1=document.querySelector(".stop")
let intervalID;
btn.addEventListener("click" , bar)
btn1.addEventListener("click" , stopBar)
function bar(){
    let count=0;
    intervalID=setInterval(function(){
    if(count<=100){
    count++;
    div1.style.width=count+"%"
    div1.style.height="20px"
    div1.style.backgroundColor="red"
    div1.style.borderRadius='10px'
    }},200)
    div.appendChild(div1)
}
function stopBar(){
    clearInterval(intervalID)
}

