import { model, Schema, Types } from "mongoose";

export const AutomovilSchema = new Schema({
    detalles_auto: [{ // propiedad embebida
        marca: {
            type: String,
            required: true
        },
        modelo: {
            type: String,
            required: true
        },
        año: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        },
    }],
    motor: { // relación 1:1
        type: Types.ObjectId,
        ref: "Motor",
        required: true
    },
    piezas: [{ // relación N:M
        type: Types.ObjectId,
        ref: "Pieza"
    }],
    mantenimientos: [{ // relación 1:N (embebida dentro del auto)
        fecha: {
            type: Date,
            required: true
        },
        descripcion: {
            type: String,
            required: true
        },
        costo: {
            type: String,
            required: true
        },
    }]
},
    {
        versionKey: false,
    }
);

export const AutomovilModel = model("Automovil", AutomovilSchema);
