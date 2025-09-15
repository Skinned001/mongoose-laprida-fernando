import { model, Schema } from "mongoose";

export const PiezaSchema = new Schema({
    nombre_pieza: {
        type: String,
        required: true
    },
    fabricante_pieza: {
        type: String,
        required: true
    },
    numero_serie: {
        type: Number,
        required: true,
        unique: true
    },

},
    {
        versionKey: false,
    }
);

export const PiezaModel = model("Pieza", PiezaSchema);
