///*global window*/
/*jslint browser: true, for:true */

/**JavaScript Document
 * Curso: HMTL5 - Pildoras Informáticas - API DRAG&DROP IV
 * Origin: Capitulo42.html ==> Galería de Imágenes
 */

// "use strict";


//1. Definición de Objetos y Variables
var imagenes;
var zonaDestino;



//1.1 Extracción de elementos desde HTML
// Solicitamos que extraiga todos los elementos con la etiqueta "img" que
// pertenezcan al elemento con id #caja-imagen. Esto devuelve un array
imagenes = document.querySelectorAll("#caja-imagen img");
zonaDestino = document.getElementById("zona-destino");

//2. Definición de Funciones
function inicioDrag(e) {
    'use strict';

    //Declaro la variable elemento donde alojar el objeto que desencadenó
    // el evento
    var elemento;
    //Declaro las variables necesaias para identificar el ID del elemento
    //a arrastrar. Esta variable la pasaremos como parámetro de setData
    var elementoID;

    elemento = e.target;
    elementoID = elemento.getAttribute("id");

    e.dataTransfer.setData("Text", elementoID);
}

function entrando(e) {
    'use strict';

    e.preventDefault();
    zonaDestino.style.background = "rgba(8,252,25,.5)";
}

function saliendo(e) {
    'use strict';

    e.preventDefault();
    zonaDestino.style.background = "#FFFFFF";
}

function soltado(e) {
    'use strict';

    var datosDrag;
    var srcID;
    var codigo;

    //Lo primero es resetear el comportamiento del navegador por defecto
    e.preventDefault();

    //Declaramos una variable donde alamacenar la información compartida por
    // setData
    datosDrag = e.dataTransfer.getData("Text");

    srcID = document.getElementById(datosDrag).src;
    codigo = "<img src = '" + srcID + "' />";

    zonaDestino.innerHTML = codigo;
    zonaDestino.style.background = "#FFFFFF";
}

function comenzar() {
    'use strict';

    var i;

    for (i = 0; i < imagenes.length; i = i + 1) {
        imagenes[i].addEventListener("dragstart", inicioDrag, false);
    }

    zonaDestino.addEventListener("dragenter", function (e) {
        e.preventDefault();
    }, false);

    zonaDestino.addEventListener("dragover", entrando, false);

    zonaDestino.addEventListener("dragleave", saliendo, false);

    zonaDestino.addEventListener("drop", soltado, false);
}



//3. Asignación de Eventos
document.addEventListener("DOMContentLoaded", comenzar, false);
