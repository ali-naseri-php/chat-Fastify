import {Schema, model, Document} from "mongoose";
import {IUser} from "../interfaces/user.interface";


const UserSchema = new Schema<IUser>({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "Auth",
        required: true
    },
    profilePicture: {
        type: String,
        default: null
    },
    bio: {
        type: String,
        maxlength: [500, "Bio can't be more than 500 characters"]
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

export const UserModel = model<IUser>("User", UserSchema);
