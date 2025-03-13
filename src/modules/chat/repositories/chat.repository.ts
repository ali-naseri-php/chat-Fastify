import { ChatMessage } from "../schemas/chat.schema";
import {IChatMessage} from "../interfaces/IChatMessage";


export class ChatRepository {
    async saveMessage(message: IChatMessage): Promise<IChatMessage> {
        return await new ChatMessage(message).save();
    }

    async getMessagesForUser(_id: string): Promise<IChatMessage[]> {
        return await ChatMessage.find({ $or: [{ senderId: _id }, { receiverId: _id }] }).sort({ timestamp: -1 });
    }
}
