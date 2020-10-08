/* eslint-disable camelcase */
/* eslint-disable no-console */
const {
  Announcement,
  Announcement_class,
  Assignment,
  Assignment_class,
  Assignment_student,
  Class, School,
  Student,
  Student_class,
  Teacher,
} = require('../db/models/index.js');

function primeDB() {
  School.findOrCreate({
    where: {
      school_name: 'Hannibal High School',
    },
  })
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ School Created');
      }
      return console.error('❌save undefined');
    })
    .catch((err) => {
      console.error(`❌${err}`);
    });
  Student.findOrCreate({
    where: {
      full_name: 'Jimmy Fallon',
      id_school: 1,
      email: 'Jfallon@hhs.edu',
    },
  })
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ Student Created');
      }
      return console.error('❌save undefined');
    })
    .catch((err) => {
      console.error(`❌${err}`);
    });
  Teacher.findOrCreate({
    where: {
      full_name: 'George Washington',
      id_school: 1,
      email: 'GWashington@hhs.edu',
    },
  })
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ Teacher Created');
      }
      return console.error('❌save undefined');
    })
    .catch((err) => {
      console.error(`❌${err}`);
    });
  Class.findOrCreate({
    where: {
      class_name: 'US History I',
      period: 1,
      start_time: '8:00 AM',
      end_time: '9:00 AM',
      id_school: 1,
      id_teacher: 1,
    },
  })
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ Class Created');
      }
      return console.error('❌save undefined');
    })
    .catch((err) => {
      console.error(`❌${err}`);
    });
  // Student_class.findOrCreate({
  //   where: {
  //     id_student: 1,
  //     id_class: 1,
  //   },
  // })
  //   .then((numberEffected) => {
  //     if (numberEffected) {
  //       return console.log('✅ Student_class Created');
  //     }
  //     return console.error('❌save undefined');
  //   })
  //   .catch((err) => {
  //     console.error(`❌${err}`);
  //   });
  Announcement.findOrCreate({
    where: {
      announcement_title: 'Holiday Friday!',
      description: 'Have a nice 3-day weekend!',
      release_time: 'end of day',
      expiration_date: 'end of week',
    },
  })
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ Announcement Created');
      }
      return console.error('❌save undefined');
    })
    .catch((err) => {
      console.error(`❌${err}`);
    });
  Assignment.findOrCreate({
    where: {
      assignment_name: 'Who was the best US President?',
      description: '3 pages, long-form',
      release_time: 'start of class',
      due_date: '2001-10-29',
    },
  })
    .then((numberEffected) => {
      if (numberEffected) {
        return console.log('✅ Assignment Created');
      }
      return console.error('❌save undefined');
    })
    .catch((err) => {
      console.error(`❌${err}`);
    });
  // Assignment_class.findOrCreate({
  //   where: {
  //     id_assignment: 1,
  //     id_class: 1,
  //   },
  // })
  //   .then((numberEffected) => {
  //     if (numberEffected) {
  //       return console.log('✅ Assignment linked to class');
  //     }
  //     return console.error('❌save undefined');
  //   })
  //   .catch((err) => {
  //     console.error(`❌${err}`);
    // });
  // Assignment_student.findOrCreate({
  //   where: {
  //     id_assignment: 1,
  //     id_student: 1,
  //     drive_url: 'myDrive@google.com',
  //   },
  // })
  //   .then((numberEffected) => {
  //     if (numberEffected) {
  //       return console.log('✅ Assignment linked to student');
  //     }
  //     return console.error('❌save undefined');
  //   })
  //   .catch((err) => {
  //     console.error(`❌${err}`);
  //   });
  // Announcement_class.findOrCreate({
  //   where: {
  //     id_announcement: 1,
  //     id_class: 1,
  //   },
  // })
  //   .then((numberEffected) => {
  //     if (numberEffected) {
  //       return console.log('✅ Announcement linked to class');
  //     }
  //     return console.error('❌save undefined');
  //   })
  //   .catch((err) => {
  //     console.error(`❌${err}`);
  //   });
}

primeDB();
