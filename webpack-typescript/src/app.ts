import * as fs from 'fs';
import * as path from 'path';
import { getPrecioCriptomoneda } from './criptomonedas.service';

getPrecioCriptomoneda('bitcoin')
  .then((precio: string) => {
    const datosPath = path.join('dist', 'data', 'datos.txt')
    fs.writeFile(datosPath, precio, (err) => {
      if (err) {
        throw new Error(err.message);
      }
      console.log('Se ha guardado el precio')
    })
  })
