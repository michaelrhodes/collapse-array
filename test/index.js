var run = require('tape').test
var JSON = require('json3')
var collapse = require('../')

run('Array', function(test) {
  var a = [1, 2, 3]
  var b = [4]
  var c = [[[[2],[3]]]]
  var d = []

  test.equal(collapse(a), a)
  test.equal(collapse(b), b[0])
  test.deepEqual(collapse(c), [2, 3])
  test.equal(collapse(d), null)
  test.end()
})

run('Object', function(test) {
  var source = {
    a: [1, 2, 3],
    b: [4],
    c: ['foo'],
    d: function() {
      return 'hello'
    },
    e: ['bar', ['baz']],
    f: [[]]
  }

  var expected = {
    a: [1, 2, 3],
    b: 4,
    c: 'foo',
    d: function() {
      return 'hello'
    },
    e: ['bar', 'baz'],
    f: null 
  }

  test.equal(
    JSON.stringify(collapse(source)),
    JSON.stringify(expected)
  )
  test.end()
})

run('Deep Object', function(test) {
  var source = {
    a: [1, 2, 3],
    b: [4],
    c: ['foo'],
    d: function() {
      return 'hello'
    },
    e: ['bar', ['baz']]
  }

  var f = {}
  for (var key in source) {
    f[key] = source[key]
  }
  
  source.f = f

  var expected = {
    a: [1, 2, 3],
    b: 4,
    c: 'foo',
    d: function() {
      return 'hello'
    },
    e: ['bar', 'baz']
  }

  var f = {}
  for (var key in expected) {
    f[key] = expected[key]
  }
  
  expected.f = f

  test.equal(
    JSON.stringify(collapse(source)),
    JSON.stringify(expected)
  )
  test.end()
})
