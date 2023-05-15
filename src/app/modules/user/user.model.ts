import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>({
    
    id:{
        type:String,
        required:true,
        unique:true,
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


// 3. Create a model.
const User = model<IUser>('User', userSchema);

export default  User;