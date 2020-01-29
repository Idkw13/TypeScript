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

    greeting(`Nazarii`);
    const sum = totalSum(19, 22, `$`);
}
