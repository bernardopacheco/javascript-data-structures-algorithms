import HashMap from './HashMap';

let hashMap;

beforeEach(() => {
  hashMap = new HashMap();
});

test('should create hash map of certain size', () => {
  expect(hashMap.size).toBe(16);

  const anotherHashMap = new HashMap(32);
  expect(anotherHashMap.size).toBe(32);
});

test('should add element in hash map', () => {
  hashMap.set('foo', 'bar');
  expect(hashMap.get('foo')).toBe('bar');
});

test('should get null for an unknown element in hash map', () => {
  hashMap.set('foo', 'bar');
  expect(hashMap.get('unknown')).toBeNull();
});

test('should generate a hash from a string key', () => {
  expect(hashMap.hash('foo')).toBe(4);
});

test('should generate a hash from a number key', () => {
  expect(hashMap.hash(28)).toBe(12);
});

test('should throw an exception if key type is invalid', () => {
  expect(() => { hashMap.hash(['invalid']) }).toThrow('Key is neither a string nor a number');
});

test('should delete element in hash map', () => {
  hashMap.set('foo', 'bar');
  expect(hashMap.has('foo')).toBeTruthy();
  hashMap.delete('foo');
  expect(hashMap.has('foo')).toBeFalsy();
});

test('should update value if key already exists in hash map', () => {
  hashMap.set('foo', 'bar');
  hashMap.set('foo', 'baz');
  expect(hashMap.get('foo')).toBe('baz');
  expect(hashMap.getKeys().length).toBe(1);
});