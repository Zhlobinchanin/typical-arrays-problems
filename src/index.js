
exports.min = function min (array) {
  let min = 0;
  for (let i = 0; i < array.length; i++) {
    if (min > array[i]) min = array[i];
    if (!array || array.length === 0)
    return 0;
  }
  return min;
}

exports.max = function max (array) {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (max < array[i]) max = array[i];
    if (!array || array.length === 0)
    return 0;
  }
  return max;
}

exports.avg = function avg (array) {
  sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (!array || array.length === 0)
    return 0;
    sum = sum + array[i];
  }
  let avg = sum/array.length;
  return avg;
}
