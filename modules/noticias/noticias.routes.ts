import express from 'express';
import { crearNoticia, listarNoticia, obtenerNoticia, eliminarNoticia } from './noticias.service';

const noticiasRoutes = express.Router();

// endpoint para crear una noticia
noticiasRoutes.post('/', crearNoticia);

// endpoint para consultar todas las noticias

noticiasRoutes.get('/', listarNoticia);

// [GET] endpoint obtener noticia por id /:id

noticiasRoutes.get('/:id', obtenerNoticia);
// [DELETE] endpoint borrar

noticiasRoutes.delete('/:id', eliminarNoticia);

export default noticiasRoutes;