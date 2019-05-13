export class Person{
    NAME: string;
    PHONENUMBER: string;
    ADDRESS: string;
    COMPANY: string;
    POSTALCODE: string;
    EMAIL: string;
    COMMENTS: string;

    constructor(
        name: string, phonenumber: string,address: string, company: string, postalcode: string ,email:string,comments:string)
        {
            this.NAME = name;
            this.PHONENUMBER = phonenumber;
            this.ADDRESS = address;
            this.COMPANY = company;
            this.POSTALCODE = postalcode,
            this.EMAIL = email;
            this.COMMENTS = comments;
        }

}