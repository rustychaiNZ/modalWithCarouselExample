console.log('Array of objects');

// an array containing dogs info
var dogs = [
	// First object of the array is contained within the square brackets and contained within a curly bracket
	{
		// variables inside an object are seperated with a comma
		name : 'Celia',
		id : 'd101',
		breed : 'Jack Russell Terrior',
		color : 'white and brown',
		height : 20, // how tall in cm
		age : 16, // years old
		photo1 : 'assets/jackRussell.jpg',
		photo2 : 'assets/jackRussell2.jpg',
		photo3 : 'assets/jackRussell3.jpg',
		job : 'Ratter'
	},	// a comma goes at the end of the curly brackets to seperate each object
	{
		name : 'Jim',
		id : 'd102',
		breed : 'Australian Shepherd',
		color : 'White and Black',
		height : 60, //cm
		age : 7,
		photo1 : 'assets/australianShepherdDog.jpg',
		photo2 : 'assets/australianShepherdDog2.jpg',
		job : 'Rounding Dog'
	},
	{
		name : 'Steve',
		id : 'd103',
		breed : 'Golden Retrever.jpg',
		color : 'Yellow',
		height : 70, //cm
		age : 3,
		photo1 : 'assets/goldenRetrever.jpg',
		photo2 : 'assets/goldenRetrever2.jpg',
		job : 'Being the bestest of friends'
	},
	{
		name : 'Kyle',
		id : 'd104',
		breed : 'Grey Hound',
		color : 'Black',
		height : 75, //cm
		age : 4,
		photo1 : 'assets/greyHound.jpg',
		photo2 : 'assets/greyHound2.jpg',
		job : 'Racing'
	},
	{
		name : 'Whip',
		id : 'd105',
		breed : 'Whippet',
		color : 'Brown and White',
		height : 45, //cm
		age : 8,
		photo1: 'assets/whippet.jpg',
		photo2: 'assets/whippet2.jpg',
		job : 'Racing'
	},
	{
		name : 'Jeffery',
		// consistent id pattern is used to make it easier to be able to call on a modal to show extra information for any particular dog
		id : 'd106', 
		breed : 'Pug',
		color : 'Black',
		height : 35, //cm
		age : 9,
		photo1 : 'assets/pug.jpg',
		photo2 : 'assets/pug2.jpg',
		job : 'Dying slowly and painfully because \'they look cute\''
	} // The last array item does not need a comma at the end
];

// Variable is used to generate id's for images
var id = 101;

// Calls the first photo from the array
document.getElementById('dogsContainer').innerHTML = '<h3 class="jumbotron col-12 bg-dark text-center">' + dogs[0].name + '</h3>' + '<img class="img-thumbnail" src="' + dogs[0].photo1 + '" alt="Dog"> <br>';

// --- Functions
// Function that clears the divs
function clear(){
	document.getElementById('dogsContainer').innerHTML = '';
	document.getElementById('dogsContainerNoStyle').innerHTML = '';
}
// A function that clears the field to change dog names
function fieldReset() {
	document.getElementById('oldName').value = '';
	document.getElementById('newName').value = '';
}

// Function stores all of the styling and displayed information for dogs being called on
function allDogs() {
	// Displays the dogs name on the left in a 'jumbotron'
	document.getElementById('dogsContainer').innerHTML += '<h3 class="jumbotron col-md-4 bg-dark text-center">' + dogs[i].name + '</h3>';
	// Displays an image of the dog itself
	document.getElementById('dogsContainer').innerHTML += '<div class="col-md-4"><img id="d' + id.toString() + '" class="img-thumbnail img-body  my-dogs" src="' + dogs[i].photo1 + '"alt="Dog"> </div>'; // ID is incremented automatically
	// Displays the remaining information about the dog taken from the array function
	document.getElementById('dogsContainer').innerHTML += '<ul class="jumbotron col-md-4 bg-custom">' +
	'<li><b>ID#:</b> D' + id++ + '</li>' + 
	'<li><b>Breed:</b> ' + dogs[i].breed + '</li>' + 
	'<li><b>Colour:</b> ' + dogs[i].color + '</li>' + 
	'<li><b>Height (cm):</b> ' + dogs[i].height + '</li>' +
	'<li><b>Age(Years): </b>' + dogs[i].age + '</li>' + 
	'<li><b>Job: </b>' + dogs[i].job + '</li>' +
	'</ul>';
}

// Dog in modals
function dogInModal() {
	// Displays the remaining information about the dog taken from the array function
	document.getElementById('dogModal').innerHTML = 
	'<h2 class="display-3 text-center bg-custom">' + dogs[i].name + '</h2> <br>' +
	// Bootstrap carousel to show multiple photos of the same dog starts here
	'<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">' + 
		'<ol class="carousel-indicators">' +
			'<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>' + 
			'<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>' +
		'</ol>' + 
		'<div class="carousel-inner">' +
			'<div class="carousel-item active">' + 
				'<img src="' + dogs[i].photo1 + '" class="img-modal my-dogs" alt="...">' + 
			'</div>' + 
			'<div class="carousel-item">' + 
				'<img src="' + dogs[i].photo2 + '" class="img-modal my-dogs" alt="...">' + 
			'</div>' + 
		'</div>' + 
		'<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">' + 
			'<span class="carousel-control-prev-icon" aria-hidden="true"></span>' + 
			'<span class="sr-only">Previous</span>' + 
		'</a>' + 
		'<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">' + 
			'<span class="carousel-control-next-icon" aria-hidden="true"></span>' + '<span class="sr-only">Next</span>' + 
		'</a>' + 
	'</div>' +
	// Bootstrap carousel finishes here

	'<ul class="jumbotron bg-custom">' +
	'<li><b>ID#:</b> D' + id++ + '</li>' + 
	'<li><b>Breed:</b> ' + dogs[i].breed + '</li>' + 
	'<li><b>Colour:</b> ' + dogs[i].color + '</li>' + 
	'<li><b>Height (cm):</b> ' + dogs[i].height + '</li>' +
	'<li><b>Age(Years): </b>' + dogs[i].age + '</li>' + 
	'<li><b>Job: </b>' + dogs[i].job + '</li>' +
	'</ul>';
}

