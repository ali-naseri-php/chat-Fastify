import {Document, Schema} from "mongoose";

export interface IUser extends Document {
    _id: Schema.Types.ObjectId;
    username: string;
    email: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
}