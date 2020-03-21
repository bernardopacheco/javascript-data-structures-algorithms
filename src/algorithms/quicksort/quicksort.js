const quicksort = (array, left, right) => {
  const hasNoElements = left >= right;

  if (hasNoElements) {
    return;
  }

  const pIndex = partition(array, left, right);
  quicksort(array, left, pIndex - 1);
  quicksort(array, pIndex, right);
}

const partition = (array, left, right) => {
  const pivot = array[Math.floor((left + right) / 2)];

  while (array[left] < pivot) {
    left++;
  }

  while (array[right] > pivot) {
    right--;
  }

  if (left <= right) {
    swap(array, left, right);
    left++;
    right--;
  }

  return left;
}

const swap = (array, left, right) => {
  const temp = array[left];
  array[left] = array[right];
  array[right] = temp;
}

export default quicksort;