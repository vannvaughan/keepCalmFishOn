angular.module('kcfoApp').controller('mainCtrl', function($scope, services){

services.instagramPics().then(function(response){
    $scope.images = response;
})



})