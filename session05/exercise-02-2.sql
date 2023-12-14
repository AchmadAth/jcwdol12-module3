-- 01 & 02. Add new actor into table actors with name JHONNY DAVIS.
-- There are several new actor to add. Add new actor into table actors 
-- with name ADAM DAVIS, JEREMY DAVIS, CRAIG DAVIS, STEVE DAVIS in a single query.
INSERT INTO actor (first_name, last_name) 
VALUES
('JHONNY', 'DAVIS'),
('ADAM', 'DAVIS'),
('JEREMY', 'DAVIS'),
('CRAIG', 'DAVIS'),
('STEVE', 'DAVIS');

-- 03. Count how many actors with last name DAVIS.
SELECT COUNT(*) FROM actor WHERE last_name='DAVIS';

-- 04. Delete actor with last name DAVIS and first name JENNIFER.
DELETE FROM actor WHERE last_name='DAVIS' AND  first_name='JENNIFER';

-- 05. Update actor with last name DAVIS and change his/her first name into GEORGE
UPDATE actor SET first_name='GEORGE' WHERE last_name='DAVIS'; 

-- 06. Find top 10 actor with the most perform on film.
SELECT 
	actor_id,
    COUNT(actor_id) appear_in_n_movies 
FROM film_actor 
GROUP BY actor_id
ORDER BY appear_in_n_movies DESC 
LIMIT 10;

-- 07. Display title, description, length, and rating from film, where special features include deleted scenes and behind the scenes order by most length 
SELECT 
	title,
    description,
    length,
    rating
FROM film 
WHERE special_features LIKE '%Deleted Scenes%' AND special_features LIKE '%Behind the Scenes%' 
ORDER BY length DESC;