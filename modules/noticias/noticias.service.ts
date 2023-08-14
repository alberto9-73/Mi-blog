import { Request,Response } from "express"
export const crearNoticia=(req:Request, res:Response)=>{
    res.json({msg:'el servidor funciona'})
}