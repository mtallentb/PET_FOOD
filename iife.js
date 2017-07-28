let dogBrandDiv = document.getElementById("dog-brand");
let catBrandDiv = document.getElementById("cat-brand");
let breedsDiv = document.getElementById("breeds");
let typesDiv = document.getElementById("types");


function showDogFood(dogFood) {

	let dogBrands = dogFood.dog_brands;

	for (let i = 0; i < dogBrands[0].types.length; i++) {

		dogBrandDiv.innerHTML += `<h2>${dogBrands[i].name}</h2>
								  <hr>`;
		console.log(dogBrands[i]);

		for (let j = 0; j < dogBrands[i].types.length; j++) {

			console.log(dogBrands[i].types[j]);

			for (let k = 0; k < dogBrands[i].types[j].volumes.length; k++) {

				dogBrandDiv.innerHTML += `<h4>${dogBrands[i].types[j].type}</h4>
										  <h5>${dogBrands[i].types[j].volumes[k].name}</h5>
					 					  <h5>${dogBrands[i].types[j].volumes[k].price}</h5>`;	
				console.log(dogBrands[i].types[j].volumes[k]);
			}
		}		
	}
}

function showCatFood(catFood) {

	let catBrands = catFood.cat_brands;
	
	for (let i = 0; i < catBrands.length; i++) {

		catBrandDiv.innerHTML += `<h2>${catBrands[i].name}</h2>
								  <hr>
								  <h3>Breeds</h3>`;
		console.log(catBrands[i]);

		for (let j = 0; j < catBrands[i].breeds.length; j++) {
			catBrandDiv.innerHTML += `<h5>${catBrands[i].breeds[j].name}</h5>`;
			console.log(catBrands[i].breeds[j]);

		}

		for (let k = 0; k < catBrands[i].volumes.length; k++) {
			catBrandDiv.innerHTML += `<h4>${catBrands[i].volumes[k].type}</h4>
									  <h5>${catBrands[i].volumes[k].amount}</h5>
									  <h5>${catBrands[i].volumes[k].price}</h5>`;
			console.log(catBrands[i].volumes[k]);
		}


	}	
}

Petfood.loadDogFood(showDogFood);
Petfood.loadCatFood(showCatFood);