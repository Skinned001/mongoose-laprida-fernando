import { PiezaModel } from "../models/pieza.model.js";

// Crear pieza
export const createPieza = async (req, res) => {
    const { nombre_pieza, fabricante_pieza, numero_serie } = req.body;
    try {
        const newPieza = await PiezaModel.create({
            nombre_pieza,
            fabricante_pieza,
            numero_serie,
        });
        res.status(201).json({
            msg: "Pieza creada correctamente",
            newPieza,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error interno del servidor", error });
    }
};

// Obtener todos las piezas
export const getAllPiezas = async (req, res) => {
    try {
        const listAll = await PiezaModel.find(); 
        res.status(200).json({
            msg: "Listando todas las piezas",
            listAll,
        });
    } catch (error) {
        res.status(500).json({ msg: "Error interno del servidor", error });
    }
};


// Obtener una pieza por ID
export const getPiezaById = async (req, res) => {
    const { id } = req.params;
    try {
        const auto = await PiezaModel.findById(id)
            .populate("motor")
            .populate("piezas");
        if (!auto) {
            return res.status(404).json({ msg: "Pieza no encontrada" });
        }
        res.status(200).json({
            msg: "Pieza encontrada",
            auto,
        });
    } catch (error) {
        res.status(500).json({ msg: "Error interno del servidor", error });
    }
};

// Actualizar una pieza
export const updatePieza = async (req, res) => {
    const { id } = req.params;
    const { nombre_pieza, fabricante_pieza, numero_serie } = req.body;
    try {
        const updatedMotor = await MotorModel.findByIdAndUpdate(
            id,
            { nombre_pieza, fabricante_pieza, numero_serie },
            { new: true }
        );
        res.status(200).json({
            msg: "Pieza actualizada",
            updatedPieza,
        });
    } catch (error) {
        res.status(500).json({ msg: "Error interno del servidor", error });
    }
};

// Eliminar una pieza
export const deletePieza = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedPieza = await MotorModel.findByIdAndDelete(id);
        res.status(200).json({
            msg: "Pieza eliminada correctamente",
            deletedPieza,
        });
    } catch (error) {
        res.status(500).json({ msg: "Error interno del servidor", error });
    }
};

