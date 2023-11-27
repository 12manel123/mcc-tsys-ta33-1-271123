var pantalla = document.getElementById('pantalla');
var expresion = '';

function agregarCaracter(caracter) {
    expresion += caracter;
    actualizarPantalla();
}

function limpiarPantalla() {
    expresion = '';
    actualizarPantalla();
}

function borrarUltimo() {
    expresion = expresion.slice(0, -1);
    actualizarPantalla();
}

function calcular() {
    try {
        expresion = eval(expresion).toString();
        actualizarPantalla();
    } catch (error) {
        expresion = 'Error';
        actualizarPantalla();
    }
}

function borrarEntrada() {
    expresion = expresion.slice(0, expresion.lastIndexOf(' ') + 1);
    actualizarPantalla();
}

function cambiarSigno() {
    expresion = eval('-' + expresion).toString();
    actualizarPantalla();
}

function calcularRaiz() {
    expresion = Math.sqrt(eval(expresion)).toString();
    actualizarPantalla();
}

function calcularInverso() {
    expresion = (1 / eval(expresion)).toString();
    actualizarPantalla();
}

function calcularPorcentaje() {
    expresion = (eval(expresion) / 100).toString();
    actualizarPantalla();
}

function actualizarPantalla() {
    pantalla.textContent = expresion;
}

document.addEventListener('keydown', function(event) {
    if (/^[0-9+\-*/.C]$/.test(event.key)) {
        if (event.key === 'C') {
        borrarEntrada();
        } else {
        agregarCaracter(event.key);
        }
    } else if (event.key === 'Backspace') {
        borrarUltimo();
    } else if (event.key === 'Enter') {
        calcular();
    }
});