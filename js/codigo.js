//Ex1
var frecuenciaSumas = new Array(13).fill(0);

function lanzarDado() {
    return Math.floor(Math.random() * 6) + 1;
}

function lanzarDados() {
    var dado1 = lanzarDado();
    var dado2 = lanzarDado();
    var suma = dado1 + dado2;
    frecuenciaSumas[suma]++;
    console.log("Dado 1: " + dado1 + ", Dado 2: " + dado2 + ", Suma: " + suma);

    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("resultado").innerText = "Suma: " + suma;
    });
}
document.addEventListener("DOMContentLoaded", function () {
    for (var i = 0; i < 30; i++) {
        lanzarDados();
    }

    console.log("Frecuencia de cada suma:");
    for (var j = 2; j <= 12; j++) {
        console.log("Suma " + j + ": " + frecuenciaSumas[j]);
    }
});



//Ex2
function ejercicio2() {
    var fechaRegex = /\b\d{2}\/\d{2}\/\d{4}\b/;
    var texto = "Nací el 05/04/1982 en Donostia.";
    var esFechaValida = fechaRegex.test(texto);
    console.log(esFechaValida);  // Resultado: true

    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
    var email = "usuario@example.com";
    var esEmailValido = emailRegex.test(email);
    console.log(esEmailValido);  // Resultado: true

    function escapeHTML(text) {
        var replacements = [
        ["&", "&amp;"],
        ["\"", "&quot;"],
        ["<", "&lt;"],
        [">", "&gt;"]
    ];

    replacements.forEach(function(replace) {
        var regex = new RegExp(replace[0], 'g');
        text = text.replace(regex, replace[1]);
    });

    return text;
    }

    var nombreApellidoRegex = /^(\w+)\s(\w+)$/;
    var nombreCompleto = "John Smith";
    var nombreInvertido = nombreCompleto.replace(nombreApellidoRegex, "$2, $1");
    console.log(nombreInvertido);

    var eliminarEtiquetasRegex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
    var htmlConEtiquetas = '<p>Este es un párrafo.</p><script>alert("¡Esto es un script!");</script>';
    var htmlSinEtiquetasPeligrosas = htmlConEtiquetas.replace(eliminarEtiquetasRegex, '');
    console.log(htmlSinEtiquetasPeligrosas);
}

//Ex3
function ejercicio3() {
    var nombreApellidoRegex = /^(\w+)\s(\w+)$/;
    var nombreCompleto = "John Smith";
    var nombreInvertido = nombreCompleto.replace(nombreApellidoRegex, "$2, $1");
    console.log(nombreInvertido);

    var eliminarEtiquetasRegex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
    var htmlConEtiquetas = '<p>Este es un párrafo.</p><script>alert("¡Esto es un script!");</script>';
    var htmlSinEtiquetasPeligrosas = htmlConEtiquetas.replace(eliminarEtiquetasRegex, '');
    console.log(htmlSinEtiquetasPeligrosas);
}


window.onload = function() {
    ejercicio3(); // Agrega esta línea para llamar a ejercicio3 al cargar la página.
};

//Ex5
function cambiarImagen(imagen) {
    // Obtener el visor y la imagen grande
    var visor = document.getElementById("visor");
    var imagenGrande = document.getElementById("imagenGrande");

    // Cambiar la imagen grande y el pie de foto
    imagenGrande.src = imagen.src;
    document.getElementById("pieDeFoto").innerText = imagen.alt;
}

//Ex6
function actualizarReloj() {
    var ahora = new Date();

    var horas = ahora.getHours().toString().padStart(2, '0');
    var minutos = ahora.getMinutes().toString().padStart(2, '0');
    var segundos = ahora.getSeconds().toString().padStart(2, '0');

    document.getElementById('horas').innerText = horas;
    document.getElementById('minutos').innerText = minutos;
    document.getElementById('segundos').innerText = segundos;
}

// Actualizar cada segundo
setInterval(actualizarReloj, 1000);

// Actualizar al cargar la página
actualizarReloj();