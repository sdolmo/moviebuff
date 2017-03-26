CREATE TABLE IF NOT EXISTS movies (
  id int NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  director varchar(255) NOT NULL,
  genre varchar(255) NOT NULL,
  PRIMARY KEY (id)
)

INSERT INTO movies (title, director, genre) VALUES
  ('Get Out', 'Jordan Peele', 'Horror'),
  ('Split', ' M. Night Shyamalan', 'Horror'),
  ('Hidden Figures', 'Theodore Melfi', 'Biography');
