//contains classes and functions for inventory management

//ingredient constructor
function Ingredient(name, count) {
	this.name = allIngredients[name].name;
	this.desc = allIngredients[name].desc;
	this.cost = allIngredients[name].cost;
	this.img = allIngredients[name].img;
	this.count = count;
	this.selected = false;
}

//check equality of two ingredients
function ingredientEquals(food1,food2) {
	if (food1.name!=food2.name) {
		return false;
	}
	return true;
}