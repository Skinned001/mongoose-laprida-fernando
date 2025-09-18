import { Router } from "express";

import { 
    createAutomovil, 
    getAllAutomovils, 
    getAutomovilById, 
    updateAutomovil, 
    deleteAutomovil,
    addMantenimientoToAutomovil
} from "../controllers/automovil.controller.js"

export const AutomovilRoutes = Router();

AutomovilRoutes.post("/automoviles", createAutomovil);
AutomovilRoutes.get("/automoviles", getAllAutomovils);
AutomovilRoutes.get("/automoviles/:id", getAutomovilById);
AutomovilRoutes.put("/automoviles/:id", updateAutomovil);
AutomovilRoutes.delete("/automoviles/:id", deleteAutomovil);
AutomovilRoutes.patch("/automoviles/:id/mantenimientos", addMantenimientoToAutomovil)





export default AutomovilRoutes;