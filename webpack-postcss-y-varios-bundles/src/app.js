import './styles.css';
import fondo from './assets/fondo-pantalla.jpg';

console.log('Este es el app');

const imagen = document.createElement('img');
imagen.src = fondo;

const boton = document.createElement('button');
boton.textContent = 'Ir a la página perezosa';
boton.onclick = () => {
  import('./perezoso')
    .then(perezosoJS => perezosoJS.mostrarAlert())
}

document.body.appendChild(boton);
document.body.appendChild(imagen);