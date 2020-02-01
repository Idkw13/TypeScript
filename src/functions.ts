export default () => {
  const greeting = (name: string): void => { // void - function return nothing
    console.log(`Hello ${name}`)
  };
  const totalSum = (a: number, b: number, currency: string): any => {
    return `${a + b} ${currency}`
  };
  const throwError = (): never => {
    throw new Error('Some error')
  };

  interface IPosition {
    x: undefined | number
    y: undefined | number
  }

  interface IPositionWithDefault extends IPosition {
    default: string
  }

  function position(): IPosition;
  function position(a: number): IPositionWithDefault
  function position(a: number, b: number): IPosition

  function position(a?: number, b?: number) {
    if (!a && !b) {
      return {
        x: a,
        y: b
      }
    }
    if (a && !b) {
      return {
        x: a,
        y: b,
        default: 'string',
      }
    }
    if (a && b) {
      return {
        x: a,
        y: b
      }
    }

  }

  greeting(`Nazarii`);
  totalSum(19, 22, `$`);

}
