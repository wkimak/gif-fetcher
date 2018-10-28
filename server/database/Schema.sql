DROP DATABASE IF EXISTS gif_fetcher;
CREATE DATABASE gif_fetcher;

USE gif_fetcher;

DROP TABLE IF EXISTS users;

CREATE TABLE users ( id_users int NOT NULL AUTO_INCREMENT PRIMARY KEY, 
	                 username VARCHAR(30) NOT NULL, 
	                 password VARCHAR(30) NOT NULL
	               );

CREATE TABLE favorites ( id_favorites int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	                     gif_id int NOT NULL,
                         url VARCHAR(255) NOT NULL AUTO_INCREMENT PRIMARY KEY,
                         username VARCHAR(30) NOT NULL,
                         FOREIGN KEY (username) REFERENCES users(username) ON DELETE CASCADE
   					   )

