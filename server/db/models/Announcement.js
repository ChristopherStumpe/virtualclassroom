module.exports = (sequelize, DataTypes) => sequelize.define('announcement', {
  announcement_title: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  release_time: {
    type: DataTypes.STRING,
  },
  expiration_date: {
    type: DataTypes.STRING,
  },
}, {
  freezeTableName: true,
  timestamps: true,
});