import LinkedListNode from './LinkedListNode';

test('should create node with primitive value', () => {
  let node = new LinkedListNode(1);
  expect(node.value).toBe(1);
});

test('should create node with object value', () => {
  let node = new LinkedListNode({ 'foo': 'bar' });
  expect(node.value).toEqual({ 'foo': 'bar' });
});