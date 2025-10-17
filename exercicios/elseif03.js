function verificarnumero (numero){
    if (numero % 2 === 0)return 'par'
    return 'impar'
}
    const numero =-4;
    console.log (`o numero ${numero} é ${verificarnumero(numero)}`);