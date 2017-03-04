-- DROP database chat;
CREATE DATABASE IF NOT EXISTS chat;


USE chat;

CREATE TABLE IF NOT EXISTS users (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(20),
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS rooms (
  id int NOT NULL AUTO_INCREMENT,
  roomname varchar(20),
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS messages (
  id int NOT NULL AUTO_INCREMENT,
  text varchar(255),
  date TIMESTAMP,
  PRIMARY KEY (id),
  id_users int,
  id_rooms int,
  FOREIGN KEY (id_users) REFERENCES users (id),
  FOREIGN KEY (id_rooms) REFERENCES rooms (id)
);

-- USE chat;
INSERT INTO users VALUES (100,'User1');
INSERT INTO rooms VALUES (200,'Room1');
INSERT INTO messages VALUES (null, 'Message1', null, 100, 200);



/* Create other tables and define schemas for them here! */



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql

 *    mysql -u root < server/insert.sql
 *  to create the database and the tables.*/
