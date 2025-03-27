import prisma from "../../prisma/client.js";

class NoteModel {
  getAll = async () => {
    return await prisma.note.findMany();
  };

  create = async (titulo, conteudo, favorita, cor) => {
    return await prisma.note.create({
      data: {
        titulo,
        conteudo,
        favorita,
        cor
      },
    });
  };

  update = async (id, concluida) => {
    try {
      return await prisma.note.update({
        where: { id },
        data: {
          concluida: concluida !== undefined ? concluida : true,
        },
      });
    } catch (error) {
      // Se a tarefa não for encontrada, o Prisma lançará uma exceção
      if (error.code === "P2025") {
        return null;
      }
      throw error;
    }
  };

  delete = async (id) => {
    try {
      await prisma.note.delete({
        where: { id },
      });
      return true;
    } catch (error) {
      // Se a tarefa não for encontrada, o Prisma lançará uma exceção
      if (error.code === "P2025") {
        return false;
      }
      throw error;
    }
  };

  getById = async (id) => {
    return await prisma.note.findUnique({
      where: { id },
    });
  };
}

export default new NoteModel();