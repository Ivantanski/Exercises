--1-- 
SELECT * FROM analytics 
WHERE id = 1880;

--2-- 
SELECT id, app_name FROM analytics
WHERE last_updated = '2018-08-01';

--3-- 
SELECT category, COUNT(*) FROM analytics
GROUP BY category;

--4-- 
