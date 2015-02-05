var collapse  = require('./')

module.exports = function collapseDeep (array) {
  for (var i = 0, l = array.length; i < l; i++) {
    if (array[i] instanceof Array) {
      array[i] = collapseDeep(array[i])
    }
  }

  return collapse(array)
}
