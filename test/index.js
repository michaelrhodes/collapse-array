var run = require('tape')
var JSON = require('json3')
var collapse = require('../')
var collapseDeep = require('../deep')

run('Basic', function (test) {
  var a = [1, 2, 3]
  var b = [4]
  var c = []

  test.equal(collapse(a), a)
  test.equal(collapse(b), b[0])
  test.equal(collapse(c), null)
  test.end()
})

run('Deep Array', function (test) {
  var a = [1, 2, 3]
  var b = [4]
  var c = [[[[2],[3]]]]
  var d = []

  test.equal(collapseDeep(a), a)
  test.equal(collapseDeep(b), b[0])
  test.deepEqual(collapseDeep(c), [2, 3])
  test.equal(collapseDeep(d), null)
  test.end()
})

run('Deep Object', function (test) {
  var source = {
    a: [1, 2, 3],
    b: [4],
    c: ['foo'],
    d: function () {
      return 'hello'
    },
    e: ['bar', ['baz']],
    f: [[]]
  }

  var expected = {
    a: [1, 2, 3],
    b: 4,
    c: 'foo',
    d: function () {
      return 'hello'
    },
    e: ['bar', 'baz'],
    f: null 
  }

  test.equal(
    JSON.stringify(collapseDeep(source)),
    JSON.stringify(expected)
  )
  test.end()
})
