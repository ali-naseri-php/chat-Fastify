import jwt from "jsonwebtoken";
import {JWT_SECRET} from "../../../config/jwt";
import * as assert from "node:assert";
import {IUser} from "../interfaces/user.interface";
import {Schema} from "mongoose";

export async function tokenAction(id: Schema.Types.ObjectId) {
    return jwt.sign({userId: id}, JWT_SECRET, {expiresIn: "120h"});
}

