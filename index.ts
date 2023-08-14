import express, { Express } from 'express';
//import { logParam } from './logMiddleweare';
import bodyParser from 'body-parser'
//import usuariosRoutes from './modules/usuarios/usuarios.routes';

const app: Express = express();

app.use(bodyParser.json());

// /usuarios/1
// /usuarios/2
//app.use('/usuarios/', usuariosRoutes);

app.listen(1000, () => {
	console.log(`⚡️ SERVER API IS RUNNING http://localhost:1000`);
}); 