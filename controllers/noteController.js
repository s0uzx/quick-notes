import NoteModel from "../models/noteModel";

class NoteController {
    getAll = async (req, res) => {
      try {
        const notes = await NoteModel.getAll();
        res.json(notes);
      } catch (error) {
        console.error(error);
        res.status(500).json({ erro: "Erro ao buscar anotação" });
      }
    };
  
    create = async (req, res) => {
      const { descricao } = req.body;
      try {
        if (!descricao) {
          return res.status(400).json({ erro: "Descrição é obrigatória" });
        }
        const newNote = await NoteModel.create(descricao);
        res.status(201).json(newNote);
      } catch (error) {
        console.error(error);
        res.status(500).json({ erro: "Erro ao criar anotação" });
      }
    };
  
    update = async (req, res) => {
      const { id } = req.params;
      const { concluida } = req.body;
  
      try {
        const noteUpdated = await NoteModel.update(
          parseInt(id),
          concluida
        );
  
        if (!noteUpdated) {
          return res.status(404).json({ erro: "Anotação não encontrada" });
        }
  
        res.json(noteUpdated);
      } catch (error) {
        console.error(error);
        res.status(500).json({ erro: "Erro ao atualizar anotação" });
      }
    };
  
    delete = async (req, res) => {
      const { id } = req.params;
  
      try {
        const sucesso = await NoteModel.delete(parseInt(id));
  
        if (!sucesso) {
          return res.status(404).json({ erro: "Anotação não encontrada" });
        }
  
        res.status(204).send();
      } catch (error) {
        console.error(error);
        res.status(500).json({ erro: "Erro ao excluir anotação" });
      }
    };
  
    getById = async (req, res) => {
      const { id } = req.params;
  
      try {
        const note = await NoteModel.getById(parseInt(id));
  
        if (!note) {
          return res.status(404).json({ erro: "Tarefa não encontrada" });
        }
  
        res.json(note);
      } catch (error) {
        console.error(error);
        res.status(500).json({ erro: "Erro ao buscar tarefa" });
      }
    };
  }
  
  export default new NoteController();