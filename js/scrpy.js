$(document).ready(function(){
    if (window.localStorage && localStorage.user_details) {
        fontSize = localStorage.getItem("user_details");
        console.log(fontSize)
        $(".output").textContent = "The font size has carried over pages, and is: " + fontSize;
            // document.getElementById("output").style.fontSize = fontSize;
    }
});