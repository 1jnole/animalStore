

/* @name:
 * @author:
 * @date:
 * @description:
 * @Attributes:
 *      id: identification of food in stock
 *      .
 *      .
 *      .
 * @methods:
 *      construct
 *      set's and get's foor each attribute
 *
 *
 *
*/
function userObj (){
    //Attributes declaration
    this.id;
    this.name;
    this.nick;
    this.password;
    this.firstSurname;
    this.secondSurname;
    this.phone;
    this.email;
    this.adress;
    this.registrationData;
    this.downData;
    this.typeUser;
 
 
    //Methods declaration
    this.construct = function (id,name,nick,password,firstSurname,secondSurname,phone,email,adress,registrationData,downData,typeUser){
        this.setId(id);
        this.setNick(nick);
        this.setPassword(password);
        this.setName(name);
        this.setFirstSurname(firstSurname);
        this.setSecondSurname(secondSurname);
        this.setPhone(sizeOf);
        this.setColorOf(phone);
        this.setEmail(email);
        this.setAdress(adress);
        this.setRegistrationData(registrationData);
        this.setDownData(downData);
        this.setTypeUser(typeUser);
    }

    this.constructLogin = function (id,nick,password,typeUser){
        this.setId(id);
        this.setNick(nick);
        this.setPassword(password);
        this.setTypeUser(typeUser);
    }
 
        this.setId = function(id) { this.id = id; }
        this.getId = function() { return this.id; }
        this.setNick = function(nick) { this.nick = nick; }
        this.getNick = function() { return this.nick; }
        this.setPassword = function(password) { this.password = password; }
        this.getPassword = function() { return this.password; }
        this.setName = function(name) { this.name = name; }
        this.getName = function() { return this.name; }
        this.setFirstSurname = function(firstSurname) { this.firstSurname = firstSurname; }
        this.getFirstSurname = function() { return this.firstSurname; }
        this.setSecondSurname = function(secondSurname) { this.secondSurname = secondSurname; }
        this.getSecondSurname = function() { return this.secondSurname; }
        this.setPhone = function(phone) { this.phone = phone; }
        this.getPhone = function() { return this.phone; }
        this.setEmail = function(email) { this.email = email; }
        this.getEmail = function() { return this.email; }
        this.setAdress = function(adress) { this.adress = adress; }
        this.getAdress = function() { return this.adress; }
        this.setRegistrationData = function(registrationData) { this.registrationData = registrationData; }
        this.getRegistrationData = function() { return this.registrationData; }
        this.setDownData = function(downData) { this.downData = downData; }
        this.getDownData = function() { return this.downData; }
        this.setTypeUser = function(typeUser) { this.typeUser = typeUser; }
        this.getTypeUser = function() { return this.typeUser; }
 
 
 
 
 
}

