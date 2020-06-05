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
	//console.log(selectedIngredients);//testing
}

function bringToKitchen() {
	alphabetize(selectedIngredients);
	//remove selected items from pantry
	for (var i=0; i<selectedIngredients.length; i++) {
		for (var j=0; j<invPantry.length; j++) {
			if (invPantry[j].name==selectedIngredients[i].name) {
				//if there's only one item in the pantry, remove it
				if (invPantry.length==1 & invPantry[j].count==1) {
					invPantry = [];
				}
				//if there's more than one, reduce count by one and deselect
				else if (invPantry[j].count>1) {
					invPantry[j].count = invPantry[j].count - 1;
					invPantry[j].selected = false;
				}
				//if there's just one of the item, remove it from invPantry
				else {
					invPantry = invPantry.splice(i-1,1);
				}
				break;
			}
		}
	}
	//move to kitchen inventory and clear selected ingredients list
	for (var i=0; i<selectedIngredients.length; i++) {
		invKitchen.push(selectedIngredients[i]);
	}
	alphabetize(invKitchen);
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
	//if not known, display new recipe card and make recipe known
	//display cooked food
	//add cooked food to inv
	//clear kitchen inv and display kitchen
}