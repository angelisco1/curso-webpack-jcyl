const regexpTexto = /^[a-zA-Z]+$/;

const esSoloTexto = (texto) => {
  return regexpTexto.test(texto);
}

const contieneMayusYMinus = (texto) => {
  return texto !== texto.toLowerCase() && texto !== texto.toUpperCase();
}


// ES Modules
// export default esSoloTexto;

export { esSoloTexto, contieneMayusYMinus };