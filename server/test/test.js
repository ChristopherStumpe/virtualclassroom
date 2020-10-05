/* eslint-disable no-console */
const {
  Announcement, Announcement_class, Assignment, Assignment_class, Assignment_student, Class, School, Student, Student_class, Teacher,
} = require('../db/db');

function primeDB() {
  School.findOrCreate({
    where: {
      school_name: 'Hannibal High School',
    },
  })
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log(`✅ School Created`);
      }
      return console.error('❌save undefined');
    })
    .catch((err) => {
      console.error(`❌${err}`);
    });
}
primeDB();
