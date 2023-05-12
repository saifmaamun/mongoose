import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors"
import { Schema } from "mongoose";



const app:Application = express()


// using cors
app.use(cors())

// parse data
app.use(express.json())
app.use(express.urlencoded({ extended: true }))





app.get('/', (req:Request, res:Response, next:NextFunction) => {
// insert a data
    /*
    step1: interface
    step2: Schema
    step3: Model
    step4: DataBase Query
    */
    // creating interface
interface IUser{
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




// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>({
    
id:{
    type:String,
    required:true,
},
role:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true,
},
name:{
    firstName:{
        type: String,
        required:true,
    },
    middleName:{
        type: String,
    },
    lastName:{
        type:String,
        required:true,
    },
},
dateOfBirth:{
    type:String,
    required:true,
},
gender:{
    type:String,
    enum: ["male","female"]
},
email:{
    type: String,
},
contactNumber:{
    type:String,
    required:true,
},
emergencyContactNumber:{
    type:String,
    required:true,
},
presentAddress:{
    type:String,
    required:true,
},
permanentAddress:{
    type:String,
    required:true,
},
  });
    




})















export default app;







