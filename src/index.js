
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];
  if (!matrix || matrix.length === 0) return arr;

  arr = matrix.reduce((acc, val, ind) => {
      if ((ind + 1) % 2 == 0) {
          acc = acc.concat(
              val.sort(function (a, b) {
                  return b - a;
              })
          );
      } else {
          acc = acc.concat(val);
      }
      return acc;
  }, []);
  return arr;
};