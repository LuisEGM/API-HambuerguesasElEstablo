import { Router } from "express";
import { getRDrestaurantes, getRDempleados, getRDproductos, getRDmunicipios, getRDdepartamentos } from "../controllers/recursionData.controller";

const router = Router();

//Datos de recursion para restaurantes
router.route("/restaurantes")
    .get(getRDrestaurantes)

//Datos de recursion para empleados
router.route("/empleados")
    .get(getRDempleados)

//Datos de recursion para productos
    router.route("/productos")
    .get(getRDproductos)

//Datos de recursion para municipios
router.route("/municipios")
    .get(getRDmunicipios)

//Datos de recursion para departamentos
router.route("/departamentos")
    .get(getRDdepartamentos)


export default router;