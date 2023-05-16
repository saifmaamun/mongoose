import { IUser } from "./user.interface";
import User from "./user.model";

// 4. Database 
export const userToDB = async (payload: IUser): Promise<IUser> => {
    const user = await new User(payload);
    await user.save();
    return user
}

export const getUsersFromDB = async ():Promise<IUser[]> => {
    const users = await User.find();
    return users; 
}

