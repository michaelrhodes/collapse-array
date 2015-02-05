var collapse  = require('./')

module.exports = function collapseDeep (object) {
  if (object instanceof Array) {
    return collapseEach(object)
  }

  else if (object instanceof Object) {
    for (var item in object) {
      if (object[item] instanceof Array) {
        object[item] = collapseEach(object[item])
      }
      else if (object[item] instanceof Object) {
        object[item] = collapseDeep(object[item]) 
      }
    }
    return object
  }

  return object
}

function collapseEach (array) {
  for (var i = 0, l = array.length; i < l; i++) {
    if (array[i] instanceof Array) {
      array[i] = collapseEach(array[i])
    }
  }

  return collapse(array)
}
