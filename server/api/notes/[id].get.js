import Note from '~/server/models/Note';

export default defineEventHandler(async (event) => {
  let reponse;

  const id = getRouterParam(event, 'id');
  try {
    const note = await Note.findByPk(id);
    reponse = {
      success: 'OK',
      status: 200,
      message: 'Thats the note you wanted',
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
