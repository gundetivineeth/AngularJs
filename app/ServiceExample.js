app.service('fakeData', function($http) {
    var data;
    this.myFunc = function () {
      
      $http.get('https://jsonplaceholder.typicode.com/todos/1').then(function (response) {
         
          data = response.data;
          });

      return  data;
    }
  });