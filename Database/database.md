## What is a database

- A database is a piece of software specialized in efficiently storing and retrieving data in a persistent manner (i.e. to disk).
- Databases are mainly divided in 2 big families: relational and non-relational.

## Relational databases

- In a relational database you need to define in advance the structure of your data, and the relationship between data entities.
- 표이기 때문에 접근시간 O(1)
- The standard language for relational databases is SQL, which means <b>“structured query language”</b>. Popular SQL implementations are the MySQL, PostgreSQL, and SQLite databases.
- Data is divided into tables, and each table is divided into columns and rows, where each column can store a pre-defined data type.
- A unique identifier for a row in a table can be used as a “primary key”.
- When a table includes a reference to the primary key of another table it’s called a “foreign key”.
- Tables can have relations between them. The main type of relations are:
  - One to one
  - One to many
  - Many to many
- Indexes are sorted versions of the respective columns (with the associated primary key for each entry), which allow to improve query time from linear to logarithmic.
- Joins are a way to combine data from different tables, by using a matching condition. Each operation involves two tables: a “left” and a “right” one, which can be joined in four ways:
- Inner - Returns only records that satisfy the matching condition in both tables.
- Full outer - Returns all records from both tables, matched where possible.
- Left / right - Contains all records from one table, but only the ones that satisfy the matching condition from the other.

## Sharding and replicating

- Sharding means dividing database data into several partial instances, typically to store them on different machines, as it wouldn’t otherwise fit all in one place.
- Replicating means writing the same data in multiple places, for safety purposes.
- Both sharding and replicating present their challenges in terms of data atomicity and integrity guarantees, while maintaining high performance in reads and writes.

## Non-relational databases

- Non-relational databases (aka “NoSQL”) don’t enforce any predefined structure on your data.
- The main families of non-relational databases are: document, key-value, and graph.
- They are more convenient to handle unstructured data or changing application requirements.
- On the other hand, your application logic can make less assumptions on the data available, and efficient queries need to be built ad-hoc.
