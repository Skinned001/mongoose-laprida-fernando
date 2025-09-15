import { AutomovilModel } from "../models/automovil.model.js";

// Crear auto
export const createAutomovil = async (req, res) => {
    const { detalles_auto, motor, piezas, mantenimientos } = req.body;
    try {
        const newAuto = await AutomovilModel.create({
            detalles_auto,
            motor,
            piezas,
            mantenimientos,
        });
        res.status(201).json({
            msg: "Automóvil creado correctamente",
            newAuto,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error interno del servidor", error });
    }
};

// Obtener todos los autos
export const getAllAutomovils = async (req, res) => {
    try {
        const listAll = await AutomovilModel.find()
            .populate("motor")
            .populate("piezas");
        res.status(200).json({
            msg: "Listando todos los automóviles",
            listAll,
        });
    } catch (error) {
        res.status(500).json({ msg: "Error interno del servidor", error });
    }
};

// Obtener un auto por ID
export const getAutomovilById = async (req, res) => {
    const { id } = req.params;
    try {
        const auto = await AutomovilModel.findById(id)
            .populate("motor")
            .populate("piezas");
        if (!auto) {
            return res.status(404).json({ msg: "Automóvil no encontrado" });
        }
        res.status(200).json({
            msg: "Automóvil encontrado",
            auto,
        });
    } catch (error) {
        res.status(500).json({ msg: "Error interno del servidor", error });
    }
};

// Actualizar auto
export const updateAutomovil = async (req, res) => {
    const { id } = req.params;
    const { detalles_auto, motor, piezas, mantenimientos } = req.body;
    try {
        const updatedAuto = await AutomovilModel.findByIdAndUpdate(
            id,
            { detalles_auto, motor, piezas, mantenimientos },
            { new: true }
        );
        res.status(200).json({
            msg: "Automóvil actualizado",
            updatedAuto,
        });
    } catch (error) {
        res.status(500).json({ msg: "Error interno del servidor", error });
    }
};

// Eliminar auto
export const deleteAutomovil = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedAuto = await AutomovilModel.findByIdAndDelete(id);
        res.status(200).json({
            msg: "Automóvil eliminado correctamente",
            deletedAuto,
        });
    } catch (error) {
        res.status(500).json({ msg: "Error interno del servidor", error });
    }
};

// Agregar una pieza a un auto (relación N:M)
export const addPiezaToAutomovil = async (req, res) => {
    const { autoID, piezaID } = req.params;
    try {
        const updatedAuto = await AutomovilModel.findByIdAndUpdate(
            autoID,
            { $push: { piezas: piezaID } },
            { new: true }
        ).populate("piezas");
        res.status(200).json({
            msg: "Pieza agregada al automóvil",
            updatedAuto,
        });
    } catch (error) {
        res.status(500).json({ msg: "Error interno del servidor", error });
    }
};

// Agregar un mantenimiento a un auto (relación 1:N)
export const addMantenimientoToAutomovil = async (req, res) => {
    const { autoID } = req.params;
    const { fecha, descripcion, costo } = req.body;
    try {
        const updatedAuto = await AutomovilModel.findByIdAndUpdate(
            autoID,
            { $push: { mantenimientos: { fecha, descripcion, costo } } },
            { new: true }
        );
        res.status(200).json({
            msg: "Mantenimiento agregado al automóvil",
            updatedAuto,
        });
    } catch (error) {
        res.status(500).json({ msg: "Error interno del servidor", error });
    }
};
