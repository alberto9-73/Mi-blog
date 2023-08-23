import { Request, Response, request } from 'express';
import { iNoticia } from './noticias.inteface';
import { v4 as uuidv4 } from 'uuid';

const noticiaDB: iNoticia[] = [];

export const crearNoticia = (req: Request, res: Response) => {
	try {
		const data: iNoticia = req.body;

		if (!data.titulo && !data.contenido) {
			throw new Error();
		}
		const nuevaNoticia: iNoticia = {
			id: uuidv4(),
			titulo: data.titulo,
			contenido: data.contenido,
			fecha: new Date().toLocaleDateString(),
		};

		noticiaDB.push(nuevaNoticia);

		res.json({ msg: `Se creo la noticia correctamente` });
	} catch (error) {
		res.status(500).json({ msg: 'No se pudo guardar la noticia' });
	}
};

export const listarNoticia = (req: Request, res: Response) => {
	res.json(noticiaDB);
};

export const obtenerNoticia = (req: Request, res: Response) => {
	try {
		const noticia = noticiaDB.filter((noticia) => noticia.id == req.params.Id)
		res.json(noticia)
		if (!noticia) {
			throw new Error();
		}
		res.json(noticia)
	}
	catch (error) {
		res.status(404).json({ msg: 'No se pudo encontrar la noticia' })


	}
};


export const eliminarNoticia = (req: Request, res: Response) => {
	const idDelete = req.params.id;

	const indexToDelete = noticiaDB.findIndex(
		(noticia) => noticia.id === idDelete
	);

	if (indexToDelete === -1) {
		res.status(404).json({ msg: 'Noticia no encontrada' });
	} else {
		noticiaDB.splice(indexToDelete, 1);
		res.status(200).json({ msg: 'Noticia eliminada' });
	}
};