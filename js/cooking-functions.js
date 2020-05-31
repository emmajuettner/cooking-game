//these functions control selection of ingredients and the cooking process
var selectedIngredients = [];

function selectIngredient(index) {
	//if it's not selected, select it
	if (invPantry[index].selected==false) {
		//add to selected list
		selectedIngredients.push(new Ingredient(invPantry[index].name,1));
		//make ingredient selected in pantry
		invPantry[index].selected = true;
	}
	//if it is selected, deselect it
	else {
		//remove from selected list
		selectedIndex = selectedIngredients.indexOf(invPantry[index]);
		if (selectedIngredients.length>1) {
			selectedIngredients = selectedIngredients.splice(selectedIndex,1);
		}
		else {
			selectedIngredients = [];
		}
		//make ingredient deselected in pantry
		invPantry[index].selected = false;
	}
	//reload pantry display for new selected styles
	showPantry();
	console.log(selectedIngredients);//testing
}

function bringToKitchen() {
	//remove selected items from pantry
	for (var i=0; i<invPantry.length; i++) {
		if (invPantry[i].selected==true) {
			//if there's more than one, reduce count by one and deselect
			if (invPantry[i].count>1) {
				invPantry[i].count = invPantry[i].count - 1;
				invPantry[i].selected = false;
			}
			//if there's just one, remove it from invPantry
			else {
				invPantry = invPantry.splice(i,1);
			}
		}
	}
	//move to kitchen inventory and clear selected ingredients list
	invKitchen = selectedIngredients;
	selectedIngredients = [];
	//reload kitchen and pantry displays
	showKitchen();
	showPantry();
}

function bringToStorefront() {
	
}

function cookFood() {
	//check selected ingredients against recipes
	//check if recipe is known
	//if not known, display new recipe card
	//display cooked food
}