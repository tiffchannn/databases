DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE chatroom (
  id int auto_increment not null primary key,
  chatroom_name varchar(255) not null
);

CREATE TABLE messages (
  id int auto_increment not null primary key,
  username varchar(255) not null,
  content varchar(255) not null,
  chatroom_id int not null,
  FOREIGN KEY (chatroom_id) REFERENCES chatroom (id)
);



/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

