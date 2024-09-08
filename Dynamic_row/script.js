let inp=document.querySelector("input");
let btn=document.querySelector("button");
let div=document.querySelector("div");
btn.addEventListener("click", Add);
let array=[];
function Add(){
    let text=inp.value;
    //console.log(text);
    let arr=text.split(",");
    array.push(arr);
    console.log(arr);
    let div1 = `
    <table>
    <thead>
    <tr>
        <th>Column 1</th>
        <th>Column 2</th>
        <th>Column 3</th>
    </tr>
    </thead>
    <tbody>
    `
    array.forEach((ele) => {
        div1 += `
        <tr>
            <td>${ele[0] || ""}</td>
            <td>${ele[1] || ""}</td>
            <td>${ele[2] || ""}</td>
        </tr>
        `
    });
    `
    </tbody>
    </table>
    `
    div.innerHTML=div1;  
}