DROP DATABASE IF EXISTS gif_fetcher;
CREATE DATABASE gif_fetcher;

USE gif_fetcher;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS favorites;
DROP TABLE IF EXISTS users_favorites;

CREATE TABLE users ( id_user int NOT NULL AUTO_INCREMENT PRIMARY KEY, 
	                 username VARCHAR(30) NOT NULL UNIQUE, 
	                 password VARCHAR(30) NOT NULL
	               );

CREATE TABLE favorites ( id_favorite int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	                     gif_id VARCHAR(30) NOT NULL,
                         still_url VARCHAR(255) NOT NULL,
                         video_url VARCHAR(255) NOT NULL
   					   );

CREATE TABLE users_favorites ( id_userFavorite int NOT NULL AUTO_INCREMENT PRIMARY KEY,
							   user_id int NOT NULL,
							   FOREIGN KEY (user_id) REFERENCES users(id_user) ON DELETE CASCADE,
                               favorite_id int NOT NULL,
                               FOREIGN KEY (favorite_id) REFERENCES favorites(id_favorite) ON DELETE CASCADE
					         );

