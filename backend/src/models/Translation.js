import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Translation = sequelize.define('Translation', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  lg_code: {
    type: DataTypes.STRING(15),
    allowNull: false
  },
  text_key: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  value: {
    type: DataTypes.TEXT,
    allowNull: false,
  }
}, {
  tableName: 'translations',
  timestamps: false,
  indexes: [
    {
      unique: true,
      fields: ['lg_code', 'text_key']
    }
  ]
});

export default Translation;