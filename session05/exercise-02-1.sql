-- 01. Display the first and last names of all actors from the table actor.
SELECT first_name, last_name FROM actor;

-- 02. You need to find the ID number, first name, and last name of an actor, of whom you know only the first name, "Joe."
 SELECT actor_id, first_name, last_name FROM actor WHERE first_name = 'JOE';
 
-- 03. Display the address, district, and city_id from address only for district: California, Alberta and Mekka 
SELECT address, district, city_id FROM address WHERE district IN ('California', 'Alberta', 'Mekka');

-- 04. Count actor with last name WOOD from table actors.
SELECT COUNT(*) FROM actor WHERE last_name = 'WOOD';

-- 05. Shows list of customer_id and sum of amount spent that made payment more than 20.
SELECT customer_id, SUM(amount) FROM payment GROUP BY customer_id HAVING COUNT(*) > 20;