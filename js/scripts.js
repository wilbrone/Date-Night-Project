$(document).ready(function(){

    $("form#sign-in").submit(function(){
        event.preventDefault();
    var userName =$("#user_name").val();
    var pass =$("#password").val();

    var obj={user_email:email, user_password:pass};
    var arr = JSON.parse(localStorage.getItem("user_details")) || [];
    arr.push(obj);
    localStorage.setItem("user_details", JSON.stringify(arr));
    });


    $("form#sign-up").submit(function(){
        event.preventDefault();

        var email =$("#email").val();
        var full_name =$("f_name").val();
        var uName =$("#u_name").val();
        var pWord =$("#password").val();
        alert(full_name);
        // var pWord =$("#password").val();

        var obj_user={names:full_name, user_email:email, user_password:pWord, user_name:uName};
        var new_arr = JSON.parse(localStorage.getItem("new_user")) || [];
        new_arr.push(obj_user);
        localStorage.setItem("new_user", JSON.stringify(new_arr));
    });



    $(".sign").click(function(){
        $("#head1").toggle();
        $("#head2").toggle();
        $("#sign-in").toggle();
        $("#sign-up").toggle();

    });

    $("#cancel").click(function(){
        $("#head1").toggle();
        $("#head2").toggle();
        $("#sign-in").toggle();
        $("#sign-up").toggle();

    });

});