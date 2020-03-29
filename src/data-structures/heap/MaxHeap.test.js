import MaxHeap from './MaxHeap';

test('should create a min heap', () => {
  const maxHeap = new MaxHeap();

  expect(maxHeap).toBeDefined();
  expect(maxHeap.peek()).toBeNull();
  expect(maxHeap.isEmpty()).toBeTruthy();
});

test('should add items to the heap and heapify it up', () => {
  const maxHeap = new MaxHeap();

  maxHeap.add(12);
  expect(maxHeap.isEmpty()).toBeFalsy();
  expect(maxHeap.peek()).toBe(12);

  maxHeap.add(8);
  expect(maxHeap.peek()).toBe(12);

  maxHeap.add(10);
  expect(maxHeap.peek()).toBe(12);

  maxHeap.add(13);
  expect(maxHeap.peek()).toBe(13);

  expect(maxHeap.poll()).toBe(13);
  expect(maxHeap.poll()).toBe(12);
  expect(maxHeap.poll()).toBe(10);
});

test('should poll items from the heap and heapify it down', () => {
  const maxHeap = new MaxHeap();

  maxHeap.add(5);
  maxHeap.add(3);
  maxHeap.add(1);
  maxHeap.add(10);
  maxHeap.add(11);
  
  expect(maxHeap.poll()).toBe(11);
  expect(maxHeap.poll()).toBe(10);
  expect(maxHeap.poll()).toBe(5);
  expect(maxHeap.poll()).toBe(3);
  expect(maxHeap.poll()).toBe(1);
  expect(maxHeap.poll()).toBeNull();
});

test('should heapify down through the right branch as well', () => {
  const maxHeap = new MaxHeap();

  maxHeap.add(3);
  maxHeap.add(12);
  maxHeap.add(10);
  maxHeap.add(11);

  expect(maxHeap.poll()).toBe(12);
});

test('should double min heap capacity when the limit is reached', () => {
  const maxHeap = new MaxHeap();

  maxHeap.add(19);
  maxHeap.add(12);
  maxHeap.add(10);
  maxHeap.add(4);
  maxHeap.add(8);
  maxHeap.add(33);
  maxHeap.add(11);
  maxHeap.add(13);
  maxHeap.add(11);
  maxHeap.add(3);
  maxHeap.add(44);

  expect(maxHeap.poll()).toBe(44);
});