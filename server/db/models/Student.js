module.exports = (sequelize, DataTypes) => sequelize.define('student', {
  full_name: {
    type: DataTypes.STRING,
  },
  id_school: {
    type: DataTypes.INTEGER,
    references: {
      model: 'school',
      key: 'id',
    },
  },
  email: {
    type: DataTypes.STRING,
  },
}, {
  freezeTableName: true,
  timestamps: true,
});