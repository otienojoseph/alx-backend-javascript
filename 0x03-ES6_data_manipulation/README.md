# 0x03. ES6 data manipulation

## Learning Objectives

At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

    - How to use map, filter and reduce on arrays
    - Typed arrays
    - The Set, Map, and Weak link data structures

### Tasks

**0. Basic list of objects**
Create a function named getListStudents that returns an array of objects.

Each object should have three attributes: id (Number), firstName (String), and location (String).

The array contains the following students in order:

    - Guillaume, id: 1, in San Francisco
    - James, id: 2, in Columbia
    - Serena, id: 5, in San Francisco

```
bob@dylan:~$ cat 0-main.js
import getListStudents from "./0-get_list_students.js";

console.log(getListStudents());

bob@dylan:~$ 
bob@dylan:~$ npm run dev 0-main.js 
[
  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  { id: 2, firstName: 'James', location: 'Columbia' },
  { id: 5, firstName: 'Serena', location: 'San Francisco' }
]
bob@dylan:~$ 
```
