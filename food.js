// Your first task is to build a product page 
// that displays all brands of dog food, 
// the different types, with the price 
// and size for each container volume.

// Once you have all of that information listed, 
// you need to create a second JSON file to represent 
// the new product line for Acme, Inc. They now want to sell cat food. 
// Your product owner gives you a spreadsheet with all the new data in it. 
// It is your job to get this data represented correctly in JSON format 
// and then update your page to now show cat food, along with dog food.

// Create dogfood.json and catfood.json

// XHR GET both JSON files.
// XHR send() and open()

var Petfood = (function() {
	var dogFood = [];
	var catFood = [];

	return {
		loadDogFood: function(callbackToInvoke) {
			var dogRequest = new XMLHttpRequest();

			dogRequest.addEventListener("load", function() {
				dogFood = JSON.parse(this.responseText);
				showDogFood(dogFood);
			});

			dogRequest.open("GET", "petfood.json");
			dogRequest.send();
		},

		loadCatFood: function(callbackToInvoke) {	
			var catRequest = new XMLHttpRequest();

			catRequest.addEventListener("load", function() {
				catFood = JSON.parse(this.responseText);
				showCatFood(catFood);
			});

			catRequest.open("GET", "acme.json");
			catRequest.send();
		}
	}
})();
