import express from 'express';
import { router } from './routes';

const app = express();
const puerto = 3000;

app.use(express.json());
app.use(router);

app.get('/', (req, res) => {
  res.send('¡El servidor está levantado!');
});

app.listen(puerto, () => {

  return console.log(`El servidor está levantado en el puerto ${puerto}`);
});
