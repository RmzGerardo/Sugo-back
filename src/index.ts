import express from "express";
import cors from "cors";
import type { CorsOptions } from "cors";
import { Sequelize } from "sequelize";
import catalogoRoutes from "./routes/catalogo.routes.ts";
import { sequelize } from "./config/database.ts";

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/catalogo", catalogoRoutes);

// Conexión a la base de datos y sincronización de modelos
sequelize.authenticate().then(() => {
  console.log("Conexión a la base de datos establecida correctamente.");
  sequelize.sync(); // Sincroniza los modelos con la base de datos
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
