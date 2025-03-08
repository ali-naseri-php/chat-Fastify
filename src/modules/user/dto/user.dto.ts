import {Schema, Types} from "mongoose";
export interface CreateUserDTO {
    userId: Schema.Types.ObjectId;
    profilePicture?: string;
    bio?: string;
}

export interface UpdateUserDTO {
    profilePicture?: string;
    bio?: string;
}
