$(document).ready(function(){
    if (window.localStorage && localStorage.user_details) {
        var fontSize = JSON.parse(localStorage.getItem("user_details"));
    };
    console.log(fontSize);


    for(i=0; i<fontSize.length; i++){
        var user = fontSize[i];

    }
    console.log(user);

    $(".output").text("Welcome, " + user.user_Name.toUpperCase());

    var letter = user.user_Name[0].toUpperCase();
    console.log(letter);
    $("#profileImage").text(letter);
});