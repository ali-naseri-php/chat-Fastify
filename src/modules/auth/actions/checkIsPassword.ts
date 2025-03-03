import bcrypt from "bcrypt";
export async function checkIsPassword(passwordCheck :string, passwood:string){
    const isMatch = await bcrypt.compare(passwordCheck, passwood);
    if (!isMatch) throw new Error("رمز عبور اشتباه است!");
}