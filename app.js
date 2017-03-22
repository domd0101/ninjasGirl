var myNinjaApp = angular.module('myNinjaApp',[]);

myNinjaApp.controller('ninjaController',['$scope',function($scope){
 $scope.ninjas = [
   {
     name: 'Candy',
     belt: 'brown',
     rate: 295.50,
     thumb:'./ninjaGIRLS/ninjaFOUR.jpg',
     available: true
   },{
     name: 'Dallas',
     belt: 'black',
     rate: 150.50,
     thumb:'./ninjaGIRLS/ninjaONE.jpg',
     available: true
   },{
     name: 'Kendra',
     belt: 'purple',
     rate: 255.50,
     thumb:'./ninjaGIRLS/ninjaTHREE.jpg',
     available: true
   },{
     name: 'Brandi',
     belt: 'pink',
     rate: 123.50,
     thumb:'./ninjaGIRLS/ninjaTWO.jpg',
     available: true
   }
 ]

$scope.remove = function(ninja){
  var removedNinja = $scope.ninjas.indexOf(ninja);
  $scope.ninjas.splice(removedNinja, 1);
}

$scope.addNinja = function(){
  $scope.ninjas.push({
    name: $scope.newNinja.name,
    belt: $scope.newNinja.belt,
    value: $scope.newNinja.value,
    available: true
  });
  $scope.newNinja.name='';
  $scope.newNinja.belt='';
  $scope.newNinja.value='';
}

}])
