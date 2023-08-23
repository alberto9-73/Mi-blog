import express, { Express } from 'express';
import noticiasRoutes from './modules/noticias/noticias.routes';
import bodyParser from 'body-parser';

const app: Express = express();

app.use(bodyParser.json());

app.use('/noticias', noticiasRoutes);

app.listen(2000, () => {
	console.log('Servidor funcionando OK en el Puerto 2000!!!');
});