import LinkedList from './LinkedList';

let linkedList;

beforeEach(() => {
  linkedList = new LinkedList();
});

test('should append nodes to linked list', () => {
  linkedList.append(1);
  linkedList.append(2);
  expect(linkedList.toString()).toBe('1,2');
});

test('should prepend nodes to linked list', () => {
  linkedList.append(1);
  linkedList.prepend(2);
  linkedList.prepend(3);
  expect(linkedList.toString()).toBe('3,2,1');
});

test('should delete node in linked list', () => {
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  linkedList.append(4);
  linkedList.append(5);
  linkedList.delete((node) => node === 4);
  expect(linkedList.toString()).toBe('1,2,3,5');
});

test('should find node in linked list', () => {
  linkedList.append(1);
  linkedList.prepend({ 'key': 'foo' });
  linkedList.prepend(3);
  let node = linkedList.find((node) => node.key === 'foo');
  expect(node.key).toBe('foo');
});