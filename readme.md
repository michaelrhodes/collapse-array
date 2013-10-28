# collapse-array
collapse-array is a simple utility for collapsing single-element arrays.

[![Build status](https://travis-ci.org/michaelrhodes/collapse-array.png?branch=master)](https://travis-ci.org/michaelrhodes/collapse-array)

[![Browser support](https://ci.testling.com/michaelrhodes/collapse-array.png)](https://ci.testling.com/michaelrhodes/collapse-array)

## Install
```
npm install collapse-array
```

### Example
``` js
var collapse = require('collapse-array')

collapse([4])
// => 4

collapse([[[[2],[3]]]])
// => [2, 3]

collapse([1, 2, 3])
// => [1, 2, 3]

collapse({
  a: 123,
  b: [['one'], ['two', 'three'], ['four']],
  c: function() {
    return 'hello'
  }
})
/*
{
  a: 123,
  b: ['one', ['two', 'three'], 'four'],
  c: function() {
    return 'hello'
  }
}
*/
```

### License
[MIT](http://opensource.org/licenses/MIT)
