import { Router } from "express";
import { getView_1, getView_2, getView_3, getView_4, getView_5, getView_6 } from "../controllers/views.controller";

const router = Router();

//Cliente estrella de todos los restaurantes
router.route("/_1")
    .get(getView_1)

//Datos generales de los restaurantes
router.route("/_2")
    .get(getView_2)

//Producto estrella
router.route("/_3")
    .get(getView_3)

//Productos no disponibles o descontinuados
router.route("/_4")
    .get(getView_4)

//Telefonos de los empleados
router.route("/_5")
    .get(getView_5)

//Telefonos de los restaurantes
router.route("/_6")
    .get(getView_6)


export default router;