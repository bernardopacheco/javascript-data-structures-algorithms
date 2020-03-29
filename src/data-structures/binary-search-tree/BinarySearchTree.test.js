import BinarySearchTree from './BinarySearchTree';

let bst;

beforeEach(() => {
  bst = new BinarySearchTree();

  /* 
          6
         / \
        3   7
       / \    \
      1   4    10
     / \   \   / \
    0   2   5 8   20
                  / \
                 15 30 
  */

  bst.insert(6);
  bst.insert(7);
  bst.insert(3);
  bst.insert(1);
  bst.insert(4);
  bst.insert(10);
  bst.insert(2);
  bst.insert(0);
  bst.insert(5);
  bst.insert(8);
  bst.insert(20);
  bst.insert(15);
  bst.insert(30);
  bst.insert(14);
});

test('should create an empty binary search tree', () => {
  let bst = new BinarySearchTree();

  expect(bst.root).toBeDefined();
  expect(bst.root.value).toBeNull();
  expect(bst.root.left).toBeNull();
  expect(bst.root.right).toBeNull();
});

test('should insert values into a binary search tree', () => {
  expect(bst.root.value).toBe(6);
  expect(bst.root.left.value).toBe(3);
  expect(bst.root.right.value).toBe(7);
  expect(bst.root.left.left.value).toBe(1);
  expect(bst.root.right.right.value).toBe(10);
});

test('should check value exists or not in a binary search tree', () => {
  expect(bst.contains(1)).toBeTruthy();
  expect(bst.contains(3)).toBeTruthy();
  expect(bst.contains(5)).toBeTruthy();
  expect(bst.contains(7)).toBeTruthy();
  expect(bst.contains(23)).toBeFalsy();
});

test('should delete node with no child', () => {
  bst.delete(8);
  expect(bst.root.right.right.value).toBe(10);
  expect(bst.root.right.right.left).toBeNull();
});

test('should delete node with one child', () => {
  bst.delete(4);
  expect(bst.root.left.right.value).toBe(5);

  bst.delete(15);
  expect(bst.root.right.right.right.left.value).toBe(14);
});

test('should delete node with two children', () => {
  bst.delete(3);
  expect(bst.root.left.value).toBe(4);

  bst.delete(10);
  expect(bst.root.right.right.value).toBe(14);
});

test('should get in order elements from binary search tree', () => {
  expect(bst.inOrder()).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 14, 15, 20, 30 ]);
});
