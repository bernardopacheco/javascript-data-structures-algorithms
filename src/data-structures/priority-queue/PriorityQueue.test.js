import PriorityQueue from './PriorityQueue';

test('should create a priority queue', () => {
  const priorityQueue = new PriorityQueue();

  expect(priorityQueue).toBeDefined();
});

test('', () => {
  const priorityQueue = new PriorityQueue();

  priorityQueue.add(2, 8);
  priorityQueue.add(5, 2);
  priorityQueue.add(8, 7);

  expect(priorityQueue.peek()).toBe(5);
});

test('should be possible to use objects in priority queue', () => {
  const priorityQueue = new PriorityQueue();

  const person1 = { name: 'Elvis' };
  const person2 = { name: 'Presley' };
  const person3 = { name: 'Michael' };
  const person4 = { name: 'Jordan' };

  priorityQueue.add(person1, 1);
  expect(priorityQueue.peek()).toBe(person1);

  priorityQueue.add(person2, 2);
  expect(priorityQueue.peek()).toBe(person1);

  priorityQueue.add(person3, 0);
  expect(priorityQueue.peek()).toBe(person3);

  priorityQueue.add(person4, 0);
  expect(priorityQueue.peek()).toBe(person4);
});

test('should poll from queue with respect to priorities', () => {
  const priorityQueue = new PriorityQueue();

  priorityQueue.add(10, 1);
  priorityQueue.add(3, 2);
  priorityQueue.add(20, 0);
  priorityQueue.add(30, 0);

  expect(priorityQueue.poll()).toBe(30);
  expect(priorityQueue.poll()).toBe(20);
  expect(priorityQueue.poll()).toBe(10);
  expect(priorityQueue.poll()).toBe(3);
});