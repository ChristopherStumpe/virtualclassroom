module.exports = (sequelize, DataTypes) => sequelize.define('student_class', {
  full_name: {
    type: DataTypes.STRING,
  },
  id_student: {
    type: DataTypes.INTEGER,
    references: {
      model: 'student',
      key: 'id',
    },
  },
  id_class: {
    type: DataTypes.INTEGER,
    references: {
      model: 'class',
      key: 'id',
    },
  },
}, {
  freezeTableName: true,
  timestamps: true,
});