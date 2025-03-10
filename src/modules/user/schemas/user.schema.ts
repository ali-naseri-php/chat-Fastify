import { Schema, model, models } from "mongoose";
import { IUser } from "../interfaces/user.interface";
import { v4 as uuidv4 } from "uuid"; // برای ساخت UUID

const UserSchema = new Schema<IUser>({
    _id: {
        type: String,
        required: true,
        default: uuidv4, // از UUID به‌جای ObjectId استفاده می‌کنیم
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

export const UserModel = models.User || model<IUser>("User", UserSchema);
