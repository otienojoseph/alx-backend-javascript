# 0x00. ES6 Basics

## Tasks

*0. const or let?*
Modify:
    - function 'taskFirst' to instantiate variables using 'const'
    - function 'taskNext' to instantiate variables using 'let'

*1. Block Scope*
Given what you’ve read about var and hoisting, modify the variables inside the function taskBlock so that the variables aren’t overwritten inside the conditional block.

```
export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    var task = true;
    var task2 = false;
  }

  return [task, task2];
}
```
```
Execution:

bob@dylan:~$ cat 1-main.js
import taskBlock from './1-block-scoped.js';

console.log(taskBlock(true));
console.log(taskBlock(false));
bob@dylan:~$
bob@dylan:~$ npm run dev 1-main.js 
[ false, true ]
[ false, true ]
bob@dylan:~$
```
