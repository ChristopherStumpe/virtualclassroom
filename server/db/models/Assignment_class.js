module.exports = (sequelize, DataTypes) => sequelize.define('assignment_class', {
  id_assignment: {
  type: DataTypes.INTEGER,
  references: {
    model: 'assignment',
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