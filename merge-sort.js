function merge(leftArray, rightArray) {
  const resultArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      resultArray.push(leftArray[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(rightArray[rightIndex]);
      rightIndex++;
    }
  }

  return resultArray
    .concat(leftArray.slice(leftIndex))
    .concat(rightArray.slice(rightIndex));
}

function mergeSort(unsortedArray) {
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }

  const middleIndex = Math.floor(unsortedArray.length / 2);
  const leftArray = unsortedArray.slice(0, middleIndex);
  const rightArray = unsortedArray.slice(middleIndex);

  return merge(
    mergeSort(leftArray), mergeSort(rightArray)
  );
}

module.exports = mergeSort;
