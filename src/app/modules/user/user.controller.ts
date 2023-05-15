import { NextFunction, Request, Response } from "express"
import { userToDB } from "./user.service"


export const createUser= async(req: Request, res: Response, next: NextFunction)=>{
   
    const user= await userToDB();
    res.status(200).json({
        status: "success",
        data: user,
    })
}


    // Route --> controller --> service