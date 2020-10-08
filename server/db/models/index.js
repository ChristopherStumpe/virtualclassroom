/* eslint-disable camelcase */
const { Sequelize } = require('sequelize');
require('dotenv').config();

const user = process.env.DB_USERNAME;
const host = process.env.DB_HOST;
const database = process.env.DB_DBNAME;
const password = process.env.DB_PASSWORD;
const port = process.env.DB_PORT;

const sequelize = new Sequelize(
  `postgres://${user}:${password}@${host}:${port}/${database}`,
  {
    logging: false,
  },
);

const AnnouncementModel = require('./Announcement')
const AssignmentModel = require('./Assignment')
const ClassModel = require('./Class')
const SchoolModel = require('./School')
const StudentModel = require('./Student')
const TeacherModel = require('./Teacher')
const Assignment_studentModel = require('./Assignment_student')

const Announcement = AnnouncementModel(sequelize, Sequelize);
const Assignment = AssignmentModel(sequelize, Sequelize);
const Class = ClassModel(sequelize, Sequelize);
const School = SchoolModel(sequelize, Sequelize);
const Student = StudentModel(sequelize, Sequelize);
const Teacher = TeacherModel(sequelize, Sequelize);
const Assignment_student = Assignment_studentModel(sequelize, Sequelize);

const models = {
  Announcement,
  Assignment,
  Class,
  School,
  Student,
  Teacher,
  Assignment_student,
};

Object.keys(models).forEach((model) => {
  if (models[model].associate) {
    models[model].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;
module.exports = models;
