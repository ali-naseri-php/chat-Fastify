import { UserModel } from "../schemas/user.schema";
import {IUser} from "../interfaces/user.interface";

export class UserRepository {
    async createUser(data: Partial<IUser>): Promise<IUser> {
        const user = new UserModel(data);
        return await user.save();
    }

    async getUserById(userId: string): Promise<IUser | null> {
        return await UserModel.findOne({ userId });
    }

    async updateUser(userId: string, data: Partial<IUser>): Promise<IUser | null> {
        return await UserModel.findOneAndUpdate({ userId }, data, { new: true });
    }

    async deleteUser(userId: string): Promise<IUser | null> {
        return await UserModel.findOneAndUpdate({ userId }, { isActive: false }, { new: true });
    }
}
