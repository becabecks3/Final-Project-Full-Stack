const express = require('express');

const morgan = require('./utils/morgan')
const error404 = require('./middlewares/error404');


const app = express();
const port = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(':method :host :status :param[id] - :response-time ms :body'));
app.use(express.static('public'));

//Endpoints Web
app.use('/', )

//Endpoints API
app.use('/api/', )

// Errores
app.use(error404);

app.listen(port, () => {
    console.log(`Puerto funcionando en el siguiente enlace: http://localhost:${port}`)
})