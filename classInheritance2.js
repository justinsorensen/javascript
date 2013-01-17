// Make an animal class with attributes: name, numLegs and color.
// exercise inspired by codecademy
// attempt at looping output for large number of attributes.

<script type="text/javascript">

function Animal(name, numLegs, color) {
    this.name = name;
    this.numLegs = numLegs;
    this.color = "brown";
}
Animal.prototype.sayName = function() {
		for(var property in this){
		document.write(property+" = "+this[property]+", ");  //outputs properties but also outputs the function, must fix
		}
};

//Define dog class here
function Dog(name) {
	this.name = "blue";			//when changed to static, instance class name takes precedence.
	this.numLegs = 4;
						//no color attribute here to demonstrate inheritance hopefully?
}

function Teacup(name) {
	this.name = name;
}

// prototype chain set here
Dog.prototype = new Animal();
Teacup.prototype = new Dog();

var dog = new Teacup("tinkerbell");
dog.sayName();

</script>

//Stored for replacement in sayName
//document.write("Hi, I'm "+this.name+"! I have "+this.numLegs+" legs and I'm "+this.color+"!"); 