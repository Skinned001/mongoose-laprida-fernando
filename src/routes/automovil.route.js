import { Router } from "express";

import { 
    createAutomovil, 
    getAllAutomovils, 
    getAutomovilById, 
    updateAutomovil, 
    deleteAutomovil 
} from "../controllers/automovil.controller"

export const AutomovilRoutes = Router();

AutomovilRoutes.post("/jobs", createAutomovil);
AutomovilRoutes.get("/jobs", getAllAutomovils);
AutomovilRoutes.get("/jobs/:id", getAutomovilById);
AutomovilRoutes.put("/jobs/:id", updateAutomovil);
AutomovilRoutes.delete("/jobs/:id", deleteAutomovil);

export default AutomovilRoutes;