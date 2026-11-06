var cantidadDeGatos = 10;
var cantidadDePasos = 4;

for (var gato = 1; gato <= cantidadDeGatos; gato++) {
    var huellas = '';
    var emoji = '';

    if (gato % 2 === 0) {
        emoji = '🐈‍⬛';
    } else {
        emoji = '🐈';
    }

    for (var paso = 1; paso <= cantidadDePasos; paso++) {
        huellas += '🐾';
    }

    console.log('Gato #' + gato + ': ' + emoji + ' ' + huellas);
}