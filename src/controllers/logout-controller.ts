import {Request, Response } from "express";
import { saveTokens } from "../helpers/tokenHandlers";

const logoutController = async(req:Request, res:Response) => {
    const { authorization } = req.headers;
    const token : string | undefined = authorization?.split(' ')[1];
    if(token){
        await saveTokens(token)
        ?res.status(200).send({msg:"Logged out successfully"})
        :res.status(404).send({msg:"invalid token"})
    }
    else{
        res.status(404).send({msg:"invalid token"})
    }
}
export default logoutController