// --- Shows all dogs listed in array
// Loop to call of the dogs from the array
/*
	* Will look for the variable 'dogs'
	* will count the length of the array
	* Will run for as long as the array is in length
	* Lists all images after the first
*/

// Displays all dogs at the start of the code
for (i=0;i < dogs.length; i++) {
		allDogs();
}


// Function that is called to display all information about the dogs
document.getElementById('allDogs').addEventListener('click', function(){
	clear();
	// function for information about dogs being called
	for (i=0;i < dogs.length; i++) {
		allDogs();
	}
});

// --- Displays my personal dog
// Button to calls items from my array that are Jack Russell
document.getElementById('jackRussell').addEventListener('click', function(){
	clear();
	for(i=0; i < dogs.length; i++){
		if(dogs[i].breed === 'Jack Russell Terrior') {
			allDogs();
		}
	}
});

// --- Shows all large dogs
// Button that only shows tall dogs
document.getElementById('largeDog').addEventListener('click', function(){
	clear();
	for(i=0; i < dogs.length; i++){
		if(dogs[i].height >= 56) {
			allDogs();
		}
	}
});

// --- Button that shows all small dogs
document.getElementById('smallDog').addEventListener('click', function(){
	clear();
	for(i=0; i < dogs.length; i++){
		if(dogs[i].height < 55) {
			allDogs();
		}
	}
});

// --- Button to show all racing dogs
document.getElementById('racingDogs').addEventListener('click', function(){
	clear();
	document.getElementById('dogsContainer').innerHTML +='<h2 class="col-12">Racing Dogs</h2>'; 
	for(i=0; i < dogs.length; i++){
		// If the script finds a jack Russell in the array, it will display their name, id, image and other information displayed in the array
		if(dogs[i].job.indexOf('Racing') > (-1) ) {
			allDogs();
		}
	}
});

// --- Changing Dog's name
document.getElementById('changeName').addEventListener('click', function() {
	// Finds the inputted name by the user and stores it as variable
	var oldName = document.getElementById('oldName').value;
	// Uses new inputted name by the variable and stores it
	var newName = document.getElementById('newName').value;
	console.log(oldName, newName);
	// Loop used to go through array and find the matching old name
	for(var i = 0; i < dogs.length; i++) {
    	// If oldName variable matches another dog's in the data base
    	if (oldName === dogs[i].name){
    		// Dogs name is changed to the new inputted name
    		dogs[i].name = newName;
    	}
   	}
   	// Clears the fields for user to edit more names
   	fieldReset();
});

// Shows my custom modal of any particular dog that the user clicks on 
$('.my-dogs').on('click', function(){
	// Shows the id of the dog that was clicked in the console, used for trouble shooting 
	console.log(this.id);
	// Reveals the modal that the information is going to be shown in 
	$('.my-modal').show();
	for(i=0; i<dogs.length; i++) {
		// This looks at the id defined and checksfor equivalence with the image id that was clicked. It will dispaly the information
		if(this.id.trim() == dogs[i].id.trim()) {
			// Prints the dog that was clicked into the modal with the correlating information
			dogInModal();
		}
	}
});

// This allows the user to be able to close the modal by hitting the 'x' in the top right of the modal
$('.close-bar').on('click', function() {
	// Used for trouble shooting to make sure that the button press was being recorded
	console.log('Close Modal');
	// Hides the modal on clicking the button
	$('.my-modal').hide();
});


// Sorting dogs in alphabetical order
document.getElementById('descName').addEventListener('click', function() {
	clear();
	// calling a function called compare to define the object property 
	dogs.sort(compare); 
	/* 
		* The 'a' paremeter is used to represent the first
		* The 'b' paremeter is used to represent the next object in the array
	*/
	function compare(a,b){
		if(a.name < b.name) {
			// Returns true for the name coming before the remaining names
			return 1;
		} else if(a.name > b.name) {
			// Returns false
			return -1;
		}
	} // end of the function

	for(i=0; i<dogs.length; i++){
		allDogs();
	}
});
// Sort alphabetical order a-z
document.getElementById('ascName').addEventListener('click', function() {
	clear();

	dogs.sort(compareReverse);

	function compareReverse(b,a){
		if (a.name < b.name) {
			return 1;
		} else if (a.name > b.name) {
			return -1;
		}
	}
	for(i=0; i<dogs.length; i++){
		allDogs();
	}
});
// Sort by age ascending
document.getElementById('ascAge').addEventListener('click', function() {
	clear();

	dogs.sort(compareAgeAsc);

	function compareAgeAsc(b,a) {
		if(a.age < b.age) {
			return 1;
		} else if(a.age > b.age) {
			return -1;
		}
	}

	for(i=0; i<dogs.length; i++){
		allDogs();
	}
});
// Sort age by descending
document.getElementById('descAge').addEventListener('click', function() {
	clear();

	dogs.sort(compareAgeDesc);

	function compareAgeDesc(a,b) {
		if(a.age < b.age) {
			return 1;
		} else if(a.age > b.age) {
			return -1;
		}
	}

	for(i=0; i<dogs.length; i++){
		allDogs();
	}
});

































