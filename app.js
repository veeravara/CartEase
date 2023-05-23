import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings={
    databaseURL:"https://realtime-database-5c9c9-default-rtdb.firebaseio.com/"
}

const application=initializeApp(appSettings)
const appDatabase=getDatabase(application)
const grocerylistinDB=ref(appDatabase,"Grocery Items")




const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    push(grocerylistinDB,inputValue) /*first argument takes reference variable , where data has to be pushed , second argument takes what has to be pushed in database*/
    
    
    console.log(inputValue)
})