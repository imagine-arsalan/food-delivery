$("document").ready(function(){
    $("form").hide();
    $("input").attr("required", "yes");
    $("p").hide();
    $("span#info").click(function(event){
        event.preventDefault();
        $(this).parent().next().slideToggle();
    });
    $("button#users").click(function(event){
        event.preventDefault();
        var user ="user";
        $("div#choice").hide();
        $("form#userform").show();
            /* SOME FORM VALIDATION */

            /* Password Validator */
             $("input[name='confirmpassword']").keyup(function(event){
                    event.preventDefault();
                    var password = $("input[name='password']").val();
                    var confirmpassword = $("input[name='confirmpassword']").val();
                    if(confirmpassword !== password){
                        $(this).attr("id", "errorinput");
                    }
                    else{
                        $(this).attr("id", "success");
                    }
                /*    $.post("password.php", {
                        password : password,
                        confirmpassword : confirmpassword
                    }, function(data, status){
                        $("input[name='confirmpassword']").html(data);
                    });
                    */

             });
             $("input[name='phone']").keyup(function(event){
                 event.preventDefault();
                 var phone = $(this).val();
                 var quot = phone/1000000000;
                 if(quot<1 || quot>10){
                     $(this).attr("id", "errorinput");
                 }
                 else{
                     $(this).attr("id", "success");
                 }
             });
             $("input[name='pincode']").keyup(function(event){
                 event.preventDefault();
                 var phone = $(this).val();
                 var quot = phone/100000;
                 if(quot<1 || quot>10){
                     $(this).attr("id", "errorinput");
                 }
                 else{
                     $(this).attr("id", "success");
                 }
             });
             /*$("input[name='city']").keyup(function(){
                 var city = $("input[name='city']").val();
                 $.get("suggestion.php",
                        {
                            city: city
                        },
                        function(data, status){
                            $("p[id='suggestion']").show();
                            $("p[id='suggestion']").html(data);
                            $("input[name='city']").mouseout(function(){
                                $("p[id='suggestion']").hide();
                            });
                        }
            );
        }); */
             $("button[type='submit']").click(function(event){
                 event.preventDefault();
                 var id = $('input[id]').attr("id");
                 if(id == "errorinput"){
                     alert("error");
                 }
             });

    });
    $("button#owners").click(function(event){
        event.preventDefault();
        var user ="owner";
        $("div#choice").hide();
        $("form#ownerform").show();
        /* $("input[type='checkbox']").click(function(event){
            event.preventDefault();
            if($(this).val() == 'res'){
                $(this).val() == "restaurant";
                $(this).next().val() == "restaurant";
            }
            else{
                $(this).val() == "home";
                $(this).next().val() == "home";
            }
        });
        var answer = $("input[type='checkbox']").val();
        if(answer == "home"){
            $("div#question").hide();
        } */
        $("div.panel-body").hide();
        $("div.panel-heading").click(function(){
            $(this).next().slideToggle();
        })
    });
});
