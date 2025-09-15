import express from "express";
import cors from "cors";
import "dotenv/config";
import { connectDB } from "./src/config/database.js";
//import { userRoutes } from "./src/routes/user.routes.js";

const app = express();
const PORT = process.env.PORT;

// middlewares
app.use(express.json());
app.use(cors());

// rutas
//app.use("/api", userRoutes);

app.listen(PORT, async () => {
    await connectDB();
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});