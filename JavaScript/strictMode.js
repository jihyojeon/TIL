// It limits potentially harmful language features.
// It’s a scope-wide declaration that is activated inserting 'use strict'; as the first code statement.
// It’s good practice to use it, unless you have a specific reason not to.
// Guarantees some engine optimizations (i.e. makes your code run faster).
// It’s activated by default when using ES6 modules and classes.

// practice
// var name = 'Laura';

// console.log(name.length);
// name.length = 3; // not effected
// console.log(name.length);

'use strict';

var name2 = 'Laura';

console.log(name2.length);
name2.length = 3; // not effected
console.log(name2.length);