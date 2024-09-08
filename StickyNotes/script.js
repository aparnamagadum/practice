let inp=document.querySelector("input");
let text=document.querySelector("textarea");
let btn=document.querySelector("button");
let div=document.querySelector(".notes")
btn.addEventListener("click" , ADD);
console.log(inp.value);
console.log(text.value);
let card="";
function ADD(){
card+=`
<div style="background-color: ${inp.value};">
<p>${text.value}</p>
<button onClick="this.parentElement.style.display='none'">X</button>
</div>
`
div.innerHTML=card;
storage();
}
function storage() {
    let arr = [];
    div.querySelectorAll('div').forEach((ele) => {
        arr.push({
            backgroundColor: ele.style.backgroundColor,
            text: ele.querySelector('p').innerText
        });
    });
    localStorage.setItem("arr", JSON.stringify(arr));
}