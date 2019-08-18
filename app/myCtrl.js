app.controller("myCtrl", function($scope) {
  $scope.firstName = "John";
  $scope.lastName= "Doe";
  $scope.getMessages = function()
  {
    var reddy = ['vineeth','gundeti','reddy'];

    return reddy;
}
});