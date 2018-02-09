angular.module('kcfoApp', ['ui.router'])

.run(function() {
    console.log('App Running')
})

.config(function ($urlRouterProvider, $stateProvider){

$urlRouterProvider.otherwise('/')

$stateProvider
    .state('about',{
        url: '/',
        templateUrl: 'views/about.html',
        controller: 'mainCtrl',
    })
    .state('howToHelp', {
        url: '/howToHelp',
        templateUrl: 'views/howToHelp.html'
    })
    .state('shop', {
        url: '/shop',
        templateUrl: 'views/shop.html',
    })
    .state('contact', {
        url: '/contact',
        templateUrl: 'views/contact.html'
    })

})

.directive('instagramIcon', function(){
    return{
        template: "<a href='http://www.instagram.com/thereelkcfo'><img class='instagram-thumb' src='../img/instagram-thumb.jpg'></a>"

    }
})

