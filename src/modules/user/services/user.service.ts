import { IUser } from "../interfaces/user.interface";
import { UserModel } from "../schemas/user.schema";

export const userService = {
    async createUser(userData: Partial<IUser>) {
        const user = new UserModel(userData);
        await user.save();
        return user;
    },

    async updateUser(userId: string, updateData: Partial<IUser>) {
        const user = await UserModel.findOneAndUpdate(
            { userId },
            updateData,
            { new: true }
        );
        return user;
    },

    async getUserProfile(userId: string) {
        const user = await UserModel.findOne({ userId });
        return user;
    }
};
