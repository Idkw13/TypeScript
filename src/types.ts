export default () => {
    //Are native types
    let typeString: string,
        typeNumber: number,
        hasType: boolean,
        types: Array<any> = []; // any types


    typeString = `Type`;
    typeNumber = 13;
    hasType = true;

    // Area custom types
    type Name = string;

    let guest: Name = 'Nazarii';
};
