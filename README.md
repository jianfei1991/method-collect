# method-collect
## stringTemp
头条面试题
``` javascript
JS编码实现一个render方法，使得可议这样调用： 
const year = ‘2017’; 
const month = ‘09’; 
const day = ‘21’; 
const str = render(‘year−year−{month}-${day}’)({year,month,day}); 
console.log(str)//输出2017-09-21
```

------
## currying 函数柯里化
* 什么事函数柯里化
函数柯里化指的是将能够接收多个参数的函数转化为接收单一参数的函数，并且返回接收余下参数且返回结果的新函数的技术。
* 函数柯里化的作用
函数柯里化的主要作用和特点就是参数复用、提前返回和延迟执行。
* 函数柯里化的实用场景