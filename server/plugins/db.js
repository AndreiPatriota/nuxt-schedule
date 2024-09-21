import { db } from '../utils/db.instance';

export default defineNitroPlugin(async (nitro) => {
  try {
    await db.authenticate();
    await db.sync({ alter: false, force: false, logging: false });
  } catch (error) {
    console.error(error);
  }
});
