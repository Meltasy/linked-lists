module.exports.createNode = function(value = null, next = null) {
  return {
    value: value,
    next: next
  }
}
