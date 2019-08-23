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

  const slicedLeft = leftArray.slice(leftIndex);
  const slicedRight = rightArray.slice(rightIndex);

  return resultArray
    .concat(slicedLeft)
    .concat(slicedRight);
}

function mergeSort(unsortedArray) {
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }

  const middleIndex = Math.floor(unsortedArray.length / 2);
  const leftArray = unsortedArray.slice(0, middleIndex);
  const rightArray = unsortedArray.slice(middleIndex);

  const sortedLeftArray = mergeSort(leftArray);
  const sortedRightArray = mergeSort(rightArray);

  return merge(sortedLeftArray, sortedRightArray);
}

module.exports = mergeSort;
