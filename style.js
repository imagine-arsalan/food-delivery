// JAVASCRIPT USING JQUERY
// AUTHOR : ARSALAN RASHID
// FOOD DELIVERY WEBSITE
    $("document").ready(function(){
        /*$("input[id='town']").keyup(function(){
            var town = $("input[id='town']").val();
            $.post("suggestion.php", {
                suggestion: town
            }, function(data, status){
                $("#townsuggestion").html(data);
            });
        });*/
        $("div[id='restaurantlist']").hide();
        $("div[id='menufinal']").hide();
        $("div.jumbotron[id='restaurant-profile']").hide();
        $("div[id='restaurantmenu']").hide();
        $("h4>li").hide();
        $("button[id='index']").click(function(event){
            event.preventDefault();
            $("div[id='indexform']").hide();
            $("div[id='restaurantlist']").show();
            $("div[class='caption']").click(function(){
                $(this).next().next().slideToggle();
            });
        });
        $("a.thumbnail").click(function(event){
            event.preventDefault();
            $("div[id='restaurantlist']").hide();
            $("div.jumbotron").hide();
            $("div.jumbotron[id='restaurant-profile']").show();
            $("div[id='restaurantmenu']").show();
            $("div.panel-body").hide();
            $("h4[class='list-group-heading']").children().click(function(event){
                event.preventDefault();
                $(this).toggleClass();
                $("h4>li").slideToggle();
            });
            $("div.panel-heading").click(function(event){
                event.preventDefault();
                $(this).next().slideToggle();
                $("a.thumbnail").click(function(event){
                    event.preventDefault();
                    $("h4[class='list-group-heading']").children().click(function(event){
                        event.preventDefault();
                        $(this).toggleClass();
                        $("h4>li").slideToggle();
                    });
                    $("div[id='restaurantmenu']").hide();
                    $("div[id='menufinal']").show();
                    $(".panel-body").show();
                });
            });
        });
        $("nav[id='footer']").hide();
        /* $("nav[id='footer']").click(function(){
            $("nav[id='footer']").show();
        }); */
        $("div.content").children().hide();
        $("li").click(function(){
            $("div.content").children().hide(); // before clicking on another link make sure previous link is set off
            $("li[class='active']").removeClass();
            $(this).addClass("active");
            //alert($(this).children().text);
            var newid = $(this).attr("id");
            if(newid == 'restaurants'){var i=0;} //khapkhana to get the particular content based on the link clicked
            else if(newid == 'veg'){var i=1;}
            else {var i=2;}
            $($("div.content").children().get(i)).show(); //double $$ to wrap the javascript object returned vy get() as jquery obj.

        });
    });
