module.exports = function reverse (n) {
    let plus = n<0?n*(-1):n
  return plus.toString().split('').reverse().join('')
}
