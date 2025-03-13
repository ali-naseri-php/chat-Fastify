import { ChatService } from "../services/chat.service";

const chatService = new ChatService();
const onlineUsers: Map<string, any> = new Map();

export async function chatController(connection: any, req: any): Promise<void> {
    const _id: string = req.query._id;

    if (!_id) {
        connection.socket.close();
        return;
    }

    onlineUsers.set(_id, connection);

    connection.socket.on("message", async (message: string) => {
        try {
            const data = JSON.parse(message);
            const savedMessage = await chatService.sendMessage(data);

            if (data.receiverId && onlineUsers.has(data.receiverId)) {
                onlineUsers.get(data.receiverId)?.socket.send(JSON.stringify(savedMessage));
            }
        } catch (err) {
            console.error("❌ خطای پردازش پیام:", err);
        }
    });

    connection.socket.on("close", () => {
        onlineUsers.delete(_id);
    });
}
