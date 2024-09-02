import { Sequelize } from 'sequelize';
import { db } from '../utils/db.instance';

const tableName = 'users';
const User = db.define(tableName, {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
});

export default User;
