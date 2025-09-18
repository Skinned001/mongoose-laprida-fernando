import { model, Schema } from "mongoose";

export const MotorSchema = new Schema({
    numero_serie: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true,
    },
    potencia_HP: {
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
