//this is executed as soon as the page loads
function initGame() {
	//display initial screens
	showKitchen();
	showPantry();
	showMap();
}

//initialize inventories
var invKitchen = []; //should be empty at start
var invStorefront = []; //should be empty at start
var invPantry = []; //load ingredients if game save exists, otherwise preset
invPantry.push(new Ingredient("apple",1));
invPantry.push(new Ingredient("banana",3));