import { NextFunction, Request, Response } from "express"
import { getUserByIDFromDB, getUsersFromDB, createUserToDB } from "./user.service"

// create user
export const createUser= async(req: Request, res: Response, next: NextFunction)=>{
    const data = req.body;
    const user= await createUserToDB(data);
    res.status(200).json({
        status: "success",
        data: user,
    })
}

// get user
export const getUsers= async(req:Request, res: Response, next: NextFunction)=>{
    const user = await getUsersFromDB();
    res.status(200).json({
        status: "success",
        data: user,
    })
}

// get user by id
export const getUserByID= async(req:Request,res:Response,next:NextFunction)=>{
    const {id}= req.params;
    const user = await getUserByIDFromDB(id);
    res.status(200).json({
        status:'user available',
        data:user,
    })
}


    // Route --> controller --> service