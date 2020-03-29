import Heap from './Heap';

describe('Heap', () => {
  it('should not allow to create instance of the Heap directly', () => {
    expect(() => new Heap()).toThrow('Cannot construct Heap instance directly');
  });
});