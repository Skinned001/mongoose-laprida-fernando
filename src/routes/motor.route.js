import { Router } from "express";

import { 
    createMotor, 
    getAllMotors, 
    getMotorsById, 
    updateMotor, 
    deleteMotor 
} from "../controllers/motor.controller.js"

export const MotorRoutes = Router();

MotorRoutes.post("/jobs", createMotor);
MotorRoutes.get("/jobs", getAllMotors);
MotorRoutes.get("/jobs/:id", getMotorsById);
MotorRoutes.put("/jobs/:id", updateMotor);
MotorRoutes.delete("/jobs/:id", deleteMotor);

export default MotorRoutes;