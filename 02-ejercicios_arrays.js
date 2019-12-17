let diasLaborables = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];

let diasFinSemana = ['sabado', 'domingo'];


//push().- agrega elementos al final del array
/* 
let diasSemanaCompleta = diasLaborales.push('sabado', 'domingo');
console.log(diasLaborables, `Son ${diasSemanaCompleta} dias`);
 */

//============================================================================================

//unshift().- agrega elementos al inicio del array
/* 
diasLaborables.unshift('sabado', 'domingo');
console.log(diasLaborables);
 */

//============================================================================================

//forEach.- recorre un array: Lo muestra en el orden: elemento, indice
//diasLaborables.forEach((elemento, indice, array) => console.log(elemento, indice));

//============================================================================================

//pop().- elimina el ultimo elemento de un array
/* 
let ultimoDiaEliminado = diasLaborables.pop();
console.log(ultimoDiaEliminado);
console.log(diasLaborables);
*/

//============================================================================================

//shift().- elimina el primer elemento de un array
/* 
diasLaborables.shift();
console.log(diasLaborables);
 */

 //============================================================================================

//indexOf().- Encuentra el indice de un elemento del array. Si no lo encuentra devuelve -1
/* 
console.log(diasLaborables);
let indiceDia = diasLaborables.indexOf('jueves');
console.log(indiceDia);
indiceDia = diasLaborables.indexOf('sabado');
console.log(indiceDia);
 */

 //============================================================================================

//splice().- elimina un elemento conociendo su indice. Inserta elementos en su lugar de ser necesario
//Devuelve los elementos eliminados.
//sintaxis: splice([start: number], deletedCount: number)


//1 Ejercicio: Elimina los 2 primeros elementos:

/* console.log(diasLaborables);
let indiceEliminado = diasLaborables.splice(2);
console.log(`Elementos eliminados: ${diasLaborables}`);
console.log(`Nuevo array: ${indiceEliminado}`); */

//2 Ejercicio: 

//2.1 Elimina desde:  (2) => indice de miercoles, (1) = un elemento
/* 
console.log(diasLaborables);
let eliminaMiercoles = diasLaborables.splice(2,1);
console.log(diasLaborables);
console.log(eliminaMiercoles);
 */

//2.2 Elimina desde:  (2) => indice de miercoles, (2) = dos elementos
/* 
console.log(diasLaborables);
let eliminaMiercoles = diasLaborables.splice(2, 2);
console.log(diasLaborables);
console.log(eliminaMiercoles);
 */

//2.3 Elimina desde: (2) => indice de miercoles, (1) = un elemento, agrega: 'sabado'
/* 
console.log(diasLaborales);
let eliminaMiercoles = diasLaborables.splice(2, 1, 'sabado');
console.log(diasLaborables);
console.log(eliminaMiercoles);
 */

//============================================================================================

//slice() copia un array
/* 
console.log(diasLaborables);
let newDiasLaborables = diasLaborables.slice();
console.log(newDiasLaborables);
 */

 //============================================================================================

 //concat().- suma o concatena 2 arrays
/* 
 console.log(diasLaborables);
 let semanaCompleta = diasLaborables.concat(diasFinSemana);
 console.log(semanaCompleta);
 */ 

 //join( '[separador]' ).- Muestra los elementos de un array separados por lo que se le indique en los parentesis
 /* 
 console.log(diasLaborables);
 
 Muestra los elementos del array separados por comas
 console.log(diasLaborables.join(','));

 Muestra los elementos del array separados por un guion
 console.log(diasLaborables.join('-'));

 Muestra los elementos del array separados por un espacio en blanco
 console.log(diasLaborables.join(' '));
  */

  //reverse().- Muestra los elementos de array en el orden inverso: del elemento final al elemento inicial
  /* 
  console.log(diasLaborables);
  console.log(diasLaborables.reverse());
   */
  
 //filter().- crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
/* 
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);
 */
 
// from().- convierte en array un objeto no iterable

//accedemos a los NodeList de los enlaces
let links = document.querySelectorAll('a');
console.log(links);

//Convertimos NodeList en array
let linksIterables = Array.from(links);
console.log(linksIterables);
console.log("================");
//Recorremos el nuevo array
linksIterables.forEach(element => {
  console.log(element);
});
console.log("================");
//Accedemos a su contenido como texto
linksIterables.forEach(element => {
  console.log(element.innerText);
});
console.log("================");
//Accedemos al contenido de un elemento en especifico
console.log(linksIterables[3].innerText);