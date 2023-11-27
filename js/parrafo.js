var todosLosParrafos = document.querySelectorAll('p');
    todosLosParrafos.forEach(function(parrafo) {
        parrafo.addEventListener('click', function() {
            alert('Se presionó un párrafo del documento.');
        });
    });

    var parrafosSegundaTabla = document.querySelectorAll('#parrafo4, #parrafo5');
    parrafosSegundaTabla.forEach(function(parrafo) {
        parrafo.addEventListener('click', function() {
            alert('Se presionó un párrafo contenido en la segunda tabla.');
        });
    });