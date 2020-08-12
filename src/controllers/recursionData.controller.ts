import { Request, Response } from "express";
import sql from "mssql";

//Conexion a la base de datos
import { connect } from "../database";

export async function getRDrestaurantes(req:Request, res:Response){
    try {
        const peticion = new sql.Request(await connect());
        const data = await peticion.query("SELECT idRestaurante, nombreRestaurante FROM Restaurantes");
        res.json(data.recordset);
    } catch (error) {
        console.log(error);
    }
}


export async function getRDempleados(req:Request, res:Response){
    try {
        const peticion = new sql.Request(await connect());
        const data = await peticion.query("SELECT idEmpleado, primerNombre+' '+primerApellido as Nombre, documentoIdentidad FROM Empleados");
        res.json(data.recordset);
    } catch (error) {
        console.log(error);
    }
}


export async function getRDproductos(req:Request, res:Response){
    try {
        const peticion = new sql.Request(await connect());
        const data = await peticion.query("SELECT idProducto, nombreProducto FROM Productos");
        res.json(data.recordset);
    } catch (error) {
        console.log(error);
    }
}


export async function getRDmunicipios(req:Request, res:Response){
    try {
        const peticion = new sql.Request(await connect());
        const data = await peticion.query("SELECT idMunicipio, nombre FROM Municipios");
        res.json(data.recordset);
    } catch (error) {
        console.log(error);
    }
}


export async function getRDdepartamentos(req:Request, res:Response){
    try {
        const peticion = new sql.Request(await connect());
        const data = await peticion.query("SELECT idDepartamento, nombre FROM Departamentos");
        res.json(data.recordset);
    } catch (error) {
        console.log(error);
    }
}