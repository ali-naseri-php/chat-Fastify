import {Schema ,Document} from "mongoose"
export interface IUser extends Document {
    _id: Schema.Types.ObjectId;
    profilePicture?: string;
    bio?: string;
    isActive: boolean;
}