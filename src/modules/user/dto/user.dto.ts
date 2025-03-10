import {Schema, Types} from "mongoose";
export interface CreateUserDTO {
    _id: Schema.Types.ObjectId;
    profilePicture?: string;
    bio?: string;
}

export interface UpdateUserDTO {
    profilePicture?: string;
    bio?: string;
}
