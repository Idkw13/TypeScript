export default () => {
    //Area native types
    let typeString: string,
        typeNumber: number,
        hasType: boolean,
        types: Array<any> = []; // any types

    typeString = `Type`;
    typeNumber = 13;
    hasType = true;

    // Area custom types
    type Name = string;
    type Id = string | number;
    type someType = string | null | undefined

    let guest: Name = 'Nazarii';
    let id: Id = 0;
    let setId: Id = '89';


};
