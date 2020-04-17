import MergeSort from './MergeSort';

let mergeSort;

beforeEach(() => {
  mergeSort = new MergeSort();
});

test('should sort array of integers', () => {
  let array = [42, 43, 28, 7, 12];
  expect(mergeSort.sort(array)).toEqual([7, 12, 28, 42, 43]);
});

test('should sort array of strings', () => {
  let array = ['pear', 'coconut', 'blackberry','peach', 'apple', 'blueberry'];
  expect(mergeSort.sort(array)).toEqual(['apple', 'blackberry', 'blueberry', 'coconut', 'peach', 'pear']);
});