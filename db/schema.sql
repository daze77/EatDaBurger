DROP DATABASE IF EXISTS mySQLdb;

CREATE DATABASE mySQLdb;

USE mySQLdb;

CREATE TABLE burgers(
    id INT AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(100),
    devoured boolean
);