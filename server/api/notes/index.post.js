import Note from '~/server/models/Note';

export default defineEventHandler(async (event) => {
  let response;

  try {
    const note = await readBody(event);
    await Note.create(note);
    reponse = {
      success: 'OK',
      status: 201,
      message: 'Note has been successfully created',
    };
  } catch (error) {
    reponse = {
      success: 'NOK',
      status: 500,
      message: error,
    };
  } finally {
    return response;
  }
});
