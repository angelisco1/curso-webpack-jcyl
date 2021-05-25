import './titulos.css';
import './styles.scss';


// Un comentario

const cfalco = {
  nombre: 'Charles',
  apellido: 'Falco',
  telefonos: {
    movil: {
      prefijo: '+1',
      numero: '699123123'
    }
  },
  estaSuscrito: true,
}

const oblake = {
  nombre: 'Octavia',
  apellido: 'Blake',
  telefonos: {
    movil: {
      prefijo: '+1',
      numero: '666777888'
    },
    fijo: {
      prefijo: '+1',
      numero: '966777888'
    }
  }
}

const usuarios = [cfalco, oblake];

function getNumeroFijoPorUsuario(usuarios) {
  return usuarios.map(usuario => {
    const nombreCompleto = `${usuario.nombre} ${usuario.apellido}`;
    const numeroFijo = usuario.telefonos?.fijo?.numero;
    return {
      [nombreCompleto]: numeroFijo
    }
  });
}

// Muestra los números de teléfono fijo de cada usuario
console.log(getNumeroFijoPorUsuario(usuarios));

function getUsuariosSuscritos(usuarios) {
  return usuarios.map(usuario => {
    const nombreCompleto = `${usuario.nombre} ${usuario.apellido}`;
    return {
      [nombreCompleto]: usuario.estaSuscrito ?? false
    }
  });
}

// Muestra el estado de las suscripciones de los usuarios
console.log(getUsuariosSuscritos(usuarios));