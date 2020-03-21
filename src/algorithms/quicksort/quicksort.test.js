import quicksort from './quicksort';

test('array of integers is sorted', () => {
  let array = [6, 3, 4, 1, 2, 5, 1];
  quicksort(array, 0, array.length - 1);
  expect(array).toEqual([1, 1, 2, 3, 4, 5, 6]);
});

test('array of strings is sorted', () => {
  let array = ['pear', 'coconut', 'blackberry','peach', 'apple', 'blueberry'];
  quicksort(array, 0, array.length - 1);
  expect(array).toEqual(['apple', 'blackberry', 'blueberry', 'coconut', 'peach', 'pear']);
});