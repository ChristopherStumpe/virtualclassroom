const Announcement_class = require('./models/Announcement_class');
const Announcement = require('./models/Announcement');
const Class = require('./models/Class');
const Assignment = require('./models/Assignment');
const Assignment_class = require('./models/Assignment_class');
const Assignment_student = require('./models/Assignment_student');
const Student = require('./models/Student');
const School = require('./models/School');
const Teacher = require('./models/Teacher');
const Student_class = require('./models/Student_class')

const setAssociations = () => {
  Announcement.belongsToMany(Class, { through: Announcement_class });
  Assignment.belongsToMany(Class, { through: Assignment_class });
  Assignment.belongsToMany(Student, { through: Assignment_student });
  Student.belongsToMany(Class, { through: Student_class });
  Class.belongsTo(School);
  Class.belongsTo(Teacher);
  Student.belongsTo(School);
  Teacher.belongsTo(School);
};

module.exports = setAssociations;