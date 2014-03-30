//global scope
var myBoolean = true;
var myVar = 3

function myFunction(){

	document.getElementById("demo").innerHTML = "Hello Dolly";

	//conditionals
	if(myBoolean)
	{
		document.getElementById("demo").innerHTML = "This boolean is true";
	}
}

function myOtherFunction (){

	if(myBoolean){

	}
	//other stuff happens

	switch (myVar) {
		case 1:
			console.log("case 1 is true");
			break;
		case 2:
			console.log("case 2 is true");
			break;
		default:
			console.log("none of the cases are true");
			break;
	}
}

function myArray() {

	//container
	var myArray = ["crossbow","gun","sonicScrewdriver","fork"]
	
	console.log(myArray[1]);
	
	myArray[1] = "knife";

	console.log(myArray[1]);

	// for (var i = 0; i < myArray.length; i++) {
	// 	myArray[i] = "potato Cannon";
	// }

	var locationIndex = myArray.indexOf("fork")
	
	console.log(locationIndex);

	myArray.push("sword");
	console.log(myArray);

	myArray.pop();
	console.log(myArray);

	var holder = myArray.toString();
	console.log(holder);

}

//myArray();

function myCharacter(name, health)
{
	//global
	this.name = name;
	this.health = health;
	var myvar = 10;

	this.loseHealth = function(){
		this.health --;
	};
}

var myFirstPerson = new myCharacter("fred", 12);
var mySecondPerson = new myCharacter("willma", 13);

console.log(" this character has a health of " + mySecondPerson.health);

mySecondPerson.loseHealth();
console.log(" this character has a health of " + mySecondPerson.health);