import QuickSort from './QuickSort';

let quickSort;

beforeEach(() => {
  quickSort = new QuickSort();
});

test('should sort array of integers', () => {
  let array = [6, 3, 4, 1, 2, 5, 1];
  quickSort.sort(array, 0, array.length - 1);
  expect(array).toEqual([1, 1, 2, 3, 4, 5, 6]);
});

test('should sort array of strings', () => {
  let array = ['pear', 'coconut', 'blackberry','peach', 'apple', 'blueberry'];
  quickSort.sort(array, 0, array.length - 1);
  expect(array).toEqual(['apple', 'blackberry', 'blueberry', 'coconut', 'peach', 'pear']);
});