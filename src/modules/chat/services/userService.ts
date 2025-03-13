import {UserSocketMap} from "./UserSocketMap";

export class UserService {
    private userSocketMap: UserSocketMap;

    constructor(userSocketMap: UserSocketMap) {
        this.userSocketMap = userSocketMap;
    }

    addUser(_id: string, socket: any) {
        this.userSocketMap.add(_id, socket.id);
        console.log(`✅ کاربر ${_id} وارد شد.`);
    }

    removeUser(socket: any) {
        this.userSocketMap.remove(socket.id);
        console.log(`❌ کاربر با socketId ${socket.id} خارج شد.`);
    }

    getOnlineUsers() {
        return this.userSocketMap.getAll();
    }
}
