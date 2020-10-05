module.exports = (sequelize, DataTypes) => sequelize.define('announcement_class', {
  id_announcement: {
  type: DataTypes.INTEGER,
  references: {
    model: 'announcement',
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