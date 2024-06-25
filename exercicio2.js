/*1. Defina 3 variáveis com notas de 0 a 10. Calcule a média das três notas. Em seguida mostre no console o status do aluno:
Maior ou igual 7 = Aprovado
Entre 5 e 7 = Reforço
Menor que 5 = Reprovação
*/

let n1 = 4
let n2 = 3
let n3 = 7

let media = (n1 + n2 + n3) / 3
console.log(media.toFixed(1))

if(media >= 7) {
    console.log("aprovado")
} else if(media >=5 && media <= 7) {
    console.log("Reforço")
} else if(media < 5) {
    console.log("Reprovação")
}
    
/*2. Simule a tabela do IMC com base no valor calculado pela formula: IMC = PESO / (ALTURA x ALTURA).
Indique o status com base no valor do IMC.
*/

let peso = 80
let altura = 1.80
let IMC = peso / (altura * altura)

console.log("Seu IMC é de " + IMC.toFixed(1))

// 3. Defina um número a e um número b. Verifica qual o maior, ou menor, ou se são iguais!

let A = 3
let B = 5

if (A > B) {
    console.log("A é maior que B")
} else if (A < B) {
    console.log("B é maior que A")
} else if(A == B) {
    console.log("A e B são iguais")
}

/* 4. Crie duas variáveis: salário e quantidadeDependentes. Siga a seguinte regra para aplicar ajustes salariais:
Caso não possua dependentes não realizar ajustes no salário,
se houver entre 1 e 5 aumentar em 30% o salário. Caso seja acima de 5 aumentar em 40% o salário.
*/

let salario = 1500
let quantidadeDependentes = 6

if(quantidadeDependentes >= 1 & quantidadeDependentes <=5) {
    console.log("Seu salario é de " + (salario * 130) / 100 )
} else if (quantidadeDependentes > 5) {
    console.log("Seu salario é de " + (salario * 140) / 100)
}

/* 5. Crie uma variável para armazenar um dia da semana (1 - Domingo, 2 - Segunda, ... 7 - Sábado). 
Com base no valor indique se é final de semana ou dia útil.
*/

let dia = 6;

if(dia == 1) {
    console.log("Domingo | final de semana");
} else if(dia == 2) {
    console.log("Segunda | dia util");
} else if(dia == 3) {
    console.log("Terça | dia util");
} else if(dia == 4) {
    console.log("Quarta | dia util");
} else if(dia == 5) {
    console.log("Quinta | dia util");
} else if(dia == 6) {
    console.log("Sexta | Sextou");
} else if(dia == 7) {
    console.log("Sabado | final de semana");
}

/* 6. Crie uma variável ano e verifique se este ano é bissexto. Um ano é bissexto quando: 
Caso 1) É um número divisível por 4, mas não é divisível por 100. 
Caso 2) É um número divisível por 4, por 100 e por 400.
*/

let bi = 365

if(bi >= 366) {
    console.log("Ano Bissexto")
} else if(bi <= 365) {
    console.log("Ano Normal")
}

// 7. Crie uma variável idade. Caso seja uma idade inválida (negativa ou maior que 130) mostre uma mensagem de aviso.

let idade = 131

if(idade >= 0 && idade <= 130) {
    console.log("sua idade é essa: " + idade)
} else if(idade < 0 || idade > 130) {
    console.log("Ta me tirando?")
}

/* 8. Crie uma variável com o turno de aula: M-matutino ou V-Vespertino ou N- Noturno. 
Mostre a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.
*/

let turno = "V"

if(turno === "M") {
    console.log("Bom Dia!")
}else if(turno === "V") {
    console.log("Boa Tarde!")
}else if(turno === "N") {
    console.log("Boa Noite!")
}

console.log("FIM")