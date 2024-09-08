const inp=document.querySelector("input")
const div=document.querySelector("div")
let arr=[];
inp.addEventListener("change" , Add);
function Add(){
    let div1='';
    arr.push(inp.value);
    arr.map((ele)=>{
        div1+=`
        <div>
        <span>${ele}</span>
        <button>edit</button>
        <button onClick="this.parentElement.style.display='none'">delete</button>
        </div>
        `
    })
    div.innerHTML=div1
}