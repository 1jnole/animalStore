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
	
	AnimalShopAdmin.controller("AnimalShopAdminController", function ($scope) {


		//************** Properties **************//
        

		//*********** Scope variables ***********//
		$scope.animalType = new animalTypeObj();
		$scope.animal = new animalObj();

		$scope.providerArray = new Array();
		$scope.animalTypeArray = new Array();
$scope.animalType;
		$scope.searchAnimal=0;

		//******************** Methods ********************//
		/* @name: loadMainData()
		 * @author: Jordi Delriu
		 * @version: 1.0
		 * @description: - This method is executed by "ng-init" when div is created.  
		 				 - We load the product types that will be needed in some templates.
		 				 - The user data is also loaded, but in this case isn't used.
		 * @date: 2016/02/27
		 * @params: none
		 * @return: none
		*/
		this.loadMainData = function (){
			//Access to the server to get all ANIMAL TYPES
			//animalTypeObj --> id, name.
			var animalType = new animalTypeObj();
			animalType.construct(1,"Fruits",4,4);
			$scope.animalTypeArray.push(animalType);
			
			var animalType = new animalTypeObj();
			animalType.construct(2,"Vegetables",5,5);
			$scope.animalTypeArray.push(animalType);
			
			var animalType = new animalTypeObj();
			animalType.construct(3,"Cold Drinks",6,6);
			$scope.animalTypeArray.push(animalType);

			var animalType = new animalTypeObj(); 
			animalType.construct(4,"Tea",7,7);
			$scope.animalTypeArray.push(animalType);

			$scope.animalType = $scope.animalTypeArray[0];//to define a default value to select
console.log($scope.animalTypeArray);
			//Access to the server to get all PROVIDERS
			//provider --> id, name.
			/*var provider = new providerObj();
			provider.construct(1,"Tony's Farm");
			$scope.providerArray.push(provider);

			var provider = new providerObj();
			provider.construct(2,"Green Vegetables");
			$scope.providerArray.push(provider);

			var provider = new providerObj();
			provider.construct(3,"Fruits & Livestyle S.L.");
			$scope.providerArray.push(provider);

			$scope.provider = $scope.providerArray[0];//to define a default value to select
			*/

		}

		
	});	
	
	/*	
	The restrict option is typically set to:

	    'A' - only matches attribute name
	    'E' - only matches element name
	    'C' - only matches class name

	*/
	AnimalShopAdmin.directive("searchAnimalsForm", function (){
		return {
			restrict: 'E',
			templateUrl:"../templates/search-animals-form.html",
			controller:function(){
		  },
		  controllerAs: 'searchAnimalsForm'
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




