const inp = document.querySelector("input");
const ul = document.querySelector("ul");

inp.addEventListener("input", filter);

function filter() {
    const inputValue = inp.value.toLowerCase();
    
    // Convert ul children (li elements) into an array
    const items = Array.from(ul.querySelectorAll("li"));
    
    // Filter based on the input value
    const filteredItems = items.filter((li) => {
        const h2Text = li.querySelector("h2").textContent.toLowerCase();
        const pText = li.querySelector("p").textContent.toLowerCase();
        
        return h2Text.includes(inputValue) || pText.includes(inputValue);
    });

    // Clear the ul and append the filtered items
    ul.innerHTML = "";
    filteredItems.forEach(item => ul.appendChild(item));
}
