export default class QuickSort {
  sort(array, left, right) {
    const hasNoElements = left >= right;
  
    if (hasNoElements) {
      return;
    }
  
    const pIndex = this.partition(array, left, right);
    
    this.sort(array, left, pIndex - 1);
    this.sort(array, pIndex, right);
  }

  partition (array, left, right) {
    const swap = (array, left, right) => {
      const temp = array[left];
      array[left] = array[right];
      array[right] = temp;
    };

    const pivot = array[Math.floor((left + right) / 2)];
  
    while (left <= right) {
      while (array[left] < pivot) {
        left++;
      }
    
      while (array[right] > pivot) {
        right--;
      }
    
      /* istanbul ignore else */
      if (left <= right) {
        swap(array, left, right);
        left++;
        right--;
      }
    }
  
    return left;
  };
}