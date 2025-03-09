import { Schema, model } from "mongoose";
import  type {IUser}  from "../interfaces/user.interface";

const UserSchema = new Schema<IUser>({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, { timestamps: true });

export const UserModel = model<IUser>("User", UserSchema);
