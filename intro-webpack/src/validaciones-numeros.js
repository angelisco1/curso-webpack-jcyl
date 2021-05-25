import { regexpNumeros } from './regexps';
// import MisRegexps from './regexps';


function todoSonNumeros(texto) {
  return regexpNumeros.test(texto);
}

// CommonJS
// module.exports = esUnNumero;
export default todoSonNumeros;