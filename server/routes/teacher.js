/* eslint-disable no-console */
const { Router } = require('express');
const sequelize = require('sequelize');
const {
  Announcement, Announcement_class, Assignment, Assignment_class, Assignment_student, Class, School, Student, Student_class, Teacher,
} = require('../db/db');

const teacherRouter = Router();

module.exports = {
  teacherRouter,
};
