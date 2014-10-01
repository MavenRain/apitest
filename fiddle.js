//        url: "http://rest-service.guides.spring.io/greeting"  
function fiddleController($scope)
{
  $.ajax(
  {  
    url: 'http://localhost:3000'
  })
  .then(function(data)
  {
    $scope.data = data;
    console.log($scope.data);
    $scope.$apply();
 
  });
}
