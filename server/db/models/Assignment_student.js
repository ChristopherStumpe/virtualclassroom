module.exports = (sequelize, DataTypes) => sequelize.define('assignment_student', {
    id_assignment: {
    type: DataTypes.INTEGER,
    references: {
      model: 'assignment',
      key: 'id',
    },
  },
  id_student: {
    type: DataTypes.INTEGER,
    references: {
      model: 'student',
      key: 'id',
    },
  },
  drive_url: {
    type: DataTypes.STRING,
  },
}, {
  freezeTableName: true,
  timestamps: true,
});