import { IUser } from "./user.interface";
import User from "./user.model";

// 4. Database 
export const createUserToDB = async (payload: IUser): Promise<IUser> => {
    const user = new User(payload);
    await user.save();
    console.log(user.fullName());
    return user
}

export const getUsersFromDB = async ():Promise<IUser[]> => {
    const users = await User.find();   
    return users;           
}
export const getUserByIDFromDB =async(payload:string):Promise<IUser|null>=>{
    const user = await User.findOne({id:payload},{name:1,contactNumber:1,email:1});
    return user;
}
