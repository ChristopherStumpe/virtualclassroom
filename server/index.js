/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
// const { teacherRouter } = require('./routes/student');
// const { studentRouter } = require('./routes/teacher');

require('./db/db');

const PORT = process.env.SERVER_PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

// Routes //
// app.use('/teacher', teacherRouter);
// app.use('/student', studentRouter);

app.listen(PORT, () => {
  console.log(`🌌Server has started on port: 🚀${PORT}`);
});
