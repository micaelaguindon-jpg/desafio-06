
var cantidadDeGatos = 5;
var cantidadDePasos = 3;

for (var gato = 1; gato <= cantidadDeGatos; gato++) {
    var huellas = '';

    for (var paso = 1; paso <= cantidadDePasos; paso++) {
        huellas += '🐾';
    }

    console.log('Gato #' + gato + ': 🐈 ' + huellas);
}