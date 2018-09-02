declare const types: {
    isType: (t: any, c: any) => boolean;
    number: (n: any) => boolean;
    integer: (s: any) => boolean;
    float: (f: any) => boolean;
    string: (s: any) => boolean;
    array: (a: any) => boolean;
    positive: (n: any) => boolean;
    negative: (n: any) => boolean;
    isJson: (n: any) => boolean;
    isObject: (obj: any) => boolean;
};
export default types;
