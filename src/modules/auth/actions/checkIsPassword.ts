import bcrypt from "bcrypt";
export async function checkIsPassword(passwordCheck :string, passwood:string){
    const isMatch = await bcrypt.compare(passwordCheck, passwood);
    if (!isMatch) throw new Error("possword not for in email ");
}