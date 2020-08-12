import { Response, Request } from "express";

export function welcome(req:Request, res:Response){
    res.json("Bienvenido a la API de la DBHamburguesasElEstablo");        
}