/* eslint-disable no-console */
require('dotenv').config();
const { Sequelize } = require('sequelize');
const Announcement_classModel = require('./models/Announcement_class');
const AnnouncementModel = require('./models/Announcement');
const Assignment_classModel = require('./models/Assignment_class');
const Assignment_studentModel = require('./models/Assignment_student');
const AssignmentModel = require('./models/Assignment');
const ClassModel = require('./models/Class');
const SchoolModel = require('./models/School');
const Student_classModel = require('./models/Student_class');
const StudentModel = require('./models/Student');
const TeacherModel = require('./models/Teacher');

const user = process.env.DB_USERNAME;
const host = process.env.DB_HOST;
const database = process.env.DB_DBNAME;
const password = process.env.DB_PASSWORD;
const port = process.env.DB_PORT;

const sequelize = new Sequelize(
  `postgres://${user}:${password}@${host}:${port}/${database}`, {
    logging: false,
  },
);

const Announcement_class = Announcement_classModel(sequelize, Sequelize);
const Announcement = AnnouncementModel(sequelize, Sequelize);
const Assignment_class = Assignment_classModel(sequelize, Sequelize);
const Assignment_student = Assignment_studentModel(sequelize, Sequelize);
const Assignment = AssignmentModel(sequelize, Sequelize);
const Class = ClassModel(sequelize, Sequelize);
const School = SchoolModel(sequelize, Sequelize);
const Student_class = Student_classModel(sequelize, Sequelize);
const Student = StudentModel(sequelize, Sequelize);
const Teacher = TeacherModel(sequelize, Sequelize);


  // Announcement.belongsToMany(Class, { through: Announcement_class });
  // Assignment.belongsToMany(Class, { through: Assignment_class });
  // Assignment.belongsToMany(Student, { through: Assignment_student });
  // // Student.belongsToMany(Class, { foreignKey: 'id_' }); ???????
  // School.hasMany(Class, { foreignKey: 'id_school'})
  // Teacher.hasMany(Class, { foreignKey: 'id_teacher'})
  // School.hasMany(Student, { foreignKey: 'id_school'})
  // School.hasMany(Teacher, { foreignKey: 'id_school'})


const connection = async() => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
const syncModels = async() => {
  try {
    await sequelize.sync();
    console.log('Models have been synced successfully.');
  } catch (error) {
    console.error('Unable to sync models:', error);
  }
};

connection();
syncModels();

module.exports = {
  Announcement_class,
  Announcement,
  Assignment_class,
  Assignment_student,
  Assignment,
  Class,
  School,
  Student_class,
  Student,
  Teacher,
};
