import { regexpTexto } from './regexps';

const esSoloTexto = (texto) => {
  return regexpTexto.test(texto);
}

const contieneMayusYMinus = (texto) => {
  return texto !== texto.toLowerCase() && texto !== texto.toUpperCase();
}


// ES Modules (exportacion por defecto)
// export default esSoloTexto;
// CommonJS
// module.exports = esSoloTexto


// ES Modules
export { esSoloTexto, contieneMayusYMinus };