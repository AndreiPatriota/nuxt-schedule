import User from '~/server/models/User';

export default defineEventHandler(async (event) => {
  let response;

  try {
    const id = getRouterParam(event, 'id');
    const user = await User.findByPk(id);

    response = {
      success: 'OK',
      status: 200,
      message: 'Here is the user you were looking for!',
      user,
    };
  } catch (error) {
    response = {
      success: 'NOK',
      status: 500,
      message: error,
    };
  } finally {
    return response;
  }
});
