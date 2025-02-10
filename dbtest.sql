SET NAMES utf8;
SET CARACTER SET utf8;

DROP DATABASE IF EXISTS dbtest;
CREATE DATABASE dbtest;
USE dbtest;

CREATE TABLE `users` (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL
);

INSERT INTO users (name, email) VALUES ('John Doe', 'LEBG@gmail.com');
INSERT INTO users (name, email) VALUES ('Jane Doe', 'lenoobdu38@gmail.com');
INSERT INTO users (name, email) VALUES ('John Smith', 'propunt@gmail.com');
INSERT INTO users (name, email) VALUES ('Jane Smith', 'tomekrouz@gmail.com');