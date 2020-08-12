import { Request, Response } from "express";
import sql from "mssql";

//Conexion a la base de datos
import { connect } from "../database";

export async function getView_1(req:Request, res:Response){
    try {
        
        const peticion = new sql.Request(await connect());
        const data = await peticion.query("SELECT * FROM ClienteEstrella");
        res.json(data.recordset);

    } catch (error) {
        console.log(error);
    }
}



export async function getView_2(req:Request, res:Response){
    try {
        
        const peticion = new sql.Request(await connect());
        const data = await peticion.query("SELECT * FROM DatosDeRestaurantes");
        res.json(data.recordset);

    } catch (error) {
        console.log(error);
    }
}



export async function getView_3(req:Request, res:Response){
    try {
        
        const peticion = new sql.Request(await connect());
        const data = await peticion.query("SELECT * FROM ProductoEstrella");
        res.json(data.recordset);

    } catch (error) {
        console.log(error);
    }
}


export async function getView_4(req:Request, res:Response){
    try {
        
        const peticion = new sql.Request(await connect());
        const data = await peticion.query("SELECT * FROM ProductosNoDisponibles");
        res.json(data.recordset);

    } catch (error) {
        console.log(error);
    }
}


export async function getView_5(req:Request, res:Response){
    try {
        
        const peticion = new sql.Request(await connect());
        const data = await peticion.query("SELECT * FROM TelefonosDeEmpleados");
        res.json(data.recordset);

    } catch (error) {
        console.log(error);
    }
}



export async function getView_6(req:Request, res:Response){
    try {
        
        const peticion = new sql.Request(await connect());
        const data = await peticion.query("SELECT * FROM TelefonosDeRestaurantes");
        res.json(data.recordset);

    } catch (error) {
        console.log(error);
    }
}