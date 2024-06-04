--1-- 
SELECT app_name, rating, category FROM analytics
  WHERE (rating, category) in (
    SELECT MAX(rating), category FROM analytics
      WHERE min_installs >= 50000
      GROUP BY category
    )
  ORDER BY category;

--2--
SELECT * FROM analytics 
  WHERE app_name ILIKE '%facebook%';

--3-- 
SELECT * FROM analytics
WHERE cardinality(genres) = 2;

--4--
SELECT * FROM analytics 
  WHERE genres @> '{"Education"}';
