app.controller("myCtrl", function(fakeData,$rootScope,$scope) {
  $scope.firstName = "John";
  $scope.lastName= "Doe";
  $scope.salary = 1024467;
  $scope.color = 'red';
  $scope.buttonName = 'Click to hide';

  var a ={"data" :[
    {"name":"vineeth","age":25},{"name":"jyo","age":24}]
  } ;
  
  $scope.vineeth = a.data;

  
  $scope.getMessages = function()
  {
    var reddy = ['vineeth','gundeti','reddy'];
    $rootScope.reddy1 = "vineethgundeti";
    return reddy;
}
  $scope.clickChange =  true
  $scope.buttonClicked = function()
  {
  if($scope.clickChange){
  $scope.clickChange=false;
  $scope.buttonName = 'Click to show';}
  else{
  $scope.clickChange = true;
  $scope.buttonName = 'Click to hide';
    }
  }
$scope.getServiceData = function()
   {
     
     if($scope.enable){
   $scope.enable = false;
   $scope.serviceData =  "";
  }
   else{ 
     $scope.enable = true;
   var s = fakeData.myFunc();
    $scope.serviceData =  s;
  }
   }
  
});