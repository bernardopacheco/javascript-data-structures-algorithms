import QuickSort from './QuickSort';

let quickSort;

beforeEach(() => {
  quickSort = new QuickSort();
});

test('should sort array of integers', () => {
  let array = [42, 43, 28, 7, 12];
  quickSort.sort(array, 0, array.length - 1);
  expect(array).toEqual([7, 12, 28, 42, 43]);
});

test('should sort array of strings', () => {
  let array = ['pear', 'coconut', 'blackberry','peach', 'apple', 'blueberry'];
  quickSort.sort(array, 0, array.length - 1);
  expect(array).toEqual(['apple', 'blackberry', 'blueberry', 'coconut', 'peach', 'pear']);
});