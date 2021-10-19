// Primero como se hacía antes de ES6

function newFunction(name, age, country){
    var name = name || 'Andres';
    var age = age || 18;
    var country = countru || 'AR';
    console.log(name, age, country);
}

// Ahora con ES6

function newFunction2(name = 'Oscar', age = 23, country = 'CO'){
    console.log(name, age, country);
}

newFunction2();
newFunction2('Gabriel', 47, 'AR');


// Concatenación antes de ES6
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// Ahora con los templates se hace más fácil. Comillas invertidas
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// Let y Const, spread 0 y Desestructuración

//Antes de ES6
let elsa = "Libre soy, libre soy....no puedo ocultarlo \n "
+ "más, libre soy, libre soy, se fue la chica ideal.";
console.log(elsa);

let elsa2 = `Voy a probar que puedo hacer sin limitar
mi procesador, ni mal ni bien que obedecer
jamassssssssss`;
console.log(elsa2);

// Parámetros en Objetos
let person = {
    'name' : 'Gabriel',
    'age'  : 23,
    'country' : 'AR'
}

// Si nosotros utilizamos por ejemplo person.name llamaremos al atributo
//correspondiente a la key name del objeto person
console.log(person.name, person.country);

// Ahora vamos a desestructurar el objeto
let {name, age} = person;
console.log(name, age);

// A trabajar con Arrays
// Operador de Propagación (Spread operator)

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Romina', 'Caro', 'Vane'];

//Queremos tener un array que contenga a team1 y team2 pero además de esto, agregar
//un nuevo miembro que sería David. Para esto, usaremos (...) nos permite traer un
//array completo.

let education = ['David', ...team1, ...team2];
console.log(education);

const array = [1,2,3];
const result = [...array, 4,5,6];
console.log(result);



// Originalmente se usaba var para asignar variables
// Let se usa para el scope, es decir, se define para el bloque de código en
// el cual se va a usar.

{
    var global = "Global var";
}
{
    let globallet = "Global Let";
    console.log(globallet);
}
console.log(global); // Si acá pusieramos globallet da un error porque está fuera del scope

// A diferencia de LET, const se puede usar en el scope global, pero no se puede
// modificar como sí se puede var, pero var no se usa mucho 

/******************************* */
// Arrow Functions, Promises y Parámetros en Objetos
/******************************* */

const helloPromise = () =>{
    return new Promise((resolve, reject) =>{
        if (false){
            resolve('Todo bien');
        }else{
            reject('Ups!');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error))

// Arrow Functions son funciones anónimas, las podemos 
// asignar a una variable o usarlas asi nomás

//let func = (arg1, arg2, argN) => procedimiento;
// sin variable: (argumentos) => procedimiento;

// ejemplo: 

const pokemons = [
    {name: 'pikachu', saludo: 'pika', hp:15},
    {name: 'charmender', saludo: 'char', hp:25},
    {name: 'squirtle', saludo: 'escuero', hp:1},
];

// Antes de ES6
let listOfNames = team.map(function(pokemon){
    console.log(pokemon.name)
});

//ES6 
let listOfNames = team.map( (pokemon) => console.log(pokemon.name))

// Las funciones flechas tienen un return implícito y otro explícito.
// cuando ponemos la palabra return es un retorno explícito, pero también
// pueden tener un return implícito

// Función normal
const sayHi = function(name) {
    return name;
}

// Función flecha con retorno explícito
const sayHi = (name) =>{
    return name
}

// también se puede hacer en una sóla línea
const sayHi = (name) =>{return name}


// Función flecha con retorno implicito
const sayHi = (name) => name;
const sayHi = (name) =>{
    name
}


// Función felchas sin parámetros
const sayHi = () => {console.log('Hi!')}

// En las funciones normales los parámetros van entre parétesis, pero en la función
// flecha si tenemos 1 solo parámetro lo podemos poner sin paréntesis

// Función normal
const num = function(one){}

// Arrow function poniendo paréntesis
const num = (one) =>{}

//Arrow function sin paréntesis
const num = one =>{}

// Cuando tenemos múltiples parámetros si o si necesitamos paréntesis
const num = (num1, num2) => {}

// Para devolver un objeto en un cuerpo conciso (es decir una function sin llaves)
// hay que envolverlo entre paréntesis

const name = () => ({name: "Juan"})
// Si no le ponemos esos paréntesis da un undefined, esto porque es CONCISO

/**************************
Importar y Exportar Módulos
******************************/

/*
En ECMAScript6 se introduce una característica nativa denominada Módulos ES o ESM
que permite la importación y exportación de código entre diferentes ficheros Javascript,
eliminando las desventajas que teníamos hasta ahora y permitiendo trabajar de forma 
más flexible desde el código javascript
*/

export { nombreModulo}  /** Añade el elemento nombreModulo al módulo de exportación */
export {modulo1, modulo2, modulo3} /* Exporta varios módulos a la vez */
export { variable1 as name1, variable2 as name2, ...console, nameN} /*** Exporta variables o módulos usando alias */
export * from './file.js'; /* Añade todos los elementos del módulo file.js al módulo de exportación */
export elementoAExcportar; /* Declara una variable, función o clase y la añade al módulo de exportación */
export default elementoQueExportare  /* Un export por defecto puede ser importado con cualquier nombre. Sólo puede haber un default export */

/*** IMPORTACIONES */
import nombre from './file';  /* Importa sólo el elemento por d efecto de file.js en nombre */
import { nombre } from './file'; /* Importa sólo el elemento nombre de file.js */
import { n1, n2 ... } from './file'; /* Importa los elementos indicados desde file.js */
import * as obj from './file'; /* Importa todos los elementos de file.js en el objeto obj */
import './file'; /* No importa elementos, pero ejecuta el código de file.js */


/****** EJEMPLOS ********/






















