import { UserModel, IUser } from "../schemas/user.schema";

export class AuthRepository {
    static async createUser(userData: IUser) {
        const user = new UserModel(userData);
        return user.save();
    }

    static async findByEmail(email: string) {
        return UserModel.findOne({ email });
    }

    static async findById(id: string) {
        return UserModel.findById(id);
    }
}
