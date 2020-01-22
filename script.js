var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	deleteButton = createDeleteButton();
	li.appendChild(deleteButton);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleDoneUndoneTask (event) {
	var target = event.target;
	if (target.tagName === "LI"){
		target.classList.toggle("done");
	} 
	
}

function removeTask (event) {
	var target = event.target;
	if (target.className === "delete"){
		target.parentElement.remove();
	} 	
}

function createDeleteButton() {
	var deleteButton = document.createElement("button");
	var deleteClass = document.createAttribute("class");
	deleteClass.value = "delete";
	deleteButton.setAttributeNode(deleteClass);
	deleteButton.innerHTML = "delete";

	return deleteButton;
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

document.addEventListener("click",toggleDoneUndoneTask);

document.addEventListener("click",removeTask);

//for existing item on list, create the delete buttons
for (let i = 0; i < ul.children.length; i++) {
	deleteButton = createDeleteButton();
	ul.children[i].appendChild(deleteButton);
}

