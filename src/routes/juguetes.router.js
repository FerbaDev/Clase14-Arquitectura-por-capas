import express from "express";
const router = express.Router();
import JugueteController from "../controller/juguete.controller.js";
const jugueteController = new JugueteController();

router.post("/", jugueteController.crearJuguete);
router.get("/", jugueteController.obtenerJuguetes);

export default router;