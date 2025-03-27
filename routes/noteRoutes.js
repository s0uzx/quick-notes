import express from "express";
import NoteController from "../controllers/noteController.js";
const router = express.Router();

router.get("/", NoteController.getAll);
router.get("/:id", NoteController.getById); // Nova rota
router.post("/", NoteController.create);
router.put("/:id", NoteController.update);
router.delete("/:id", NoteController.delete);

export default router;