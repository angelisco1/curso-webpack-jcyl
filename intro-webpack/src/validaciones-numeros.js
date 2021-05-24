const regexpNumeros = /^\d+$/

function todoSonNumeros(texto) {
  return regexpNumeros.test(texto);
}

// CommonJS
// module.exports = esUnNumero;
export default todoSonNumeros;