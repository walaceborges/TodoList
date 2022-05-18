require('dotenv').config();
const express = require('express');
const cors = require('cors')
const taskRouter = require('./routers/taskRouter')

const app = express();

app.use(express.json());

app.use(cors())

app.use('/', taskRouter);

app.listen(3000, () => {
  console.log('Aplicação ouvindo na porta 3000');
});
