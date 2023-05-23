//your JS code here. If required.

// get button to preform on clicking
// let removeButton = document.getElementsByTagName("input");
// removeButton.addEventListener("click", removeColor);

function removeColor() {
	let selectElement = document.getElementsByTagName("select")[0];
	let selectedColor = selectElement.value;
	 
	//Reomve the color
	for (let i = 0; i < selectElement.length; i++) {
		if(selectElement.children[i].value===selectedColor){
            console.log("Item to be removed:" + selectElement.children[i].value)
			// selectElement.children[i].remove();
			break;
		}
	}	
}
