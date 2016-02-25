/*
 * @name: object providerObj
 * @properties:
 *     	id: identification prouct
 * 		name: product (computer component) name
 * 
 * @methods: Constructor and getters & setters of each property.
 * @version: 2015/01/14
 */
 
this.providerObj = function() {
	//properties
	this.idProvider;
	//this.idAnimal;
	this.name;
	this.address;
	this.phone;
	this.email;
	 
	//methods
	this.construct = function (idProvider,name,address,phone,email)
	{
		this.setIdProvider(idProvider);
		//this.setIdAnimal(idAnimal);
		this.setName(name);
		this.setAddress(address);
		this.setPhone(phone);
		this.setEmail(email);
	}

	this.setIdProvider = function(idProvider) { this.idProvider = idProvider; } 
	this.getIdProvider = function() { return this.idProvider; } 
	//this.setIdAnimal = function(idAnimal) { this.idAnimal = idAnimal; } 
	//this.getIdAnimal = function() { return this.idAnimal; } 
	this.setName = function(Name) { this.Name = Name; } 
	this.getName = function() { return this.Name; } 
	this.setAddress = function(Address) { this.Address = Address; } 
	this.getAddress = function() { return this.Address; } 
	this.setPhone = function(Phone) { this.Phone = Phone; } 
	this.getPhone = function() { return this.Phone; } 
	this.setEmail = function(Email) { this.Email = Email; } 
	this.getEmail = function() { return this.Email; } 
 }
 