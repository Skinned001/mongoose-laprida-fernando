import { MotorModel } from "../models/motor.model.js";

// Crear motor
export const createMotor = async (req, res) => {
    const { numeroSerie, tipo, potenciaHP } = req.body;
    try {
        const newMotor = await MotorModel.create({
            numeroSerie,
            tipo,
            potenciaHP,
        });
        res.status(201).json({
            msg: "Motor creado correctamente",
            newMotor,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error interno del servidor", error });
    }
};

// Obtener todos los motores
export const getAllMotors = async (req, res) => {
    try {
        const listAll = await MotorModel.find()
            .populate("motor")
            .populate("piezas");
        res.status(200).json({
            msg: "Listando todos los motores",
            listAll,
        });
    } catch (error) {
        res.status(500).json({ msg: "Error interno del servidor", error });
    }
};

// Obtener un motor por ID
export const getMotorById = async (req, res) => {
    const { id } = req.params;
    try {
        const auto = await MotorModel.findById(id)
            .populate("motor")
            .populate("piezas");
        if (!auto) {
            return res.status(404).json({ msg: "Motor no encontrado" });
        }
        res.status(200).json({
            msg: "Motor encontrado",
            auto,
        });
    } catch (error) {
        res.status(500).json({ msg: "Error interno del servidor", error });
    }
};

// Actualizar un motor
export const updateMotor = async (req, res) => {
    const { id } = req.params;
    const { numeroSerie, tipo, potenciaHP } = req.body;
    try {
        const updatedMotor = await MotorModel.findByIdAndUpdate(
            id,
            { numeroSerie, tipo, potenciaHP },
            { new: true }
        );
        res.status(200).json({
            msg: "Motor actualizado",
            updatedMotor,
        });
    } catch (error) {
        res.status(500).json({ msg: "Error interno del servidor", error });
    }
};

// Eliminar un motor
export const deleteMotor = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedMotor = await MotorModel.findByIdAndDelete(id);
        res.status(200).json({
            msg: "Motor eliminado correctamente",
            deletedMotor,
        });
    } catch (error) {
        res.status(500).json({ msg: "Error interno del servidor", error });
    }
};

