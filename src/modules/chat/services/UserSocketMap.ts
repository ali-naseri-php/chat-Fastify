export class UserSocketMap {
    private map: Map<string, string>;

    constructor() {
        this.map = new Map();
    }

    add(_id: string, socketId: string) {
        this.map.set(_id, socketId);
    }

    remove(socketId: string) {
        this.map.forEach((value, key) => {
            if (value === socketId) {
                this.map.delete(key);
            }
        });
    }

    getAll() {
        return Array.from(this.map.keys());
    }

    getSocketId(_id: string): string | undefined {
        return this.map.get(_id);
    }
}