import express from 'express';

const app = express();
const puerto = 3000;
app.get('/', (req, res) => {
  res.send('¡El servidor está levantado!');
});

app.listen(puerto, () => {

  return console.log(`El servidor está levantado en el puerto ${puerto}`);
});
