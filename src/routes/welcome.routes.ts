import { Router } from "express";
import { welcome } from "../controllers/welcome.controller";

const router = Router();

router.route("/")
    .get(welcome);

export default router;