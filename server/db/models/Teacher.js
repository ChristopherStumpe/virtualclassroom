module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define('teacher', {
    full_name: {
      type: DataTypes.STRING,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
  }, {
    freezeTableName: true,
  });

  Teacher.associate = (models) => {
    Teacher.belongsTo(models.School, {
      foreignKey: 'id_school',
    });
  };

  return Teacher;
};
