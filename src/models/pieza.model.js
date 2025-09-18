import { model, Schema } from "mongoose";

export const PiezaSchema = new Schema({
    numero_serie: {
        type: Number,
        required: true,
    },
    nombre_pieza: {
        type: String,
        required: true
    },
    fabricante_pieza: {
        type: String,
        required: true
    },
    descripcion_pieza: {
        type: String,
        required: true
    },

},
    {
        versionKey: false,
    }
);

export const PiezaModel = model("Pieza", PiezaSchema);
