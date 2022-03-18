import { BinaryAlgorithm } from './BinaryAlgorithm';

it('Get middle index of number array', () => {
  const binaryAlgorithm = new BinaryAlgorithm();
  const middle = binaryAlgorithm.middleIndexArray([5,7,8,6,4,2,3,5]);
  expect(middle).toBe(4);
});

it('Don\'t start if maxNumberInArray is equal to or less than zero', () => {
  expect(() => new BinaryAlgorithm(0)).toThrow(new Error("Invalid maxNumberInArray"));
});

it('Don\'t start if equalNumberInArray is equal to or less than zero', () => {
  expect(() => new BinaryAlgorithm(12, -5)).toThrow(new Error("Invalid equalNumberInArray"));
});

it('Generate a sequential array and one iqual number', () => {
  const binaryAlgorithm = new BinaryAlgorithm(19);
  binaryAlgorithm.generateSequentialArray();
  expect(binaryAlgorithm.getArray.length).toBe(21);
});

it('Generate a sequential array and one iqual number', () => {
  const binaryAlgorithm = new BinaryAlgorithm(19);
  binaryAlgorithm.generateSequentialArray();
  expect(binaryAlgorithm.getArray.length).toBe(21);
});

it('Find the repeated element in a sequential array', () => {
  const binaryAlgorithm = new BinaryAlgorithm(40, 6);
  binaryAlgorithm.findEqualElement();
  expect(binaryAlgorithm.equalNumberFound).toBe(6);
});

it('Generate 1000 random binaryAlgorithm', () => {
  const maxNumber = 1000;
  const minNumber = 1;
  for(let i = 0; i < 1000; i++) {
    const maxNumberInArray = Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
    const equalNumberInArray = Math.floor(Math.random() * maxNumberInArray);
    const binaryAlgorithm = new BinaryAlgorithm(maxNumberInArray, equalNumberInArray);
    expect(binaryAlgorithm.equalNumberFound).toBe(equalNumberInArray);
  }
});