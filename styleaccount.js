$(function(){
    $("ul.view").hide();
    $("a[href='#']").click(function(event){
        event.preventDefault();
        $(this).next().slideToggle();
    });
    $("div.orders").hide();
    $("div.likedrestaurants").hide();
});