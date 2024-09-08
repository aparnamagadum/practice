const inp=document.querySelector("input")
const div=document.querySelector("div")
let arr=[];
inp.addEventListener("change" , add)
function add(){
    arr.push(inp.value);
    let div1="";
   arr.map((ele)=>{
   div1+=`
   <div style="background-color: gray; border:1px solid white;border-radius:10px; display:inline-block;padding:10px">
   <span>${ele}</span>
    <button onClick="this.parentElement.style.display='none'" style="color:red;border:none;background-color: gray;">X</button>
   </div>
   `
})
div.innerHTML=div1;
}