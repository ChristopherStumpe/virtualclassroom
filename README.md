# virtualclassroom

An app to help you be the best educator you can be. 

## Table of Contents

1. [How it works](#how-it-works)
2. [App Wireframe](#wireframe)
3. [Architecture](#architecture)
4. [Database](#database)
5. [Tech Stack](#tech-stack)
6. [Development](#development)
  6. [System Requirements](#system-requirements)
  6. [Installation](#installation)
  6. [Simulate for Mobile](#simulate-mobile)

## <a name="how-it-works"></a>How it Works

> Student and teacher accounts
> Students can submit their assignments
> Teachers can add classes, assignments, announcements, and students to their roster
> Assignment and annoucements are customizable


## <a name="DB Setup"></a>DB Setup

First, install PostgreSQL 12 on your machine:
https://www.postgresql.org/download/

Then, use `node -v` to check your current version of Node. Upgrade to 12, if not currently on version 12.

service postgresql start              // start postgresSQL
psql -U root                          // log in to postgreSQL with your password
CREATE DATABASE virtualclassroom;    // create postgreSQL database
\c virtualclassroom;                 // connect to virtualclassroom database
npm run start                       // starts development server
npm run test-db                     // tests database commands and populates w/ sample data


Environment Variables for DB
Place in a .env file in outermost directory

env_variables:
  DB_USERNAME                     // PostgreSQL login username
  DB_PASSWORD                     // PostgreSQL password
  DB_HOST                         // database host (default=localhost)
  DB_PORT                         // database port (default=5432)
  DB_DBNAME                       // database name (default=virtualclassroom)


## <a name="wireframe"></a>App Wireframe

## <a name="wireframe"></a>Tech Stack
