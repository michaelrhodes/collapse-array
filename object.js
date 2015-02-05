var collapseDeep = require('./deep')

module.exports = function collapseObject (object) {
  if (object instanceof Array) {
    return collapseDeep(object)
  }

  else if (object instanceof Object) {
    for (var item in object) {
      if (object[item] instanceof Array) {
        object[item] = collapseDeep(object[item])
      }
      else if (object[item] instanceof Object) {
        object[item] = collapseObject(object[item]) 
      }
    }
    return object
  }

  return object
}
