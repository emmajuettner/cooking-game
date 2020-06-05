//functions to show or hide various menus and areas

//modal functions
function showAbout() {
	document.getElementById("about-modal").style.display = "block";
}

function hideAbout() {
	document.getElementById("about-modal").style.display = "none";
}

//functions for displaying various elements in the main content areas, activated by clicking navbar buttons or on changes to inventories
function showKitchen() {
	var content = "kitchen<br>";
	for (var i = 0; i<invKitchen.length; i++) {
		content = content + invKitchen[i].name+"<br>";
	}
	content = content + "<button id=\"cook-btn\" onclick=\"cookFood()\">Cook!</button>";
	document.getElementById("foodstand-content").innerHTML = content;
}

function showStorefront() {
	var content = "storefront<br>";
	for (var i=0; i<invStorefront.length; i++) {
		content = content + invStorefront[i].name + "<br>";
	}
	document.getElementById("foodstand-content").innerHTML = content;
}

function showGarden() {
	document.getElementById("foodstand-content").innerHTML = "garden";
}

function showPantry() {
	var content = "";
	//add footer with buttons for transferring ingredients
	content = content + "<div id=\"pantry-footer\"><button id=\"bringToKitchen\" onclick=\"bringToKitchen()\">Bring to Kitchen</button><button id=\"bringToStorefront\" onclick=\"bringToStorefront()\">Bring to Storefront</button></div>";
	
	//display all foods currently in player's inventory in a grid
	content = content + "<div class=\"grid-inv\">";
	for (var i=0; i<invPantry.length; i++) {
		//open div and add img
		content = content + "<div class=\"grid-container-"+invPantry[i].selected+"\"><div class=\"tooltip\"><img src=\"img/"+invPantry[i].img+"\" alt=\""+invPantry[i].name+"\" onclick=\"selectIngredient("+i+")\"/>";
		//add tooltip text
		content = content + "<div class=\"tooltiptext\">"+capitalizeFirstLetter(invPantry[i].name)+"<br>"+invPantry[i].desc+"<br>Costs "+invPantry[i].cost+" coins.</div>";
		//add count overlay
		content = content + "<div class=\"count-overlay\">"+invPantry[i].count+"</div>";
		//close divs
		content = content + "</div></div>";
	}
	content=content+"</div>";
	document.getElementById("internalmenu-content").innerHTML = content;
	//disable bringToKitchen and bringToStorefront buttons if no items selected
	if (selectedIngredients.length==0) {
		document.getElementById("bringToKitchen").disabled = true;
		document.getElementById("bringToStorefront").disabled = true;
	}
}

function showRecipes() {
	document.getElementById("internalmenu-content").innerHTML = "<div class=\"grid-inv\"><div class=\"grid-container\">recipe-1</div><div class=\"grid-container\">recipe-2</div><div class=\"grid-container\">recipe-3</div><div class=\"grid-container\">recipe-4</div><div class=\"grid-container\">recipe-5</div></div>";
}

function showAchievements() {
	document.getElementById("internalmenu-content").innerHTML = "<div class=\"grid-inv\"><div class=\"grid-container\">achievement-1</div><div class=\"grid-container\">achievement-2</div><div class=\"grid-container\">achievement-3</div><div class=\"grid-container\">achievement-4</div><div class=\"grid-container\">achievement-5</div></div>";
}

function showMap() {
	document.getElementById("externalmenu-content").innerHTML = "map";
}

function showAddressBook() {
	document.getElementById("externalmenu-content").innerHTML = "address book";
}