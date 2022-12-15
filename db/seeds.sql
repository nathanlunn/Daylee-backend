INSERT INTO users (email, name, password, image, bio) VALUES 
  ('sheela@gmail.com', 'Sheela', '1234', 'https://res.cloudinary.com/dnggclzfd/image/upload/v1668724404/cld-sample.jpg', 'I love living life and sharing experiences with others');
INSERT INTO users (email, name, password, image, bio) VALUES 
  ('shoeman@gmail.com', 'Shoeman', '1234', 'https://res.cloudinary.com/dnggclzfd/image/upload/v1668724406/cld-sample-5.jpg', 'shoes. shoes. shoooooooes.');

INSERT INTO topics (image, title, date_created) VALUES
  ('https://res.cloudinary.com/dnggclzfd/image/upload/v1668724405/cld-sample-4.jpg', 'What is a Food Not Many People Have Tried, but They Should!', '2022-11-16');
INSERT INTO topics (image, title, date_created) VALUES
  ('https://res.cloudinary.com/dnggclzfd/image/upload/v1668724404/cld-sample-2.jpg', 'What is the Most Beautiful Place in the World You Have Ever Seen?', '2022-11-17');

INSERT INTO comments (user_id, topic_id, content) VALUES
  (1, 1, "Idk if many people have tried it or not, but I just tried escargot for the first time and... it wasn't that bad!");
INSERT INTO comments (user_id, topic_id, content) VALUES
  (2, 1, "I agree with Sheela, snails are great!");
INSERT INTO comments (user_id, topic_id, content) VALUES
  (2, 2, "The mountains in Banff, Alberta are so gorgeous I couldn't believe my eyes.");
INSERT INTO comments (user_id, topic_id, content) VALUES 
  (2, 1, "If you haven't seen the beaches in Bali, you are seriously missing out!");