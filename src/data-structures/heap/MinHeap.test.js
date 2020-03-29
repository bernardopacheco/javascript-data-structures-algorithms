import MinHeap from './MinHeap';

test('should create a min heap', () => {
  const minHeap = new MinHeap();

  expect(minHeap).toBeDefined();
  expect(minHeap.peek()).toBeNull();
  expect(minHeap.isEmpty()).toBeTruthy();
});

test('should add items to the heap and heapify it up', () => {
  const minHeap = new MinHeap();

  minHeap.add(12);
  expect(minHeap.isEmpty()).toBeFalsy();
  expect(minHeap.peek()).toBe(12);

  minHeap.add(8);
  expect(minHeap.peek()).toBe(8);

  minHeap.add(10);
  expect(minHeap.peek()).toBe(8);

  minHeap.add(1);
  expect(minHeap.peek()).toBe(1);

  expect(minHeap.poll()).toBe(1);
  expect(minHeap.poll()).toBe(8);
  expect(minHeap.poll()).toBe(10);
});

test('should poll items from the heap and heapify it down', () => {
  const minHeap = new MinHeap();

  minHeap.add(5);
  minHeap.add(3);
  minHeap.add(1);
  minHeap.add(10);
  minHeap.add(11);
  
  expect(minHeap.poll()).toBe(1);
  expect(minHeap.poll()).toBe(3);
  expect(minHeap.poll()).toBe(5);
  expect(minHeap.poll()).toBe(10);
  expect(minHeap.poll()).toBe(11);
  expect(minHeap.poll()).toBeNull();
});

test('should heapify down through the right branch as well', () => {
  const minHeap = new MinHeap();

  minHeap.add(3);
  minHeap.add(12);
  minHeap.add(10);
  minHeap.add(11);

  expect(minHeap.poll()).toBe(3);
});

test('should double min heap capacity when the limit is reached', () => {
  const minHeap = new MinHeap();

  minHeap.add(19);
  minHeap.add(12);
  minHeap.add(10);
  minHeap.add(4);
  minHeap.add(8);
  minHeap.add(33);
  minHeap.add(11);
  minHeap.add(13);
  minHeap.add(11);
  minHeap.add(3);
  minHeap.add(44);

  expect(minHeap.poll()).toBe(3);
});