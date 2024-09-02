import User from '../../models/User.js';

export default defineEventHandler(async (event) => {
  let response;
  switch (event.method) {
    case 'GET':
      response = await getAllUsers(event);
      break;
    case 'POST':
      response = await createUser(event);
      break;
    default:
      break;
  }

  return response;
});

const getAllUsers = async (event) => {
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
};

const createUser = async (event) => {
  const user = await readBody(event);
  const users = await User.create();
  return {
    success: 'OK',
    status: 201,
    message: 'User has been successfully created',
  };
};
