// función que muestra el menú responsive

function responsiveMenu() {
    var x = document.getElementById("nav");
    if(x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}