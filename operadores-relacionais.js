/*
Operadores RElacionais

< Menor que
> Maior que
<= menor ou igual
>= maior ou igual
== igual a
=== igual a e mesmo tipo
!= Diferente

*/

let a = 3;
let b = 5;
console.log(a < b); // true
console.log(a > b); // false
console.log(b > a); // true

console.log(b >= a); // true
console.log(b >= 5); // true
console.log(a <= b); // true
console.log(a <= 3); // true
console.log(b > 5); // false

console.log(a == b); // false
console.log(a != b); // true

console.log(a == "3"); // true, possuem o mesmo valor
// estritamente igual
console.log(a === '3') // false, possuem tipos diferentes

console.log(a != "3"); // false, são iguais em valor
//estritamente diferente
console.log(a !== "3"); // true, são diferentes em tipo

