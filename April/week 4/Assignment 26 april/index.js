const inputValue = document.querySelector('input')
const submit = document.getElementById('btn')
const clear = document.getElementById('btn-clear')
const display = document.querySelector('.display')

submit.addEventListener('click',arrFunction)
const itemArr = []

function arrFunction(){

    const newElement = {
         id : Date.now(),
         task : inputValue.value
    }
    itemArr.push(newElement)
    console.log(itemArr);
    inputValue.value = ''
    displayFunction()
}


function displayFunction(){
    display.innerHTML = ``
    for (let i = 0; i < itemArr.length; i++) {
        const element = itemArr[i]
        

    const addElement = `
    ${element.task} <button onclick = 'deleteElement(${element.id})' id="delete">Delete</button><br><br>
    `
    display.innerHTML = display.innerHTML + addElement
    inputValue.value = ''
    }
}
// const deleteElement = document.getElementById('delete')

// deleteElement.addEventListener('click',deleteFunction)

function deleteElement(id){
    let index = 0

    for (let i = 0; i < itemArr.length; i++) {
        const element = itemArr[i];
        if(element.id === id){
            index = i
        }
        
    }
    itemArr.splice(index,1)
    console.log(itemArr);
    displayFunction()

}
clear.addEventListener('click',allClear)
function allClear(){
    itemArr.splice(0,itemArr.length)
    console.log(itemArr);
    display.innerHTML = ''
}