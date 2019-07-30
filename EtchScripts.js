function pixelCreator(numOfPixels){
	let gridContainer = document.getElementById('container');

	for (var i = 0; i < Math.pow(numOfPixels, 2); i++) {
		pixel = document.createElement('div');
		pixel.className = `pixel ${i}`;
		gridContainer.appendChild(pixel);
		};

	let list1 = document.querySelectorAll('.pixel');
	let array1 = Array.from(list1);

	let newNum = 960 / parseInt(numOfPixels);

	array1.forEach(function(element) {
   		element.style.setProperty('width', `${newNum}px`);
   		element.style.setProperty('height', `${newNum}px`);
   		element.addEventListener("mouseover", function(){
   			element.style.backgroundColor = "black";
   		});
	});

}

function getPixel(){
	let numOfPixels = prompt("Please enter the number of pixels: ");
	return numOfPixels;
}

function reset() {
	let list1 = document.querySelectorAll('.pixel');
	let array1 = Array.from(list1);

	array1.forEach(function(element) {
   		element.remove();
   		});

	pixelCreator(getPixel());
};

pixelCreator(getPixel());

document.getElementById("btnReset").onclick = reset;