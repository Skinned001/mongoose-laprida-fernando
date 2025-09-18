import { model, Schema, Types } from "mongoose";

export const MotorSchema = new Schema({
    numeroSerie: {
        type: String,
        unique: true
    },
    tipo: {
        type: String,
        required: true,
    },
    potenciaHP: {
        type: String,
        required: true
    },
    fabricante_motor: {
        type: String,
        required: true
    },
},
    {
        versionKey: false,
    }
);

export const MotorModel = model("Motor", MotorSchema);
