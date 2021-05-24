// CommonJS
// const esUnNumero = require('./validaciones-numeros.js');
// ES Modules
import esUnNumero from './validaciones-numeros.js';
// import esSoloTexto from './validaciones-texto.js';
import { esSoloTexto as soloTexto, contieneMayusYMinus } from './validaciones-texto.js';

console.log(esUnNumero('34'))
console.log(esUnNumero('3a'))

console.log(soloTexto('3a'))
console.log(soloTexto('abc'))

console.log(contieneMayusYMinus('Ab'))