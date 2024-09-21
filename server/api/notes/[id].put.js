import Note from '~/server/models/Note';

export default defineEventHandler(async (event) => {
  let reponse;

  const id = getRouterParam(event, 'id');
  try {
    const newNote = await readBody(event);
    const note = await Note.findByPk(id);
    note.title = newNote.title;
    note.description = newNote.description;
    note.color = newNote.color;
    await note.save();
    reponse = {
      success: 'OK',
      status: 200,
      message: 'The note has been updated! =)',
      note,
    };
  } catch (error) {
    reponse = {
      success: 'NOK',
      status: 500,
      message: error,
    };
  } finally {
    return reponse;
  }
});
