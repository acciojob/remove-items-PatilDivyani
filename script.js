//your JS code here. If required.
function removeColor() {
	let selectElement = document.getElementById("colorSelect");
	let selectColor = selectElement.value;
	
	//Reomve the color
	for (let i = 0; i < selectElement.length; i++) {
		if(selectElement.option[i].value===selectColor){
			selectElement.remove(i);
			break;
		}
	}	
}

// get button to preform on clicking
var removeButton = document.getElementById("removeButton");
removeButton.addEventListener("click", removeColor);