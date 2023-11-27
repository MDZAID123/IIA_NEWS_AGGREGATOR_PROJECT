use test;
select Distinct(category) from global_View;


SELECT distinct(source), COUNT(*) as frequency
FROM global_View
GROUP BY source
ORDER BY frequency desc;


-- qd 
-- Rows with Non-NULL Values
SELECT *
FROM global_view
WHERE image IS NOT NULL
ORDER BY image;

UNION ALL


SELECT *
FROM global_view
WHERE image IS NULL;
 



Select * from global_view where source='';


-- sql queries for this iia news aggreagator
--  query 1 which find the recent date of the article for each category type
SELECT *
FROM global_view as t
INNER JOIN (
   SELECT category, MAX(date) as max_date
   FROM global_view
   GROUP BY category
) subq
ON t.category = subq.category AND t.date = subq.max_date;



 -- query 2
 SELECT title, COUNT(*) OVER (PARTITION BY title) as title_count
FROM global_view
ORDER BY title_count DESC;



-- QUERY DECOMPOSITION EXAMPLE
SELECT title, snippet, url, date, source, category
FROM global_view t
WHERE source IN (
   SELECT source
   FROM global_view
   GROUP BY source
   HAVING COUNT(*) > 1
);

-- qd part2 
(SELECT title, snippet, url, date, source, category FROM global_view WHERE date>='1700335805000'LIMIT 10)
UNION
(SELECT title, snippet, url, date, source, category FROM global_view WHERE category='entertainment' LIMIT 10)
ORDER BY date DESC;


select * from global_view where category='sports';

SET SQL_SAFE_UPDATES = 0;

UPDATE global_view
SET category = 'sports'
WHERE category = 'sport';

 

SELECT *
FROM global_view
ORDER BY image IS NULL, image;

-- qd
SELECT * FROM global_view where image IS NOT NULL
UNION ALL
    SELECT * FROM global_view WHERE image IS NULL;
    
    
    
-- Rows with Non-NULL Values
(SELECT *
FROM global_view
WHERE image IS NOT NULL
ORDER BY image)

UNION ALL

-- Rows with NULL Values
SELECT *
FROM global_view
WHERE image IS NULL

UNION ALL

-- Rows with Category 'science'
SELECT *
FROM global_view
WHERE category = 'science';


-- manik
use test;
-- Create categories table
DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `category_id` INT AUTO_INCREMENT PRIMARY KEY,
  `category_name` VARCHAR(255) NOT NULL
);


-- Insert data into categories table
INSERT INTO `categories` (`category_name`) VALUES
('Sports'),
('Technology'),
('Entertainment'),
('Politics');


-- Relevent Queries 
-- Counting Articles in Each Category
SELECT category, COUNT(*) as article_count
FROM global_view
GROUP BY category;

-- Finding Articles with a Specific Word in Title
SELECT title, snippet, url, date, source
FROM global_view
WHERE title LIKE 'Sam Altman';

-- Deleting Old Articles:
DELETE FROM global_view
WHERE date < '2023-01-01';



-- QUERY DECOMPOSITION
-- Suppose we want to retrieve news articles based on a specific category. 
-- Instead of having a single query with multiple conditions, we can decompose it into two simple queries
-- Decomposed Query 1: Retrieve Category IDs
SELECT category_id
FROM categories
WHERE category_name = 'Sports';
-- Decomposed Query 2: Retrieve News Articles for a Category
SELECT title, snippet, url, date, source
FROM global_view
WHERE category = 'Sports';

-- 	QUERY OPTIMISATION	
-- Use of LIMIT:
-- If we expect a large number of rows but only need a limited result set, 
-- we can consider using LIMIT in your queries to fetch only the necessary data.
-- we can Limit the result set to the first 10 rows
SELECT title, snippet, url, date, source
FROM global_view
WHERE category = 'Business'
LIMIT 10;

-- Use of Indexing 
-- Indexing in a database provides faster data retrieval and query performance by facilitating quicker 
-- lookup and sorting operations, reducing the need for a full table scan. 
-- It enhances database efficiency by creating a structured reference to data, optimizing search speed.
-- Index for global_view table
CREATE INDEX idx_category ON global_view(category); 



