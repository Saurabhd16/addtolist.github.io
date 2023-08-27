import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js"
import { getDatabase,ref,push} from "https://www.gstatic.com/firebasejs/10.3.0/firebase-database.js"

const appsettings={
    databaseURL:"https://storecart-25451-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app=initializeApp(appsettings)
const database=getDatabase(app)
const items=ref(database,"itemslist")

const inputdata = document.getElementById("input-data");
const buttonclick = document.getElementById("add-to-cart");
const add_to_list=document.getElementById("list_items") 

buttonclick.addEventListener("click", function () {
    let inputval = inputdata.value;
    push(items, inputval);
    inputdata.value="";
    add_to_list.innerHTML += `<li>${inputval}</li>`;
});

add_to_list.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        event.target.remove();
    }
});

function addListItem(itemText) {
    const li = document.createElement('li');
    li.textContent = itemText;
    add_to_list.appendChild(li);
}
