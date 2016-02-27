/*
 * @author: Jordi Delriu Solé
 * @date: February 2016
 * @version: 1.0
 * @description: PRÀCTICA 4, UF3 - Animal Store.
*/

/* @name: $(document).ready(function()
 * @author: Jordi Delriu, Jorge Nole.
 * @version: 1.0
 * @description: - A page can't be manipulated safely until the document is "ready." jQuery detects this state of readiness for us.
 * @date: 2016/02/26
*/
//jQuery code
$(document).ready(function () {

});

//var productArrayAux = [];
//Angular code
(function () {
	var AnimalShopAdmin = angular.module("AnimalShopAdmin", ['ng-currency']);
	
	AnimalShopPopUp.controller("AnimalShopAdminController", function ($scope, $cookies) {


		//************** Properties **************//
 

		//*********** Scope variables ***********//
		//cookies
		$scope.productsArray = [];
		$scope.productArrayAux = [];
 
		$scope.path = "/";
		$scope.totalPrice = 0;


		this.loadMainData = function (){

		

		}

		
	});	
	
	/*	
	The restrict option is typically set to:

	    'A' - only matches attribute name
	    'E' - only matches element name
	    'C' - only matches class name

	*/
	AnimalShopPopUp.directive("shoppingCart", function (){
		return {
		  restrict: 'E',
		  templateUrl:"../templates/shopping-cart.html",
		  controller:function(){
			
		  },
		  controllerAs: 'shoppingCart'
		};
	});
	
})();



/* @name: getActualDate()
* @author: Jordi Delriu
* @version: 1.0
* @description: - This function creates a data at the moment that this method is created.
* 				 
* @date: 2015/12/01
* @params: none
* @return: finalDate: The actual date in a "pretty" format to show to the user.
*/
function getActualDate()
{

	var currentTime = new Date();
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();
	
	//Add number 0 to the left
	if (minutes < 10)
	{
		minutes = "0" + minutes;
	}
	
	if (seconds < 10)
	{
		seconds = "0" + seconds;
	}
	var actualTime = hours + ":" + minutes + ":" + seconds + " ";

	var dayNames=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];	
	var monthNames=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var currentDate = new Date();
	      
	//final string with all values  
	var finalDate = currentDate.getHours()+":"+currentDate.getMinutes()+":"+currentDate.getSeconds()+" - "+dayNames[currentDate.getDay()]+"  "+currentDate.getDate()+"th "+ monthNames[currentDate.getMonth()]+" of "+currentDate.getFullYear();
        		
	return finalDate;

}




