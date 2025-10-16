function classificarnumero(numero) {
    if (numero > 0) {
        return "Positivo";
    }   else if (numero < 0) {
        return "Negativo";
    } else {
        return "Zero";
    }
}
const numero = 0;
console.log(classificarnumero(numero));