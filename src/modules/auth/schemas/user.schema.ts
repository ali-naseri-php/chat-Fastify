import { Schema, model, models } from "mongoose";
import type { IUser } from "../interfaces/user.interface";
import { v4 as uuidv4 } from "uuid"; // برای ساخت UUID

const UserSchema = new Schema<IUser>({
    _id: { type: String, default: uuidv4 }, // تغییر نوع _id به String
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, { timestamps: true });

export const UserModel = models.User || model<IUser>("User", UserSchema);
