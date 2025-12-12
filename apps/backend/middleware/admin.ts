import type { Request,Response,NextFunction } from "express"

interface NextRequest extends Request{
    user:{
        id:string,
        username:string
    }
}
export const adminMiddleware(req:NextRequest,res:Response,next:NextFunction) => {



}