import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interface";



// Create a new Model type that knows about IUserMethods...
// type UserModel = Model<IUser, {}, IUserMethods>;  //uncomment this line 


// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser,UserModel,IUserMethods>({
    
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
    enum: ["male","female"],
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

userSchema.static('getAdminUsers', async function getAdminUsers() {
    const admins = await this.find({role:'teacher'})
    return admins;
  });




userSchema.method('fullName', function fullName():string {
    return this.name.firstName + ' ' + this.name.lastName;
  });

// 3. Create a model.
const User = model<IUser, UserModel>('User', userSchema);

export default  User;