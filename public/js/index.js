const main = document.querySelector("main");
const subTitle = document.querySelector("h2");
const Anchor = document.querySelector("a");
const paragraphs = document.querySelectorAll("p");

//Haciendo uso del ​prompt​, indicar al usuario que: “​Ingrese su nombre​”.

//En caso de que el usuario no coloque su nombre, a la etiqueta ​<h2>​, se le debeagregar la palabra “Invitado”. En caso contrario, se le debe agregar el nombre que elusuario ingresó.
let userName = prompt("​Ingrese su nombre: ")
if(userName === "" || userName === null){
    userName = "Invitado"; 
    subTitle.innerText = `Bienvenido ${userName}`;
}

subTitle.innerText = `Bienvenido ${userName}`;

//Agregar a la etiqueta ​<h2>​ el estilo ​uppercase​.
subTitle.style.textTransform = "uppercase";

//A la etiqueta ​<a>​, colocarle el estilo correspondiente para que asuma el siguientecolor:  ​#E51B3E
Anchor.style.color = "​#E51B3E";

//Mediante el ​confirm​, preguntar al usuario “​¿Desea colocar un fondo depantalla?​”.​ ​Si la respuesta es afirmativa por parte del usuario, agregar al ​<body>​ laclase “​fondo​”.
let fondo = confirm ("​¿Desea colocar un fondo depantalla?​");
if(fondo){
    document.querySelector("body").classList.add("fondo");
}

//A todos los párrafos que fueron capturados, asignar a los pares la clase:“​descatadoPar​”. Y a los impares agregar la clase: “​destacadoImpar​”

paragraphs.forEach((paragraph, index)=>{
    if(index % 2 === 0){
        paragraph.classList.add("descatadoPar");
    }else{
        paragraph.classList.add("destacadoImpar");
    }
})

//Finalmente, establecer como visible a la etiqueta ​<main>​ en el browser onavegador, aplicando el estilo: ​display : block​
main.style.display = "block";

