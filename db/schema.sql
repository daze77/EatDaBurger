DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE bugers_db;

CREATE TABLE burgers(
    id INT AUTO_INCREMENT,
    burger_name VARCHAR(100),
    devoured boolean, 
)
