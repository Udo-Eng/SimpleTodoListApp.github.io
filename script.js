//Select all the elm=ement from DOM 
const userInput = document.getElementById("userInput");
const button = document.getElementById("button");
const List = document.getElementById("List");



//Implementing  the functions
function CreateListItem() {
    let li = document.createElement('li');
    let Text = document.createTextNode(`${userInput.value}`);
    li.appendChild(document.createTextNode(`${userInput.value}`));
    let ListButton = document.createElement('button');
    ListButton.innerText = 'done';
    ListButton.classList.add('btn');
    li.appendChild(ListButton);
    List.appendChild(li);
    userInput.value = '';
}
function CreateListItemAfterClick() {
    if (userInput.value.length > 0) {
        CreateListItem();
    }
}

function CreateListItemAfterKeyPress(event) {
    if (userInput.value.length > 0 && event.which === 13) {
        CreateListItem();
    }
}

//Event Listener for click 
button.addEventListener("click", CreateListItemAfterClick);

//Event Listener for KeyPress 
userInput.addEventListener("keypress", CreateListItemAfterKeyPress);

//Event Listener for click  event to Delete Items 
button.addEventListener("click", DeleteItems);

//Event Listener for KeyPress to Delete Items 
userInput.addEventListener("keypress", DeleteItems);

//Delete Items 
function DeleteItems() {
    const doneButton = document.querySelectorAll(".btn");

    doneButton.forEach(function (button) {
        button.addEventListener("click", function () {
            let ListItem = button.parentNode;
            let List = button.parentNode.parentNode;
            console.log(List);
            List.removeChild(ListItem);
        })
    })
}

