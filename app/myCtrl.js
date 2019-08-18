app.controller("myCtrl", function(fakeData,$scope) {
  $scope.firstName = "John";
  $scope.lastName= "Doe";
  $scope.salary = 1024467;
  $scope.color = 'red';
  $scope.buttonName = 'Click to hide'
  $scope.getMessages = function()
  {
    var reddy = ['vineeth','gundeti','reddy'];

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
     
     return fakeData.myFunc();
   } 
});