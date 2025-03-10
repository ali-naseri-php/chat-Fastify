export async function checkIsUser(user :{_id:string}|undefined){


    if (!user) throw new Error("not token ");
    return user._id;
}