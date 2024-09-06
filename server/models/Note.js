import { Sequelize } from 'sequelize';

const tableName = 'notes';
const Note = db.define(tableName, {
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [3, 40],
    },
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
    validator: {
      len: [15, 255],
    },
  },
  color: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isIn: [['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'purple']],
      isLowercase: true,
    },
  },
});

export default Note;
