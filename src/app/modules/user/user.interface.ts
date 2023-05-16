
// 1.  creating interface
export interface IUser{
    id:string;
    role:"Student";
    password:string;
    name:{
        firstName:string;
        middleName?:string;
        lastName:string;
    };
    dateOfBirth:string;
    gender: "male"|"female";
    email?:string;
    contactNumber: string;
    emergencyContactNumber: string;
    presentAddress: string;
    permanentAddress: string;
}

// Put all user instance methods in this interface:
export interface IUserMethods {
    fullName(): string;
  }