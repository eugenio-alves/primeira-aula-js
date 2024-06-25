/* Estruturas condicionais (If-Else)

if (condicao) {
    // instruçoes caso verdadeiro
} else {
    // instruçoes caso falso
}
*/

let idade = 10;

if (idade > 18) {// bloco se verdadeiro
    console.log("você é maior de 18 anos!");
} else {
    console.log("você é menor de idade!");
}

let media = 7.0;
let sabeIngles = false;
let aprovado = media >= 7.0;

if(aprovado) {
    console.log("Parabens! você foi aprovado")
} else {
    console.log("Que pena! Continue tentando!")
}

if(aprovado && sabeIngles) {
    console.log("Você foi contratado!")
} else {
    console.log("você não foi contratado")
}

// positivo, negativo ou zero
let numero = 10;

if(numero > 0) {
    console.log("O numero " + numero + " é positivo");
} else if (numero < 0) {
    console.log("O numero " + numero + " é negativo");
} else {
    console.log("O numero é zero");
}

// É impar ou par
let n = 7;

if(n % 2 == 0) {
    console.log("O numero " + n + " é par" );
} else {
    console.log("O numero " + n + " é impar");
}

// 1 - Domingo, 2 - Segunda, 3 - Terça, ..., Sabado - 7

let dia = 4;

if(dia == 1) {
    console.log("Hoje é Domingo");
} else if(dia == 2) {
    console.log("Hoje é Segunda");
} else if(dia == 3) {
    console.log("Hoje é Terça");
} else if(dia == 4) {
    console.log("Hoje é Quarta");
} else if(dia == 5) {
    console.log("Hoje é Quinta");
} else if(dia == 6) {
    console.log("Hoje é Sexta");
} else if(dia == 7) {
    console.log("Hoje é Sabado");
}


console.log("FIM");

