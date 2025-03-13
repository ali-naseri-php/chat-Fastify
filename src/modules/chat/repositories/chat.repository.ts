import { ChatMessage } from "../schemas/chat.schema";
import {IChatMessage} from "../interfaces/IChatMessage";


export class ChatRepository {
    async saveMessage(message: IChatMessage): Promise<IChatMessage> {
        return await new ChatMessage(message).save();
    }

    async getMessagesForUser(userId: string): Promise<IChatMessage[]> {
        return await ChatMessage.find({ $or: [{ senderId: userId }, { receiverId: userId }] }).sort({ timestamp: -1 });
    }
}
