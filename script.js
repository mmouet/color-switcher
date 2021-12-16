// Michael Mouet - JS Color Switcher

// Build a background color switcher.
// Create an HTML select dropdown with at least 5 color options in it
// use the "onchange" attribute so that every time a user selects a color using the dropdown, 
// it calls your JavaScript function that changes the background color 
// of the BODY to the color selected in the dropdown


const changeBodyColor = () => {
	let color = document.getElementById("dropdown").value;
	if (color === "red") {
		document.getElementById("body").style.backgroundColor = "red";
	} else if (color === "blue") {
		document.getElementById("body").style.backgroundColor = "blue";
	} else if (color === "orange") {
		document.getElementById("body").style.backgroundColor = "orange";
	} else if (color === "yellow") {
		document.getElementById("body").style.backgroundColor = "yellow";
	} else if (color === "white") {
		document.getElementById("body").style.backgroundColor = "white";
	}
}; 