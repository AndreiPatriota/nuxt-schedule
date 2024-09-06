import Note from '~/server/models/Note';

export default defineEventHandler(async (event) => {
  let reponse;

  try {
    const notes = await Note.findAll();
    reponse = {
      success: 'OK',
      status: 200,
      message: 'These are notes you were looking for =)',
      notes,
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
