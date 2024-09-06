import User from '~/server/models/User';

export default defineEventHandler(async (event) => {
  let reponse;

  try {
    const user = await readBody(event);
    await User.create(user);
    reponse = {
      success: 'OK',
      status: 201,
      message: 'User has been successfully created',
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
