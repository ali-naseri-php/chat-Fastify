import { ChatRepository } from "../repositories/chat.repository";
import { IChatMessage } from "../interfaces/IChatMessage";

export class ChatService {
    private chatRepository = new ChatRepository();

    async sendMessage(data: IChatMessage): Promise<IChatMessage> {
        return await this.chatRepository.saveMessage(data);
    }

    async getUserMessages(userId: string): Promise<IChatMessage[]> {
        return await this.chatRepository.getMessagesForUser(userId);
    }
}
