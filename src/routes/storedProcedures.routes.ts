import { Router } from "express";
import { getSP_1, getSP_2, getSP_3, getSP_4, getSP_5, getSP_6, getSP_7 } from "../controllers/storedProcedures.controller";

const router = Router();

//pa_IngresosDeUnRestauranteEnUnPeriodoDeTiempo
router.route("/_1/:idRestaurante/:fMin/:fmax")
    .get(getSP_1)

//pa_EmpleadosDe_X_Restaurante
router.route("/_2/:idRestaurante")
    .get(getSP_2)

//pa_CuantoDineroIngresoPorElproducto_X
router.route("/_3/:idProducto")
    .get(getSP_3)

//pa_LasVentasRealizadasPor_X_Empleado
router.route("/_4/:idEmpleado")
    .get(getSP_4)

//pa_ProductosDisponiblesEnElRestaurante_X
router.route("/_5/:idRestaurante")
    .get(getSP_5)

//pa_RestaurantesUbicadosEn_X_CiudadMun
router.route("/_6/:idCiudadMun")
    .get(getSP_6)

//pa_RestaurantesUbicadosEn_X_Departamento
router.route("/_7/:iddep")
    .get(getSP_7)


export default router;