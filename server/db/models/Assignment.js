module.exports = (sequelize, DataTypes) => sequelize.define('assignment', {
  assignment_name: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  due_date: {
    type: DataTypes.TIME,
  },
  release_time: {
    type: DataTypes.STRING,
  },
}, {
  freezeTableName: true,
  timestamps: true,
});