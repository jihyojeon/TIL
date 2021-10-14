From [SQLBolt](https://sqlbolt.com/lesson/select_queries_introduction)


# SQL Query Order of Execution

1. FROM and JOINs
- The FROM clause, and subsequent JOINs are first executed to determine the total working set of data that is being queried. This includes subqueries in this clause, and can cause temporary tables to be created under the hood containing all the columns and rows of the tables being joined.

2. WHERE
- Once we have the total working set of data, the first-pass WHERE constraints are applied to the individual rows, and rows that do not satisfy the constraint are discarded. Each of the constraints can only access columns directly from the tables requested in the FROM clause. Aliases in the SELECT part of the query are not accessible in most databases since they may include expressions dependent on parts of the query that have not yet executed.

3. GROUP BY
- The remaining rows after the WHERE constraints are applied are then grouped based on common values in the column specified in the GROUP BY clause. As a result of the grouping, there will only be as many rows as there are unique values in that column. Implicitly, this means that you should only need to use this when you have aggregate functions in your query.

4. HAVING
- If the query has a GROUP BY clause, then the constraints in the HAVING clause are then applied to the grouped rows, discard the grouped rows that don't satisfy the constraint. Like the WHERE clause, aliases are also not accessible from this step in most databases.

5. SELECT
- Any expressions in the SELECT part of the query are finally computed.

6. DISTINCT
- Of the remaining rows, rows with duplicate values in the column marked as DISTINCT will be discarded.

7. ORDER BY
- If an order is specified by the ORDER BY clause, the rows are then sorted by the specified data in either ascending or descending order. Since all the expressions in the SELECT part of the query have been computed, you can reference aliases in this clause.

8. LIMIT / OFFSET
- Finally, the rows that fall outside the range specified by the LIMIT and OFFSET are discarded, leaving the final set of rows to be returned from the query.

# SQL Queries

1. Select query for a specific columns
```SQL
SELECT column, another_column, …
FROM mytable;
```

2. Select query with constraints
```SQL
SELECT column, another_column, …
FROM mytable
WHERE condition
    AND/OR another_condition
    AND/OR …;

```

3. Operators
- =
- !=
- like, not like
- %
- _
- in, not in

4. Select query with unique results
```SQL
SELECT DISTINCT column, another_column, …
FROM mytable
WHERE condition(s);
```

5. Select query with ordered results
```SQL
SELECT column, another_column, …
FROM mytable
WHERE condition(s)
ORDER BY column ASC/DESC;
```

6. Select query with limited rows
```SQL
SELECT column, another_column, …
FROM mytable
WHERE condition(s)
ORDER BY column ASC/DESC
LIMIT num_limit OFFSET num_offset;
```

7. Select query with INNER JOIN on multiple tables
```SQL
SELECT column, another_table_column, …
FROM mytable
INNER JOIN another_table 
    ON mytable.id = another_table.id
WHERE condition(s)
ORDER BY column, … ASC/DESC
LIMIT num_limit OFFSET num_offset;
```

## Outer Join <- 다시보기...ㅜ
8. Select query with LEFT/RIGHT/FULL JOINs on multiple tables
```SQL
SELECT column, another_column, …
FROM mytable
INNER/LEFT/RIGHT/FULL JOIN another_table 
    ON mytable.id = another_table.matching_id
WHERE condition(s)
ORDER BY column, … ASC/DESC
LIMIT num_limit OFFSET num_offset;
```

9. Select query with constraints on NULL values
```SQL
SELECT column, another_column, …
FROM mytable
WHERE column IS/IS NOT NULL
AND/OR another_condition
AND/OR …;
```

10. Example query with expressions
```SQL
SELECT particle_speed / 2.0 AS half_particle_speed
FROM physics_data
WHERE ABS(particle_position) * 10.0 > 500;
```

11. Select query with expression aliases
```SQL
SELECT col_expression AS expr_description, …
FROM mytable;
```

12. Example query with both column and table name aliases
```SQL
SELECT column AS better_column_name, …
FROM a_long_widgets_table_name AS mywidgets
INNER JOIN widget_sales
  ON mywidgets.id = widget_sales.widget_id;
```

13. Select query with aggregate functions over all rows
```SQL
SELECT AGG_FUNC(column_or_expression) AS aggregate_description, …
FROM mytable
WHERE constraint_expression;
```

14. Select query with aggregate functions over groups
```SQL
SELECT AGG_FUNC(column_or_expression) AS aggregate_description, …
FROM mytable
WHERE constraint_expression
GROUP BY column;
```
- COUNT(column)
- MIN(column)
- MAX(column)
- AVG(column)
- SUM(column)

15. Select query with HAVING constraint
```SQL
SELECT group_by_column, AGG_FUNC(column_expression) AS aggregate_result_alias, …
FROM mytable
WHERE condition
GROUP BY column
HAVING group_condition;
```

16. Select query with HAVING constraint
```SQL
SELECT group_by_column, AGG_FUNC(column_expression) AS aggregate_result_alias, …
FROM mytable
WHERE condition
GROUP BY column
HAVING group_condition;
```

17. Complete SELECT query
```SQL
SELECT DISTINCT column, AGG_FUNC(column_or_expression), …
FROM mytable
    JOIN another_table
      ON mytable.column = another_table.column
    WHERE constraint_expression
    GROUP BY column
    HAVING constraint_expression
    ORDER BY column ASC/DESC
    LIMIT count OFFSET COUNT;
```

18. Insert statement with values for all columns
```SQL
INSERT INTO mytable
VALUES (value_or_expr, another_value_or_expr, …),
       (value_or_expr_2, another_value_or_expr_2, …),
       …;
```

19. Insert statement with specific columns
```SQL
INSERT INTO mytable
(column, another_column, …)
VALUES (value_or_expr, another_value_or_expr, …),
      (value_or_expr_2, another_value_or_expr_2, …),
      …;
```
Example Insert statement with expressions
```SQL
INSERT INTO boxoffice
(movie_id, rating, sales_in_millions)
VALUES (1, 9.9, 283742034 / 1000000);
```

20. Update statement with values
```SQL
UPDATE mytable
SET column = value_or_expr, 
    other_column = another_value_or_expr, 
    …
WHERE condition;
```

21. Delete statement with condition
```SQL
DELETE FROM mytable
WHERE condition;
```

22. Create table statement w/ optional table constraint and default value
```SQL
CREATE TABLE IF NOT EXISTS mytable (
    column DataType TableConstraint DEFAULT default_value,
    another_column DataType TableConstraint DEFAULT default_value,
    …
);
```
- INTEGER, BOOLEAN
- FLOAT, DOUBLE, REAL
- CHARACTER(num_chars), VARCHAR(num_chars), TEXT
- DATE, DATETIME
- BLOB	

- PRIMARY KEY	
- AUTOINCREMENT
- UNIQUE
- NOT NULL
- CHECK (expression)

<b>EXAMPLE</b>

```SQL
CREATE TABLE movies (
    id INTEGER PRIMARY KEY,
    title TEXT,
    director TEXT,
    year INTEGER, 
    length_minutes INTEGER
);
```

23. Altering table to add new column(s)
```SQL
ALTER TABLE mytable
ADD column DataType OptionalTableConstraint 
    DEFAULT default_value;
```

24. Altering table to remove column(s)
```SQL
ALTER TABLE mytable
DROP column_to_be_deleted;
```

25. Altering table name
```SQL
ALTER TABLE mytable
RENAME TO new_table_name;
```

26. Altering table to remove column(s)
```SQL
ALTER TABLE mytable
DROP column_to_be_deleted;
```

27. Altering table name
```SQL
ALTER TABLE mytable
RENAME TO new_table_name;
```