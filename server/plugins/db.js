import { db } from '../utils/db.instance';

export default defineNitroPlugin(async (nitro) => {
  try {
    await db.authenticate();
    await db.sync({ alter: true, force: true });
  } catch (error) {
    console.error(error);
  }
});
