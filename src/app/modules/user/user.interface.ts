import { HydratedDocument, Model } from "mongoose";







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


// instance methods
export interface IUserMethods {
    fullName(): string;
}




// static methods
//  //////////////////////////////////////////////////////////////////
export interface UserModel extends Model<IUser, {}, IUserMethods> {
  getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
}


//  //////////////////////////////////////////////////////////////////