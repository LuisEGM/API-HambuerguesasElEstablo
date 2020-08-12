import { Request, Response } from "express";
import sql from "mssql";

//Conexion a la base de datos
import { connect } from "../database";

export async function getSP_1(req:Request, res:Response){
    try {
        
        let idRestaurante = req.params.idRestaurante; 
        let fmin = req.params.fMin;
        let fmax = req.params.fmax; 

        const peticion = new sql.Request(await connect());
        const data = await peticion.query(`EXECUTE pa_IngresosDeUnRestauranteEnUnPeriodoDeTiempo @idRestaurante=${idRestaurante}, @fechaMin='${fmin}', @fechaMax='${fmax}'`);
        res.json(data.recordset);

    } catch (error) {
        console.log(error);
    }
}



export async function getSP_2(req:Request, res:Response){
    try {
        
        let idRestaurante = req.params.idRestaurante; 
 
        const peticion = new sql.Request(await connect());
        const data = await peticion.query(`EXECUTE pa_EmpleadosDe_X_Restaurante @idRestaurante=${idRestaurante}`);
        res.json(data.recordset);

    } catch (error) {
        console.log(error);
    }
}



export async function getSP_3(req:Request, res:Response){
    try {
        
        let idProducto = req.params.idProducto; 
 
        const peticion = new sql.Request(await connect());
        const data = await peticion.query(`EXECUTE pa_CuantoDineroIngresoPorElproducto_X @idProducto=${idProducto}`);
        res.json(data.recordset);

    } catch (error) {
        console.log(error);
    }
}


export async function getSP_4(req:Request, res:Response){
    try {
        
        let idEmpleado = req.params.idEmpleado; 
 
        const peticion = new sql.Request(await connect());
        const data = await peticion.query(`EXECUTE pa_LasVentasRealizadasPor_X_Empleado @idEmpleado=${idEmpleado}`);
        res.json(data.recordset);

    } catch (error) {
        console.log(error);
    }
}



export async function getSP_5(req:Request, res:Response){
    try {
        
        let idRestaurante = req.params.idRestaurante; 
 
        const peticion = new sql.Request(await connect());
        const data = await peticion.query(`EXECUTE pa_ProductosDisponiblesEnElRestaurante_X @idRestaurante=${idRestaurante}`);
        res.json(data.recordset);

    } catch (error) {
        console.log(error);
    }
}



export async function getSP_6(req:Request, res:Response){
    try {
        
        let idCiudadMun = req.params.idCiudadMun; 
 
        const peticion = new sql.Request(await connect());
        const data = await peticion.query(`EXECUTE pa_RestaurantesUbicadosEn_X_CiudadMun @idCiudad=${idCiudadMun}`);
        res.json(data.recordset);

    } catch (error) {
        console.log(error);
    }
}



export async function getSP_7(req:Request, res:Response){
    try {
        
        let iddep = req.params.iddep; 
 
        const peticion = new sql.Request(await connect());
        const data = await peticion.query(`EXECUTE pa_RestaurantesUbicadosEn_X_Departamento @iddep=${iddep}`);
        res.json(data.recordset);

    } catch (error) {
        console.log(error);
    }
}