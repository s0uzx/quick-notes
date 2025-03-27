import express from "express";
import NoteRoutes from "./routes/noteRoutes.js";
const app = express();
const port = 4000;
app.use(express.json());
app.use("/notes", NoteRoutes);
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});