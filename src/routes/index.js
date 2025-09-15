import { Router } from "express";

import AutomovilRoutes from "./automovil.route";



export const routes = Router();

routes.use(AutomovilRoutes);