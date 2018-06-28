
function makeGrid() {
	//Set variables to get canvas, height, width.
	
	const myCanvas = $('#pixelCanvas');
	let gridHeight = $('#inputHeight').val();
	let gridWidth = $('#inputWidth').val();
	
	myCanvas.children().remove()
	
	for (x = 0; x < gridHeight; x++) {
	    myCanvas.append('<tr></tr>');
	}
	
	let rows = $('tr');
	
	for (y = 0; y < gridWidth; y++) {
	    rows.append('<td></td>');
	} 
	
	let cell = myCanvas.find('td');
	
   // When td is clicked by the user, change color of td
	cell.click(() => {
		// Select color input
		let color;
		color = $("#colorPicker").val();
		$(this).attr('bgcolor', color);
	});
	
}

// When grid size is submitted by the user, call makeGrid()

let submitQuery = $('#inputSubmit')

submitQuery.click((event) => {
  event.preventDefault();
  makeGrid();
});
