const inp=document.querySelector("input");
const upper=document.querySelector(".upperCase");
const lower=document.querySelector(".LowerCase");
const camel=document.querySelector(".camelCase");
const pascal=document.querySelector(".pascalCase");
const snake=document.querySelector(".snakeCase");
const kebab=document.querySelector(".kebabCase");
const trim=document.querySelector(".trimCase");
//console.log(inp.value);
inp.addEventListener("input" , operations)

function operations(){
     upper.innerHTML=inp.value.toUpperCase();
     lower.innerHTML=inp.value.toLowerCase();
}