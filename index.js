let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")


console.log(countEl)

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}

function decrement(){
    count = count - 1
    countEl.innerText = count
}

// Function for saving the count entries
function save(){
    let countStr = count + " - "
    saveEl.innerText += countStr
    //After clicking the Save Button,the counter will be set to 0 (Zero)
    countEl.innerText = 0
    count = 0

}