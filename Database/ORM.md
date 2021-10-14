## ORMs

- ORM means “object relational mapping”.
- ORM libraries allow to perform operations in a database, mapping them to “objects” that can be natively used in an object-oriented programming language.

```JavaScript
// SQL Syntax
const results = connection.query('SELECT * FROM table WHERE id=5;');
const user = results[0];
// 는 아래와 같다...
// ORM Syntax
const user = table.findOne({where: {id: 5}});
```
