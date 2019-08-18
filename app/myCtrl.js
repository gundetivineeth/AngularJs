app.controller("myCtrl", function($scope) {
  $scope.firstName = "John";
  $scope.lastName= "Doe";
  $scope.color = 'red';
  $scope.getMessages = function()
  {
    var reddy = ['vineeth','gundeti','reddy'];

    return reddy;
}
});