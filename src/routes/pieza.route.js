import { Router } from "express";

import { 
    createPieza, 
    getAllPiezas, 
    getPiezaById, 
    updatePieza, 
    deletePieza 
} from "../controllers/pieza.controller.js"

export const PiezaRoutes = Router();

PiezaRoutes.post("/jobs", createPieza);
PiezaRoutes.get("/jobs", getAllPiezas);
PiezaRoutes.get("/jobs/:id", getPiezaById);
PiezaRoutes.put("/jobs/:id", updatePieza);
PiezaRoutes.delete("/jobs/:id", deletePieza);

export default PiezaRoutes;