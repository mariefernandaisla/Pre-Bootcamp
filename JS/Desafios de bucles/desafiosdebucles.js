for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    } //* inicio el ciclo iterativo de i es igual a 1, y 1 es menor o igual que 20, suma 1
    //* si i es divisible por 2, no imprimir
    //* imprimir todos los numeros del 1 al 20 impares
}
for (let i = 100; i >= 0; i--) {
    if (i % 3 === 0) {
        console.log(i);
    } //* inicio el ciclo iterativo de i es igual a 100, si 100 es mayor o igual que cero, disminuyamos a -1
     //* si 100 es divisible por 3, no imprimir
     //* imprime todos los valores divisibles disminuyendo del 100 al 0
}
for (let i = 4; i > -4; i -= 1.5) {
    console.log(i);
} //* inicio el ciclo de i es igual a 4, si 4 es mayor a -4, entonces ve restando 1,5
//imprime la secuencua desde 4 a -3.5 
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

let product = 1;
for (let i = 1; i <= 12; i++) {
    product *= i;
}
console.log(product);