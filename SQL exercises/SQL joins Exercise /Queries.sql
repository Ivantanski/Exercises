--Part one -- 
 --1-- 
Join the two tables so that every column and record appears, regardless of if there is not an owner_id .
SELECT
    owners.id AS owner_id,
    owners.first_name,
    owners.last_name,
    vehicles.id AS car_id,
    vehicles.make,
    vehicles.model,
    vehicles.year,
    vehicles.price,
    vehicles.owner_id
FROM
    owners
RIGHT JOIN
    vehicles
ON
    owners.id = vehicles.owner_id
ORDER BY
    owners.id, vehicles.id;


--2--
Count the number of cars for each owner. Display the owners first_name , last_name and count of vehicles. The first_name should be ordered in ascending order. Your output should look like this:

SELECT 
    first_name, 
    last_name, 
    COUNT(owner_id) AS count 
FROM 
    owners o
JOIN 
    vehicles v 
ON 
    o.id = v.owner_id
GROUP BY 
    first_name, 
    last_name
ORDER BY 
    first_name ASC;

--3--
SELECT
    o.first_name,
    o.last_name,
    ROUND(AVG(v.price)) AS avg_price,
    COUNT(v.id) AS vehicle_count
FROM
    owners o
JOIN
    vehicles v ON o.id = v.owner_id
GROUP BY
    o.first_name,
    o.last_name
HAVING
    COUNT(v.id) > 1 AND AVG(v.price) > 10000
ORDER BY
    o.first_name DESC;

