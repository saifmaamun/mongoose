import { NextFunction, Request, Response } from "express"
import { getUsersFromDB, userToDB } from "./user.service"

// create user
export const createUser= async(req: Request, res: Response, next: NextFunction)=>{
    

    const data = req.body;
    const user= await userToDB(data);
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



    // Route --> controller --> service