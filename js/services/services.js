angular.module('kcfoApp').service('services', function($http){

this.instagramPics = function(){
    return $http.get("https://www.instagram.com/thereelkcfo/?__a=1")
    .then(function (response){
        var pictures = response.data.user.media.nodes;
        return pictures.map((pic) => pic.display_src)

    })
}



})  
