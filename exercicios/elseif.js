const nota1 = 8;
const nota2 =5;
const nota3 =5; 
const nota4 =10;
const media = ( nota1 + nota2 + nota3 + nota4 ) / 4;
console.log(" A media das notas é: " + media);
if (media >=7 ){
    console.log("Aprovado");
} else if (media >=5 && media <7){
    console.log("Recuperação");
} else {
    console.log("Reprovado");
} 