let inp=document.querySelector('input');
let btn=document.querySelector("button");
let div=document.querySelector(".div");
let p=document.querySelector(".p")
let arr=["Your Guesses:"];
btn.addEventListener("click",add);
function add(){
    arr.push(Number(inp.value));
    let div1="";
   arr.map((ele)=>{
   div1+=`
   <span>${ele}</span>
 `
})
div.innerHTML=div1;
}
