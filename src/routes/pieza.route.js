import { Router } from "express";

import { 
    createPieza, 
    getAllPiezas, 
    getPiezaById, 
    updatePieza, 
    deletePieza 
} from "../controllers/pieza.controller.js"

export const PiezaRoutes = Router();

PiezaRoutes.post("/piezas", createPieza);
PiezaRoutes.get("/piezas", getAllPiezas);
PiezaRoutes.get("/piezas/:id", getPiezaById);
PiezaRoutes.put("/piezas/:id", updatePieza);
PiezaRoutes.delete("/piezas/:id", deletePieza);

export default PiezaRoutes;