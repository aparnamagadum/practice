let inp=document.querySelector("input");
let div=document.querySelector(".items");
inp.addEventListener("input",filter)
const lists=async function data(){
    const data=await fetch("https://randomuser.me/api?results=50");
    const result=await data.json();
    return result.results
}
// console.log(lists());
// let rendor=async ()=>{
//  let listss=await lists();
//  let div1="";
// div1=`
// <ul>
// `
// listss.map((ele)=>{
//     div1+=`
//     <li>
//     <h2>${ele.name.first} ${ele.name.last}<h2>
//     <span>${ele.location.city}</span>
//     </li>
//     `;
//     });
// `<ul/>
// `
// div.innerHTML=div1;
// }
// rendor();
let listss=[]
let render = async () => {
    listss = await lists();
    let div1=""
    div1 = `
    <ul>
    `
    listss.map((ele) => {
        div1 += `
        <li>
            <h2>${ele.name.first} ${ele.name.last}</h2>
            <span>${ele.location.city}</span>
        </li>
        `;
    });
    `
    </ul>
    `
     // Correctly close the ul tag

    div.innerHTML = div1; // Set innerHTML to div
}

render(); // Call the function to render users

// function filter(){
//     let data=div.querySelectorAll("li");
//     let filterderData=data.filter((li)=>{
//        let name=li.querySelector("h2").textContent;
//        let loc=li.querySelector("p").textContent;
//        return name.includes(inp.value)|| loc.includes(inp.value);
//     })
//     div.innerHTML=filterderData;
// }
function filter() {
    const searchTerm = inp.value.toLowerCase();
    let filteredData = listss.filter((ele) => {
        let name = `${ele.name.first} ${ele.name.last}`.toLowerCase();
        let loc = ele.location.city.toLowerCase();
        return name.includes(searchTerm) || loc.includes(searchTerm);
    });

    let div1 = `
    <ul>
    `;
    filteredData.map((ele) => {
        div1 += `
        <li>
            <h2>${ele.name.first} ${ele.name.last}</h2>
            <span>${ele.location.city}</span>
        </li>
        `;
    });
    div1 += `</ul>`; // Close the ul tag

    div.innerHTML = div1; // Set the filtered results
}