$(document).ready(function(){

$(".container").click(function() {
    $(".stick").toggleClass(function () {
        return $(this).is('.open, .close') ? 'open close' : 'open';
    });
});

$(".nav-bar").hide();

$(".container").click(function(){
    $(".nav-bar").slideToggle(500, function(){
        
    });
});





});

