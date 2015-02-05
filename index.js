module.exports = function (array) {
  var length = array.length

  return (
    length > 1 ? array :
    length === 1 ? array[0] :
    null
  )
}
