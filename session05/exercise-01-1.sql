-- 01. Create db name as purwadhika_student, purwadhika_schedule, purwadhika_branch
CREATE DATABASE purwadhika_student;
CREATE DATABASE purwadhika_schedule;
CREATE DATABASE purwadhika_branch;

-- 02. Show list of database with name contain purwadhika.
SHOW DATABASES LIKE '%purwadhika%';

-- 03. Delete database purwadhika_schedule
DROP DATABASE IF EXISTS purwadhika_schedule;

-- 04. Create table name as Students in purwadhika_student db, with field id,
-- last_name, first_name, address, city. The id field should be in integer type 
-- while the rest is varchar.
USE purwadhika_student;
CREATE TABLE Students (
  id INT PRIMARY KEY AUTO_INCREMENT,
  first_name varchar(255),
  last_name varchar(255),
  address varchar(500),
  city varchar(255)
);

-- 05. Add email column into table Students with type varchar.
ALTER TABLE Students ADD COLUMN email varchar(255);

-- 06. Add gender, batch_code, phone_number, alternative_phone_number column 
-- in single query.
ALTER TABLE Students 
ADD COLUMN gender varchar(255),
ADD COLUMN batch_code varchar(255),
ADD COLUMN phone_number varchar(255),
ADD COLUMN alternative_phone_number varchar(255);

-- 07. Change alternative_phone_number column name into description with 
-- varchar type.
ALTER TABLE Students
CHANGE COLUMN alternative_phone_number description varchar(500);

-- 08. Remove column gender in table Students
ALTER TABLE Students DROP COLUMN gender;

