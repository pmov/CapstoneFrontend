export class User {
    email:string;
    password:string;  
    user_type:string;

    constructor(email='', password = '', user_type = '') {
        this.email = email;
        this.password = password;  
        this.user_type = user_type;
    }
}


