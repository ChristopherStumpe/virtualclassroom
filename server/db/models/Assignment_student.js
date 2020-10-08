/* eslint-disable camelcase */
module.exports = (sequelize, DataTypes) => {
  const Assignment_student = sequelize.define('assignment_student', {
    drive_url: {
      type: DataTypes.STRING,
    },
  }, {
    freezeTableName: true,
  });

  return Assignment_student;
};
