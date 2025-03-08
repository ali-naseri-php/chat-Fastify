import {Schema ,Document} from "mongoose"
export interface IUser extends Document {
    userId: Schema.Types.ObjectId;
    profilePicture?: string;
    bio?: string;
    isActive: boolean;
}