module.exports = (sequelize, DataTypes) => {
  const Announcement = sequelize.define('announcement', {
    announcement_title: {
      type: DataTypes.STRING,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
      unique: true,
    },
    release_time: {
      type: DataTypes.STRING,
      unique: true,
    },
    expiration_date: {
      type: DataTypes.STRING,
      unique: true,
    },
  }, {
    freezeTableName: true,
  });

  Announcement.associate = (models) => {
    Announcement.belongsToMany(models.Class, {
      through: 'announcement_class',
      foreignKey: 'id_announcement',
    });
  };

  return Announcement;
};
