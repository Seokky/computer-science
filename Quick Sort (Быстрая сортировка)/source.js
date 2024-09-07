function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const pivotIndex = Math.floor(array.length / 2);
  const pivot = array[pivotIndex];
  const less = [];
  const greater = [];

  array.forEach((item, index) => {
    if (index === pivotIndex) {
      return;
    }

    if (item <= pivot) {
      less.push(item);
    } else {
      greater.push(item);
    }
  });

  return quickSort(less).concat(pivot, quickSort(greater));
}
