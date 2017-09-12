# object-deep-copy
Deep copy of primitive types, Object, Array, Date, RegExp ...

### Install
```js
npm install object-deep-copy
```

### Usage
```js
var clone = require('object-deep-copy')

// deep copy object
var obj = clone({a: {b: [{c: 5}]}})

// deep copy array
var arr = clone([1, 2, {a: {b: 5}}])

// deep copy date
var date = clone(new Date());

// deep copy RegExp
var original_regExp = /w3schools/i;
var regExp_copy = clone(original_regExp);
```
