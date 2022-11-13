import express from 'express';
import { router } from './routes';
import { comprobarConexion } from './db/db';

const app = express();
const puerto = 3000;

app.use(express.json());
app.use(router);

app.get('/', (req, res) => {
  res.send('¡El servidor está levantado!');
});

// Comprobar conexión con la base de datos
comprobarConexion();

app.listen(puerto, () => {

  return console.log(`El servidor está levantado en el puerto ${puerto}`);
});
