import express from 'express';
import morgan from 'morgan';

const app = express();

// Config
app.set('json spaces', 2);

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(express.json());

// Rutas
import { router } from './routes/index.routes.js';
app.use(router);

// Inicio
app.listen(3001, () => {
    console.log('En linea.');
});