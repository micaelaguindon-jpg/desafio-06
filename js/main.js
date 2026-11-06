/* var cantidadDeGatos = 10;
for(var numero = 1; numero <= cantidadDeGatos; numero++)
{
    var emoji =´´;
        if (numero % 3 === 1)
            {emoji = ´😺´;}
        else if (numero % 3 === 2)
            {emoji = ´😸´;}
        else {emoji = ´😹´;}

    console.log (´gato #´ + numero + ´:´ + emoji)

} */

    var cantidadDeGatos = 10;

for (var numero = 1; numero <= cantidadDeGatos; numero++) {
    var emoji = '';

    if (numero % 3 === 1) {
        emoji = '😺';
    } else if (numero % 3 === 2) {
        emoji = '😸';
    } else {
        emoji = '😹';
    }

    console.log('Gato #' + numero + ': ' + emoji);
}