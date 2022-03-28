const n1 = 9.75;
console.log(`O numero digitado é ${n1}...`)
// arrdondar para menos
let n2 = Math.floor(n1);
console.log(`O numero ${n1} arredondado para menos é ${n2}....`);

// arredonda para mais
let n3 = Math.ceil(n1);
console.log(`O numero ${n1} arredondado para mais é ${n3}...`);

// mais proximo
let n4  = Math.round(n1);
console.log(`O numero ${n1} arredondado para o mais proximo é ${n4}...`);

// maior numero da sequencia
let sequencia = [2,4,3,6,56,67,43,12,456,7689];
console.log(`A sequencia é ==> ${sequencia}`);
const sequencia2 = parseInt(sequencia);
console.log(`O maior numero da sequencia é: ${Math.max(sequencia2)}`); // ?
console.log(`O menor numero da sequencia é: ${Math.min(sequencia2)}`); // ?
const aleatorio = Math.random().toFixed(2)
console.log(`O numero aleatorio gerado foi ${aleatorio}`);

const porcent = 36;
console.log(`A porcentagem de ${porcent} é: ${porcent/100}`)


const raiz = 25;
console.log(`A raiz quadrada de ${raiz} é : ${raiz ** 0.5}`);


const eleva = 20;
console.log(`A potencia de ${eleva} é : ${eleva ** 2}`);








