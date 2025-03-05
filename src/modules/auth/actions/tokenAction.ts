import jwt from "jsonwebtoken";
import {JWT_SECRET} from "../../../config/jwt";

export async function tokenAction(id: string) {
    return jwt.sign({userId: id}, JWT_SECRET, {expiresIn: "120h"});
}