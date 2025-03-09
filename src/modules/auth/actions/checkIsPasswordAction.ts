import bcrypt from "bcrypt";
import {IUser} from "../interfaces/user.interface";
export async function checkIsPasswordAction(passwordCheck :string, passwood:string){
    const isMatch = await bcrypt.compare(passwordCheck, passwood);
    if (!isMatch) throw new Error("possword not for in email ");
}