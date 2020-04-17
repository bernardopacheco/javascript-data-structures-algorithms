export default class MergeSort {
  sort(array) {
    if (array.length === 1) {
      return array;
    }

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return this.merge(this.sort(left), this.sort(right));
  }

  merge(left, right) {
    let result = new Array(left.length + right.length);
    let lPointer = 0;
    let rPointer = 0;

    for (let i = 0; i < result.length; i++) {
      let isLeftLessThanRight = (left[lPointer] && !right[rPointer]) || (left[lPointer] < right[rPointer]);

      if (isLeftLessThanRight) {
        result[i] = left[lPointer];
        lPointer++;
      } else {
        result[i] = right[rPointer];
        rPointer++;
      }
    }

    return result;
  }
}