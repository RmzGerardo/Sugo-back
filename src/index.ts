import express from "express";
import cors from "cors";
import type { CorsOptions } from "cors";
import { Sequelize } from "sequelize";
import catalogoRoutes from "./routes/catalogo.routes.js";
import { sequelize } from "./config/database.js";
import authRoutes from "./routes/auth.routes.js"; // Cambiado a .js
import usuariosRoutes from "./routes/usuarios.routes.js";

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/catalogo", catalogoRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/usuarios", usuariosRoutes);

// Conexión a la base de datos y sincronización de modelos
sequelize.authenticate().then(() => {
  console.log("Conexión a la base de datos establecida correctamente.");
  sequelize.sync(); // Sincroniza los modelos con la base de datos
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
