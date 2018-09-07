export default class Validation {
    private validations;
    constructor();
    validate(object: any): this;
    logs(): any[];
    msgErrors(): any;
    allRight(): boolean;
    hasErrors(): boolean;
    filter(): any[];
}
