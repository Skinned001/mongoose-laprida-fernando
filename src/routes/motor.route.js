import { Router } from "express";

import { 
    createMotor, 
    getAllMotors, 
    getMotorById, 
    updateMotor, 
    deleteMotor 
} from "../controllers/motor.controller.js"

export const MotorRoutes = Router();

MotorRoutes.post("/motors", createMotor);
MotorRoutes.get("/motors", getAllMotors);
MotorRoutes.get("/motors/:id", getMotorById);
MotorRoutes.put("/motors/:id", updateMotor);
MotorRoutes.delete("/motors/:id", deleteMotor);

export default MotorRoutes;