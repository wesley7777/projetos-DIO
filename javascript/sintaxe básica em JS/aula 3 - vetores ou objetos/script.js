// o que são vetores ou arrays

// como declarar um array 

/*let array = ['wesley', 2, true];
console.log(array); */

//pode guardar vários tipos de dados
let array = ['wesley', 1, true, ['array2'], ['array3'], ['array4']];
//console.log(array[3]);

/*forEach
array.forEach(function(item, index){console.log(item, indice)}); */ 

/* Push (coloca um novo item no Array)
array.push('novo item');
console.log(array);
*/

/* Pop (retira o último item do array)
array.pop();
console.log(array); 
*/

/* Unshift (coloca um novo item no início do array)
array.unshift('novo item no início');
console.log(array); */

/* indexOF (trás o índice do valor true)
console.log(array.indexOf(true)); */

/* remove ou substitui um item pelo índice;
array.splice(0, 3);
console.log(array); */

/* let novoArray = array.slice(0, 3);
console.log(novoArray); */

let object = { string: 'string', number: 1, boolean: true, array: [array], objectInterno {
    objectInterno: 'Objeto Interno'}};
console.log(object.objectInterno);

var string = object.string;
console.log(string);

var array = object.array;
console.log(array);