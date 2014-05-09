function writeOut(){
	localStorage.setItem("drinkList",JSON.stringify(drinks));
	localStorage.setItem("tabs",JSON.stringify(tabs));
	localStorage.setItem("servedDrinks",JSON.stringify(servedDrinks));
	localStorage.setItem("madeDrinks",JSON.stringify(madeDrinks));
	localStorage.setItem("beingMade",JSON.stringify(beingMade));
	localStorage.setItem("notStarted",JSON.stringify(notStarted));
	localStorage.setItem("drinkCounter",drinkCounter);
}