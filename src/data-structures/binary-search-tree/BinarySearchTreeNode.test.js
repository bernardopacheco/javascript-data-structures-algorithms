import BinarySearchTreeNode from './BinarySearchTreeNode';

test('should create bynary tree node with primitive type', () => {
  const node = new BinarySearchTreeNode(5);
  expect(node.value).toBe(5);
});

test('should find element in a binary search tree', () => {
  let root = new BinarySearchTreeNode(5);
  root.insert(3);
  root.insert(7);

  expect(root.find(3).value).toBe(3);
  expect(root.find(7).value).toBe(7);
  expect(root.find(23)).toBeNull();
});