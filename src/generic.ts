export default () => {
  const arrayOfNumbers: Array<number> = [1, 2, 3, 4];
  const arrayOfString: Array<string> = ['1, 2, 3, 4,', '5', '6'];

  function reverse<T>(array: T[]): T[] {
    return array.reverse();
  }
  reverse(arrayOfNumbers);
  reverse(arrayOfString);
}
