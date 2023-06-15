const bodyElement = document.querySelector("body");
const title = document.querySelector("h1");

//Haciendo uso del ​prompt​, preguntar al usuario: “​¿Desea modo oscuro?​”. Si larespuesta es afirmativa, agregar a la etiqueta ​<body>​ un color de fondo: ​#7f7f7f​, yla clase: ​fondoMoviesList​

let response = prompt("¿Desea modo oscuro?");

if(response === "si" || response === "ok"){
    bodyElement.style.backgroundColor = "#7f7f7f";
    bodyElement.classList.add("fondoMoviesList")
}

//Agregar a la etiqueta ​<h1>​ el mensaje: “​LISTADO DE PELÍCULAS​”.

title.innerHTML = "LISTADO DE PELÍCULAS";

//Agregar a la etiqueta ​<h1>​ los siguientes estilos: Color de la fuente: ​white​. Color de fondo: ​teal​. Relleno: ​20px​.

title.style.color = "white";
title.style.backgroundColor = "teal";
title.style.padding = "20px";