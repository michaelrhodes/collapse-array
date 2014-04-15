var collapse = function(array) {
  for (var i = 0, l = array.length; i < l; i++) {
    if (array[i] instanceof Array) {
      array[i] = collapse(array[i])
    }
  }
  return (l > 1 ? array :
    l === 1 ? array[0] :
    null
  )
}

module.exports = function collapser(object) {
  if (object instanceof Array) {
    return collapse(object)
  }

  else if (object instanceof Object) {
    for (var item in object) {
      if (object[item] instanceof Array) {
        object[item] = collapse(object[item])
      }
      else if (object[item] instanceof Object) {
        object[item] = collapser(object[item]) 
      }
    }
    return object
  }

  return object
}
