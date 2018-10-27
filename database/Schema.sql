DROP DATABASE IF EXISTS gif_fetcher;
CREATE DATABASE gif_fetcher;

USE gif_fetcher;

DROP TABLE IF EXISTS users;

CREATE TABLE users ( id_users int NOT NULL AUTO_INCREMENT PRIMARY KEY, 
	                 username VARCHAR(30) NOT NULL, 
	                 password VARCHAR(30) NOT NULL
	               );

