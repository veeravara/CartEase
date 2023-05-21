// GRABBING ELEMENTS
const inputFieldElement=document.getElementById("input-field")
const buttonElement=document.getElementById("add-button")
buttonElement.addEventListener("click",buttonFunction)

function buttonFunction(){
    let inputEnteredValue=inputFieldElement.value
    console.log(inputEnteredValue)
}