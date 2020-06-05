// misc utility functions

//capitalize first letter of a string
function capitalizeFirstLetter(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

//alphabetize a list of Ingredient objects by name, a-z
function alphabetize(list) {
	list.sort(function (ingredient1,ingredient2) {
		var name1 = ingredient1.name.toLowerCase();
		var name2 = ingredient2.name.toLowerCase();
		return (name1 < name2) ? -1 : (name1 > name2) ? 1 : 0;
	});
}