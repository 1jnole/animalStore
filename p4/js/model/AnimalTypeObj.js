/*
 * @name: object productType
 * @properties:
 *     	id: identification prouct
 * 		name: product (computer component) name
 * 
 * @methods: Constructor and getters & setters of each property.
 * @version: 25/11/2015 
 */
 
 this.AnimalTypeObj = function() {
	//properties
	this.idAnimalType;
	this.specie;
	this.habitat;
	 
	//methods
	this.construct = function (idAnimalType,specie,habitat)
	{
		this.setIdAnimalType(idAnimalType);
		this.setSpecie(specie);
		this.setHabitat(habitat);
	}
	 
	this.setIdAnimalType = function(idAnimalType) { this.idAnimalType = idAnimalType; } 
	this.getIdAnimalType = function() { return this.idAnimalType; } 
	this.setSpecie = function(specie) { this.specie = specie; } 
	this.getSpecie = function() { return this.specie; } 
	this.setHabitat = function(habitat) { this.habitat = habitat; } 
	this.getHabitat = function() { return this.habitat; }  
 }