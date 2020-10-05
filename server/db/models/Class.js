module.exports = (sequelize, DataTypes) => sequelize.define('class', {
  class_name: {
    type: DataTypes.STRING,
  },
  period: {
    type: DataTypes.INTEGER,
  },
  start_time: {
    type: DataTypes.TIME,
  },
  end_time: {
    type: DataTypes.TIME,
  },
  id_school: {
    type: DataTypes.INTEGER,
    references: {
      model: 'school',
      key: 'id',
    },
  },
  id_teacher: {
    type: DataTypes.INTEGER,
    references: {
      model: 'teacher',
      key: 'id',
    },
  },
}, {
  freezeTableName: true,
  timestamps: true,
});