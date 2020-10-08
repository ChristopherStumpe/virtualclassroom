module.exports = (sequelize, DataTypes) => sequelize.define('school', {
  school_name: {
    type: DataTypes.STRING,
    unique: true,
  },
}, {
  freezeTableName: true,
});
