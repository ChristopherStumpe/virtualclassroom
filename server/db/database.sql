CREATE DATABASE virtualclassroom;

CREATE TABLE "student" (
  "id" SERIAL PRIMARY KEY,
  "full_name" varchar,
  "id_school" int,
  "email" varchar,
  "created_at" timestamp
);

CREATE TABLE "teacher" (
  "id" SERIAL PRIMARY KEY,
  "full_name" varchar,
  "id_school" int,
  "email" varchar,
  "created_at" timestamp
);

CREATE TABLE "school" (
  "id" SERIAL PRIMARY KEY,
  "school_name" varchar,
  "created_at" timestamp
);

CREATE TABLE "class" (
  "id" SERIAL PRIMARY KEY,
  "class_name" varchar,
  "period" int,
  "start_time" time,
  "end_time" time,
  "id_school" int,
  "id_teacher" int,
  "created_at" timestamp
);

CREATE TABLE "assignment" (
  "id" SERIAL PRIMARY KEY,
  "assignment_title" varchar,
  "description" varchar,
  "due_date" time,
  "release_time" VARCHAR,
  "created_at" timestamp
);

CREATE TABLE "announcement" (
  "id" SERIAL PRIMARY KEY,
  "announcement_title" varchar,
  "description" varchar,
  "release_time" VARCHAR,
  "expiration_date" VARCHAR,
  "created_at" timestamp
);

CREATE TABLE "student_class" (
  "id" SERIAL PRIMARY KEY,
  "id_student" int,
  "id_class" int,
  "created_at" timestamp
);

CREATE TABLE "assignment_class" (
  "id" SERIAL PRIMARY KEY,
  "id_assignment" int,
  "id_class" int,
  "created_at" timestamp
);

CREATE TABLE "assignment_student" (
  "id" SERIAL PRIMARY KEY,
  "id_assignment" int,
  "id_student" int,
  "drive_url" varchar,
  "created_at" timestamp
);

CREATE TABLE "announcement_class" (
  "id" SERIAL PRIMARY KEY,
  "id_announcement" int,
  "id_class" int,
  "created_at" timestamp
);

ALTER TABLE "teacher" ADD FOREIGN KEY ("id_school") REFERENCES "school" ("id");

ALTER TABLE "student" ADD FOREIGN KEY ("id_school") REFERENCES "school" ("id");

ALTER TABLE "class" ADD FOREIGN KEY ("id_school") REFERENCES "school" ("id");

ALTER TABLE "class" ADD FOREIGN KEY ("id_teacher") REFERENCES "teacher" ("id");

ALTER TABLE "student_class" ADD FOREIGN KEY ("id_student") REFERENCES "student" ("id");

ALTER TABLE "student_class" ADD FOREIGN KEY ("id_class") REFERENCES "class" ("id");

ALTER TABLE "assignment_class" ADD FOREIGN KEY ("id_assignment") REFERENCES "assignment" ("id");

ALTER TABLE "assignment_class" ADD FOREIGN KEY ("id_class") REFERENCES "class" ("id");

ALTER TABLE "assignment_student" ADD FOREIGN KEY ("id_assignment") REFERENCES "assignment" ("id");

ALTER TABLE "assignment_student" ADD FOREIGN KEY ("id_student") REFERENCES "student" ("id");

ALTER TABLE "announcement_class" ADD FOREIGN KEY ("id_announcement") REFERENCES "announcement" ("id");

ALTER TABLE "announcement_class" ADD FOREIGN KEY ("id_class") REFERENCES "class" ("id");