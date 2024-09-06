import User from '../../models/User.js';

export default defineEventHandler(async (event) => {
  let response;

  try {
    const users = await User.findAll();
    response = {
      success: 'OK',
      status: 200,
      message: 'Here are the users you wanted',
      users,
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
