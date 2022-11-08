// función que me aplica el estilo a la opción seleccionada en el menú y quita la previamente seleccionada

function seleccionar(link) {
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //Hacemos desaparecer el menú una vez que se ha seleccionado una opción en el modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}

// función que muestra el menú responsive

function responsiveMenu() {
    var x = document.getElementById("nav");
    if(x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}