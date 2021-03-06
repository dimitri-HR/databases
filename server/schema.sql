DROP database chat;
CREATE DATABASE IF NOT EXISTS chat;

USE chat;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(20),
  PRIMARY KEY (id)
);

CREATE TABLE rooms (
  id int NOT NULL AUTO_INCREMENT,
  roomname varchar(20),
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  id int NOT NULL AUTO_INCREMENT,
  text varchar(255),
  date TIMESTAMP,
  PRIMARY KEY (id),
  id_users int,
  id_rooms int,
  FOREIGN KEY (id_users) REFERENCES users (id),
  FOREIGN KEY (id_rooms) REFERENCES rooms (id)
);

/* Create other tables and define schemas for them here! */



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
