import { Router } from "express";

import { AutomovilRoutes } from "./automovil.route.js";
import { MotorRoutes } from "./motor.route.js";
import { PiezaRoutes } from "./pieza.route.js";


export const routes = Router();

routes.use(AutomovilRoutes);
routes.use(MotorRoutes);
routes.use(PiezaRoutes);