import Note from '~/server/models/Note';

export default defineEventHandler(async (event) => {
  let response;
  const id = getRouterParam(event, 'id');
  try {
    await Note.destroy({
      where: {
        id: id,
      },
    });

    response = {
      success: 'OK',
      status: 200,
      message: 'Note has been successfully destroied',
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
