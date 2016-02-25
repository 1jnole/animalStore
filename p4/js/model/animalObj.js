/* @name:
 * @author:
 * @date:
 * @description:
 * @Attributes:

*/
function animalObj (){
	//Attributes declaration
	this.idAnimal;
	this.idUser;
	this.idAnimalType;
	this.idProvider;
	this.name;
	this.weigth;
	this.height;
	this.animalDescription;
	this.age;


	//Methods declaration
	this.construct = function (idAnimal,idUser,idAnimalType,idProvider,name,weigth,height,animalDescription,age){
		this.setIdAnimal(idAnimal);
		this.setIdUser(idUser);
		this.setIdAnimalType(idAnimalType);
		this.setIdProvider(idProvider);
		this.setName(name);
		this.setWeigth(weigth);
		this.setHeight(height);
		this.setAnimalDescription(animalDescription);
		this.setAge(age);
	}

		this.setIdAnimal = function(idAnimal) { this.idAnimal = idAnimal; }
		this.getIdAnimal = function() { return this.idAnimal; }
		this.setIdUser = function(idUser) { this.idUser = idUser; }
		this.getIdUser = function() { return this.idUser; }
		this.setIdAnimalType = function(idAnimalType) { this.idAnimalType = idAnimalType; }
		this.getIdAnimalType = function() { return this.idAnimalType; }
		this.setIdProvider = function(idProvider) { this.idProvider = idProvider; }
		this.getIdProvider = function() { return this.idProvider; }
		this.setName = function(name) { this.name = name; }
		this.getName = function() { return this.name; }
		this.setWeigth = function(weigth) { this.weigth = weigth; }
		this.getWeigth = function() { return this.weigth; }
		this.setHeight = function(height) { this.height = height; }
		this.getHeight = function() { return this.height; }
		this.setAnimalDescription = function(animalDescription) { this.animalDescription = animalDescription; }
		this.getAnimalDescription = function() { return this.animalDescription; }
		this.setAge = function(age) { this.age = age; }
		this.getAge = function() { return this.age; }



	this.arrayToString = function (arrayAnimalObj){
		var animalString ="";
		$.each(arrayCookieObj, function (index, animal){
			animalString+="Animal number "+(index+1)+":"+animal.toString()+"\n";
		});
		return animalString;

	}

	this.toCookie = function (){
		var animalString ="Animal Name="+this.getName()+":Animal Weigth="+this.getWeigth()+":Animal Height="+this.getHeight()+":Animal Description="+this.getAnimalDescription()+":AnimalAge="+this.getAge();
		return animalString;
	}

	this.toString = function (){
		var animalString ="Animal Name="+this.getName()+":Animal Weigth="+this.getWeigth()+":Animal Height="+this.getHeight()+":Animal Description="+this.getAnimalDescription()+":AnimalAge="+this.getAge();
		return animalString;
	}

this.cookieToObj = function (animalString){
	var productsArray = animalString.split(":");
	this.construct (
	productsArray[0].split("=")[2].split(" ")[0],
	productsArray[0].split("=")[3].split(" ")[0],
	productsArray[0].split("=")[4].split(" ")[0],
	productsArray[0].split("=")[5].split(" ")[0],
	productsArray[0].split("=")[6].split(" ")[0],
	productsArray[0].split("=")[7].split(" ")[0],
	productsArray[0].split("=")[8].split(" ")[0])

}




}