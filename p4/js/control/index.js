/*
 * @author: Jordi Delriu Solé
 * @date: February 2016
 * @version: 1.0
 * @description: PRÀCTICA 4, UF3 - Animal Shop App
*/

/* @name: $(document).ready(function()
 * @author: Jorge Nole, Jordi Delriu
 * @version: 1.0
 * @description: - A page can't be manipulated safely until the document is "ready." jQuery detects this state of readiness for us.
 * @date: February 2016
*/
//jQuery code
$(document).ready(function () {	
	


	
});//end document.ready

/********************************* Angular code *********************************/
/********************************************************************************/
(function () {
	var AnimalShopApp = angular.module("animalShopApp", ["ng-currency", "ngCookies"]);
	
	AnimalShopApp.controller ("AnimalShopController", function ($scope, $cookies) {
		
		//************** Properties **************//
		$scope.animal = new animalObj();
		$scope.animalType = new AnimalTypeObj();
		$scope.provider = new providerObj();
		$scope.user = new userObj();

	


		/*this.productArray = new Array();
		this.providerArray = new Array();
		this.productTypeArray = new Array();*/

		
		//*********** Scope variables ***********//
		//$scope.searchAddProd = 0;
		//$scope.productsArray = new Array();

		
		//******************** Methods ********************//
		/* @name: loadMainData()
		 * @author: Jorge Nole, Jordi Delriu
		 * @version: 1.0
		 * @description: - This method is executed by "ng-init" when div is created.  
		 * 				 - In this case this method loads all products from our database.
		 * @date: 2016/02/10
		 * @params: none
		 * @return: none
		*/
		this.loadMainData = function () {	

			
		}


		/* @name: searchValidUser()
		 * @author: Jorge Nole, Jordi Delriu
		 * @version: 1.0
		 * @description: - This method checks if the introducer username and password are correct or not.
		 * 				 - If are correct -> window.open will open the mainMenu with the user's role.
		 				 - If are incorrect -> an error message will appear to the user.
		 * @date: 2016/01/03
		 * @params: none
		 * @return: none
		*/
		this.searchValidUser = function () {

			var flagError = false;//to know if there are errors or not.	

			//Validate number of products
			if($scope.user.nick=="" || $scope.user.password=="")
			{
				flagError = true;
				alert("Username or password can't be empty!");
			}	
			else
			{
				//AJAX -> go to the server in order to find if the user is correct or not.
				if($scope.user.nick == "jorge" && $scope.user.password=="123456")
				{
					$scope.user.constructLogin(1,"jorge","123456",1); //id, nick, password, role.
				}
				else if($scope.user.nick == "jordi" && $scope.user.password=="123456")
				{
					$scope.user.constructLogin(2,"jordi","123456",2); //id, nick, password, role.
				}
				else
				{
					flagError = true;
					alert("Username or password are not correct!");
				}
			}

			//if all data is correct, go to the new window
			if(!flagError)
			{
				window.open("popUpWindows/mainMenu.html?rol="+$scope.user.getTypeUser()+"&nick="+$scope.user.getNick(),"_self"); 
				//When you specify a width/height, it will open it in a new window instead of a tab.
			}
		}
	});//end controller		
})();//end module


//Own code

