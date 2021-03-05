
// You should implement your task here.

module.exports = function towelSort (matrix) {
return matrix.filter((item, index) => index % 2 !== 0 ? item.reverse() : item);
}
