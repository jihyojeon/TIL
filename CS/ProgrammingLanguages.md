# Programming Languages

## Levels of abstraction
Programming languages are written with other programming languages
* Computers execute binary code
* The lowest-level programming language is Assembly
* Every other programming language is built on top of Assembly, in an ascending pyramid of abstraction
* The more you go up in these layers of abstraction, the more your code becomes concise and expressive, but you give up control over lower-level details

## Programming language properties
* Compiled / Interpreted
- Compiled: once compiled, turns to binary, runs faster, need to recompile before run
- interpreted: aka. sript langauge, don't need to recompile
* Static / Dynamic
- Static: strict typing
- Dynamic: loose typing, able to reassgin datatype
* Object oriented
- JS is object oriented.
* Memory management
- Js have automatic memory management. 좋아!!!
* Reflective
* Functional
* Imperative / declarative
```javascript
const arr = [1,2,3];
let res;
// Imperative
res = [];
for (let i=0; i<arr.length; i++) {
  res[i] = arr[i] + 1;
}
// Declarative
res = arr.map(num => num + 1); // using api ... map이 이미 implement되었어야 한다는 단점이 있음.
```
## Ruby
- written in C
### Properties
- Interpreted
- Dynamic
- Object-oriented
- Auto memory management
- Reflective
- Functional
### Good parts
- Designed for the programmer productivity
- Gems: (like npm in node)
- Ruby on Rails
```
I hope to see Ruby help every programmer in the world to be productive, and to enjoy programming, and to be happy. That is the primary purpose of the Ruby language.
- Yukihiro Mastsumoto
```
## Python
- Chirstmas side projects
### Properties
- Interpreted
- Dynamic
- Object-oriented
- Auto memory management
- Reflective
- Functional
### Good parts
- Highly readable: indentation!!!
- pip
- Very good background on math processing
## C
### Properties
- Compiled
- Static
- Manual memory management
- Imperative
### Good parts
- still kickin it
- The mother of all
- Internet of Things
- Blazing fast

## Being language-agnostic
* No programming language is best in “absolute” terms
* You need to be able to evaluate what fits your requirements
* Community and documentation are important
* Try new technologies, but shoot for stability in production

<b> Don't be scared to try new technologies!! </b>